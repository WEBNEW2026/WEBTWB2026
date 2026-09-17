# 📖 Panduan Edit Konten Website Taman Wisata Bougenville

Dokumen ini adalah referensi lengkap untuk mengganti **foto**, **copywriting**, dan **data** di website.

---

## 📁 Struktur Folder Penting

```
taman-wisata-bougenville/
├── constants.tsx          ← DATA UTAMA (Villa, Offers, Menu, Reviews)
├── locales/               ← TEKS MULTILINGUAL
│   ├── id/translation.json   ← Bahasa Indonesia
│   ├── en/translation.json   ← English
│   ├── zh/translation.json   ← 中文 (Chinese)
│   └── de/translation.json   ← Deutsch (German)
├── public/                ← FOLDER UNTUK UPLOAD FOTO LOKAL
│   └── images/
├── components/            ← KOMPONEN UI
└── *.tsx                  ← FILE HALAMAN (HomePage, AboutPage, dll)
```

---

## 📷 MENGGANTI FOTO

### Opsi 1: Menggunakan URL Eksternal
```typescript
image: "https://images.unsplash.com/photo-xxx?q=80&w=1600"
```

### Opsi 2: Menggunakan Foto Lokal
1. Upload foto ke folder `public/images/`
2. Referensikan dengan path:
```typescript
image: "/images/nama-foto.jpg"
```

---

## 🏠 Per Halaman: Dimana Mengganti Foto & Teks

### **1. HOME PAGE**
| Elemen | File | Cara Edit |
|--------|------|-----------|
| Hero Video/Background | `components/ui/VideoHero.tsx` | Ganti `videoSrc` atau background image |
| Hero Headline/Subheadline | `locales/*/translation.json` | Edit `home.hero.headline` dan `home.hero.subheadline` |
| Featured Villas | `constants.tsx` | Edit objek di array `VILLAS` (yang punya `isFeatured: true`) |
| Section Titles | `locales/*/translation.json` | Keys seperti `home.villaSection.title` |

**Contoh edit teks hero:**
```json
// locales/id/translation.json
{
  "home": {
    "hero": {
      "headline": "Pelarian Eksklusif di Pegunungan",
      "subheadline": "Villa mewah dengan pemandangan Gunung Puntang"
    }
  }
}
```

---

### **2. VILLAS PAGE**
| Elemen | File | Cara Edit |
|--------|------|-----------|
| Hero Image per Kategori | `components/VillasPage.tsx` | Cari `categoryContent` object, edit `image` |
| Category Title/Description | `components/VillasPage.tsx` | Edit di `categoryContent` object |
| Villa Cards | `constants.tsx` | Edit di array `VILLAS` |

---

### **3. VILLA DETAIL PAGE**
Semua data villa ada di `constants.tsx`. Struktur setiap villa:

```typescript
{
  id: 'forest-house',                    // ID unik (jangan diubah)
  name: 'Forest House',                  // Nama villa
  image: 'https://...',                  // Foto utama
  
  // Deskripsi multilingual
  description: {
    id: 'Villa termewah dengan pemandangan...',
    en: 'The most luxurious villa with...',
    zh: '拥有最豪华的别墅...',
    de: 'Die luxuriöseste Villa mit...'
  },
  
  // Deskripsi panjang (opsional)
  longDescription: {
    id: 'Paragraf panjang untuk detail...',
    en: 'Long paragraph for details...',
    zh: '详细的长段落...',
    de: 'Langer Absatz für Details...'
  },
  
  // Harga
  priceWeekday: 3500000,    // Senin-Kamis
  priceWeekend: 4000000,    // Jumat-Sabtu & tanggal merah
  priceHighSeason: 5000000, // Lebaran, Natal, Tahun Baru
  
  // Kapasitas & Kamar
  capacity: '13-16 orang',
  bedrooms: 4,
  area: 436,               // Luas dalam m²
  
  // Fasilitas (multilingual)
  facilities: {
    room: [
      { id: 'Ruang tamu luas', en: 'Spacious living room', zh: '宽敞的客厅', de: 'Geräumiges Wohnzimmer' }
    ],
    amenities: [
      { id: 'WiFi gratis', en: 'Free WiFi', zh: '免费WiFi', de: 'Kostenloses WLAN' }
    ],
    meals: [
      { id: 'Sarapan pagi', en: 'Breakfast', zh: '早餐', de: 'Frühstück' }
    ],
    natural: [
      { id: 'Kolam renang privat', en: 'Private pool', zh: '私人泳池', de: 'Privater Pool' }
    ]
  },
  
  // Kategori
  category: 'luxury',       // luxury | couple | log_home
  cluster: 'Forest House Puntang',
  
  // Fitur list
  features: ['Kolam Renang', 'Mountain View', 'Private Garden']
}
```

---

### **4. RESTO PAGE**
| Elemen | File | Cara Edit |
|--------|------|-----------|
| Hero Image | `components/RestoPage.tsx` | Cari `PageHero` component, edit `backgroundImage` |
| Section Titles | `locales/*/translation.json` | Keys di bawah `resto.*` |
| Menu Items | `components/RestoPage.tsx` | Cari array `menuItems` |
| Gallery Images | `components/RestoPage.tsx` | Cari array image URLs |

**Contoh edit menu item:**
```typescript
{
  id: 'nasi-liwet',
  name: 'Nasi Liwet Puntang',
  description: {
    id: 'Nasi liwet dengan aroma daun salam...',
    en: 'Traditional rice with bay leaf aroma...'
  },
  price: 75000,
  image: '/images/menu/nasi-liwet.jpg',
  category: 'mains',
  isSignature: true
}
```

---

### **5. FACILITY PAGE**
| Elemen | File | Cara Edit |
|--------|------|-----------|
| Hero Image | `components/FacilityPage.tsx` | Edit `backgroundImage` di `PageHero` |
| Activity Cards | `components/FacilityPage.tsx` | Cari object `activities` atau `ACTIVITIES` |
| Section Titles | `locales/*/translation.json` | Keys di bawah `facility.*` |

---

### **6. GALLERY PAGE**
| Elemen | File | Cara Edit |
|--------|------|-----------|
| Gallery Images | `GalleryPage.tsx` | Cari array `galleryImages` atau `GALLERY_IMAGES` |
| Categories | `GalleryPage.tsx` | Edit kategori di objek kategori |

**Format gambar gallery:**
```typescript
{
  src: 'https://...',
  alt: 'Deskripsi foto',
  category: 'villas' // villas | nature | activities | dining
}
```

---

### **7. ABOUT PAGE**
| Elemen | File | Cara Edit |
|--------|------|-----------|
| Hero Image | `AboutPage.tsx` | Edit `backgroundImage` di `PageHero` |
| Story Section Image | `AboutPage.tsx` | Cari `<img>` tag di heritage section |
| All Text | `locales/*/translation.json` | Keys di bawah `about.*` |

**Keys copywriting About:**
```
about.story
about.subtitle
about.philosophyLabel
about.philosophyTitle
about.philosophyDesc1
about.philosophyDesc2
about.valuesLabel
about.valuesTitle
about.valueHeritageTitle / Desc
about.valueSustainabilityTitle / Desc
about.valueAuthenticityTitle / Desc
about.valueCommunityTitle / Desc
about.historyLabel / Title / Desc1 / Desc2 / Desc3
about.responsibilityLabel / Title / Desc
about.ctaTitle / ctaDesc
```

---

### **8. OFFERS PAGE**
| Elemen | File | Cara Edit |
|--------|------|-----------|
| Offer Cards | `constants.tsx` | Edit array `OFFERS` |
| Section Titles | `locales/*/translation.json` | Keys di bawah `offers.*` |

**Struktur offer:**
```typescript
{
  id: 'romantic-escape',
  title: { id: 'Romantic Escape', en: 'Romantic Escape', ... },
  description: { id: 'Paket romantis...', en: 'Romantic package...', ... },
  image: 'https://...',
  validFrom: '2024-01-01',
  validTo: '2024-12-31',
  discount: '20%',
  price: 'Rp 2.500.000',
  inclusions: ['Sarapan', 'Dinner', 'Spa']
}
```

---

### **9. MEMBERSHIP PAGE**
| Elemen | File | Cara Edit |
|--------|------|-----------|
| Hero Image | `components/MembershipPage.tsx` | Cari `backgroundImage` di hero section |
| Benefits Images | `components/MembershipPage.tsx` | Cari array `benefits` dengan property `image` |
| All Text | `locales/*/translation.json` | Keys di bawah `membership.*` |

---

### **10. PRIVACY & TERMS PAGE**
| Elemen | File | Cara Edit |
|--------|------|-----------|
| Privacy Content | `PrivacyPage.tsx` | Edit langsung di dalam file (sudah bilingual ID/EN) |
| Terms Content | `TermsPage.tsx` | Edit langsung di dalam file (sudah bilingual ID/EN) |

---

## 🌐 MENGGANTI TEKS NAVIGASI & UI

Semua teks UI ada di `locales/*/translation.json`:

```json
{
  "nav": {
    "home": "Beranda",
    "villas": "Vila",
    "resto": "Restoran",
    "facility": "Aktivitas",
    "gallery": "Galeri",
    "offers": "Promo",
    "membership": "Keanggotaan",
    "about": "Tentang",
    "bookNow": "Reservasi"
  },
  "footer": {
    "tagline": "Slogan Anda di sini...",
    "newsletterTitle": "Berlangganan",
    "privacyPolicy": "Kebijakan Privasi",
    "termsOfService": "Syarat & Ketentuan"
  },
  "common": {
    "viewDetails": "Lihat Detail",
    "bookNow": "Pesan Sekarang",
    "readMore": "Selengkapnya"
  }
}
```

---

## 📱 MENGGANTI NOMOR WHATSAPP

File: `App.tsx` (line ~264)
```typescript
<a href="https://wa.me/6281234567890" ...>
```
Ganti `6281234567890` dengan nomor Anda (format: 62 + nomor tanpa 0).

---

## 🎨 MENGGANTI WARNA BRAND

File: `tailwind.config.js` atau `index.css`

Warna utama yang digunakan:
- `forest-dark` - Hijau tua header/footer
- `forest` / `forest-green` - Hijau utama
- `gold` - Aksen emas
- `cream` - Background krem

---

## ✅ CHECKLIST SETELAH EDIT

1. ☐ Simpan semua file
2. ☐ Refresh browser (Ctrl+F5)
3. ☐ Test di mobile view (F12 → toggle device)
4. ☐ Test semua bahasa (ganti language di header)
5. ☐ Test semua link navigasi

---

## 💡 TIPS

1. **Foto optimal**: Gunakan format WebP atau JPG dengan ukuran max 1600px width
2. **Teks multilingual**: Pastikan semua 4 bahasa (id, en, zh, de) terisi
3. **Backup**: Selalu backup file sebelum edit besar-besaran
4. **Preview**: Gunakan `npm run dev` untuk melihat perubahan secara live

---

*Dokumentasi ini dibuat untuk Taman Wisata Bougenville Website*
*Last updated: Desember 2024*
