import fs from 'fs';

const filePath = 'c:/Users/User/Documents/Donwload File Asus TUF/Download Laptop/TWB WEB/taman-wisata-bougenville/constants.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// KB Deluxe Baris 2
const kbDeluxe2 = ['Calathea', 'Camelia', 'Kigelia', 'Jacaranda', 'Lophantera'];
kbDeluxe2.forEach(name => {
    const rx = new RegExp('name: \\\'' + name + '\\\',[^}]*?description:\\s*\\{[^}]*?\\}', 'g');
    content = content.replace(rx, match => {
        return match
            .replace(/id: 'Villa kabin[^']+?(\\'|')/, "id: 'Villa kabin tipe Deluxe dengan nuansa kayu. Villa kabin di baris ke-2, view villa lain.'")
            .replace(/en: 'Deluxe type[^']+?(\\'|')/, "en: 'Deluxe type cabin villa with wooden atmosphere. Cabin villa in the 2nd row, view of other villas.'")
            .replace(/zh: '[^']+?(\\'|')/, "zh: '拥有木质氛围的豪华型小木屋别墅。第2排的小木屋别墅，可以看到其他别墅的景色。'")
            .replace(/de: 'Deluxe-Kabinen-Villa[^']+?(\\'|')/, "de: 'Deluxe-Kabinen-Villa mit holziger Atmosphäre. Kabinenvilla in der 2. Reihe, Blick auf andere Villen.'");
    });
});

// KB Deluxe Baris 3
const kbDeluxe3 = ['Monstera', 'Philodendron', 'Russelia'];
kbDeluxe3.forEach(name => {
    const rx = new RegExp('name: \\\'' + name + '\\\',[^}]*?description:\\s*\\{[^}]*?\\}', 'g');
    content = content.replace(rx, match => {
        return match
            .replace(/id: 'Villa kabin[^']+?(\\'|')/, "id: 'Villa kabin tipe Deluxe dengan nuansa kayu. Villa kabin di baris ke-3, view villa lain.'")
            .replace(/en: 'Deluxe type[^']+?(\\'|')/, "en: 'Deluxe type cabin villa with wooden atmosphere. Cabin villa in the 3rd row, view of other villas.'")
            .replace(/zh: '[^']+?(\\'|')/, "zh: '拥有木质氛围的豪华型小木屋别墅。第3排的小木屋别墅，可以看到其他别墅的景色。'")
            .replace(/de: 'Deluxe-Kabinen-Villa[^']+?(\\'|')/, "de: 'Deluxe-Kabinen-Villa mit holziger Atmosphäre. Kabinenvilla in der 3. Reihe, Blick auf andere Villen.'");
    });
});

// Nawa Bumi Puspa & Suren
content = content.replace(/\{ room: 1, beds: '2 kamar tidur.*?\}/gi, "{ room: 1, beds: 'Paviliun, Kamar 1, Kamar 2' }");
content = content.replace(/\{ room: 1, beds: 'Kamar 1, Kamar 2' \}/g, "{ room: 1, beds: 'Paviliun, Kamar 1, Kamar 2' }");
content = content.replace(/id: 'nawabumi-puspa',[\\s\\S]*?bedConfiguration: \\[[\\s\\S]*?\\]/g, match => {
    return match.replace(/bedConfiguration: \\[[\\s\\S]*?\\]/, "bedConfiguration: [{ room: 1, beds: 'Paviliun, Kamar 1, Kamar 2' }]");
});
content = content.replace(/id: 'nawabumi-suren',[\\s\\S]*?bedConfiguration: \\[[\\s\\S]*?\\]/g, match => {
    return match.replace(/bedConfiguration: \\[[\\s\\S]*?\\]/, "bedConfiguration: [{ room: 1, beds: 'Kamar 1, Kamar 2' }]");
});

// Add Tea/Coffee/Sugar
content = content.replace(/meals: \\[(.*?)\\]/gs, (match, p1) => {
    if (p1.includes('Kopi, teh, dan gula') || p1.includes('Kopi,') || p1.includes('Coffee') || p1.includes('Teh')) {
        return match;
    }
    return match.replace(/\\s*\\]/, ",\\n        { id: 'Kopi, teh, dan gula', en: 'Coffee, tea, and sugar', zh: '咖啡、茶和糖', de: 'Kaffee, Tee und Zucker' }\\n      ]");
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Update Script done.');
