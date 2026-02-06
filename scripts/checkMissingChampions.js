// Complete list of all 173+ League of Legends champions (as of Patch 16.2 / 2026)
// Note: MonkeyKing is the internal API name for Wukong
const allChampions = [
    'Aatrox', 'Ahri', 'Akali', 'Akshan', 'Alistar', 'Ambessa', 'Amumu', 'Anivia', 'Annie', 'Aphelios',
    'Ashe', 'AurelionSol', 'Aurora', 'Azir', 'Bard', 'Belveth', 'Blitzcrank', 'Brand', 'Braum', 'Briar',
    'Caitlyn', 'Camille', 'Cassiopeia', 'ChoGath', 'Corki', 'Darius', 'Diana', 'DrMundo', 'Draven', 'Ekko',
    'Elise', 'Evelynn', 'Ezreal', 'Fiddlesticks', 'Fiora', 'Fizz', 'Galio', 'Gangplank', 'Garen', 'Gnar',
    'Gragas', 'Graves', 'Gwen', 'Hecarim', 'Heimerdinger', 'Hwei', 'Illaoi', 'Irelia', 'Ivern', 'Janna',
    'JarvanIV', 'Jax', 'Jayce', 'Jhin', 'Jinx', 'KSante', 'KaiSa', 'Kalista', 'Karma', 'Karthus',
    'Kassadin', 'Katarina', 'Kayle', 'Kayn', 'Kennen', 'Khazix', 'Kindred', 'Kled', 'KogMaw', 'LeBlanc',
    'LeeSin', 'Leona', 'Lillia', 'Lissandra', 'Lucian', 'Lulu', 'Lux', 'Malphite', 'Malzahar', 'Maokai',
    'MasterYi', 'Mel', 'Milio', 'MissFortune', 'Mordekaiser', 'Morgana', 'Naafiri', 'Nami', 'Nasus',
    'Nautilus', 'Neeko', 'Nidalee', 'Nilah', 'Nocturne', 'Nunu', 'Olaf', 'Orianna', 'Ornn', 'Pantheon',
    'Poppy', 'Pyke', 'Qiyana', 'Quinn', 'Rakan', 'Rammus', 'RekSai', 'Rell', 'Renata', 'Renekton',
    'Rengar', 'Riven', 'Rumble', 'Ryze', 'Samira', 'Sejuani', 'Senna', 'Seraphine', 'Sett', 'Shaco',
    'Shen', 'Shyvana', 'Singed', 'Sion', 'Sivir', 'Skarner', 'Smolder', 'Sona', 'Soraka', 'Swain',
    'Sylas', 'Syndra', 'TahmKench', 'Taliyah', 'Talon', 'Taric', 'Teemo', 'Thresh', 'Tristana', 'Trundle',
    'Tryndamere', 'TwistedFate', 'Twitch', 'Udyr', 'Urgot', 'Varus', 'Vayne', 'Veigar', 'VelKoz', 'Vex',
    'Vi', 'Viego', 'Viktor', 'Vladimir', 'Volibear', 'Warwick', 'Wukong', 'Xayah', 'Xerath', 'XinZhao',
    'Yasuo', 'Yone', 'Yorick', 'Yuumi', 'Yunara', 'Zaahen', 'Zac', 'Zed', 'Zeri', 'Ziggs', 'Zilean', 'Zoe', 'Zyra'
];

// Load our current data
const { championOverrides, championRoles } = require('../src/data/championBuilds.js');

const existingChampions = new Set([...Object.keys(championOverrides), ...Object.keys(championRoles)]);

// Find missing champions
const missingChampions = allChampions.filter(c => !existingChampions.has(c));

// Find champions we have that aren't in the official list (possible naming issues)
const extraChampions = Array.from(existingChampions).filter(c => !allChampions.includes(c));

console.log('=== MISSING CHAMPIONS ===');
console.log(`Missing ${missingChampions.length} champions:`);
missingChampions.forEach(c => console.log(`  - ${c}`));

console.log('\n=== EXTRA/MISNAMED CHAMPIONS ===');
console.log(`Extra ${extraChampions.length} champions (possibly misnamed):`);
extraChampions.forEach(c => console.log(`  - ${c}`));

console.log('\n=== SUMMARY ===');
console.log(`Total champions in LoL: ${allChampions.length}`);
console.log(`Champions we have: ${existingChampions.size}`);
console.log(`Missing: ${missingChampions.length}`);

if (missingChampions.length === 0) {
    console.log('\n✅ ALL CHAMPIONS ARE COVERED!');
}