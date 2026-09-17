import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const input = path.resolve('Image/FAQbanner.jpg');
const outputDir = path.resolve('public/images/optimized'); // Or wherever appropriate, let's use public/images/optimized since 'membership-hero.webp' is there or just public/images
const output = path.join(outputDir, 'FAQbanner.webp');

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

sharp(input)
  .webp({ quality: 80 })
  .toFile(output)
  .then(info => {
    console.log('Successfully converted FAQ banner image:', info);
  })
  .catch(err => {
    console.error('Error converting image:', err);
    process.exit(1);
  });
