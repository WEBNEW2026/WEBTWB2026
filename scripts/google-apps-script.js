/**
 * ==============================================================================
 * GOOGLE APPS SCRIPT — KOLEKTOR PESAN & RESERVASI TAMAN WISATA BOUGENVILLE
 * ==============================================================================
 * CARA PEMASANGAN (HANYA 1 MENIT):
 * 1. Buka Google Sheets baru: https://sheets.new
 * 2. Beri nama sheet (contoh: "Data Pesan Masuk Website TWB 2026")
 * 3. Klik menu: Ekstensi (Extensions) > Apps Script
 * 4. Hapus semua kode default di editor, lalu PASTE SELURUH KODE DI BAWAH INI.
 * 5. Klik tombol Simpan (ikon disket).
 * 6. Klik tombol biru di kanan atas: "Terapkan" (Deploy) > "Penerapan Baru" (New deployment)
 * 7. Pada jenis penerapan (ikon gerigi), pilih: "Aplikasi Web" (Web app)
 * 8. Pengaturan:
 *    - Deskripsi: Webhook Pesan Website TWB
 *    - Jalankan sebagai (Execute as): Saya (Me / email Anda)
 *    - Siapa yang memiliki akses (Who has access): Siapa saja (Anyone) -> [PENTING]
 * 9. Klik "Terapkan" (Deploy) > Izinkan Akses (Authorize Access) jika diminta.
 * 10. Salin URL Aplikasi Web (Web App URL) yang berakhiran `/exec`.
 * 11. Masukkan URL tersebut ke file `.env` di website:
 *     VITE_GOOGLE_SHEET_URL=https://script.google.com/macros/s/AKfycb.../exec
 * ==============================================================================
 */

function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getActiveSheet();

    // 1. Jika sheet masih baru / kosong, otomatis buatkan judul kolom rapi
    if (sheet.getLastRow() === 0) {
      var headers = [
        "Waktu Masuk (WIB)",
        "ID Pesan",
        "Nama Villa / Layanan",
        "Check-in",
        "Check-out",
        "Jumlah Tamu",
        "Estimasi Malam",
        "Estimasi Harga",
        "Sumber Website",
        "Nama Tamu",
        "No. WhatsApp / Telp",
        "Email",
        "Perangkat",
        "Teks Pesan WhatsApp",
        "Status Follow-up"
      ];
      
      sheet.appendRow(headers);
      
      // Styling Header (Warna hijau elegan khas Bougenville & teks tebal)
      var headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#1a5c38");
      headerRange.setFontColor("#ffffff");
      headerRange.setHorizontalAlignment("center");
      headerRange.setVerticalAlignment("middle");
      sheet.setRowHeight(1, 35);
      sheet.setFrozenRows(1);
    }

    // 2. Parse data yang dikirim dari website
    var payload;
    if (e.postData && e.postData.contents) {
      payload = JSON.parse(e.postData.contents);
    } else {
      payload = e.parameter || {};
    }

    var timestamp = payload.timestamp || Utilities.formatDate(new Date(), "Asia/Jakarta", "dd/MM/yyyy, HH:mm:ss") + " WIB";
    var id = payload.id || ("TWB-" + new Date().getTime());
    var villaName = payload.villaName || "Villa Bougenville";
    var checkIn = payload.checkIn || "TBD";
    var checkOut = payload.checkOut || "TBD";
    var guests = payload.guests ? payload.guests.toString() : "-";
    var nights = payload.nights ? payload.nights.toString() : "-";
    var price = payload.estimatedPrice || "-";
    var source = payload.source || "Website - Form Pemesanan";
    var guestName = payload.guestName || "-";
    var phone = payload.guestPhone || "-";
    var email = payload.guestEmail || "-";
    var device = payload.device || "Web";
    var message = payload.message || "-";
    var status = "Pesan Masuk (Perlu Konfirmasi)";

    // 3. Tambahkan baris baru ke sheet
    sheet.appendRow([
      timestamp,
      id,
      villaName,
      checkIn,
      checkOut,
      guests,
      nights,
      price,
      source,
      guestName,
      phone,
      email,
      device,
      message,
      status
    ]);

    var newRow = sheet.getLastRow();
    sheet.getRange(newRow, 1).setHorizontalAlignment("center");
    sheet.getRange(newRow, 2).setHorizontalAlignment("center");
    sheet.getRange(newRow, 4, 1, 5).setHorizontalAlignment("center");
    sheet.getRange(newRow, 13).setHorizontalAlignment("center");
    sheet.getRange(newRow, 15).setHorizontalAlignment("center").setFontColor("#b45309").setFontWeight("bold");

    return ContentService.createTextOutput(JSON.stringify({
      result: "success",
      message: "Data berhasil dicatat ke Google Sheet",
      row: newRow
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      result: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: "active",
    service: "Taman Wisata Bougenville - Google Sheet Lead Collector Webhook",
    time: new Date().toISOString()
  })).setMimeType(ContentService.MimeType.JSON);
}
