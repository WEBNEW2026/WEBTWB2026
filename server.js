/**
 * app.js — TWB Production Server (ES Module)
 * ============================================================
 * Plesk startup file: Application Startup File = app.js
 * Menyajikan static files dari dist/ dengan CSP headers benar.
 * ============================================================
 */

import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// ES module __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

const app  = express();
const PORT = process.env.PORT || 3000;

// ── Content Security Policy ─────────────────────────────────────
// Mengizinkan: GTM, GA4, Google Ads, Clarity, Meta Pixel, TikTok
const CSP_POLICY = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' " +
    "https://www.googletagmanager.com " +
    "https://www.google-analytics.com " +
    "https://www.googleadservices.com " +
    "https://googleads.g.doubleclick.net " +
    "https://googleleads.g.doubleclick.net " +
    "https://td.doubleclick.net " +
    "https://pagead2.googlesyndication.com " +
    "https://connect.facebook.net " +
    "https://analytics.tiktok.com " +
    "https://www.clarity.ms " +
    "https://claritycdn.microsoft.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' data: https://fonts.gstatic.com",
  "img-src 'self' data: https: blob:",
  "connect-src 'self' " +
    "https://www.google-analytics.com " +
    "https://analytics.google.com " +
    "https://region1.google-analytics.com " +
    "https://www.googletagmanager.com " +
    "https://www.googleadservices.com " +
    "https://googleads.g.doubleclick.net " +
    "https://googleleads.g.doubleclick.net " +
    "https://stats.g.doubleclick.net " +
    "https://td.doubleclick.net " +
    "https://pagead2.googlesyndication.com " +
    "https://www.google.com " +
    "https://api.frankfurter.app " +
    "https://analytics.tiktok.com " +
    "https://www.clarity.ms " +
    "https://e.clarity.ms " +
    "https://connect.facebook.net " +
    "https://bam.nr-data.net",
  "frame-src 'self' " +
    "https://www.googletagmanager.com " +
    "https://td.doubleclick.net " +
    "https://googleads.g.doubleclick.net " +
    "https://googleleads.g.doubleclick.net " +
    "https://www.google.com",
  "base-uri 'self'",
  "form-action 'self' https://wa.me"
].join('; ');

// ── Security Headers Middleware ─────────────────────────────────
app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', CSP_POLICY);
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});

// ── Serve Static Files dari dist/ ───────────────────────────────
const distPath = path.join(__dirname, 'dist');

if (!fs.existsSync(distPath)) {
  console.error('❌ Folder dist/ tidak ada. Jalankan: npm run build');
  process.exit(1);
}

app.use(express.static(distPath, {
  index: false, // SPA fallback dihandle manual di bawah
  setHeaders: (res, filePath) => {
    // HTML: tidak di-cache
    if (filePath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    } else {
      // Aset JS/CSS/image: cache 1 tahun (aman karena pakai content hash)
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    }
  }
}));

// ── SPA Fallback ────────────────────────────────────────────────
// Semua route → index.html agar React Router bisa handle
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// ── Start Server ────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅ TWB server berjalan di port ${PORT}`);
  console.log(`   Serving: ${distPath}`);
  console.log(`   CSP aktif: GTM, GA4, Google Ads, Clarity diizinkan`);
});
