# Taman Wisata Bougenville 🏔️

**Villas & Gardens by the Mountain**

Aplikasi web frontend premium yang dirancang untuk **Taman Wisata Bougenville**, sebuah resor alam mewah yang terletak di Gunung Puntang, Bandung. Aplikasi ini memberikan pengalaman pengguna yang imersif untuk menjelajahi villa eksklusif, menu restoran organik, dan melakukan reservasi melalui integrasi WhatsApp yang mulus.

## ✨ Fitur Utama

*   **Katalog Villa Imersif:** Filter villa berdasarkan kategori (Luxury Cluster, Log Home, Couple Retreat) dengan pratinjau gambar berkualitas tinggi dan tampilan modal yang mendetail.
*   **Sistem Booking Cerdas:** Wizard pemesanan multi-langkah yang memungkinkan pengguna memilih tanggal, jumlah tamu, dan paket, serta secara otomatis membuat pesan WhatsApp yang sudah terisi untuk tim reservasi.
*   **Showcase Restoran & Menu:** Tampilan elegan menu "Bale Puntang Resto", menyoroti hidangan andalan, harga, dan deskripsi yang menggugah selera.
*   **Fasilitas & Aktivitas:** Panduan visual untuk aktivitas resor, termasuk trekking alam, taman bermain, dan spot sungai.
*   **Responsif & Animasi:** Dibangun dengan pendekatan *mobile-first* menggunakan transisi halus, efek gulir, dan elemen interaktif.
*   **Multi-Bahasa:** Arsitektur mendukung peralihan bahasa ID (Indonesia), EN (Inggris), dan ZH (Mandarin).

## 📝 Isi Konten & Copywriting

Aplikasi ini tidak hanya menonjolkan desain visual, tetapi juga **Konten** yang terstruktur dan **Copywriting** yang emosional untuk menarik calon tamu.

### 1. Struktur Konten (Content Inventory)

Data dalam aplikasi ini dikelola secara terpusat (`constants.tsx`) dan mencakup kategori berikut:

#### 🏡 Akomodasi (Villas)
Terbagi menjadi 3 klaster unik untuk target pasar berbeda:
*   **The Luxury Cluster:** Villa premium dengan tema unik.
    *   *Forest House:* Kapasitas 16 pax, nuansa hutan megah.
    *   *Mooi Lake House:* Tepi danau, gaya dongeng.
    *   *Dandenong & Provincial:* Gaya Farmhouse Amerika & Pedesaan Prancis.
    *   *Riverside:* Villa tepat di pinggir sungai dengan suara alam.
*   **Classic Log Home:** Kabin kayu hangat untuk keluarga.
    *   *Unit:* Campaka, Suren, Pinus, Puspa, Meranti.
*   **Couple Retreat:** Unit intim untuk pasangan dengan privasi tinggi.
    *   *Unit:* Executive, Deluxe, Superior.

#### 🍽️ Kuliner (Bale Puntang Resto)
Mengusung konsep **"Farm to Table"** dengan bahan organik.
*   **Signature Mains:** Nasi Liwet Komplit, Gurame Bakar Cobek, Sop Buntut Premium.
*   **Light Bites:** Tahu Gejrot Cirebon, Pisang Goreng Keju.
*   **Beverages:** Kopi Puntang Manual Brew (V60), Bandrek Susu Kelapa.

#### 🌲 Aktivitas & Fasilitas
*   **Nature Discovery:** Trekking, Hiking, Skywalk (Jembatan Kanopi), Garden Stroll.
*   **Family Fun:** Playground anak, Area Piknik, Flying Fox.
*   **Refreshment:** Bermain di Sungai Cigeureuh, Kolam Renang, Air Terjun Tersembunyi.
*   **Adventure:** Team Building, Outbound, Mountain Morning Yoga.

#### 📦 Paket Spesial
*   **Romantic Getaway:** Makan malam romantis, spa pasangan, dekorasi bunga.
*   **Family Fun Weekend:** Termasuk sarapan buffet, tur kebun organik, BBQ.
*   **Corporate Retreat:** Paket lengkap untuk gathering perusahaan/tim.

---

### 2. Gaya Copywriting (Tone of Voice)

Copywriting dalam aplikasi ini dirancang untuk menciptakan suasana **Tenang, Mewah, dan Mengundang**.

*   **Emotional Hook (Sentuhan Emosional):**
    Menggunakan kata-kata yang memancing indra perasa dan penglihatan.
    > *"Keheningan Forest House di antara pepohonan, kilau danau Mooi Lake House."*
    > *"Rasakan kesegaran air mata pegunungan yang jernih dan dingin."*

*   **Brand Promise (Janji Brand):**
    Menekankan eksklusivitas dan kedekatan dengan alam.
    > *"Pelarian Gunung Eksklusif Anda - Hanya 2 Jam dari Jakarta."*
    > *"Setiap cluster menawarkan pengalaman unik dan kemewahan di tengah alam."*

*   **Persuasive Action (Ajakan Bertindak):**
    Halus namun jelas mengarahkan pengguna untuk memesan.
    > *"Amankan tanggal liburan Anda sekarang."*
    > *"Saatnya menciptakan Histori."*

*   **Cultural Authentication (Sentuhan Lokal):**
    Mengangkat nilai sejarah dan budaya lokal Sunda.
    > *"Sejarah di Gunung Puntang... Kerajaan Nagara Puntang."*
    > *"Sambal cobek khas Sunda yang pedas menyegarkan."*

## 🛠️ Tech Stack

*   **Core Framework:** [React 19](https://react.dev/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Fonts:** Google Fonts (Inter, Playfair Display, Montserrat)

## 🚀 Cara Instalasi

Ikuti langkah ini untuk menjalankan proyek di komputer lokal Anda.

1.  **Clone repositori**
    ```bash
    git clone https://github.com/username/taman-wisata-bougenville.git
    cd taman-wisata-bougenville
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Jalankan server development**
    ```bash
    npm run dev
    # atau
    npm start
    ```

4.  Buka browser Anda ke alamat server lokal (biasanya `http://localhost:3000` atau `http://localhost:5173`).

## 📂 Struktur Proyek

Proyek diatur agar mudah dikembangkan:

```text
/
├── components/           # Komponen UI React
│   ├── BookingForm.tsx   # Logika pemesanan bertahap
│   ├── FacilityPage.tsx  # Halaman Aktivitas & Fasilitas
│   ├── RestoPage.tsx     # Halaman Restoran & Menu
│   └── VillasPage.tsx    # Listing Villa & Modal Detail
├── constants.tsx         # Pusat Data (Villa, Menu, Teks Copywriting)
├── types.ts              # Definisi Tipe TypeScript
├── App.tsx               # Layout Utama & Routing Sederhana
├── index.tsx             # Entry Point
└── index.html            # Template HTML & Config Tailwind
```

## 🎨 Kustomisasi

Seluruh data konten dipisahkan dari logika UI (`constants.tsx`), memudahkan Anda untuk mengubah:
*   **Harga & Nama Villa**
*   **Menu Makanan**
*   **Teks Promosi & Deskripsi**
*   **Terjemahan Bahasa**

## 📄 Lisensi

Proyek ini dibuat khusus untuk Taman Wisata Bougenville.
