const fs = require('fs');
const txt = fs.readFileSync('constants.tsx', 'utf8');
const lines = txt.split('\n');
let currentVilla = null;
const villas = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.match(/^\s*id:\s*['"]([a-z0-9-]+)['"],/)) {
    const id = line.match(/^\s*id:\s*['"]([a-z0-9-]+)['"],/)[1];
    currentVilla = { id, line: i + 1 };
    villas.push(currentVilla);
  }
  if (currentVilla) {
    if (line.includes('price:')) currentVilla.price = line.trim();
    if (line.includes('priceWeekday:')) currentVilla.priceWeekday = line.trim();
    if (line.includes('priceWeekend:')) currentVilla.priceWeekend = line.trim();
    if (line.includes('priceHighSeason:')) currentVilla.priceHighSeason = line.trim();
  }
}

const villaList = villas.filter(v => v.priceWeekday || v.price);
console.log('Total villas with price:', villaList.length);
villaList.forEach(v => {
  console.log(v.id, '|', v.priceWeekday, '|', v.priceWeekend, '|', v.priceHighSeason);
});
