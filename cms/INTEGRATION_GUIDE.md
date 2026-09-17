# 📘 Panduan Integrasi CMS dengan Website Utama

Dokumen ini menjelaskan cara mengintegrasikan CMS dengan website utama Taman Wisata Bougenville.

## 🔄 Alur Data

```
CMS (Port 5174) → Export Data (JSON) → Import ke Website Utama (Port 5173)
```

## 📝 Panduan Step-by-Step

### 1. Menjalankan CMS

```bash
cd cms
npm run dev
```

CMS akan berjalan di: `http://localhost:5174`

### 2. Mengelola Konten di CMS

#### A. Mengelola Villas
1. Navigasi ke **Villas Management**
2. Klik **Add New Villa** untuk menambah villa baru
3. Isi semua informasi villa:
   - Nama Villa
   - Cluster
   - Kapasitas
   - Harga (Weekday, Weekend, High Season)
   - Fasilitas
   - Deskripsi (ID, EN, ZH)
4. Upload gambar villa
5. Set status (Active/Inactive/Maintenance)
6. Klik **Save**

#### B. Mengelola Bookings
1. Navigasi ke **Bookings Management**
2. Lihat semua booking yang masuk
3. Update status booking:
   - **Pending** → Booking baru yang perlu review
   - **Confirmed** → Booking yang sudah dikonfirmasi
   - **Cancelled** → Booking yang dibatalkan
   - **Completed** → Booking yang sudah selesai

#### C. Moderasi Reviews
1. Navigasi ke **Reviews Management**
2. Review semua customer reviews yang masuk
3. Approve atau reject reviews
4. Reviews yang di-approve akan muncul di website utama

#### D. Pengaturan Website
1. Navigasi ke **Settings**
2. Update informasi kontak
3. Update social media links
4. Atur booking configuration
5. Klik **Save Changes**

### 3. Export Data dari CMS

#### Via Settings Page:
1. Buka **Settings** di CMS
2. Scroll ke section **Data Management**
3. Klik tombol **Export All Data**
4. File JSON akan ter-download dengan nama: `cms-export-YYYY-MM-DD.json`

#### Format Export JSON:
```json
{
  "villas": [...],
  "packages": [...],
  "blogPosts": [...],
  "reviews": [...],
  "menuItems": [...],
  "faqs": [...],
  "settings": {...}
}
```

### 4. Update Website Utama

#### Metode 1: Manual Update (Current)

**A. Update Villas:**
```typescript
// Di file: ../constants.tsx

// 1. Buka file cms-export-YYYY-MM-DD.json
// 2. Copy data villas
// 3. Update FOREST_HOUSE_VILLAS, MOOI_LAKE_VILLAS, dll.

export const FOREST_HOUSE_VILLAS: Villa[] = [
  // Paste villa data dari export
];
```

**B. Update Reviews:**
```typescript
// Di file: ../constants.tsx

export const REVIEWS: Review[] = [
  // Paste reviews yang sudah di-approve
];
```

**C. Update Settings:**
```typescript
// Update contact info, social media, dll.
export const CONTACT_INFO = {
  email: "...", // dari export settings
  phone: "...",
  whatsapp: "...",
};
```

#### Metode 2: Import Data (Future Implementation)

Akan dibuat script untuk auto-import:
```bash
npm run import-cms-data /path/to/export.json
```

### 5. Deploy Perubahan

Setelah update data di website utama:

```bash
# Di folder website utama
cd ../
npm run build
npm run preview  # Test production build
```

## 🔐 Best Practices

### Data Management

1. **Backup Regular**
   - Export data setiap minggu
   - Simpan file export dengan timestamp
   - Gunakan version control (Git)

2. **Review Data Sebelum Export**
   - Pastikan semua data sudah lengkap
   - Check grammar dan typos
   - Verify gambar sudah ter-upload

3. **Testing**
   - Test di localhost sebelum deploy
   - Verify semua link berfungsi
   - Check responsive design

### Security

1. **LocalStorage**
   - Data disimpan di browser
   - Clear cache untuk reset data
   - Jangan simpan data sensitif

2. **Production Deployment**
   - Tambahkan authentication
   - Restrict access ke authorized users only
   - Use HTTPS untuk production

## 🚀 Future Enhancements

### Phase 1: Real-time Sync
```typescript
// API endpoint untuk sync data
POST /api/sync
{
  "data": {...},
  "timestamp": "..."
}
```

### Phase 2: Image Upload
```typescript
// Upload images langsung ke server
POST /api/upload
FormData: image file
```

### Phase 3: User Management
```typescript
// Multiple admin users
{
  "role": "admin" | "editor",
  "permissions": [...]
}
```

## 📊 Data Structure Reference

### Villa Object
```typescript
{
  id: string;
  name: string;
  cluster: string;
  capacity: string;
  bedrooms: number;
  toilets: number;
  price: number;
  priceWeekday: number;
  priceWeekend: number;
  priceHighSeason: number;
  category: 'luxury' | 'couple' | 'log_home';
  features: string[];
  image: string;
  status: 'active' | 'inactive' | 'maintenance';
  description: {
    id: string;
    en: string;
    zh: string;
  };
  // ... more fields
}
```

### Booking Object
```typescript
{
  id: string;
  type: 'villa' | 'package';
  itemId: string;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  guests: number;
  checkIn: string;
  checkOut: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
}
```

## 🐛 Troubleshooting

### Data Tidak Ter-save
- Check browser console untuk errors
- Verify LocalStorage tidak penuh
- Clear cache dan try again

### Export Gagal
- Check browser permissions
- Try download manual via DevTools
- Copy data dari LocalStorage

### Website Tidak Update
- Verify file constants.tsx ter-update
- Check npm run build berhasil
- Clear browser cache

## 📞 Support

Untuk pertanyaan atau issues:
1. Check dokumentasi ini terlebih dahulu
2. Review error messages di browser console
3. Contact development team

---

**Last Updated:** December 1, 2025
