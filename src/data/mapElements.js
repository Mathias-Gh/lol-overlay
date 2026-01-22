/**
 * Map Elements & Objectives Guide
 * Information about Dragons, Baron, Towers, and Jungle Camps
 */

// Dragon Types and their buffs
export const dragons = {
    infernal: {
        name: 'Dragon Infernal',
        icon: '🔥',
        color: '#e74c3c',
        buff: '+4% AD et AP',
        soulBuff: 'Explosion infernale: Les dégâts infligent occasionnellement des brûlures aux ennemis proches',
        spawnTime: '5:00',
        respawn: '5:00',
        tips: [
            'Priorité haute en early game pour les compos burst',
            'Synergise avec les champions à forte AP/AD',
            'Contestez si votre équipe a un avantage de combats'
        ]
    },
    mountain: {
        name: 'Dragon Montagne',
        icon: '⛰️',
        color: '#8b4513',
        buff: '+6% Armure et Résistance Magique',
        soulBuff: 'Bouclier de montagne: Après être hors combat, gagnez un bouclier',
        spawnTime: '5:00',
        respawn: '5:00',
        tips: [
            'Excellent pour les compos tanks',
            'Augmente la durabilité en teamfight',
            'Le soul est très fort pour les late game'
        ]
    },
    ocean: {
        name: 'Dragon Océan',
        icon: '🌊',
        color: '#3498db',
        buff: '+2.5% HP manquants régénérés toutes les 5s',
        soulBuff: 'Drain océanique: Les dégâts infligés restaurent des HP',
        spawnTime: '5:00',
        respawn: '5:00',
        tips: [
            'Très fort pour le sustain en lane',
            'Favorise les trades prolongés',
            'Soul permet de rester sur la carte plus longtemps'
        ]
    },
    cloud: {
        name: 'Dragon Nuage',
        icon: '💨',
        color: '#95a5a6',
        buff: '+3.5% Vitesse de déplacement hors combat',
        soulBuff: 'Vitesse nuageuse: Réduit le cooldown de l\'ultime',
        spawnTime: '5:00',
        respawn: '5:00',
        tips: [
            'Utile pour la rotation sur la carte',
            'Soul très fort pour les champions dépendants de leur ulti',
            'Moins prioritaire en early game'
        ]
    },
    hextech: {
        name: 'Dragon Hextech',
        icon: '⚡',
        color: '#00cec9',
        buff: '+5% Vitesse d\'attaque et +5 Haste',
        soulBuff: 'Charge hextech: Les autos chargent une chaîne d\'éclair',
        spawnTime: '5:00',
        respawn: '5:00',
        tips: [
            'Excellent pour les ADC et bruisers',
            'La chaîne d\'éclair peut toucher plusieurs cibles',
            'Bon pour les compos auto-attaqueurs'
        ]
    },
    chemtech: {
        name: 'Dragon Chemtech',
        icon: '☠️',
        color: '#6c5ce7',
        buff: '+5% Dégâts additionnels quand en dessous de 50% HP',
        soulBuff: 'Boost chemtech: Résurrection temporaire lors de la mort',
        spawnTime: '5:00',
        respawn: '5:00',
        tips: [
            'Soul permet un second souffle en teamfight',
            'Synergise avec les champions de dive',
            'Fort pour les assassins'
        ]
    },
    elder: {
        name: 'Dragon Ancien',
        icon: '🐉',
        color: '#9b59b6',
        buff: 'Brûlure + Exécution à 20% HP',
        soulBuff: null,
        spawnTime: 'Après 4 dragons (35:00+)',
        respawn: '6:00',
        tips: [
            'PRIORITÉ ABSOLUE - Game changing',
            'L\'exécution ignore les shields',
            'Ne fight jamais sans si l\'ennemi l\'a'
        ]
    }
};

// Baron Nashor
export const baron = {
    name: 'Baron Nashor',
    icon: '👁️',
    color: '#9b59b6',
    spawnTime: '20:00',
    respawn: '6:00',
    hp: '12,000 (+180/min)',
    buff: {
        name: 'Main de Baron',
        duration: '3:00',
        effects: [
            'Recall accéléré (4s → 1s)',
            'Bonus AD/AP (12-48)',
            'Empowerment des minions proches',
            'Minions mêlée: +50% dégâts, +75% résistances',
            'Minions distance: Portée augmentée, tirs plus rapides',
            'Canons: Dégâts doublés aux tours'
        ]
    },
    tips: [
        'Utilisez pour push les lanes, pas pour combattre',
        'Le buff minions est plus fort que le buff personnel',
        'Contestez si 2+ ennemis sont morts',
        'Warding du pit crucial avant 20:00',
        'Baron peut être volé - gardez vos smites/CC'
    ]
};

// Jungle Camps
export const jungleCamps = {
    gromp: {
        name: 'Gromp',
        icon: '🐸',
        gold: 80,
        xp: 200,
        respawn: '2:15',
        tips: 'Poison DOT sur les autos. Mieux en premier pour les tanks.'
    },
    wolves: {
        name: 'Loups',
        icon: '🐺',
        gold: 95,
        xp: 170,
        respawn: '2:15',
        tips: 'Camp facile. Tuez le grand loup en premier.'
    },
    raptors: {
        name: 'Raptors',
        icon: '🐔',
        gold: 85,
        xp: 160,
        respawn: '2:15',
        tips: 'Beaucoup de petits = bon pour AoE. Dangereux sans AoE.'
    },
    krugs: {
        name: 'Krugs',
        icon: '🪨',
        gold: 125,
        xp: 230,
        respawn: '2:15',
        tips: 'Plus de gold/XP mais prend du temps. Bon pour clear complet.'
    },
    blue: {
        name: 'Sentinelle Bleue',
        icon: '💎',
        gold: 90,
        xp: 200,
        respawn: '5:00',
        buff: '+10 Haste, regen mana',
        tips: 'Donnez au mid laner après le premier. Dure 2 minutes.'
    },
    red: {
        name: 'Brute Rouge',
        icon: '🔴',
        gold: 90,
        xp: 200,
        respawn: '5:00',
        buff: 'Auto-attaques brûlent et ralentissent',
        tips: 'Donnez à l\'ADC en late game. Essentiel pour les ganks early.'
    },
    riftHerald: {
        name: 'Héraut de la Faille',
        icon: '👁️‍🗨️',
        gold: 100,
        xp: 200,
        spawnTime: '8:00',
        despawnTime: '19:45',
        respawn: 'Une fois (max 2 spawns)',
        tips: 'Utilisez pour détruire les tours. L\'œil derrière prend des dégâts bonus.'
    }
};

// Towers
export const towers = {
    outer: {
        name: 'Tour Extérieure',
        tier: 1,
        hp: 5000,
        armor: 40,
        magicResist: 40,
        goldTeam: 550,
        goldLocal: 150,
        platings: {
            count: 5,
            gold: 160,
            bonusResist: '+40 Armor/MR par plaque détruite'
        },
        fallTime: '14:00 (plaques tombent)'
    },
    inner: {
        name: 'Tour Intérieure',
        tier: 2,
        hp: 5000,
        armor: 55,
        magicResist: 55,
        goldTeam: 550,
        goldLocal: 150,
        tips: 'Plus résistante. Protège l\'accès à la base.'
    },
    inhibitor: {
        name: 'Tour d\'Inhibiteur',
        tier: 3,
        hp: 5500,
        armor: 70,
        magicResist: 70,
        goldTeam: 550,
        goldLocal: 150,
        tips: 'Très résistante. Régénère si pas détruite.'
    },
    nexus: {
        name: 'Tour du Nexus',
        tier: 4,
        hp: 5500,
        armor: 70,
        magicResist: 70,
        goldTeam: 50,
        goldLocal: 50,
        tips: 'Deux tours. Ne régénère pas.'
    }
};

// Inhibitors
export const inhibitors = {
    hp: 4000,
    respawnTime: '5:00',
    effect: 'Spawn des super minions dans la lane correspondante',
    superMinionStats: {
        hp: 2000,
        armor: 100,
        magicResist: -30,
        damage: 350
    },
    tips: [
        'Les super minions génèrent une pression constante',
        'Prenez au moins un inhib avant Baron',
        'Inhibs + Baron = push très puissant'
    ]
};
