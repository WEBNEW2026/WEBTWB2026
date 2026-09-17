# 🚀 Panduan Deploy VPS — Taman Wisata Bougenville

## Prasyarat
- Node.js >= 18 sudah terinstall di VPS
- Nginx sudah terinstall
- Certbot/Let's Encrypt untuk SSL

---

## 1. Upload & Install

```bash
# Upload project ke VPS (dari local, jalankan di PowerShell/CMD)
# Atau clone dari git repository

# Masuk ke folder project
cd /var/www/tamanwisatabougenville

# Install dependencies
npm install

# Build untuk production
npm run build
```

Hasil build akan ada di folder `dist/`

---

## 2. Setup Nginx

```bash
# Copy config nginx dari project
sudo cp nginx.conf /etc/nginx/sites-available/tamanwisatabougenville.com

# Aktifkan site
sudo ln -s /etc/nginx/sites-available/tamanwisatabougenville.com \
           /etc/nginx/sites-enabled/tamanwisatabougenville.com

# Hapus default site jika ada
sudo rm -f /etc/nginx/sites-enabled/default

# Test konfigurasi nginx
sudo nginx -t

# Jika OK, reload nginx
sudo systemctl reload nginx
```

---

## 3. SSL Certificate (Let's Encrypt)

```bash
# Install certbot jika belum ada
sudo apt install certbot python3-certbot-nginx -y

# Generate SSL certificate
sudo certbot --nginx -d tamanwisatabougenville.com -d www.tamanwisatabougenville.com

# Auto-renewal sudah setup otomatis oleh certbot
```

---

## 4. Cek Root Directory

Di file `nginx.conf`, pastikan path ini sesuai dengan lokasi folder `dist/`:

```nginx
root /var/www/tamanwisatabougenville/dist;
```

Ubah sesuai lokasi upload project di VPS Anda.

---

## 5. Verifikasi GTM Berjalan

1. Buka website di browser
2. Buka **DevTools** (F12) → tab **Network**
3. Klik request file HTML → lihat tab **Response Headers**
4. Pastikan ada header: `content-security-policy` dengan domain GTM di dalamnya
5. Buka **Console** tab → tidak ada CSP error merah

---

## Troubleshooting

### Jika masih ada CSP error:
```bash
# Cek apakah header CSP sudah dikirim server
curl -I https://tamanwisatabougenville.com | grep -i "content-security"
```

### Jika halaman blank / 404 saat refresh:
- Pastikan konfigurasi `try_files $uri $uri/ /index.html;` sudah ada di nginx.conf
- Ini penting untuk React SPA (Single Page Application)

### Rebuild setelah ada perubahan kode:
```bash
cd /var/www/tamanwisatabougenville
npm run build
sudo systemctl reload nginx
```
