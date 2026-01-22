/**
 * Wave Management Guide
 * Complete guide for laning phase wave control
 */

// Minion stats and values
export const minionStats = {
    melee: {
        name: 'Minion Mêlée',
        icon: '⚔️',
        hp: 480,
        hpGrowth: '+21/wave',
        damage: 12,
        gold: 21,
        goldGrowth: '+0.125/min',
        xp: 60
    },
    caster: {
        name: 'Minion Distance',
        icon: '🏹',
        hp: 320,
        hpGrowth: '+14/wave',
        damage: 23,
        gold: 14,
        goldGrowth: '+0.125/min',
        xp: 30
    },
    cannon: {
        name: 'Minion Canon',
        icon: '💣',
        hp: 900,
        hpGrowth: '+27/wave',
        damage: 42,
        gold: 60,
        goldGrowth: '+0.35/min',
        xp: 93,
        spawnPattern: 'Toutes les 3 vagues (puis 2 vagues après 25:00)'
    },
    super: {
        name: 'Super Minion',
        icon: '👹',
        hp: 2000,
        damage: 350,
        gold: 60,
        xp: 93,
        notes: 'Spawn quand l\'inhibiteur ennemi est détruit'
    }
};

// Wave timing
export const waveTiming = {
    firstWave: '1:05',
    waveInterval: '30 secondes',
    cannonWaves: [
        { waves: '1-20', pattern: 'Toutes les 3 vagues (3, 6, 9...)' },
        { waves: '20+', pattern: 'Toutes les 2 vagues' }
    ],
    midLaneArrival: '~1:38',
    siegeMinion: '25:00 (spawns plus fréquents)'
};

// Wave states
export const waveStates = {
    frozen: {
        name: 'Freeze (Gel)',
        icon: '❄️',
        description: 'Maintenir la vague proche de votre tour sans qu\'elle ne touche la tour',
        howTo: [
            'Laissez 3-4 minions casters ennemis en plus',
            'Last hit uniquement, pas de dégâts inutiles',
            'Tank les minions à la limite de l\'aggro tour',
            'Maintenez un avantage de minions ennemi constant'
        ],
        when: [
            'Vous êtes en avance et voulez deny CS/XP',
            'Votre jungler veut gank',
            'L\'ennemi est agressif et vous voulez le punir',
            'Vous voulez créer un écart de niveau'
        ],
        counters: [
            'Crash une grosse vague dans votre tour',
            'Roam pour créer de la pression ailleurs',
            'Demander l\'aide du jungler pour break le freeze'
        ]
    },
    slowPush: {
        name: 'Slow Push',
        icon: '🐌',
        description: 'Construire une vague massive qui push lentement',
        howTo: [
            'Tuez seulement les minions casters ennemis',
            'Laissez vos minions accumuler un avantage',
            'Après 2-3 vagues, vous aurez une énorme vague',
            'Accompagnez la vague jusqu\'à la tour ennemie'
        ],
        when: [
            'Vous préparez un dive',
            'Vous voulez créer un timer (dragon/baron)',
            'Avant de back pour deny des CS à l\'ennemi',
            'Pour accumuler une vague de siège'
        ],
        tips: [
            'Plus tôt vous commencez, plus grosse sera la vague',
            'Coordonnez avec votre jungler pour dive',
            '3 vagues = ~18 minions (parfait pour dive)'
        ]
    },
    fastPush: {
        name: 'Fast Push (Hard Push)',
        icon: '⚡',
        description: 'Clear la vague le plus rapidement possible',
        howTo: [
            'Utilisez toutes vos compétences AoE',
            'Attaquez les minions casters en priorité',
            'Poussez la vague sous la tour ennemie',
            'Ensuite back ou roam'
        ],
        when: [
            'Après un kill, pour reset la lane',
            'Quand l\'ennemi n\'est pas en lane',
            'Pour avoir le tempo et roam',
            'Pour créer de la pression avant un objectif'
        ],
        tips: [
            'Évitez si vous n\'avez pas de vision',
            'Prenez en compte les cooldowns ennemis',
            'Ne poussez pas sans plan de suite'
        ]
    },
    bounceBack: {
        name: 'Bounce Back',
        icon: '↩️',
        description: 'La vague pousse vers vous après avoir crash sous tour',
        howTo: [
            'Crash une vague complète sous tour ennemie',
            'Laissez l\'ennemi last hit sous tour',
            'La nouvelle vague ennemie arrivera plus vite',
            'La vague reviendra naturellement vers vous'
        ],
        when: [
            'Après un crash réussi',
            'Vous voulez setup un freeze',
            'Avant de back avec un bon timing',
            'Pour préparer un gank de votre jungler'
        ],
        tips: [
            'Calculez le temps de back + marche',
            'Si bien fait, vous ne perdez aucun CS',
            'Fonctionne mieux avec des vagues cannons'
        ]
    }
};

// Wave management tips by situation
export const waveManagementTips = {
    earlyGame: [
        'Level 1: Push pour level 2 first (7 minions = level 2)',
        'Si en retard, laissez push vers vous pour jouer safe',
        'Gérez la vague AVANT que le jungler arrive',
        'Les 3 premières vagues sont cruciales pour le lead de lane'
    ],
    midGame: [
        'Catch les side waves avant les objectifs',
        'Ne laissez jamais une vague crash dans votre tour sans raison',
        'Setup des slow pushes dans les lanes opposées aux objectifs',
        'Le wave management crée des opportunités'
    ],
    sidewave: [
        'Les vagues de side lane valent plus que grouper sans objectif',
        'Calculez toujours le temps de catch + rejoindre',
        'Splitter = attirer l\'attention ennemie = espace pour votre équipe',
        'Utilisez Teleport pour join après avoir push'
    ],
    underTower: [
        'Tour fait ~45% des HP d\'un caster',
        'Melee: 2 tirs tour + 1 auto',
        'Caster: 2 autos + 1 tir tour + 1 auto (ou préparez avec une ability)',
        'Canon: Plusieurs tirs, dernière frappe seulement'
    ]
};

// XP and Gold formulas
export const xpGoldFormulas = {
    xpRange: 1600, // Range pour partager XP
    xpSharing: [
        { players: 1, share: '100%' },
        { players: 2, share: '62% chacun (124% total)' },
        { players: 3, share: '49% chacun (147% total)' },
        { players: 4, share: '40% chacun (160% total)' },
        { players: 5, share: '35% chacun (175% total)' }
    ],
    levelXPRequired: [
        { level: 2, xp: 280, totalFromStart: 280 },
        { level: 3, xp: 380, totalFromStart: 660 },
        { level: 4, xp: 480, totalFromStart: 1140 },
        { level: 5, xp: 580, totalFromStart: 1720 },
        { level: 6, xp: 680, totalFromStart: 2400 },
        { level: 7, xp: 780, totalFromStart: 3180 },
        { level: 8, xp: 880, totalFromStart: 4060 },
        { level: 9, xp: 980, totalFromStart: 5040 }
    ],
    waveGold: {
        regular: 'Melee×3 (63g) + Caster×3 (42g) = 105g',
        cannon: 'Regular + Canon (60g) = 165g',
        perMinute: 'Environ 330-400g en CS parfait'
    }
};
