import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const input = path.resolve('Image/Lobby.jpg');
const outputDir = path.resolve('public/images/optimized');
const output = path.join(outputDir, 'Lobby.webp');

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

sharp(input)
  .webp({ quality: 80 })
  .toFile(output)
  .then(info => {
    console.log('Successfully converted Lobby image:', info);
  })
  .catch(err => {
    console.error('Error converting image:', err);
    process.exit(1);
  });
