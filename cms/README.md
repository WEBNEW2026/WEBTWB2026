# 🎯 Taman Wisata Bougenville - CMS Admin Panel

Content Management System (CMS) untuk mengelola website Taman Wisata Bougenville. Sistem ini memungkinkan admin untuk mengelola semua konten website secara mudah dan efisien.

## 🚀 Fitur Utama

### ✅ Sudah Tersedia
1. **Dashboard** - Overview statistik dan aktivitas terkini
2. **Villas Management** - CRUD untuk semua villa listings
3. **Bookings Management** - Kelola reservasi dan bookings
4. **Reviews Management** - Moderasi dan approve customer reviews
5. **Settings** - Konfigurasi website dan data export/import

### 🔜 Coming Soon
- **Packages Management** - Kelola paket wisata dan promo
- **Blog Management** - Create dan edit blog posts
- **Gallery Management** - Upload dan organize photos
- **Menu Management** - Kelola menu restaurant
- **FAQ Management** - Update pertanyaan dan jawaban

## 📦 Teknologi Stack

- **Frontend Framework**: React 19 + TypeScript
- **Routing**: React Router DOM v6
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Data Storage**: LocalStorage (dapat di-upgrade ke backend API)

## 🛠️ Instalasi & Setup

### Prerequisites
- Node.js 20.9.0 atau lebih tinggi
- npm 10.1.0 atau lebih tinggi

### Langkah Instalasi

1. **Navigate ke folder CMS**
   ```bash
   cd cms
   ```

2. **Install dependencies** (sudah dilakukan)
   ```bash
   npm install
   ```

3. **Jalankan development server**
   ```bash
   npm run dev
   ```

4. **Buka browser**
   ```
   http://localhost:5173
   ```

## 📁 Struktur Folder

```
cms/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   └── Sidebar.tsx          # Main sidebar navigation
│   │   └── ui/                      # Reusable UI components
│   ├── pages/
│   │   ├── Dashboard.tsx            # Dashboard page
│   │   ├── VillasPage.tsx           # Villas management
│   │   ├── BookingsPage.tsx         # Bookings management
│   │   ├── ReviewsPage.tsx          # Reviews moderation
│   │   └── SettingsPage.tsx         # Settings & configuration
│   ├── services/
│   │   └── dataService.ts           # Data service layer
│   ├── types/
│   │   └── index.ts                 # TypeScript type definitions
│   ├── App.tsx                      # Main app component
│   ├── main.tsx                     # Entry point
│   └── index.css                    # Global styles
├── public/                          # Static assets
├── package.json
└── README.md
```

## 🎨 Fitur Detail

### 1. Dashboard
- **Statistics Cards**: Total villas, bookings, reviews, occupancy rate
- **Recent Activity Feed**: Real-time updates
- **Popular Villas Chart**: Visual analytics
- **Quick Actions**: Shortcut ke fungsi umum

### 2. Villas Management
- **CRUD Operations**: Create, Read, Update, Delete villas
- **Search & Filter**: By name, cluster
- **Status Management**: Active, Maintenance, Inactive
- **Bulk Actions**: (Coming soon)

### 3. Bookings Management
- **View All Bookings**: Dengan detail lengkap
- **Status Updates**: Pending → Confirmed → Completed
- **Search & Filter**: By guest name, status
- **Booking Details**: Guest info, dates, special requests

### 4. Reviews Management
- **Review Moderation**: Approve or reject reviews
- **Rating System**: 5-star rating display
- **Verification Badge**: Verified customer indicator
- **Platform Integration**: Support multiple review platforms

### 5. Settings
- **General Settings**: Site name, description
- **Contact Info**: Email, phone, WhatsApp
- **Social Media**: Facebook, Instagram, Twitter links
- **Booking Config**: Check-in/out times, min stay
- **Data Export/Import**: Backup dan restore data

## 🔐 Authentication (Coming Soon)

Sistem login akan ditambahkan dengan fitur:
- User authentication
- Role-based access control (Admin, Editor)
- Session management
- Password reset

## 💾 Data Management

### LocalStorage
Saat ini, data disimpan di browser LocalStorage dengan keys:
- `cms_villas` - Villa data
- `cms_packages` - Package data
- `cms_blogPosts` - Blog posts
- `cms_reviews` - Reviews
- `cms_menuItems` - Menu items
- `cms_faqs` - FAQs
- `cms_bookings` - Bookings
- `cms_settings` - Settings

### Export/Import
- **Export**: Download semua data sebagai JSON file
- **Import**: Upload JSON file untuk restore data
- Format: `cms-export-YYYY-MM-DD.json`

## 🔌 Integrasi dengan Main Website

### Cara Sync Data

1. **Export dari CMS**
   - Buka Settings page
   - Klik "Export All Data"
   - Download file JSON

2. **Import ke Main Website**
   - Copy data dari exported JSON
   - Update file `constants.tsx` di main website
   - Deploy perubahan

### Future Enhancement
Akan dibuat API endpoint untuk real-time sync antara CMS dan main website.

## 🎯 Roadmap

### Phase 1 (✅ Completed)
- [x] Setup project structure
- [x] Create base layout & navigation
- [x] Dashboard page
- [x] Villas management
- [x] Bookings management
- [x] Reviews management
- [x] Settings page

### Phase 2 (🚧 In Progress)
- [ ] Packages management
- [ ] Blog management
- [ ] Gallery management
- [ ] Menu management
- [ ] FAQ management

### Phase 3 (📋 Planned)
- [ ] User authentication
- [ ] Role-based permissions
- [ ] Real-time API integration
- [ ] Image upload & optimization
- [ ] Analytics & reporting
- [ ] Email notifications
- [ ] Booking calendar view

## 🐛 Troubleshooting

### Port sudah digunakan
```bash
# Gunakan port lain
npm run dev -- --port 5174
```

### Dependencies error
```bash
# Clear node_modules dan reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📝 Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🤝 Contributing

Untuk menambahkan fitur baru:
1. Create new page di `src/pages/`
2. Add route di `src/App.tsx`
3. Add navigation item di `src/components/layout/Sidebar.tsx`
4. Implement data service methods di `src/services/dataService.ts`

## 📄 License

Internal use only - Taman Wisata Bougenville

## 🆘 Support

Untuk bantuan atau pertanyaan, hubungi development team.

---

**Built with ❤️ for Taman Wisata Bougenville**
