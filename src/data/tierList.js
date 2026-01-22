/**
 * Champion Tier List & Meta Data
 * Updated meta tier rankings by role
 */

// Current patch tier list (Season 14)
export const tierList = {
    // TOP LANE
    top: {
        S: ['Ambessa', 'Ksante', 'Aurora', 'Yone', 'Gwen', 'Jax', 'Camille', 'Fiora'],
        A: ['Darius', 'Mordekaiser', 'Sett', 'Riven', 'Irelia', 'Renekton', 'Aatrox', 'Gragas', 'Rumble', 'Volibear'],
        B: ['Garen', 'Malphite', 'Ornn', 'Sion', 'Cho\'Gath', 'Nasus', 'Yorick', 'Illaoi', 'Urgot', 'Trundle'],
        C: ['Teemo', 'Kennen', 'Jayce', 'Gangplank', 'Vladimir', 'Kayle', 'Quinn', 'Vayne', 'Akali'],
        D: ['Singed', 'Dr. Mundo', 'Tahm Kench', 'Poppy', 'Shen', 'Maokai']
    },

    // JUNGLE
    jungle: {
        S: ['Viego', 'Lee Sin', 'Elise', 'Nidalee', 'Rek\'Sai', 'Kha\'Zix', 'Graves', 'Kindred'],
        A: ['Vi', 'Jarvan IV', 'Xin Zhao', 'Hecarim', 'Sejuani', 'Skarner', 'Nocturne', 'Shyvana', 'Diana', 'Evelynn'],
        B: ['Warwick', 'Amumu', 'Rammus', 'Zac', 'Nunu & Willump', 'Volibear', 'Udyr', 'Trundle', 'Olaf', 'Wukong'],
        C: ['Master Yi', 'Kayn', 'Shaco', 'Rengar', 'Fiddlesticks', 'Ekko', 'Taliyah', 'Karthus', 'Ivern'],
        D: ['Poppy', 'Maokai', 'Nautilus', 'Morgana', 'Brand']
    },

    // MID LANE
    mid: {
        S: ['Aurora', 'Syndra', 'Ahri', 'Orianna', 'Hwei', 'Azir', 'Yone', 'Akali', 'LeBlanc'],
        A: ['Zed', 'Talon', 'Katarina', 'Fizz', 'Viktor', 'Cassiopeia', 'Anivia', 'Xerath', 'Lux', 'Vex'],
        B: ['Twisted Fate', 'Ryze', 'Galio', 'Malzahar', 'Annie', 'Veigar', 'Brand', 'Ziggs', 'Lissandra', 'Neeko'],
        C: ['Zoe', 'Vel\'Koz', 'Taliyah', 'Aurelion Sol', 'Corki', 'Tristana', 'Lucian', 'Yasuo'],
        D: ['Qiyana', 'Jayce', 'Gangplank', 'Rumble', 'Heimerdinger']
    },

    // ADC / BOT LANE
    adc: {
        S: ['Jinx', 'Kai\'Sa', 'Jhin', 'Caitlyn', 'Ashe', 'Miss Fortune', 'Xayah', 'Aphelios'],
        A: ['Vayne', 'Ezreal', 'Lucian', 'Tristana', 'Draven', 'Samira', 'Twitch', 'Kog\'Maw', 'Varus'],
        B: ['Sivir', 'Zeri', 'Nilah', 'Kalista', 'Senna', 'Seraphine', 'Ziggs', 'Smolder'],
        C: ['Corki', 'Akshan'],
        D: []
    },

    // SUPPORT
    support: {
        S: ['Nautilus', 'Thresh', 'Leona', 'Blitzcrank', 'Rakan', 'Rell', 'Alistar', 'Milio'],
        A: ['Lulu', 'Nami', 'Janna', 'Renata Glasc', 'Karma', 'Yuumi', 'Sona', 'Soraka', 'Morgana'],
        B: ['Pyke', 'Bard', 'Braum', 'Taric', 'Seraphine', 'Senna', 'Zilean', 'Zyra', 'Brand'],
        C: ['Xerath', 'Vel\'Koz', 'Lux', 'Swain', 'Heimerdinger', 'Shaco', 'Tahm Kench'],
        D: ['Ashe', 'Shen', 'Poppy', 'Galio']
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
    Fiora: ['top'], Gangplank: ['top'], Garen: ['top'], Gnar: ['top'], Gwen: ['top'],
    Illaoi: ['top'], Irelia: ['top', 'mid'], Jax: ['top', 'jungle'], Jayce: ['top', 'mid'],
    Kayle: ['top'], Kennen: ['top'], Kled: ['top'], Malphite: ['top', 'support'],
    Mordekaiser: ['top'], Nasus: ['top'], Olaf: ['top', 'jungle'], Ornn: ['top'],
    Pantheon: ['top', 'mid', 'support'], Poppy: ['top', 'jungle'], Quinn: ['top'],
    Renekton: ['top'], Riven: ['top'], Rumble: ['top', 'mid'], Sett: ['top', 'support'],
    Shen: ['top', 'support'], Singed: ['top'], Sion: ['top'], Teemo: ['top'],
    Trundle: ['top', 'jungle'], Tryndamere: ['top'], Urgot: ['top'], Volibear: ['top', 'jungle'],
    Yorick: ['top'], Yone: ['top', 'mid'], DrMundo: ['top', 'jungle'], ChogAth: ['top'],
    TahmKench: ['top', 'support'], KSante: ['top'],

    // Junglers
    Amumu: ['jungle'], Diana: ['jungle', 'mid'], Ekko: ['jungle', 'mid'], Elise: ['jungle'],
    Evelynn: ['jungle'], Fiddlesticks: ['jungle'], Gragas: ['jungle', 'top'],
    Graves: ['jungle'], Hecarim: ['jungle'], Ivern: ['jungle'], JarvanIV: ['jungle'],
    Karthus: ['jungle', 'mid'], Kayn: ['jungle'], Khazix: ['jungle'], Kindred: ['jungle'],
    LeeSin: ['jungle'], Lillia: ['jungle'], MasterYi: ['jungle'], Nidalee: ['jungle'],
    Nocturne: ['jungle'], NunuWillump: ['jungle'], Rammus: ['jungle'], RekSai: ['jungle'],
    Rengar: ['jungle'], Sejuani: ['jungle'], Shaco: ['jungle', 'support'], Shyvana: ['jungle'],
    Skarner: ['jungle'], Taliyah: ['jungle', 'mid'], Udyr: ['jungle'], Vi: ['jungle'],
    Viego: ['jungle'], Warwick: ['jungle'], Wukong: ['jungle', 'top'], XinZhao: ['jungle'],
    Zac: ['jungle'], Belveth: ['jungle'], Briar: ['jungle'],

    // Mid laners
    Ahri: ['mid'], Akali: ['mid', 'top'], Anivia: ['mid'], Annie: ['mid', 'support'],
    AurelionSol: ['mid'], Azir: ['mid'], Brand: ['mid', 'support'], Cassiopeia: ['mid'],
    Corki: ['mid', 'adc'], Fizz: ['mid'], Galio: ['mid', 'support'], Heimerdinger: ['mid', 'top'],
    Hwei: ['mid', 'support'], Kassadin: ['mid'], Katarina: ['mid'], LeBlanc: ['mid'],
    Lissandra: ['mid'], Lux: ['mid', 'support'], Malzahar: ['mid'], Neeko: ['mid'],
    Orianna: ['mid'], Qiyana: ['mid'], Ryze: ['mid'], Swain: ['mid', 'support'],
    Syndra: ['mid'], Talon: ['mid', 'jungle'], TwistedFate: ['mid'], Veigar: ['mid'],
    VelKoz: ['mid', 'support'], Vex: ['mid'], Viktor: ['mid'], Vladimir: ['mid', 'top'],
    Xerath: ['mid', 'support'], Yasuo: ['mid', 'top'], Zed: ['mid'], Ziggs: ['mid', 'adc'],
    Zoe: ['mid'], Naafiri: ['mid', 'jungle'],

    // ADCs
    Aphelios: ['adc'], Ashe: ['adc', 'support'], Caitlyn: ['adc'], Draven: ['adc'],
    Ezreal: ['adc'], Jhin: ['adc'], Jinx: ['adc'], Kaisa: ['adc'], Kalista: ['adc'],
    KogMaw: ['adc'], Lucian: ['adc', 'mid'], MissFortune: ['adc'], Nilah: ['adc'],
    Samira: ['adc'], Senna: ['adc', 'support'], Sivir: ['adc'], Smolder: ['adc'],
    Tristana: ['adc', 'mid'], Twitch: ['adc'], Varus: ['adc'], Vayne: ['adc', 'top'],
    Xayah: ['adc'], Zeri: ['adc'], Akshan: ['mid', 'adc'],

    // Supports
    Alistar: ['support'], Bard: ['support'], Blitzcrank: ['support'], Braum: ['support'],
    Janna: ['support'], Karma: ['support'], Leona: ['support'], Lulu: ['support'],
    Milio: ['support'], Morgana: ['support', 'jungle'], Nami: ['support'],
    Nautilus: ['support'], Pyke: ['support'], Rakan: ['support'], Rell: ['support'],
    RenataGlasc: ['support'], Seraphine: ['support', 'adc'], Sona: ['support'],
    Soraka: ['support'], Taric: ['support'], Thresh: ['support'], Yuumi: ['support'],
    Zilean: ['support', 'mid'], Zyra: ['support']
};
