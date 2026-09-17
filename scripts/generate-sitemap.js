import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://tamanwisatabougenville.com';

const STATIC_ROUTES = [
    '',
    '?page=villas',
    '?page=resto',
    '?page=facility',
    '?page=gallery',
    '?page=offers',
    '?page=about',
    '?page=location',
    '?page=contact',
    '?page=faq',
    '?page=blog'
];

const VILLA_IDS = [
    'forest-house',
    'mooi-lake',
    'emerald-02',
    'emerald-01',
    'olinda',
    'selby',
    'villa-gordes',
    'villa-roussillon',
    'villa-lourmarin',
    'riverside-hana'
];

const BLOG_IDS = [
    'romantic-honeymoon-mount-puntang',
    'ultimate-family-gathering-guide',
    'history-radio-malabar',
    'lebaran-2025-bougenville'
];

function generateSitemap() {
    const today = new Date().toISOString().split('T')[0];

    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    STATIC_ROUTES.forEach(route => {
        xml += '  <url>\n';
        xml += `    <loc>${BASE_URL}/${route}</loc>\n`;
        xml += `    <lastmod>${today}</lastmod>\n`;
        xml += '    <changefreq>weekly</changefreq>\n';
        xml += `    <priority>${route === '' ? '1.0' : '0.8'}</priority>\n`;
        xml += '  </url>\n';
    });

    VILLA_IDS.forEach(id => {
        xml += '  <url>\n';
        xml += `    <loc>${BASE_URL}/?page=villa-detail&amp;id=${id}</loc>\n`;
        xml += `    <lastmod>${today}</lastmod>\n`;
        xml += '    <changefreq>weekly</changefreq>\n';
        xml += '    <priority>0.9</priority>\n';
        xml += '  </url>\n';
    });

    BLOG_IDS.forEach(id => {
        xml += '  <url>\n';
        xml += `    <loc>${BASE_URL}/?page=blog&amp;id=${id}</loc>\n`;
        xml += `    <lastmod>${today}</lastmod>\n`;
        xml += '    <changefreq>monthly</changefreq>\n';
        xml += '    <priority>0.7</priority>\n';
        xml += '  </url>\n';
    });

    xml += '</urlset>';

    // Resolve root project directory (one level up from /scripts/)
    const rootDir = path.resolve(__dirname, '..');
    const distDir = path.resolve(rootDir, 'dist');
    const publicDir = path.resolve(rootDir, 'public');

    // After vite build, dist/ exists — write there. Otherwise write to public/
    const outputDir = fs.existsSync(distDir) ? distDir : publicDir;

    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    const outputPath = path.resolve(outputDir, 'sitemap.xml');
    fs.writeFileSync(outputPath, xml, 'utf8');
    console.log(`✅ Sitemap generated: ${outputPath}`);

    // If we wrote to public, also copy to dist if it exists
    if (outputDir === publicDir && fs.existsSync(distDir)) {
        const distPath = path.resolve(distDir, 'sitemap.xml');
        fs.writeFileSync(distPath, xml, 'utf8');
        console.log(`✅ Sitemap also copied to: ${distPath}`);
    }
}

try {
    generateSitemap();
} catch (err) {
    console.warn('⚠️  Sitemap generation failed (non-fatal):', err.message);
    process.exit(0); // Exit 0 so vite build succeeds even if sitemap fails
}
