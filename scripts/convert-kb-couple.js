import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const input = path.resolve('Image/kb couple.jpeg');
const outputDir = path.resolve('public/images/villas');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });
const output = path.join(outputDir, 'kb-couple.webp');

sharp(input)
  .webp({ quality: 80 })
  .toFile(output)
  .then(info => {
    console.log('Successfully converted image:', info);
  })
  .catch(err => {
    console.error('Error converting image:', err);
    process.exit(1);
  });
