const fs = require('fs');
const path = 'c:\\Users\\Mathias Ghanem\\Documents\\code\\lol-overlay\\src\\data\\championBuilds.js';
const content = fs.readFileSync(path, 'utf8');

function extractObject(text, startIndex) {
    let braceCount = 0;
    let started = false;
    for (let i = startIndex; i < text.length; i++) {
        if (text[i] === '{') {
            braceCount++;
            started = true;
        } else if (text[i] === '}') {
            braceCount--;
        }
        if (started && braceCount === 0) {
            return text.substring(startIndex, i + 1);
        }
    }
    return null;
}

const itemBuildsRegex = /itemBuilds:\s*\{/g;
let match;
let count = 0;
let missingBoots = [];

while ((match = itemBuildsRegex.exec(content)) !== null) {
    const actualStartIndex = content.indexOf('{', match.index);
    const fullBlock = extractObject(content, actualStartIndex);

    if (fullBlock && !fullBlock.includes('boots:')) {
        // Find champion name
        const context = content.substring(Math.max(0, match.index - 1000), match.index);
        const nameMatches = [...context.matchAll(/\n\s*([A-Z][a-zA-Z']+):\s*\{/g)];
        let name = 'Unknown';
        if (nameMatches.length > 0) {
            name = nameMatches[nameMatches.length - 1][1];
        }

        // Check if it's a template
        const templateMatches = [...context.matchAll(/\n\s*([A-Z][a-zA-Z]+):\s*\{/g)];
        if (context.includes('const buildTemplates = {')) {
            // This is inside templates
        }

        if (name !== 'Cassiopeia' && name !== 'skillOrder') {
            missingBoots.push({ name, index: match.index });
        }
    }
    count++;
}

console.log(`Checked ${count} itemBuilds blocks.`);
if (missingBoots.length > 0) {
    console.log(`Found ${missingBoots.length} blocks missing boots:`);
    missingBoots.forEach(m => console.log(`- ${m.name} near index ${m.index}`));
} else {
    console.log('No blocks missing boots (excluding Cassiopeia).');
}

// Check for rogue items in core that are boots
const bootIds = [3006, 3009, 3020, 3047, 3111, 3117, 3158];
const coreRegex = /core:\s*\{[\s\S]*?items:\s*\[([\s\S]*?)\]/g;
let redundantBoots = [];
while ((match = coreRegex.exec(content)) !== null) {
    const items = match[1].split(',').map(s => parseInt(s.trim()));
    const foundBoots = items.filter(id => bootIds.includes(id));
    if (foundBoots.length > 0) {
        // Find champion name
        const context = content.substring(Math.max(0, match.index - 500), match.index);
        const nameMatches = [...context.matchAll(/\n\s*([A-Z][a-zA-Z']+):\s*\{/g)];
        const name = nameMatches.length > 0 ? nameMatches[nameMatches.length - 1][1] : 'Unknown';
        redundantBoots.push({ name, boots: foundBoots });
    }
}

if (redundantBoots.length > 0) {
    console.log(`Found ${redundantBoots.length} blocks with boots in core:`);
    redundantBoots.forEach(r => console.log(`- ${r.name}: ${r.boots}`));
}
