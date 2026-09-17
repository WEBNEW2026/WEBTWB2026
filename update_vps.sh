#!/bin/bash
# ============================================================
# PERINTAH UNTUK IT - Jalankan di VPS
# Update website dengan fix CSP (Google Tag Manager)
# ============================================================

echo "=== Pulling latest code from GitHub ==="
cd /var/www/tamanwisatabougenville   # SESUAIKAN path project di VPS
git pull origin main

echo "=== Rebuilding ==="
npm install
npm run build

echo "=== Reload Nginx ==="
sudo nginx -t && sudo systemctl reload nginx

echo "=== DONE ==="
echo "Cek GTM di: https://tagassistant.google.com/"
