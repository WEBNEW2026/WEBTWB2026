import fs from 'fs';

const filePath = './constants.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Helper function to remove an object by its id in an array
function removeObjectById(text, idToFind) {
    const idStr = `id: '${idToFind}'`;
    const idx = text.indexOf(idStr);
    if (idx === -1) return text;

    // Find the start of this object
    let startIdx = text.lastIndexOf('  {', idx);
    if (startIdx === -1) return text;

    // Find the end of this object by counting braces
    let braceCount = 0;
    let inObject = false;
    let endIdx = -1;

    for (let i = startIdx; i < text.length; i++) {
        if (text[i] === '{') {
            braceCount++;
            inObject = true;
        } else if (text[i] === '}') {
            braceCount--;
        }

        if (inObject && braceCount === 0) {
            // found the end
            endIdx = i;
            break;
        }
    }

    if (endIdx !== -1) {
        // Look ahead to remove trailing comma if present
        let finalEndIdx = endIdx + 1;
        while (finalEndIdx < text.length && /\s/.test(text[finalEndIdx])) {
            finalEndIdx++;
        }
        if (text[finalEndIdx] === ',') {
            finalEndIdx++;
        }

        // Actually, maybe it's the last element and has no trailing comma, but the PREVIOUS element has a comma.
        // So let's just do standard removal.
        const before = text.substring(0, startIdx);
        const after = text.substring(finalEndIdx);

        // Clean up trailing commas if this was the last item
        // e.g. `},  ]` -> `}  ]`
        return (before + after).replace(/,\s*\]/g, '\n]');
    }

    return text;
}

content = removeObjectById(content, 'villa-pinus');
content = removeObjectById(content, 'villa-meranti');

// Remove trailing comma from puspa if meranti was the last one
content = content.replace(/},\s*?\]/g, '\n  }\n]');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully removed Pinus and Meranti objects.');
