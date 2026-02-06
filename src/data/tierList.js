/**
 * Champion Tier List & Meta Data
 * Updated meta tier rankings by role
 */

// Current patch tier list (Season 2026 - Patch 16.2)
export const tierList = {
    // TOP LANE
    top: {
        S: ['Varus', 'Singed', 'Kayle', 'Ornn', 'Kled', 'Darius', 'Fiora', 'Gwen', 'Jax', 'Ambessa'],
        A: ['Aatrox', 'Renekton', 'Camille', 'Yone', 'Garen', 'Mordekaiser', 'Sett', 'Riven', 'Gragas', 'Rumble', 'Cho\'Gath'],
        B: ['Malphite', 'Sion', 'Nasus', 'Yorick', 'Illaoi', 'Urgot', 'Trundle', 'Volibear', 'Aurora', 'Zaahen'],
        C: ['Teemo', 'Kennen', 'Jayce', 'Gangplank', 'Vladimir', 'Kayle', 'Quinn', 'Vayne', 'Akali'],
        D: ['Singed', 'Dr. Mundo', 'Tahm Kench', 'Maokai']
    },

    // JUNGLE
    jungle: {
        S: ['Rammus', 'Volibear', 'Rek\'Sai', 'Ivern', 'Fiddlesticks', 'Zac', 'Diana', 'Ekko'],
        A: ['Viego', 'Lee Sin', 'Elise', 'Nidalee', 'Kha\'Zix', 'Graves', 'Kindred', 'Bel\'Veth', 'Vi', 'Briar'],
        B: ['Warwick', 'Amumu', 'Sejuani', 'Skarner', 'Nocturne', 'Shyvana', 'Udyr', 'Trundle', 'Olaf', 'Wukong'],
        C: ['Master Yi', 'Kayn', 'Shaco', 'Rengar', 'Taliyah', 'Karthus', 'Jarvan IV', 'Xin Zhao'],
        D: ['Poppy', 'Maokai', 'Brand']
    },

    // MID LANE
    mid: {
        S: ['Swain', 'Ahri', 'Akali', 'Kassadin', 'Katarina', 'Sylas', 'Syndra', 'Twisted Fate', 'Veigar', 'Zed', 'Naafiri', 'Mel'],
        A: ['Varus', 'Aurora', 'Orianna', 'Hwei', 'Azir', 'Yone', 'LeBlanc', 'Vex', 'Viktor', 'Cassiopeia'],
        B: ['Ryze', 'Galio', 'Malzahar', 'Annie', 'Brand', 'Ziggs', 'Lissandra', 'Neeko', 'Lux', 'Anivia'],
        C: ['Zoe', 'Vel\'Koz', 'Taliyah', 'Aurelion Sol', 'Corki', 'Tristana', 'Lucian', 'Yasuo'],
        D: ['Qiyana', 'Jayce', 'Gangplank', 'Rumble', 'Heimerdinger']
    },

    // ADC / BOT LANE
    adc: {
        S: ['Jinx', 'Nilah', 'Caitlyn', 'Swain', 'Varus', 'Kai\'Sa', 'Jhin'],
        A: ['Ashe', 'Miss Fortune', 'Xayah', 'Aphelios', 'Vayne', 'Ezreal', 'Lucian', 'Tristana', 'Draven', 'Yunara'],
        B: ['Samira', 'Twitch', 'Kog\'Maw', 'Sivir', 'Zeri', 'Kalista', 'Senna', 'Smolder'],
        C: ['Corki', 'Akshan', 'Seraphine', 'Ziggs'],
        D: []
    },

    // SUPPORT
    support: {
        S: ['Braum', 'Sona', 'Nami', 'Leona', 'Nautilus', 'Thresh', 'Blitzcrank', 'Rakan'],
        A: ['Milio', 'Lulu', 'Janna', 'Karma', 'Renata Glasc', 'Yuumi', 'Soraka', 'Morgana', 'Rell', 'Alistar'],
        B: ['Pyke', 'Bard', 'Taric', 'Senna', 'Zilean', 'Zyra'],
        C: [],
        D: []
    }
};

// Get tier for a specific champion in a role
export function getChampionTier(championName, role) {
    const roleTiers = tierList[role];
    if (!roleTiers) return null;

    for (const [tier, champions] of Object.entries(roleTiers)) {
        if (champions.some(c => c.toLowerCase() === championName.toLowerCase())) {
            return tier;
        }
    }
    return 'B'; // Default tier if not found
}

// Get all champions in a specific tier for a role
export function getChampionsByTier(role, tier) {
    const roleTiers = tierList[role];
    if (!roleTiers) return [];
    return roleTiers[tier] || [];
}

// Tier colors for UI
export const tierColors = {
    S: { bg: '#ff7675', text: '#fff', glow: 'rgba(255, 118, 117, 0.5)' },
    A: { bg: '#fdcb6e', text: '#000', glow: 'rgba(253, 203, 110, 0.5)' },
    B: { bg: '#74b9ff', text: '#fff', glow: 'rgba(116, 185, 255, 0.5)' },
    C: { bg: '#a29bfe', text: '#fff', glow: 'rgba(162, 155, 254, 0.5)' },
    D: { bg: '#636e72', text: '#fff', glow: 'rgba(99, 110, 114, 0.5)' }
};

// Champion role mappings (primary roles)
export const championRoles = {
    // Top laners
    Aatrox: ['top'], Ambessa: ['top'], Aurora: ['top', 'mid'], Camille: ['top'], Darius: ['top'],
    Fiora: ['top'], Gangplank: ['top'], Garen: ['top'], Gnar: ['top'], Gwen: ['top', 'jungle'],
    Illaoi: ['top'], Irelia: ['top', 'mid'], Jax: ['top', 'jungle'], Gragas: ['top'], Jayce: ['top', 'mid'],
    Kayle: ['top'], Kennen: ['top'], Kled: ['top'], Malphite: ['top'],
    Mordekaiser: ['top'], Nasus: ['top'], Olaf: ['top'], Ornn: ['top'],
    Pantheon: ['top', 'mid'], Poppy: ['top', 'support'], Quinn: ['top'],
    Renekton: ['top'], Riven: ['top'], Rumble: ['top'], Sett: ['top'],
    Shen: ['top'], Singed: ['top'], Sion: ['top'], Teemo: ['top'],
    Trundle: ['top', 'jungle'], Tryndamere: ['top'], Urgot: ['top'], Volibear: ['top', 'jungle'],
    Yorick: ['top'], Yone: ['top', 'mid'], DrMundo: ['top', 'jungle'], Chogath: ['top'],
    TahmKench: ['top'], Ksante: ['top'], Zaahen: ['top', 'jungle'],

    // Junglers
    Amumu: ['jungle'], Diana: ['jungle', 'mid'], Ekko: ['jungle', 'mid'], Elise: ['jungle'],
    Evelynn: ['jungle'], Fiddlesticks: ['jungle'],
    Graves: ['jungle'], Hecarim: ['jungle'], Ivern: ['jungle'], JarvanIV: ['jungle'],
    Karthus: ['jungle', 'mid'], Kayn: ['jungle'], Khazix: ['jungle'], Kindred: ['jungle'],
    LeeSin: ['jungle'], Lillia: ['jungle'], MasterYi: ['jungle'], Nidalee: ['jungle'],
    Nocturne: ['jungle'], NunuWillump: ['jungle'], Rammus: ['jungle'], RekSai: ['jungle'],
    Rengar: ['jungle'], Sejuani: ['jungle'], Shaco: ['jungle'], Shyvana: ['jungle'],
    Skarner: ['jungle'], Taliyah: ['jungle', 'mid'], Udyr: ['jungle'], Vi: ['jungle'],
    Viego: ['jungle'], Warwick: ['jungle'], Wukong: ['jungle', 'top'], XinZhao: ['jungle'],
    Zac: ['jungle'], Belveth: ['jungle'], Briar: ['jungle'],

    // Mid laners
    Ahri: ['mid'], Akali: ['mid', 'top'], Akshan: ['mid'], Anivia: ['mid'], Annie: ['mid'],
    AurelionSol: ['mid'], Azir: ['mid'], Brand: ['mid', 'support'], Cassiopeia: ['mid'],
    Corki: ['mid', 'adc'], Fizz: ['mid'], Galio: ['mid'], Heimerdinger: ['mid', 'top'],
    Hwei: ['mid'], Kassadin: ['mid'], Katarina: ['mid'], LeBlanc: ['mid'],
    Lissandra: ['mid'], Lux: ['mid', 'support'], Malzahar: ['mid'], Neeko: ['mid', 'support'], Mel: ['mid', 'support'],
    Orianna: ['mid'], Qiyana: ['mid', 'jungle'], Ryze: ['mid'], Swain: ['mid', 'support'],
    Syndra: ['mid'], Talon: ['mid', 'jungle'], TwistedFate: ['mid'], Veigar: ['mid'],
    VelKoz: ['mid', 'support'], Vex: ['mid'], Viktor: ['mid'], Vladimir: ['mid', 'top'],
    Xerath: ['mid', 'support'], Yasuo: ['mid', 'top'], Zed: ['mid', 'jungle'], Ziggs: ['mid', 'adc'],
    Zoe: ['mid'], Naafiri: ['mid', 'jungle'],

    // ADCs
    Aphelios: ['adc'], Ashe: ['adc'], Caitlyn: ['adc'], Draven: ['adc'],
    Ezreal: ['adc'], Jhin: ['adc'], Jinx: ['adc'], Kaisa: ['adc'], Kalista: ['adc'],
    KogMaw: ['adc'], Lucian: ['adc', 'mid'], MissFortune: ['adc'], Nilah: ['adc'],
    Samira: ['adc'], Senna: ['adc', 'support'], Sivir: ['adc'], Smolder: ['adc'],
    Tristana: ['adc', 'mid'], Twitch: ['adc'], Varus: ['adc', 'top'], Vayne: ['adc', 'top'],
    Xayah: ['adc'], Zeri: ['adc'], Yunara: ['adc'],

    // Supports
    Alistar: ['support'], Bard: ['support'], Blitzcrank: ['support'], Braum: ['support'],
    Janna: ['support'], Karma: ['support'], Leona: ['support'], Lulu: ['support'],
    Milio: ['support'], Morgana: ['support'], Nami: ['support'],
    Nautilus: ['support'], Pyke: ['support'], Rakan: ['support'], Rell: ['support'],
    RenataGlasc: ['support'], Sona: ['support'], Seraphine: ['support'], Soraka: ['support'],
    Taric: ['support'], Thresh: ['support'], Yuumi: ['support'],
    Zilean: ['support'], Zyra: ['support']
};
