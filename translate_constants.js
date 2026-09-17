import { Project, SyntaxKind } from 'ts-morph';
import https from 'https';

const project = new Project();
const sourceFile = project.addSourceFileAtPath('constants.tsx');

async function translate(text, targetLang) {
    if (!text || text.trim() === '') return '';
    return new Promise((resolve) => {
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
        const req = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => {
                try {
                    const parsed = JSON.parse(data);
                    const translatedText = parsed[0].map(x => x[0]).join('');
                    resolve(translatedText);
                } catch (e) {
                    console.error('Translation error:', e);
                    resolve(text);
                }
            });
        });
        req.on('error', (e) => resolve(text));
    });
}

// Sleep helper
const sleep = ms => new Promise(r => setTimeout(r, ms));

async function processFile() {
    console.log("Starting translation process...");
    const objectLiterals = sourceFile.getDescendantsOfKind(SyntaxKind.ObjectLiteralExpression);
    let count = 0;
    
    // Collect all tasks to do concurrently (with a small delay to prevent immediate ban)
    for (const obj of objectLiterals) {
        const idProp = obj.getProperty('id');
        const enProp = obj.getProperty('en');
        
        // Ensure property assignments
        if (idProp && enProp && obj.getProperty('en').getKind() === SyntaxKind.PropertyAssignment) {
            const enTextNode = enProp.getInitializer();
            
            if (enTextNode && (enTextNode.getKind() === SyntaxKind.StringLiteral || enTextNode.getKind() === SyntaxKind.NoSubstitutionTemplateLiteral)) {
                
                const frProp = obj.getProperty('fr');
                const jaProp = obj.getProperty('ja');
                const koProp = obj.getProperty('ko');
                
                // If it already has them all, skip
                if (frProp && jaProp && koProp) continue;
                
                const enText = enTextNode.getLiteralValue();
                
                // Process these three essentially in parallel but with a slight delay
                let promises = [];
                if (!frProp) promises.push(translate(enText, 'fr').then(t => obj.addPropertyAssignment({ name: 'fr', initializer: JSON.stringify(t) })));
                if (!jaProp) promises.push(translate(enText, 'ja').then(t => obj.addPropertyAssignment({ name: 'ja', initializer: JSON.stringify(t) })));
                if (!koProp) promises.push(translate(enText, 'ko').then(t => obj.addPropertyAssignment({ name: 'ko', initializer: JSON.stringify(t) })));
                
                await Promise.all(promises);
                await sleep(50); // slight delay between groups of 3 requests
                
                count++;
                
                if (count % 20 === 0) {
                    console.log(`Processed ${count} objects...`);
                }
            }
        }
    }
    
    console.log(`Completed. Total translations added to objects: ${count}`);
    sourceFile.saveSync();
}

processFile().catch(console.error);
