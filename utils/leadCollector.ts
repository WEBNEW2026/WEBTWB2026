/**
 * ============================================================
 * TAMAN WISATA BOUGENVILLE — Lead & Inquiry Collection Module
 * ============================================================
 * Menghimpun setiap pesan / pertanyaan / reservasi dari website:
 * 1. Menyimpan ke LocalStorage (Offline / Backup permanen)
 * 2. Mengirim secara realtime ke Google Sheets (via Google Apps Script Webhook)
 * 3. Mengirim ke Backend Server internal (/api/leads jika aktif)
 * 4. Menyediakan export CSV dan Copy (Tab-Separated) siap paste ke Sheet
 * ============================================================
 */

export interface LeadInquiry {
  id: string;
  timestamp: string;          // Waktu Indonesia Barat (WIB)
  rawDate: string;           // ISO 8601
  villaName: string;          // Nama villa / paket
  guestName?: string;
  guestPhone?: string;
  guestEmail?: string;
  checkIn: string;            // Tanggal check-in atau "TBD"
  checkOut: string;           // Tanggal check-out atau "TBD"
  guests: string | number;    // Jumlah tamu
  nights: string | number;    // Estimasi malam
  estimatedPrice: string;     // Estimasi harga
  source: string;             // Sumber: "Website - Detail Villa", "Website - Sticky Bar", dll
  message: string;            // Teks pesan WhatsApp
  device: 'Mobile' | 'Desktop';
  pageUrl: string;
  status: 'sent_to_sheet' | 'stored_locally' | 'error';
}

const STORAGE_KEY = 'twb_leads_history';
const SHEET_URL_STORAGE_KEY = 'twb_custom_sheet_url';
const MAX_LOCAL_LEADS = 1000;

/**
 * Dapatkan URL Webhook Google Sheet aktif (dari LocalStorage atau ENV)
 */
export const getGoogleSheetUrl = (): string => {
  if (typeof window === 'undefined') return '';
  const customUrl = localStorage.getItem(SHEET_URL_STORAGE_KEY);
  if (customUrl && customUrl.trim()) return customUrl.trim();
  return (import.meta.env.VITE_GOOGLE_SHEET_URL as string) || '';
};

/**
 * Setel URL Webhook Google Sheet secara manual
 */
export const setGoogleSheetUrl = (url: string): void => {
  if (typeof window === 'undefined') return;
  if (!url || !url.trim()) {
    localStorage.removeItem(SHEET_URL_STORAGE_KEY);
  } else {
    localStorage.setItem(SHEET_URL_STORAGE_KEY, url.trim());
  }
};

/**
 * Format tanggal sekarang ke format WIB (Asia/Jakarta)
 */
const getFormattedTimestampWIB = (): string => {
  try {
    return new Intl.DateTimeFormat('id-ID', {
      timeZone: 'Asia/Jakarta',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    }).format(new Date()) + ' WIB';
  } catch {
    return new Date().toLocaleString('id-ID') + ' WIB';
  }
};

/**
 * Ambil daftar pesan / leads yang tersimpan di LocalStorage
 */
export const getStoredInquiries = (): LeadInquiry[] => {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error('Gagal membaca leads dari storage:', err);
    return [];
  }
};

/**
 * Simpan daftar pesan ke LocalStorage
 */
const saveInquiriesToStorage = (inquiries: LeadInquiry[]): void => {
  if (typeof window === 'undefined') return;
  try {
    const trimmed = inquiries.slice(0, MAX_LOCAL_LEADS);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed));
    window.dispatchEvent(new CustomEvent('twb-lead-updated', { detail: { count: trimmed.length } }));
  } catch (err) {
    console.error('Gagal menyimpan lead ke storage:', err);
  }
};

/**
 * Catat dan kirim lead baru (dipanggil setiap tombol Pesan via WhatsApp diklik)
 */
export const recordInquiryLead = async (
  input: Partial<LeadInquiry>
): Promise<LeadInquiry> => {
  const isMobile = typeof window !== 'undefined' && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const leadId = `TWB-${Date.now().toString(36).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;

  const lead: LeadInquiry = {
    id: leadId,
    timestamp: getFormattedTimestampWIB(),
    rawDate: new Date().toISOString(),
    villaName: input.villaName || 'Villa Bougenville',
    guestName: input.guestName || '-',
    guestPhone: input.guestPhone || '-',
    guestEmail: input.guestEmail || '-',
    checkIn: input.checkIn || 'TBD',
    checkOut: input.checkOut || 'TBD',
    guests: input.guests ?? '2',
    nights: input.nights ?? '-',
    estimatedPrice: input.estimatedPrice || '-',
    source: input.source || 'Website - Form Pemesanan',
    message: input.message || '',
    device: isMobile ? 'Mobile' : 'Desktop',
    pageUrl: typeof window !== 'undefined' ? window.location.href : '',
    status: 'stored_locally',
  };

  // 1. Simpan selalu ke LocalStorage terlebih dahulu (100% aman tersimpan)
  const existing = getStoredInquiries();
  existing.unshift(lead);
  saveInquiriesToStorage(existing);

  // 2. Kirim ke Google Apps Script Webhook (jika URL terpasang)
  const sheetUrl = getGoogleSheetUrl();
  if (sheetUrl) {
    try {
      await fetch(sheetUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(lead),
      });

      lead.status = 'sent_to_sheet';
      const updated = getStoredInquiries().map((item) =>
        item.id === lead.id ? { ...item, status: 'sent_to_sheet' as const } : item
      );
      saveInquiriesToStorage(updated);
    } catch (err) {
      console.warn('Gagal sinkronisasi otomatis ke Google Sheets webhook:', err);
    }
  }

  // 3. Cadangan: Kirim ke server backend Express (/api/leads) jika endpoint tersedia
  try {
    fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lead),
    }).catch(() => {});
  } catch {
    // Ignore backend fetch error jika offline / static hosting
  }

  return lead;
};

/**
 * Export semua leads ke format CSV
 */
export const exportInquiriesToCSV = (): void => {
  const leads = getStoredInquiries();
  if (!leads.length) {
    alert('Belum ada data pesan yang tersimpan untuk di-export.');
    return;
  }

  const headers = [
    'Timestamp',
    'ID Inquiry',
    'Nama Villa / Item',
    'Check-in',
    'Check-out',
    'Jumlah Tamu',
    'Estimasi Malam',
    'Estimasi Harga',
    'Sumber Halaman',
    'Nama Tamu',
    'Nomor Telepon',
    'Email',
    'Perangkat',
    'Pesan Lengkap WhatsApp',
  ];

  const escapeCSV = (val: any) => {
    const str = String(val ?? '').replace(/"/g, '""');
    return `"${str}"`;
  };

  const rows = leads.map((l) => [
    escapeCSV(l.timestamp),
    escapeCSV(l.id),
    escapeCSV(l.villaName),
    escapeCSV(l.checkIn),
    escapeCSV(l.checkOut),
    escapeCSV(l.guests),
    escapeCSV(l.nights),
    escapeCSV(l.estimatedPrice),
    escapeCSV(l.source),
    escapeCSV(l.guestName),
    escapeCSV(l.guestPhone),
    escapeCSV(l.guestEmail),
    escapeCSV(l.device),
    escapeCSV(l.message),
  ]);

  const csvContent =
    '\uFEFF' +
    [headers.join(','), ...rows.map((r) => r.join(','))].join('\r\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `pesan_villa_twb_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
