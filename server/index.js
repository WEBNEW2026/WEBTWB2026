const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const { initDatabase } = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;

// ── Content Security Policy ─────────────────────────────────
// Izinkan GTM, GA4, Meta Pixel, TikTok, Clarity, Hotjar, dll
const CSP_POLICY = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://googleleads.g.doubleclick.net https://td.doubleclick.net https://pagead2.googlesyndication.com https://connect.facebook.net https://analytics.tiktok.com https://js-agent.newrelic.com https://claritycdn.microsoft.com https://www.clarity.ms https://aistudiocdn.com https://static.hotjar.com https://script.hotjar.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: https: blob:",
  "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com https://www.googletagmanager.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://googleleads.g.doubleclick.net https://stats.g.doubleclick.net https://td.doubleclick.net https://pagead2.googlesyndication.com https://www.google.com https://api.frankfurter.app https://analytics.tiktok.com https://www.clarity.ms https://e.clarity.ms https://connect.facebook.net https://js-agent.newrelic.com https://bam.nr-data.net",
  "frame-src 'self' https://www.googletagmanager.com https://td.doubleclick.net https://googleads.g.doubleclick.net https://googleleads.g.doubleclick.net https://www.google.com",
  "base-uri 'self'",
  "form-action 'self' https://wa.me"
].join('; ');

// ── Security Headers Middleware ─────────────────────────────
app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', CSP_POLICY);
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  next();
});

// ── Core Middleware ─────────────────────────────────────────
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ── Static File Uploads ─────────────────────────────────────
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}
app.use('/uploads', express.static(uploadsDir));

// ── Database ────────────────────────────────────────────────
initDatabase();

// ── API Routes ──────────────────────────────────────────────
const authRoutes    = require('./routes/auth');
const uploadRoutes  = require('./routes/upload');
const villaRoutes   = require('./routes/villas');
const packageRoutes = require('./routes/packages');
const blogRoutes    = require('./routes/blog');

app.use('/api/auth',     authRoutes);
app.use('/api/upload',   uploadRoutes);
app.use('/api/villas',   villaRoutes);
app.use('/api/packages', packageRoutes);
app.use('/api/blog',     blogRoutes);

// ── Serve React App (dist/) ─────────────────────────────────
// Serve static files dari hasil build Vite
const distPath = path.join(__dirname, '..', 'dist');
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));

  // SPA fallback — semua route dikembalikan ke index.html
  app.get('*', (req, res) => {
    // Jangan intercept API routes
    if (req.path.startsWith('/api/')) return res.status(404).json({ error: 'API not found' });
    res.sendFile(path.join(distPath, 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.json({ message: 'TWB API running. Run npm run build to serve the React app.' });
  });
}

// ── Start Server ────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅ TWB Server running on port ${PORT}`);
  console.log(`   React app: ${fs.existsSync(distPath) ? distPath : 'NOT BUILT YET'}`);
});
