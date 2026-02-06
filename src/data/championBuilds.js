/**
 * Season 2026 Champion Builds - Patch 16.2
 * Auto-generated builds for ALL 160+ champions based on their roles
 */

// =================== ROLE-BASED BUILD TEMPLATES ===================

const buildTemplates = {
  // ADC / Marksman builds
  Marksman: {
    runes: {
      primary: { tree: 'Precision', keystone: 'Lethal Tempo', runes: ['Presence of Mind', 'Legend: Alacrity', 'Cut Down'] },
      secondary: { tree: 'Domination', runes: ['Taste of Blood', 'Treasure Hunter'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    summonerSpells: ['Flash', 'Heal'],
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q pour le damage principal' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3006],
      core: { items: [3031, 3094, 3036], names: ['Infinity Edge', 'RFC', 'LDR'], order: 'IE → Zeal item → LDR' },
      situational: {
        vsHeal: { items: [3033], when: 'Contre heal/lifesteal' },
        vsTanks: { items: [3036], when: 'Équipe tanky' },
        lifesteal: { items: [3072], when: 'Besoin de sustain' }
      },
      fullBuild: { standard: [3006, 3031, 3094, 3036, 3072, 3085], names: ['Berserker', 'IE', 'RFC', 'LDR', 'BT', "Runaan's"] }
    },
    combos: ['Kite avec A-move', 'Orb-walking entre les autos', 'Utilisez les spells entre les autos'],
    playstyle: 'ADC / Hypercarry'
  },

  // Mage builds
  Mage: {
    runes: {
      primary: { tree: 'Domination', keystone: 'Electrocute', runes: ['Taste of Blood', 'Eyeball Collection', 'Ultimate Hunter'] },
      secondary: { tree: 'Sorcery', runes: ['Manaflow Band', 'Transcendence'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    summonerSpells: ['Flash', 'Ignite'],
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q pour poke et waveclear' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      boots: [3020],
      core: { items: [2503, 4645, 3089], names: ['Blackfire Torch', 'Shadowflame', 'Rabadon'], order: "Torch → Shadowflame → Rabadon" },
      situational: {
        vsBurst: { items: [3157], when: 'Contre burst mages' },
        vsDive: { items: [3157], when: 'Contre assassins/divers' },
        vsHeal: { items: [3165], when: 'Contre healing' }
      },
      fullBuild: { standard: [3020, 2503, 4645, 3089, 3135, 3157], names: ['Sorc', 'Blackfire Torch', 'Shadowflame', 'Rabadon', 'Void Staff', "Zhonya's"] }
    },
    combos: ['Poke avec Q en lane', 'Full combo quand CC hit', 'Zhonya après engage'],
    playstyle: 'Burst Mage'
  },

  // Assassin builds  
  Assassin: {
    runes: {
      primary: { tree: 'Domination', keystone: 'Electrocute', runes: ['Sudden Impact', 'Eyeball Collection', 'Ultimate Hunter'] },
      secondary: { tree: 'Precision', runes: ['Presence of Mind', 'Legend: Tenacity'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    summonerSpells: ['Flash', 'Ignite'],
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q pour burst damage' },
    itemBuilds: {
      starter: { items: [1036, 2003, 2003], names: ['Long Sword', '2x Potion'] },
      boots: [3158],
      core: { items: [6698, 6701, 6630], names: ['Profane Hydra', 'Opportunity', 'Eclipse'], order: 'Profane → Opportunity → Eclipse' },
      situational: {
        vsShields: { items: [6695], when: 'Contre shields (Lulu, Shieldbow)' },
        survie: { items: [3814], when: 'Besoin de spell shield' }
      },
      fullBuild: { standard: [3158, 6698, 6701, 6630, 3814, 3026], names: ['CDR Boots', 'Profane Hydra', 'Opportunity', 'Eclipse', 'Edge of Night', 'GA'] }
    },
    combos: ['Gap close → Burst → Exit', 'Wait for key abilities before engage', 'Target squishies first'],
    playstyle: 'AD Assassin'
  },

  // Fighter / Bruiser builds
  Fighter: {
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Triumph', 'Legend: Tenacity', 'Last Stand'] },
      secondary: { tree: 'Resolve', runes: ['Bone Plating', 'Overgrowth'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    summonerSpells: ['Flash', 'Teleport'],
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q pour les trades' },
    itemBuilds: {
      starter: { items: [1054, 2003], names: ["Doran's Shield", 'Potion'] },
      boots: [3047],
      core: { items: [3078, 3053, 6333], names: ['Trinity Force', "Sterak's Gage", "Death's Dance"], order: 'Sheen → Trinity → Sterak' },
      situational: {
        vsAP: { items: [3156], when: 'Contre AP burst' },
        vsAD: { items: [3742], when: 'Contre AD threats' },
        split: { items: [3181], when: 'Splitpush focus' },
        s16tanky: { items: [2501], when: 'Extra health → AD conversion (Bloodmail)' }
      },
      fullBuild: { standard: [3047, 3078, 3053, 6333, 3156, 3742], names: ['Plated', 'Trinity', 'Sterak', 'DD', 'Maw', "Dead Man's"] }
    },
    combos: ['Short trade → disengage', 'All-in quand abilities up', 'Weave autos between spells'],
    playstyle: 'Bruiser / Fighter'
  },

  // Tank builds
  Tank: {
    runes: {
      primary: { tree: 'Resolve', keystone: 'Grasp of the Undying', runes: ['Shield Bash', 'Conditioning', 'Overgrowth'] },
      secondary: { tree: 'Precision', runes: ['Triumph', 'Legend: Tenacity'] },
      shards: ['Health', 'Armor', 'Health']
    },
    summonerSpells: ['Flash', 'Teleport'],
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q pour engage/CC' },
    itemBuilds: {
      starter: { items: [1054, 2003], names: ["Doran's Shield", 'Potion'] },
      boots: [3047],
      core: { items: [3068, 3075, 3065], names: ['Sunfire Aegis', 'Thornmail', 'Spirit Visage'], order: 'Bami → Sunfire → situational' },
      situational: {
        vsAD: { items: [3143], when: 'Contre crit ADC' },
        vsAP: { items: [4401], when: 'Contre AP heavy' },
        teamfight: { items: [3083], when: 'Long fights' }
      },
      fullBuild: { standard: [3047, 3025, 3075, 3065, 3143, 3083], names: ['Plated', 'Iceborn', 'Thornmail', 'Spirit', 'Randuin', 'Warmog'] }
    },
    combos: ['Engage avec CC', 'Peel pour les carries', 'Absorb damage en frontline'],
    playstyle: 'Tank / Frontline'
  },

  // Support Tank builds
  SupportTank: {
    runes: {
      primary: { tree: 'Resolve', keystone: 'Aftershock', runes: ['Font of Life', 'Bone Plating', 'Unflinching'] },
      secondary: { tree: 'Inspiration', runes: ['Hextech Flashtraption', 'Cosmic Insight'] },
      shards: ['Health', 'Armor', 'Health']
    },
    summonerSpells: ['Flash', 'Ignite'],
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q pour le CC' },
    itemBuilds: {
      starter: { items: [3867, 2003], names: ['World Atlas', 'Potion'] },
      boots: [3009],
      core: { items: [3869, 3190, 3110], names: ['Solstice Sleigh', 'Locket', 'Frozen Heart'], order: 'Sleigh → Locket' },
      situational: {
        heal: { items: [3107], when: 'Besoin de heal AoE' },
        antiheal: { items: [3075], when: 'Contre healing' }
      },
      fullBuild: { standard: [3009, 3190, 3109, 3050, 3107, 3075], names: ['Swifties', 'Locket', 'Vow', "Zeke's", 'Redemption', 'Thornmail'] }
    },
    combos: ['Engage → CC chain', 'Peel pour ADC', 'Roam mid avec boots'],
    playstyle: 'Engage Support'
  },

  // Enchanter Support builds
  SupportEnchant: {
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Summon Aery', runes: ['Manaflow Band', 'Transcendence', 'Scorch'] },
      secondary: { tree: 'Resolve', runes: ['Bone Plating', 'Revitalize'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    summonerSpells: ['Flash', 'Exhaust'],
    skillOrder: { priority: 'E > W > Q', notes: 'Max shield/heal first' },
    itemBuilds: {
      starter: { items: [3867, 2003], names: ['World Atlas', 'Potion'] },
      boots: [3158],
      core: { items: [3876, 6617, 3107], names: ['Dream Maker', 'Moonstone Renewer', 'Redemption'], order: 'Dream → Moonstone' },
      situational: {
        ap: { items: [6616], when: 'Team AP heavy' },
        antiheal: { items: [3165], when: 'Contre healing' }
      },
      fullBuild: { standard: [3158, 3504, 3107, 3222, 6616, 3016], names: ['CDR Boots', 'Ardent', 'Redemption', "Mikael's", 'Staff', 'Wardstone'] }
    },
    combos: ['Shield/heal avant le burst ennemi', 'Exhaust le carry ennemi', 'Stay behind et peel'],
    playstyle: 'Enchanter Support'
  },

  // Jungle Fighter builds
  JungleFighter: {
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Triumph', 'Legend: Alacrity', 'Coup de Grace'] },
      secondary: { tree: 'Domination', runes: ['Sudden Impact', 'Treasure Hunter'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    summonerSpells: ['Flash', 'Smite'],
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q pour clear + ganks' },
    itemBuilds: {
      starter: { items: [1102, 2003], names: ['Gustwalker Hatchling', 'Potion'] },
      boots: [3006],
      core: { items: [3153, 3078, 6333], names: ['BOTRK', 'Trinity', "Death's Dance"], order: 'BOTRK rush → Trinity' },
      situational: {
        burst: { items: [6692], when: 'Need burst' },
        tanky: { items: [3053], when: 'Need survivability' }
      },
      fullBuild: { standard: [3006, 3153, 3078, 6333, 3053, 3156], names: ['Berserker', 'BOTRK', 'Trinity', 'DD', 'Sterak', 'Maw'] }
    },
    combos: ['Gank avec gap close', 'Secure objectives avec Smite', 'Track enemy jungler'],
    clearPath: 'Red → Krugs → Raptors → Gank ou Blue → Gromp → Wolves → Gank',
    playstyle: 'Jungle Fighter'
  },

  // Jungle Tank builds
  JungleTank: {
    runes: {
      primary: { tree: 'Resolve', keystone: 'Aftershock', runes: ['Font of Life', 'Conditioning', 'Unflinching'] },
      secondary: { tree: 'Precision', runes: ['Triumph', 'Legend: Tenacity'] },
      shards: ['Attack Speed', 'Armor', 'Health']
    },
    summonerSpells: ['Flash', 'Smite'],
    skillOrder: { priority: 'Q > W > E', notes: 'Max CC ability first' },
    itemBuilds: {
      starter: { items: [1103, 2003], names: ['Mosstomper Seedling', 'Potion'] },
      boots: [3047],
      core: { items: [3068, 3075, 3065], names: ['Sunfire Aegis', 'Thornmail', 'Spirit Visage'], order: 'Bami → Sunfire' },
      situational: {
        engage: { items: [3742], when: 'Need engage speed' },
        peel: { items: [3143], when: 'Peel for carries' }
      },
      fullBuild: { standard: [3047, 3025, 3075, 3065, 3742, 3143], names: ['Plated', 'Iceborn', 'Thornmail', 'Spirit', "Dead Man's", 'Randuin'] }
    },
    combos: ['Engage teamfights', 'Peel carries', 'Objective control'],
    clearPath: 'Full clear → Gank ou 3-camp → Gank',
    playstyle: 'Jungle Tank'
  },

  // AP Assassin
  APAssassin: {
    runes: {
      primary: { tree: 'Domination', keystone: 'Electrocute', runes: ['Sudden Impact', 'Eyeball Collection', 'Treasure Hunter'] },
      secondary: { tree: 'Sorcery', runes: ['Absolute Focus', 'Gathering Storm'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    summonerSpells: ['Flash', 'Ignite'],
    skillOrder: { priority: 'Q > E > W', notes: 'Max burst ability first' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      boots: [3020],
      core: { items: [4646, 3100, 3089], names: ['Stormsurge', 'Lich Bane', 'Rabadon'], order: 'Alternator → Stormsurge → Lich' },
      situational: {
        survie: { items: [3157], when: 'Besoin de Zhonya' },
        burst: { items: [4645], when: 'More burst' }
      },
      fullBuild: { standard: [3020, 4646, 3100, 3089, 3157, 3135], names: ['Sorc', 'Stormsurge', 'Lich Bane', 'Rabadon', "Zhonya's", 'Void Staff'] }
    },
    combos: ['In and out trades', 'One-shot combo sur squishies', 'Roam avec MS items'],
    playstyle: 'AP Assassin'
  },

  // Battle Mage (Swain, Ryze, Cassiopeia, Vladimir)
  BattleMage: {
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Presence of Mind', 'Legend: Tenacity', 'Last Stand'] },
      secondary: { tree: 'Resolve', runes: ['Bone Plating', 'Overgrowth'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    summonerSpells: ['Flash', 'Ghost'],
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q pour DPS constant' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      boots: [3020],
      core: { items: [4633, 3116, 3089], names: ['Riftmaker', "Rylai's", 'Rabadon'], order: 'Riftmaker → Rylai' },
      fullBuild: { standard: [3020, 4633, 3116, 3089, 3157, 3065], names: ['Sorc', 'Riftmaker', "Rylai's", 'Rabadon', "Zhonya's", 'Spirit'] }
    },
    combos: ['Sustained DPS in teamfight', 'Kite avec slows', 'Zhonya timing crucial'],
    playstyle: 'Battle Mage'
  },

  // On-Hit ADC (Kog'Maw, Varus, Kalista)
  OnHitADC: {
    runes: {
      primary: { tree: 'Precision', keystone: 'Lethal Tempo', runes: ['Presence of Mind', 'Legend: Alacrity', 'Cut Down'] },
      secondary: { tree: 'Resolve', runes: ['Conditioning', 'Overgrowth'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    summonerSpells: ['Flash', 'Heal'],
    skillOrder: { priority: 'W > Q > E', notes: 'Max W pour on-hit damage' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3006],
      core: { items: [3124, 3153, 3091], names: ["Guinsoo's", 'BOTRK', "Wit's End"], order: "Guinsoo's → BOTRK" },
      fullBuild: { standard: [3006, 3124, 3153, 3091, 3115, 3036], names: ['Berserker', "Guinsoo's", 'BOTRK', "Wit's", "Nashor's", 'LDR'] }
    },
    combos: ['Stack attack speed', 'Kite tanks', 'DPS constant'],
    playstyle: 'On-Hit ADC'
  },

  // Juggernaut (Darius, Garen, Illaoi, Yorick)
  Juggernaut: {
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Triumph', 'Legend: Tenacity', 'Last Stand'] },
      secondary: { tree: 'Resolve', runes: ['Second Wind', 'Unflinching'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    summonerSpells: ['Flash', 'Ghost'],
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q pour damage + sustain' },
    itemBuilds: {
      starter: { items: [1054, 2003], names: ["Doran's Shield", 'Potion'] },
      boots: [3047],
      core: { items: [6631, 3053, 3742], names: ['Stridebreaker', "Sterak's", "Dead Man's"], order: 'Stride → Sterak' },
      fullBuild: { standard: [3047, 6631, 3053, 3742, 4401, 3143], names: ['Plated', 'Stride', 'Sterak', 'Deadmans', 'FoN', 'Randuin'] }
    },
    combos: ['Run them down', 'Ghost + engage', 'Flash + CC'],
    playstyle: 'Juggernaut'
  },

  // Skirmisher (Fiora, Yasuo, Yone, Irelia)
  Skirmisher: {
    runes: {
      primary: { tree: 'Precision', keystone: 'Lethal Tempo', runes: ['Triumph', 'Legend: Alacrity', 'Last Stand'] },
      secondary: { tree: 'Resolve', runes: ['Bone Plating', 'Overgrowth'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    summonerSpells: ['Flash', 'Ignite'],
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q pour mobility + damage' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3006],
      core: { items: [3153, 3031, 6333], names: ['BOTRK', 'IE', "Death's Dance"], order: 'BOTRK → IE' },
      fullBuild: { standard: [3006, 3153, 3031, 6333, 3156, 3046], names: ['Berserker', 'BOTRK', 'IE', 'DD', 'Maw', 'PD'] }
    },
    combos: ['Outplay avec mobility', 'Extended trades', 'Sidestep skillshots'],
    playstyle: 'Skirmisher'
  },

  // Artillery Mage (Xerath, Ziggs, Vel'Koz)
  ArtilleryMage: {
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Arcane Comet', runes: ['Manaflow Band', 'Transcendence', 'Gathering Storm'] },
      secondary: { tree: 'Inspiration', runes: ['Biscuit Delivery', 'Cosmic Insight'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    summonerSpells: ['Flash', 'Barrier'],
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q pour poke range' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      boots: [3020],
      core: { items: [6655, 3089, 3135], names: ["Luden's", 'Rabadon', 'Void Staff'], order: "Luden's → Rabadon" },
      fullBuild: { standard: [3020, 6655, 3089, 3135, 4629, 3157], names: ['Sorc', "Luden's", 'Rabadon', 'Void', 'Horizon', "Zhonya's"] }
    },
    combos: ['Poke from max range', 'Zone control', 'Stay back safe'],
    playstyle: 'Artillery Mage'
  },

  // DoT Mage (Teemo, Malzahar, Brand)
  DotMage: {
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Summon Aery', runes: ['Manaflow Band', 'Transcendence', 'Scorch'] },
      secondary: { tree: 'Domination', runes: ['Cheap Shot', 'Treasure Hunter'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    summonerSpells: ['Flash', 'Ignite'],
    skillOrder: { priority: 'E > Q > W', notes: 'Max DoT ability first' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      boots: [3020],
      core: { items: [3118, 3116, 3165], names: ['Malignance', "Rylai's", 'Morello'], order: 'Malignance → Rylai' },
      fullBuild: { standard: [3020, 3118, 3116, 3165, 3089, 3135], names: ['Sorc', 'Malignance', "Rylai's", 'Morello', 'Rabadon', 'Void'] }
    },
    combos: ['Apply DoTs and kite', 'Spread damage in fights', 'Zone enemies'],
    playstyle: 'DoT Mage'
  }
};

// =================== CHAMPION SPECIFIC OVERRIDES ===================

const championOverrides = {
  // ADCs

  Ezreal: {
    tier: 'A', difficulty: 'Hard', role: 'Marksman',
    runes: {
      primary: { tree: 'Precision', keystone: 'Press the Attack', runes: ['Presence of Mind', 'Legend: Bloodline', 'Cut Down'] },
      secondary: { tree: 'Inspiration', runes: ['Magical Footwear', 'Biscuit Delivery'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Q poke constant. E for safety.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3158],
      core: { items: [3078, 3004, 3161], names: ['Trinity Force', 'Manamune', 'Spear of Shojin'], order: 'Tear → Trinity → Manamune' },
      fullBuild: { standard: [3158, 3078, 3004, 3161, 3036, 6333], names: ['CDR Boots', 'Trinity', 'Muramana', 'Spear of Shojin', 'LDR', "Death's Dance"] }
    },
    combos: ['Q poke constant', 'W → E → Q (burst)', 'R global snipe'],
    counters: { strongAgainst: ['Blitzcrank', 'Ashe', 'Jhin'], weakAgainst: ['Yasuo', 'Samira', 'Vayne'] }
  },
  MissFortune: {
    tier: 'S', difficulty: 'Easy', role: 'Marksman',
    runes: {
      primary: { tree: 'Precision', keystone: 'Press the Attack', runes: ['Presence of Mind', 'Legend: Bloodline', 'Coup de Grace'] },
      secondary: { tree: 'Sorcery', runes: ['Absolute Focus', 'Gathering Storm'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for poke.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3006],
      core: { items: [6676, 3031, 3036], names: ['The Collector', 'Infinity Edge', 'LDR'], order: 'Collector → IE' },
      fullBuild: { standard: [3006, 6676, 3031, 3036, 3072, 3026], names: ['Berserker', 'Collector', 'IE', 'LDR', 'BT', 'GA'] }
    },
    combos: ['Q bounce kill', 'E slow → R', 'R channel'],
    counters: { strongAgainst: ['Immobile ADCs'], weakAgainst: ['Samira', 'Yasuo', 'Divers'] }
  },
  KaiSa: {
    tier: 'S', difficulty: 'Hard', role: 'OnHitADC',
    runes: {
      primary: { tree: 'Precision', keystone: 'Lethal Tempo', runes: ['Presence of Mind', 'Legend: Alacrity', 'Coupe de Grace'] },
      secondary: { tree: 'Inspiration', runes: ['Magical Footwear', 'Biscuit Delivery'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for fast evolution.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3006],
      core: { items: [3087, 3124, 3115], names: ['Statikk Shiv', "Guinsoo's Rageblade", "Nashor's Tooth"], order: 'Statikk → Guinsoo' },
      fullBuild: { standard: [3006, 3087, 3124, 3115, 3089, 3157], names: ['Berserker', 'Statikk', "Guinsoo's", "Nashor's", "Rabadon", "Zhonya's"] }
    },
    combos: ['AA → Q → AA', 'W snipe → R in', 'E reposition/stealth'],
    counters: { strongAgainst: ['Ezreal', 'Jhin', 'Twitch'], weakAgainst: ['Draven', 'Caitlyn', 'Samira'] }
  },
  Vayne: {
    tier: 'A', difficulty: 'Hard', role: 'OnHitADC',
    runes: {
      primary: { tree: 'Precision', keystone: 'Lethal Tempo', runes: ['Triumph', 'Legend: Alacrity', 'Cut Down'] },
      secondary: { tree: 'Resolve', runes: ['Bone Plating', 'Overgrowth'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for mobility or W for tank shred.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3006],
      core: { items: [3153, 3124, 3302], names: ['BOTRK', "Guinsoo's Rageblade", 'Terminus'], order: 'BOTRK → Guinsoo → Terminus' },
      fullBuild: { standard: [3006, 3153, 3124, 3302, 3046, 3026], names: ['Berserker', 'BOTRK', "Guinsoo's", 'Terminus', 'PD', 'GA'] }
    },
    combos: ['Tumble + auto reset', 'E into wall stun', 'R + Q for reposition'],
    counters: { strongAgainst: ['Tanks', 'Bruisers'], weakAgainst: ['Caitlyn', 'Draven', 'Miss Fortune'] }
  },
  Jhin: {
    tier: 'S', difficulty: 'Medium', role: 'Marksman',
    runes: {
      primary: { tree: 'Precision', keystone: 'Fleet Footwork', runes: ['Presence of Mind', 'Legend: Bloodline', 'Coup de Grace'] },
      secondary: { tree: 'Sorcery', runes: ['Celerity', 'Gathering Storm'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for waveclear/dmg.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3009],
      core: { items: [6676, 3031, 3094], names: ['The Collector', 'Infinity Edge', 'Rapid Firecannon'], order: 'Collector → IE' },
      fullBuild: { standard: [3009, 6676, 3031, 3094, 3036, 3026], names: ['Swifties', 'Collector', 'IE', 'RFC', 'LDR', 'GA'] }
    },
    combos: ['4th shot execute', 'W root off ally damage', 'R curtain call engage/finish'],
    counters: { strongAgainst: ['Caitlyn', 'Ashe', 'Xayah'], weakAgainst: ['Tristana', 'Draven', 'Samira'] }
  },
  Ashe: {
    tier: 'S', difficulty: 'Easy', role: 'Marksman',
    runes: {
      primary: { tree: 'Precision', keystone: 'Lethal Tempo', runes: ['Presence of Mind', 'Legend: Alacrity', 'Approach Velocity'] },
      secondary: { tree: 'Inspiration', runes: ['Magical Footwear', 'Approach Velocity'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'W > Q > E', notes: 'Max W for poke/slow.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3006],
      core: { items: [6672, 3078, 3085], names: ['Kraken Slayer', 'Trinity Force', "Runaan's Hurricane"], order: 'Kraken → Trinity' },
      fullBuild: { standard: [3006, 6672, 3078, 3085, 3036, 3026], names: ['Berserker', 'Kraken', 'Trinity', "Runaan's", 'LDR', 'GA'] }
    },
    combos: ['W poke → AA', 'R engage → team follow', 'E vision control'],
    counters: { strongAgainst: ['Jhin', 'Aphelios', 'Twitch'], weakAgainst: ['Samira', 'Yasuo', 'Sivir'] }
  },
  Sivir: {
    tier: 'B', difficulty: 'Easy', role: 'Marksman',
    runes: {
      primary: { tree: 'Precision', keystone: 'Lethal Tempo', runes: ['Presence of Mind', 'Legend: Alacrity', 'Coupe de Grace'] },
      secondary: { tree: 'Inspiration', runes: ['Magical Footwear', 'Biscuit Delivery'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for waveclear.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3006],
      core: { items: [3087, 6675, 3031], names: ['Statikk Shiv', 'Navori Flickerblade', 'Infinity Edge'], order: 'Statikk → Navori' },
      fullBuild: { standard: [3006, 3087, 6675, 3031, 3036, 3026], names: ['Berserker', 'Statikk', 'Navori', 'IE', 'LDR', 'GA'] }
    },
    combos: ['Q poke', 'E spellshield crucial', 'R engage/disengage'],
    counters: { strongAgainst: ['Caitlyn', 'Ashe', 'Jhin'], weakAgainst: ['Draven', 'Lucian', 'Kalista'] }
  },
  Tristana: {
    tier: 'A', difficulty: 'Medium', role: 'Marksman',
    runes: {
      primary: { tree: 'Precision', keystone: 'Press the Attack', runes: ['Triumph', 'Legend: Alacrity', 'Coupe de Grace'] },
      secondary: { tree: 'Domination', runes: ['Sudden Impact', 'Treasure Hunter'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'E > Q > W', notes: 'Max E for burst' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3006],
      core: { items: [6672, 6675, 3031], names: ['Kraken Slayer', 'Navori Flickerblade', 'Infinity Edge'], order: 'Kraken → Navori' },
      fullBuild: { standard: [3006, 6672, 6675, 3031, 3036, 3026], names: ['Berserker', 'Kraken', 'Navori', 'IE', 'LDR', 'GA'] }
    },
    combos: ['E → AA × 4 → Q', 'W in → E → burst → W reset', 'R peel/execute'],
    counters: { strongAgainst: ['Jhin', 'Ashe', 'Varus'], weakAgainst: ['Draven', 'Samira', 'Kalista'] }
  },
  Xayah: {
    tier: 'A', difficulty: 'Medium', role: 'Marksman',
    runes: {
      primary: { tree: 'Precision', keystone: 'Lethal Tempo', runes: ['Presence of Mind', 'Legend: Alacrity', 'Coupe de Grace'] },
      secondary: { tree: 'Inspiration', runes: ['Magical Footwear', 'Biscuit Delivery'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'E > Q > W', notes: 'Max E for root/dmg.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3006],
      core: { items: [3031, 6675, 3036], names: ['Infinity Edge', 'Navori Flickerblade', 'LDR'], order: 'IE → Navori' },
      fullBuild: { standard: [3006, 3031, 6675, 3036, 3046, 3026], names: ['Berserker', 'IE', 'Navori', 'LDR', 'PD', 'GA'] }
    },
    combos: ['Q → AA → E root', 'R immunity → E root', 'Feather management'],
    counters: { strongAgainst: ['Vayne', 'Lucian', 'Samira'], weakAgainst: ['Caitlyn', 'Draven', 'Jhin'] }
  },
  Draven: {
    tier: 'S', difficulty: 'Very Hard', role: 'Marksman',
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Triumph', 'Legend: Bloodline', 'Last Stand'] },
      secondary: { tree: 'Domination', runes: ['Taste of Blood', 'Treasure Hunter'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for axe damage.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3006],
      core: { items: [3072, 3031, 6676], names: ['Bloodthirster', 'Infinity Edge', 'The Collector'], order: 'BT → IE → Collector' },
      fullBuild: { standard: [3006, 3072, 3031, 6676, 3036, 3026], names: ['Berserker', 'BT', 'IE', 'Collector', 'LDR', 'GA'] }
    },
    combos: ['Axe catching → AA', 'W reset on catch', 'R snipe → Cash in stacks'],
    counters: { strongAgainst: ['Jinx', 'Tristana', 'Ashe'], weakAgainst: ['Samira', 'Nilah', 'Vayne'] }
  },
  Lucian: {
    tier: 'A', difficulty: 'Medium', role: 'Marksman',
    runes: {
      primary: { tree: 'Precision', keystone: 'Press the Attack', runes: ['Presence of Mind', 'Legend: Alacrity', 'Coupe de Grace'] },
      secondary: { tree: 'Inspiration', runes: ['Magical Footwear', 'Biscuit Delivery'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for burst damage.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3006],
      core: { items: [6676, 6675, 3031], names: ['The Collector', 'Navori Flickerblade', 'Infinity Edge'], order: 'Collector → Navori' },
      fullBuild: { standard: [3006, 6676, 6675, 3031, 3036, 3026], names: ['Berserker', 'Collector', 'Navori', 'IE', 'LDR', 'GA'] }
    },
    combos: ['AA → Ability → AA (passive)', 'E → AA → Q → AA → W → AA', 'R kiting'],
    counters: { strongAgainst: ['Ezreal', 'Ashe', 'Varus'], weakAgainst: ['Draven', 'Samira', 'Vayne'] }
  },
  Samira: {
    tier: 'S', difficulty: 'Hard', role: 'Marksman',
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Triumph', 'Legend: Bloodline', 'Last Stand'] },
      secondary: { tree: 'Domination', runes: ['Taste of Blood', 'Treasure Hunter'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3047],
      core: { items: [6676, 3031, 3036], names: ['The Collector', 'Infinity Edge', 'LDR'], order: 'Collector → IE' },
      fullBuild: { standard: [3047, 6676, 3031, 3036, 3072, 3026], names: ['Plated', 'Collector', 'IE', 'LDR', 'BT', 'GA'] }
    },
    combos: ['Build Style → R (S rank)', 'W wind wall', 'E dash through minions'],
    counters: { strongAgainst: ['Jinx', 'Jhin', 'Ashe'], weakAgainst: ['Caitlyn', 'Xayah', 'Tristana'] }
  },
  Aphelios: {
    tier: 'A', difficulty: 'Very Hard', role: 'Marksman',
    runes: {
      primary: { tree: 'Precision', keystone: 'Fleet Footwork', runes: ['Presence of Mind', 'Legend: Bloodline', 'Coupe de Grace'] },
      secondary: { tree: 'Sorcery', runes: ['Absolute Focus', 'Gathering Storm'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q. Points: AD > AS > Lethality' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3006],
      core: { items: [3031, 6676, 3036], names: ['Infinity Edge', 'The Collector', 'LDR'], order: 'Collector → IE' },
      fullBuild: { standard: [3006, 3031, 6676, 3036, 3072, 3026], names: ['Berserker', 'IE', 'Collector', 'LDR', 'BT', 'GA'] }
    },
    combos: ['Weapon cycle management', 'Infernum R teamfight', 'Gravitum root + Crescendum'],
    counters: { strongAgainst: ['Ezreal', 'Sivir', 'Varus'], weakAgainst: ['Draven', 'Samira', 'Lucian'] }
  },
  KogMaw: {
    tier: 'B', difficulty: 'Hard', role: 'OnHitADC',
    runes: {
      primary: { tree: 'Precision', keystone: 'Lethal Tempo', runes: ['Triumph', 'Legend: Alacrity', 'Coupe de Grace'] },
      secondary: { tree: 'Inspiration', runes: ['Magical Footwear', 'Biscuit Delivery'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'W > Q > E', notes: 'Max W for range/dmg' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3006],
      core: { items: [3124, 6672, 3302], names: ["Guinsoo's Rageblade", 'Kraken Slayer', 'Terminus'], order: 'Guinsoo → Kraken' },
      fullBuild: { standard: [3006, 3124, 6672, 3302, 3085, 3026], names: ['Berserker', "Guinsoo's", 'Kraken', 'Terminus', "Runaan's", 'GA'] }
    },
    combos: ['W active → kite', 'R artillery poke', 'E slow + Q shred'],
    counters: { strongAgainst: ['Tanks', 'Short range ADCs'], weakAgainst: ['Assassins', 'Draven', 'Lucian'] }
  },
  Twitch: {
    tier: 'A', difficulty: 'Hard', role: 'OnHitADC',
    runes: {
      primary: { tree: 'Precision', keystone: 'Press the Attack', runes: ['Presence of Mind', 'Legend: Alacrity', 'Coupe de Grace'] },
      secondary: { tree: 'Inspiration', runes: ['Magical Footwear', 'Biscuit Delivery'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'E > Q > W', notes: 'Max E for execute' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3006],
      core: { items: [3031, 3085, 3036], names: ['Infinity Edge', "Runaan's Hurricane", 'LDR'], order: 'IE → Runaan → LDR' },
      fullBuild: { standard: [3006, 3031, 3085, 3036, 3072, 3026], names: ['Berserker', 'IE', 'Runaan', 'LDR', 'BT', 'GA'] }
    },
    combos: ['Q stealth → R spray', 'E execute', 'W slow zone'],
    counters: { strongAgainst: ['Ezreal', 'Jhin', 'Ashe'], weakAgainst: ['Caitlyn', 'Draven', 'Lucian'] }
  },
  Varus: {
    tier: 'S', difficulty: 'Medium', role: 'OnHitADC',
    runes: {
      primary: { tree: 'Precision', keystone: 'Lethal Tempo', runes: ['Presence of Mind', 'Legend: Alacrity', 'Coupe de Grace'] },
      secondary: { tree: 'Inspiration', runes: ['Magical Footwear', 'Biscuit Delivery'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for poke or W for on-hit.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3006],
      core: { items: [3124, 6672, 3302], names: ["Guinsoo's Rageblade", 'Kraken Slayer', 'Terminus'], order: 'Guinsoo → Kraken' },
      fullBuild: { standard: [3006, 3124, 6672, 3302, 3153, 3026], names: ['Berserker', "Guinsoo's", 'Kraken', 'Terminus', 'BOTRK', 'GA'] }
    },
    combos: ['Q poke charge', 'R engage → team follow', 'W blight stacks'],
    counters: { strongAgainst: ['Ezreal', 'Jhin', 'Aphelios'], weakAgainst: ['Samira', 'Draven', 'Lucian'] }
  },
  Kalista: {
    tier: 'A', difficulty: 'Very Hard', role: 'OnHitADC',
    runes: {
      primary: { tree: 'Precision', keystone: 'Lethal Tempo', runes: ['Triumph', 'Legend: Alacrity', 'Coupe de Grace'] },
      secondary: { tree: 'Domination', runes: ['Sudden Impact', 'Treasure Hunter'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'E > Q > W', notes: 'Max E for Rend damage.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3006],
      core: { items: [3153, 3124, 3302], names: ['BOTRK', "Guinsoo's Rageblade", 'Terminus'], order: 'BOTRK → Guinsoo' },
      fullBuild: { standard: [3006, 3153, 3124, 3302, 3085, 3026], names: ['Berserker', 'BOTRK', "Guinsoo's", 'Terminus', "Runaan's", 'GA'] }
    },
    combos: ['AA → jump → AA (kite)', 'E rend execute', 'R save support'],
    counters: { strongAgainst: ['Jhin', 'Ashe', 'Varus'], weakAgainst: ['Caitlyn', 'Draven', 'Vayne'] }
  },
  Nilah: {
    tier: 'S', difficulty: 'Hard', role: 'Marksman',
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Triumph', 'Legend: Bloodline', 'Last Stand'] },
      secondary: { tree: 'Domination', runes: ['Sudden Impact', 'Treasure Hunter'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for damage/heal.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3006],
      core: { items: [3072, 3031, 6675], names: ['Bloodthirster', 'Infinity Edge', 'Navori Flickerblade'], order: 'BT → IE → Navori' },
      fullBuild: { standard: [3006, 3072, 3031, 6675, 3036, 3026], names: ['Berserker', 'BT', 'IE', 'Navori', 'LDR', 'GA'] }
    },
    combos: ['Q → AA reset', 'W dodge skillshots', 'R pull + crit'],
    counters: { strongAgainst: ['Jinx', 'Ashe', 'Jhin'], weakAgainst: ['Caitlyn', 'Draven', 'Varus'] }
  },
  Zeri: {
    tier: 'B', difficulty: 'Hard', role: 'Marksman',
    runes: {
      primary: { tree: 'Precision', keystone: 'Lethal Tempo', runes: ['Triumph', 'Legend: Alacrity', 'Coupe de Grace'] },
      secondary: { tree: 'Inspiration', runes: ['Magical Footwear', 'Biscuit Delivery'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for damage' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3006],
      core: { items: [3031, 3085, 3036], names: ['Infinity Edge', "Runaan's Hurricane", 'LDR'], order: 'IE → Runaan' },
      fullBuild: { standard: [3006, 3031, 3085, 3036, 6673, 3026], names: ['Berserker', 'IE', 'Runaan', 'LDR', 'Shieldbow', 'GA'] }
    },
    combos: ['Q spam kite', 'E wall dash', 'R overcharge + run down'],
    counters: { strongAgainst: ['Jhin', 'Ashe', 'Aphelios'], weakAgainst: ['Draven', 'Samira', 'Caitlyn'] }
  },
  Smolder: {
    tier: 'B', difficulty: 'Medium', role: 'Marksman',
    runes: {
      primary: { tree: 'Precision', keystone: 'Fleet Footwork', runes: ['Presence of Mind', 'Legend: Haste', 'Cut Down'] },
      secondary: { tree: 'Sorcery', runes: ['Manaflow Band', 'Gathering Storm'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q to stack fast.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3158],
      core: { items: [3508, 3161, 3094], names: ['Essence Reaver', 'Spear of Shojin', 'Rapid Firecannon'], order: 'ER → Shojin → RFC' },
      fullBuild: { standard: [3158, 3508, 3161, 3094, 3031, 3026], names: ['CDR Boots', 'ER', 'Shojin', 'RFC', 'IE', 'GA'] }
    },
    combos: ['Q poke → stack', 'W execute', 'R teamfight burn'],
    counters: { strongAgainst: ['Short trades ADCs'], weakAgainst: ['All-in lanes', 'Draven', 'Lucian'] }
  },
  Ahri: {
    tier: 'S', difficulty: 'Medium', role: 'Mage',
    runes: {
      primary: { tree: 'Domination', keystone: 'Electrocute', runes: ['Taste of Blood', 'Eyeball Collection', 'Ultimate Hunter'] },
      secondary: { tree: 'Sorcery', runes: ['Manaflow Band', 'Transcendence'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Q waveclear + poke. E for picks.' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      boots: [3020],
      core: { items: [2503, 4645, 3089], names: ['Blackfire Torch', 'Shadowflame', "Rabadon's"], order: 'Torch → Shadowflame → Rabadon' },
      fullBuild: { standard: [3020, 2503, 4645, 3089, 3157, 3135], names: ['Sorc Shoes', 'Torch', 'Shadowflame', 'Rabadon', 'Zhonya', 'Void'] }
    },
    combos: [
      'E → Q → W → AA (Standard Burst)',
      'R → E → Q → W (Full Commital Engage)',
      'E → Flash → Q → W (Pickup Surprise)',
      'R → AA → W → AA (Extended Trade)'
    ],
    counters: {
      strongAgainst: ['Twisted Fate', 'Veigar', 'Lux'],
      weakAgainst: ['Syndra', 'Zed', 'Yasuo'],
      tips: {
        'Early Game': 'Utilisez votre Q au maximum de sa portée pour le retour des dégâts bruts.',
        'Assassins': 'Gardez votre E pour interrompre leur dash ou engage.',
        'Roaming': 'Poussez la lane avec Q et utilisez R pour roam efficacement.'
      }
    }
  },
  Syndra: {
    tier: 'S', difficulty: 'Hard', role: 'Mage',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'First Strike', runes: ['Magical Footwear', 'Triple Tonic', 'Cosmic Insight'] },
      secondary: { tree: 'Precision', runes: ['Presence of Mind', 'Coupe de Grace'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for lane dominance. E second.' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      boots: [3020],
      core: { items: [6655, 4645, 3089], names: ["Luden's Companion", 'Shadowflame', "Rabadon's"], order: "Luden's → Shadowflame" },
      fullBuild: { standard: [3020, 6655, 4645, 3089, 3137, 3157], names: ['Sorc', "Luden's", 'Shadowflame', 'Rabadon', 'Cryptbloom', "Zhonya's"] }
    },
    combos: [
      'Q → E (Quick Stun)',
      'W → E → Q → R (Distance Snipe)',
      'Q → Q → W → E → Q → R (Max Damage)',
      'E → Q (Instant Stun Pattern)'
    ],
    counters: {
      strongAgainst: ['Ahri', 'LeBlanc', 'Syndra'],
      weakAgainst: ['Fizz', 'Zed', 'Kassadin'],
      tips: {
        'Spheres': 'Gardez toujours un œil sur le nombre d\'orbes actives pour maximiser votre R.',
        'Scatter': 'Votre E peut disperser plusieurs orbes pour un contrôle de zone massif.',
        'W Grab': 'Utiliser le Z pour porter les orbes et réinitialiser leur durée.'
      }
    }
  },
  Sylas: {
    tier: 'S', difficulty: 'Hard', role: 'APAssassin',
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Presence of Mind', 'Legend: Tenacity', 'Last Stand'] },
      secondary: { tree: 'Inspiration', runes: ['Magical Footwear', 'Cosmic Insight'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'W > E > Q', notes: 'Max W for sustain and trades.' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      boots: [3020],
      core: { items: [3100, 4645, 3157], names: ['Lich Bane', 'Shadowflame', "Zhonya's"], order: 'Lich Bane → Shadowflame' },
      fullBuild: { standard: [3020, 3100, 4645, 3157, 3089, 3135], names: ['Sorc', 'Lich Bane', 'Shadowflame', "Zhonya's", 'Rabadon', 'Void'] }
    },
    combos: ['E1 → E2 → AA → W → AA → Q', 'Ultimate usage is key', 'W for clutch heal'],
    counters: { strongAgainst: ['Malphite', 'Twisted Fate', 'Swain'], weakAgainst: ['Cassiopeia', 'Taliyah', 'Heimerdinger'] }
  },
  Lux: {
    tier: 'A', difficulty: 'Easy', role: 'Mage',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Arcane Comet', runes: ['Manaflow Band', 'Transcendence', 'Scorch'] },
      secondary: { tree: 'Precision', runes: ['Presence of Mind', 'Coupe de Grace'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'E > Q > W', notes: 'Max E for waveclear/poke.' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      boots: [3020],
      core: { items: [6655, 4646, 3089], names: ["Luden's Companion", 'Stormsurge', "Rabadon's"], order: "Luden's → Stormsurge" },
      fullBuild: { standard: [3020, 6655, 4646, 3089, 4645, 3135], names: ['Sorc', "Luden's", 'Stormsurge', 'Rabadon', 'Shadowflame', 'Void'] }
    },
    combos: ['Q → E → R → E2', 'Catch avec Q → Full combo', 'E pour zone control'],
    counters: { strongAgainst: ['Annie', 'Brand', 'Vex'], weakAgainst: ['Zed', 'Fizz', 'Yasuo'] }
  },
  Lux_support: {
    role: 'SupportEnchant',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Arcane Comet', runes: ['Manaflow Band', 'Transcendence', 'Scorch'] },
      secondary: { tree: 'Inspiration', runes: ['Magical Footwear', 'Cosmic Insight'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health Scaling']
    },
    skillOrder: { priority: 'E > W > Q', notes: 'Max E for lane pressure, W for peel.' },
    itemBuilds: {
      starter: { items: [3867, 2003, 2003], names: ['World Atlas', '2x Potion'] },
      boots: [3020],
      core: { items: [3871, 6655, 3089], names: ['Zaz\'Zak\'s Realmspike', 'Luden\'s Companion', 'Rabadon\'s'], order: 'Zaz\'Zak → Luden' },
      fullBuild: { standard: [3020, 3871, 6655, 3089, 3135, 3157], names: ['Sorc', 'Zaz\'Zak', 'Luden', 'Rabadon', 'Void', 'Zhonya'] }
    },
    combos: ['Q → AA → E → AA (Core Poke)', 'Catch enemy with Q for ADC', 'R for objective/kill secure'],
    playstyle: 'Aggressive Mage Support'
  },
  Zed: {
    tier: 'S', difficulty: 'Very Hard', role: 'Assassin',
    runes: {
      primary: { tree: 'Domination', keystone: 'Electrocute', runes: ['Sudden Impact', 'Eyeball Collection', 'Ultimate Hunter'] },
      secondary: { tree: 'Precision', runes: ['Presence of Mind', 'Legend: Haste'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for burst.' },
    itemBuilds: {
      starter: { items: [1036, 2031], names: ['Long Sword', 'Refillable'] },
      boots: [3158],
      core: { items: [6698, 6701, 6694], names: ['Profane Hydra', 'Opportunity', "Serylda's Grudge"], order: 'Hydra → Opportunity → Serylda' },
      fullBuild: { standard: [3158, 6698, 6701, 6694, 6692, 3814], names: ['CDR Boots', 'Profane Hydra', 'Opportunity', 'Serylda', 'Eclipse', 'Edge of Night'] }
    },
    combos: ['W → E → Q', 'R → W → E → Q → AA', 'Shadow positioning is key'],
    counters: { strongAgainst: ['Lux', 'Xerath', 'Veigar'], weakAgainst: ['Lissandra', 'Malzahar', 'Galio'] }
  },
  Yasuo: {
    tier: 'A', difficulty: 'Very Hard', role: 'Fighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Lethal Tempo', runes: ['Triumph', 'Legend: Alacrity', 'Last Stand'] },
      secondary: { tree: 'Resolve', runes: ['Second Wind', 'Overgrowth'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health Scaling']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for tornado cooldown.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3006],
      core: { items: [6672, 3031, 3046], names: ['Kraken Slayer', 'Infinity Edge', 'Phantom Dancer'], order: 'Kraken → IE' },
      fullBuild: { standard: [3006, 6672, 3031, 3046, 6333, 3156], names: ['Berserker', 'Kraken', 'IE', 'PD', 'DD', 'Maw'] }
    },
    combos: ['E → Q (dash + tornado)', 'E × n → Q3 → R (airblade)', 'Windwall timing crucial'],
    counters: { strongAgainst: ['Lux', 'Syndra', 'Xerath'], weakAgainst: ['Renekton', 'Annie', 'Malzahar'] }
  },
  Yone: {
    tier: 'S', difficulty: 'Hard', role: 'Fighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Lethal Tempo', runes: ['Triumph', 'Legend: Alacrity', 'Last Stand'] },
      secondary: { tree: 'Resolve', runes: ['Second Wind', 'Overgrowth'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health Scaling']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q. E for safety/trades.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3006],
      core: { items: [6672, 3031, 3153], names: ['Kraken Slayer', 'Infinity Edge', 'BOTRK'], order: 'Kraken → IE' },
      fullBuild: { standard: [3006, 6672, 3031, 3153, 6333, 3026], names: ['Berserker', 'Kraken', 'IE', 'BOTRK', 'DD', 'GA'] }
    },
    combos: ['E → Q × 2 → Q3 → W → R → E back', 'Safe trades avec E return'],
    counters: { strongAgainst: ['Lux', 'Syndra', 'Orianna'], weakAgainst: ['Renekton', 'Pantheon', 'Irelia'] }
  },
  Katarina: {
    tier: 'A', difficulty: 'Very Hard', role: 'APAssassin',
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Triumph', 'Legend: Tenacity', 'Last Stand'] },
      secondary: { tree: 'Domination', runes: ['Sudden Impact', 'Relentless Hunter'] },
      shards: ['Adpative Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q. On-hit build.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3006],
      core: { items: [3115, 3100, 4646], names: ["Nashor's Tooth", 'Lich Bane', 'Stormsurge'], order: 'Nashor → Lich Bane' },
      fullBuild: { standard: [3020, 3115, 3100, 4646, 3089, 3135], names: ['Sorc/Mercs', "Nashor's", 'Lich Bane', 'Stormsurge', 'Rabadon', 'Void'] }
    },
    combos: ['E → W → Q → E (dagger)', 'R channel cancels', 'Dagger placement crucial'],
    counters: { strongAgainst: ['Twisted Fate', 'Veigar', 'Karthus'], weakAgainst: ['Diana', 'Galio', 'Kassadin'] }
  },
  LeBlanc: {
    tier: 'S', difficulty: 'Hard', role: 'APAssassin',
    runes: {
      primary: { tree: 'Domination', keystone: 'Electrocute', runes: ['Sudden Impact', 'Eyeball Collection', 'Treasure Hunter'] },
      secondary: { tree: 'Sorcery', runes: ['Manaflow Band', 'Transcendence'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'W > Q > E', notes: 'Max W for waveclear/burst.' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      boots: [3020],
      core: { items: [6655, 4645, 4646], names: ["Luden's Companion", 'Shadowflame', 'Stormsurge'], order: "Luden's → Shadowflame" },
      fullBuild: { standard: [3020, 6655, 4645, 4646, 3089, 3135], names: ['Sorc', "Luden's", 'Shadowflame', 'Stormsurge', 'Rabadon', 'Void'] }
    },
    combos: ['W → Q → E → W return', 'Q → R → W → E (max damage)', 'Use R clone for mindgames'],
    counters: { strongAgainst: ['Lux', 'Xerath', 'Ziggs'], weakAgainst: ['Galio', 'Kassadin', 'Malzahar'] }
  },
  Fizz: {
    tier: 'A', difficulty: 'Medium', role: 'APAssassin',
    runes: {
      primary: { tree: 'Domination', keystone: 'Electrocute', runes: ['Sudden Impact', 'Eyeball Collection', 'Treasure Hunter'] },
      secondary: { tree: 'Precision', runes: ['Presence of Mind', 'Coupe de Grace'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'E > W > Q', notes: 'Max E for mobility/waveclear.' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      boots: [3020],
      core: { items: [3100, 4646, 3157], names: ['Lich Bane', 'Stormsurge', "Zhonya's"], order: 'Lich → Stormsurge' },
      fullBuild: { standard: [3020, 3100, 4646, 3157, 3089, 3135], names: ['Sorc', 'Lich Bane', 'Stormsurge', "Zhonya's", 'Rabadon', 'Void'] }
    },
    combos: ['E dodge → Q → W → R', 'R → E → Q → W (all-in)', 'E untargetable timing'],
    counters: { strongAgainst: ['Syndra', 'Lux', 'Veigar'], weakAgainst: ['Galio', 'Lissandra', 'Diana'] }
  },
  Akali: {
    tier: 'S', difficulty: 'Hard', role: 'APAssassin',
    runes: {
      primary: { tree: 'Domination', keystone: 'Electrocute', runes: ['Sudden Impact', 'Eyeball Collection', 'Ultimate Hunter'] },
      secondary: { tree: 'Precision', runes: ['Presence of Mind', 'Coup de Grace'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for waveclear/dmg.' },
    itemBuilds: {
      starter: { items: [1054, 2003], names: ["Doran's Shield", 'Potion'] },
      boots: [3020],
      core: { items: [3100, 4645, 3157], names: ['Lich Bane', 'Shadowflame', "Zhonya's"], order: 'Lich Bane → Shadowflame' },
      fullBuild: { standard: [3020, 3100, 4645, 3157, 3089, 3135], names: ['Sorc', 'Lich Bane', 'Shadowflame', "Zhonya's", 'Rabadon', 'Void'] }
    },
    combos: ['Q → AA (passive proc)', 'E → R1 → Q → R2', 'Shroud timing for trades'],
    counters: { strongAgainst: ['Syndra', 'Orianna', 'Ahri'], weakAgainst: ['Galio', 'Annie', 'Malzahar'] }
  },
  Ekko: {
    tier: 'A', difficulty: 'Medium', role: 'APAssassin',
    runes: {
      primary: { tree: 'Domination', keystone: 'Electrocute', runes: ['Sudden Impact', 'Eyeball Collection', 'Treasure Hunter'] },
      secondary: { tree: 'Inspiration', runes: ['Magical Footwear', 'Cosmic Insight'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for clear.' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      boots: [3020],
      core: { items: [3100, 4646, 3089], names: ['Lich Bane', 'Stormsurge', "Rabadon's"], order: 'Lich → Stormsurge' },
      fullBuild: { standard: [3020, 3100, 4646, 3089, 4645, 3157], names: ['Sorc', 'Lich Bane', 'Stormsurge', 'Rabadon', 'Shadowflame', "Zhonya's"] }
    },
    combos: ['E → Q → AA (passive)', 'W zone → R bait', 'R for escape/damage'],
    counters: { strongAgainst: ['Twisted Fate', 'Cassiopeia', 'Ryze'], weakAgainst: ['Sylas', 'Diana', 'Kassadin'] }
  },
  Diana: {
    tier: 'A', difficulty: 'Medium', role: 'APAssassin',
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Presence of Mind', 'Legend: Alacrity', 'Coupe de Grace'] },
      secondary: { tree: 'Domination', runes: ['Sudden Impact', 'Treasure Hunter'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q. E reset' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      boots: [3020],
      core: { items: [3115, 3100, 3157], names: ["Nashor's Tooth", 'Lich Bane', "Zhonya's"], order: 'Nashor → Lich' },
      fullBuild: { standard: [3020, 3115, 3100, 3157, 3089, 3135], names: ['Sorc', "Nashor's", 'Lich Bane', "Zhonya's", 'Rabadon', 'Void'] }
    },
    combos: ['Q → E → W → AA', 'R pull → Zhonya', 'E reset on Q mark'],
    counters: { strongAgainst: ['Fizz', 'Katarina', 'Akali'], weakAgainst: ['Syndra', 'Cassiopeia', 'Malzahar'] }
  },
  Kassadin: {
    tier: 'S', difficulty: 'Hard', role: 'APAssassin',
    runes: {
      primary: { tree: 'Precision', keystone: 'Fleet Footwork', runes: ['Presence of Mind', 'Legend: Tenacity', 'Coupe de Grace'] },
      secondary: { tree: 'Sorcery', runes: ['Manaflow Band', 'Transcendence'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'E > Q > W', notes: 'Max E for clear/damage.' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      boots: [3020],
      core: { items: [3118, 3040, 3157], names: ['Malignance', "Seraph's Embrace", "Zhonya's Hourglass"], order: 'Tear → Malignance → Seraph' },
      fullBuild: { standard: [3020, 3118, 3040, 3157, 3089, 3135], names: ['Sorc Shoes', 'Malignance', 'Seraph', 'Zhonya', 'Rabadon', 'Void'] }
    },
    combos: ['R → E → W → Q', 'Stack R before Jumping', 'Late game monster'],
    counters: { strongAgainst: ['AP mages', 'Ahri', 'LeBlanc'], weakAgainst: ['AD mids', 'Talon', 'Zed', 'Lucian'] }
  },
  Viktor: {
    tier: 'A', difficulty: 'Hard', role: 'Mage',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'First Strike', runes: ['Magical Footwear', 'Triple Tonic', 'Cosmic Insight'] },
      secondary: { tree: 'Precision', runes: ['Presence of Mind', 'Coupe de Grace'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'E > Q > W', notes: 'Evolve E first.' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      boots: [3020],
      core: { items: [3118, 4645, 3089], names: ['Malignance', 'Shadowflame', "Rabadon's"], order: 'Malignance → Shadowflame' },
      fullBuild: { standard: [3020, 3118, 4645, 3089, 3157, 3135], names: ['Sorc', 'Malignance', 'Shadowflame', 'Rabadon', "Zhonya's", 'Void'] }
    },
    combos: ['E poke → Q trade', 'W zone → R → E', 'Evolve E first'],
    counters: { strongAgainst: ['Orianna', 'Ahri', 'Neeko'], weakAgainst: ['Fizz', 'Zed', 'Yasuo'] }
  },
  Orianna: {
    tier: 'A', difficulty: 'Hard', role: 'Mage',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Arcane Comet', runes: ['Manaflow Band', 'Transcendence', 'Scorch'] },
      secondary: { tree: 'Inspiration', runes: ['Magical Footwear', 'Biscuit Delivery'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q.' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      boots: [3020],
      core: { items: [3007, 4645, 3089], names: ["Archangel's Staff", 'Shadowflame', "Rabadon's"], order: "Archangel's → Shadowflame" },
      fullBuild: { standard: [3020, 3007, 4645, 3089, 3157, 3135], names: ['Sorc', "Archangel's", 'Shadowflame', 'Rabadon', "Zhonya's", 'Void'] }
    },
    combos: ['Q → W (poke)', 'R shockwave → Q → W', 'Ball on ally → R'],
    counters: { strongAgainst: ['Twisted Fate', 'Ahri', 'Lux'], weakAgainst: ['Zed', 'Fizz', 'Yasuo'] }
  },
  Veigar: {
    tier: 'S', difficulty: 'Easy', role: 'Mage',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Arcane Comet', runes: ['Manaflow Band', 'Transcendence', 'Scorch'] },
      secondary: { tree: 'Inspiration', runes: ['Magical Footwear', 'Biscuit Delivery'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for infinite stacks.' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      boots: [3020],
      core: { items: [3118, 4645, 3089], names: ['Malignance', 'Shadowflame', "Rabadon's"], order: 'Malignance → Shadowflame' },
      fullBuild: { standard: [3020, 3118, 4645, 3089, 3135, 3157], names: ['Sorc Shoes', 'Malignance', 'Shadowflame', 'Rabadon', 'Void Staff', 'Zhonya\'s'] }
    },
    combos: ['E cage → W → Q → R', 'Stack Q infinitely', 'R execute'],
    counters: { strongAgainst: ['Annie', 'Malzahar', 'Twisted Fate'], weakAgainst: ['Fizz', 'Zed', 'Yasuo'] }
  },
  Annie: {
    tier: 'A', difficulty: 'Easy', role: 'Mage',
    runes: {
      primary: { tree: 'Domination', keystone: 'Electrocute', runes: ['Cheap Shot', 'Eyeball Collection', 'Relentless Hunter'] },
      secondary: { tree: 'Precision', runes: ['Presence of Mind', 'Coup de Grace'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for farming/poke.' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      boots: [3020],
      core: { items: [6655, 4645, 3089], names: ["Luden's Companion", 'Shadowflame', "Rabadon's"], order: "Luden's → Shadowflame" },
      fullBuild: { standard: [3020, 6655, 4645, 3089, 3157, 3135], names: ['Sorc', "Luden's", 'Shadowflame', 'Rabadon', "Zhonya's", 'Void'] }
    },
    combos: ['Stun → R Tibbers → Q → W', 'Flash → R stun', 'Stack passive → engage'],
    counters: { strongAgainst: ['Yasuo', 'Katarina', 'Akali'], weakAgainst: ['Syndra', 'Orianna', 'Xerath'] }
  },
  Xerath: {
    tier: 'S', difficulty: 'Medium', role: 'ArtilleryMage',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'First Strike', runes: ['Magical Footwear', 'Triple Tonic', 'Cosmic Insight'] },
      secondary: { tree: 'Precision', runes: ['Presence of Mind', 'Coup de Grace'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for max range poke.' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      boots: [3020],
      core: { items: [6655, 3089, 3135], names: ["Luden's Companion", "Rabadon's", 'Void Staff'], order: "Luden's → Rabadon" },
      fullBuild: { standard: [3020, 6655, 3089, 3135, 4629, 3157], names: ['Sorc', "Luden's", 'Rabadon', 'Void', 'Horizon Focus', "Zhonya's"] }
    },
    combos: ['Q poke spam', 'E stun → W → Q', 'R snipes'],
    counters: { strongAgainst: ['Annie', 'Twisted Fate', 'Veigar'], weakAgainst: ['Zed', 'Fizz', 'Talon'] }
  },
  Ziggs: {
    tier: 'A', difficulty: 'Medium', role: 'ArtilleryMage',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Arcane Comet', runes: ['Manaflow Band', 'Transcendence', 'Scorch'] },
      secondary: { tree: 'Inspiration', runes: ['Biscuit Delivery', 'Cosmic Insight'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for poke.' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      boots: [3020],
      core: { items: [6655, 4645, 3089], names: ["Luden's Companion", 'Shadowflame', "Rabadon's"], order: "Luden's → Shadowflame" },
      fullBuild: { standard: [3020, 6655, 4645, 3089, 3135, 3157], names: ['Sorc', "Luden's", 'Shadowflame', 'Rabadon', 'Void', "Zhonya's"] }
    },
    combos: ['Q spam poke', 'W tower execute', 'R cross-map'],
    counters: { strongAgainst: ['Orianna', 'Viktor', 'Twisted Fate'], weakAgainst: ['Yasuo', 'Fizz', 'Zed'] }
  },
  VelKoz: {
    tier: 'B', difficulty: 'Medium', role: 'ArtilleryMage',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Arcane Comet', runes: ['Manaflow Band', 'Transcendence', 'Scorch'] },
      secondary: { tree: 'Inspiration', runes: ['Biscuit Delivery', 'Cosmic Insight'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for geometry.' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      boots: [3020],
      core: { items: [6655, 4645, 3135], names: ["Luden's Companion", 'Shadowflame', 'Void Staff'], order: "Luden's → Shadowflame" },
      fullBuild: { standard: [3020, 6655, 4645, 3135, 3089, 3157], names: ['Sorc', "Luden's", 'Shadowflame', 'Void', 'Rabadon', "Zhonya's"] }
    },
    combos: ['Q geometry', 'E → W → R melt', 'R channel timing'],
    counters: { strongAgainst: ['Orianna', 'Syndra', 'Viktor'], weakAgainst: ['Fizz', 'Zed', 'Katarina'] }
  },
  Brand: {
    tier: 'S', difficulty: 'Easy', role: 'DotMage',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Arcane Comet', runes: ['Manaflow Band', 'Transcendence', 'Scorch'] },
      secondary: { tree: 'Inspiration', runes: ['Biscuit Delivery', 'Cosmic Insight'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'W > E > Q', notes: 'Max W for waveclear.' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      boots: [3020],
      core: { items: [2503, 3151, 3116], names: ['Blackfire Torch', "Liandry's Torment", "Rylai's"], order: 'Torch → Liandry' },
      fullBuild: { standard: [3020, 2503, 3151, 3116, 3135, 3157], names: ['Sorc', 'Blackfire Torch', 'Liandry', 'Rylai', 'Void', "Zhonya's"] }
    },
    combos: ['E → Q stun', 'W → E → Q → R', 'R bounce in groups'],
    counters: { strongAgainst: ['Tanks', 'Enchanters'], weakAgainst: ['Assassins', 'Fizz', 'Zed'] }
  },
  Malzahar: {
    tier: 'A', difficulty: 'Easy', role: 'DotMage',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Summon Aery', runes: ['Manaflow Band', 'Transcendence', 'Gathering Storm'] },
      secondary: { tree: 'Inspiration', runes: ['Magical Footwear', 'Cosmic Insight'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'E > Q > W', notes: 'Max E for clear.' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      boots: [3020],
      core: { items: [3151, 3116, 2503], names: ["Liandry's Torment", "Rylai's", 'Blackfire Torch'], order: 'Liandry → Rylai' },
      fullBuild: { standard: [3020, 3151, 3116, 2503, 3135, 3157], names: ['Sorc', 'Liandry', 'Rylai', 'Blackfire Torch', 'Void', "Zhonya's"] }
    },
    combos: ['E spread → W voidlings', 'R lockdown → Q → E', 'R priority carry'],
    counters: { strongAgainst: ['Zed', 'Fizz', 'Assassins'], weakAgainst: ['Syndra', 'Orianna', 'QSS'] }
  },
  Ryze: {
    tier: 'B', difficulty: 'Medium', role: 'BattleMage',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Phase Rush', runes: ['Manaflow Band', 'Transcendence', 'Gathering Storm'] },
      secondary: { tree: 'Inspiration', runes: ['Biscuit Delivery', 'Cosmic Insight'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for DPS.' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      boots: [3020],
      core: { items: [3007, 3010, 3089], names: ["Archangel's Staff", 'Rod of Ages', "Rabadon's"], order: 'Tear → RoA → Archangel' },
      fullBuild: { standard: [3020, 3007, 3010, 3089, 3157, 3135], names: ['Sorc/Mercs', 'Archangel', 'RoA', 'Rabadon', "Zhonya's", 'Void'] }
    },
    combos: ['E → E → Q (spread)', 'W root → E → Q', 'R TP team'],
    counters: { strongAgainst: ['Tanks', 'Short range'], weakAgainst: ['Syndra', 'Xerath', 'Long range'] }
  },
  Cassiopeia: {
    tier: 'S', difficulty: 'Very Hard', role: 'BattleMage',
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Presence of Mind', 'Legend: Tenacity', 'Last Stand'] },
      secondary: { tree: 'Sorcery', runes: ['Manaflow Band', 'Transcendence'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'E > Q > W', notes: 'Max E for dps.' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      core: { items: [3151, 3007, 3116], names: ["Liandry's Torment", "Archangel's Staff", "Rylai's"], order: 'Tear → Liandry → Archangel' },
      fullBuild: { standard: [1001, 3151, 3007, 3116, 3089, 3135], names: ['No Boots', 'Liandry', 'Archangel', 'Rylai', 'Rabadon', 'Void'] }
    },
    combos: ['Q → E spam', 'R flash stun', 'W ground zone'],
    counters: { strongAgainst: ['Sylas', 'Katarina', 'Akali'], weakAgainst: ['Xerath', 'Ziggs', 'Long range'] }
  },
  Swain: {
    tier: 'S', difficulty: 'Medium', role: 'BattleMage',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Arcane Comet', runes: ['Manaflow Band', 'Transcendence', 'Scorch'] },
      secondary: { tree: 'Resolve', runes: ['Conditioning', 'Overgrowth'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for low CD damage.' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      boots: [3020],
      core: { items: [2503, 3116, 3157], names: ['Blackfire Torch', 'Rylai\'s', 'Zhonya\'s'], order: 'Torch → Rylai → Zhonya' },
      fullBuild: { standard: [3020, 2503, 3116, 3157, 3151, 3089], names: ['Sorc Shoes', 'Blackfire Torch', 'Rylai\'s', 'Zhonya\'s', 'Liandry\'s', 'Rabadon'] }
    },
    combos: ['E pull → W → Q', 'R sustain + Zhonya', 'Passive soul stacking'],
    counters: { strongAgainst: ['Melee assassins', 'Short range mages'], weakAgainst: ['Long range', 'Xerath', 'Syndra'] }
  },
  Vladimir: {
    tier: 'S', difficulty: 'Medium', role: 'BattleMage',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Phase Rush', runes: ['Nimbus Cloak', 'Transcendence', 'Gathering Storm'] },
      secondary: { tree: 'Precision', runes: ['Legend: Haste', 'Last Stand'] },
      shards: ['Ability Haste', 'Adaptive Force', 'Health Scaling']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for sustain.' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      boots: [3020],
      core: { items: [4629, 4633, 3089], names: ['Cosmic Drive', 'Riftmaker', "Rabadon's"], order: 'Cosmic → Riftmaker' },
      fullBuild: { standard: [3020, 4629, 4633, 3089, 3157, 3135], names: ['Sorc', 'Cosmic', 'Riftmaker', 'Rabadon', "Zhonya's", 'Void'] }
    },
    combos: ['E charge → Flash → R → E → Q', 'Pool for safety', 'Scale late'],
    counters: { strongAgainst: ['Assassins', 'Fighters'], weakAgainst: ['GW', 'Grievous Wounds', 'Burst'] }
  },
  TwistedFate: {
    tier: 'A', difficulty: 'Hard', role: 'Mage',
    runes: {
      primary: { tree: 'Domination', keystone: 'Electrocute', runes: ['Sudden Impact', 'Eyeball Collection', 'Treasure Hunter'] },
      secondary: { tree: 'Sorcery', runes: ['Manaflow Band', 'Transcendence'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for waveclear/poke.' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      boots: [3020],
      core: { items: [3010, 3100, 3094], names: ['Rod of Ages', 'Lich Bane', 'Rapid Firecannon'], order: 'RoA → Lich Bane' },
      fullBuild: { standard: [3020, 3010, 3100, 3094, 3089, 3135], names: ['Sorc', 'RoA', 'Lich Bane', 'RFC', 'Rabadon', 'Void'] }
    },
    combos: ['Gold card → W → Q', 'R gank + Gold card', 'Pick a card timing'],
    counters: { strongAgainst: ['Short range mages'], weakAgainst: ['Assassins', 'Fizz', 'Zed'] }
  },
  Anivia: {
    tier: 'S', difficulty: 'Hard', role: 'BattleMage',
    runes: {
      primary: { tree: 'Domination', keystone: 'Electrocute', runes: ['Cheap Shot', 'Eyeball Collection', 'Ultimate Hunter'] },
      secondary: { tree: 'Precision', runes: ['Presence of Mind', 'Coupe de Grace'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'E > Q > W', notes: 'Max E for damage on chilled targets.' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      boots: [3020],
      core: { items: [3010, 3007, 3151], names: ['Rod of Ages', "Archangel's Staff", "Liandry's"], order: 'Tear → RoA' },
      fullBuild: { standard: [3020, 3010, 3007, 3151, 3157, 3135], names: ['Sorc', 'RoA', "Archangel's", "Liandry's", "Zhonya's", 'Void'] }
    },
    combos: ['Q → E', 'R → W wall → E', 'Egg safe play'],
    counters: { strongAgainst: ['Ryze', 'Cassiopeia'], weakAgainst: ['Zed', 'Fizz', 'Assassins'] }
  },
  AurelionSol: {
    tier: 'S', difficulty: 'Medium', role: 'BattleMage',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Arcane Comet', runes: ['Manaflow Band', 'Absolute Focus', 'Gathering Storm'] },
      secondary: { tree: 'Inspiration', runes: ['Magical Footwear', 'Cosmic Insight'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for breath duration.' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      boots: [3020],
      core: { items: [3007, 3151, 3116], names: ["Archangel's Staff", "Liandry's", 'Rylai'], order: 'Tear → Rylai' },
      fullBuild: { standard: [3020, 3007, 3116, 3151, 3157, 3089], names: ['Sorc', "Archangel's", 'Rylai', "Liandry's", "Zhonya's", 'Rabadon'] }
    },
    combos: ['E → Q', 'W roam → E → Q', 'Stardust stacking'],
    counters: { strongAgainst: ['Melee', 'Tanks'], weakAgainst: ['Assassins', 'Zed', 'Fizz'] }
  },
  Azir: {
    tier: 'S', difficulty: 'Very Hard', role: 'BattleMage',
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Presence of Mind', 'Legend: Alacrity', 'Last Stand'] },
      secondary: { tree: 'Sorcery', runes: ['Manaflow Band', 'Transcendence'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'W > Q > E', notes: 'Max W for soldier dmg.' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      boots: [3020],
      core: { items: [3115, 3151, 3100], names: ["Nashor's Tooth", "Liandry's Torment", 'Lich Bane'], order: 'Nashor → Liandry' },
      fullBuild: { standard: [3020, 3115, 3151, 3100, 3089, 3157], names: ['Sorc/Berserker', "Nashor's", 'Liandry', 'Lich Bane', 'Rabadon', "Zhonya's"] }
    },
    combos: ['W → Q → AA', 'Shurima Shuffle E → Q → R', 'Wall engage'],
    counters: { strongAgainst: ['Tanks', 'Mages'], weakAgainst: ['Assassins', 'Zed', 'Fizz'] }
  },
  Taliyah: {
    tier: 'A', difficulty: 'Hard', role: 'Mage',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Phase Rush', runes: ['Manaflow Band', 'Transcendence', 'Waterwalking'] },
      secondary: { tree: 'Inspiration', runes: ['Magical Footwear', 'Cosmic Insight'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for clear.' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      boots: [3020],
      core: { items: [3007, 4645, 3089], names: ["Archangel's Staff", 'Shadowflame', "Rabadon's"], order: "Archangel's → Shadowflame" },
      fullBuild: { standard: [3020, 3007, 4645, 3089, 3157, 3135], names: ['Sorc', "Archangel's", 'Shadowflame', 'Rabadon', "Zhonya's", 'Void'] }
    },
    combos: ['W → E combo', 'R cross-map gank', 'Worked ground management'],
    counters: { strongAgainst: ['Orianna', 'Viktor'], weakAgainst: ['Yasuo', 'Fizz', 'Assassins'] }
  },
  Lissandra: {
    tier: 'A', difficulty: 'Medium', role: 'Mage',
    runes: {
      primary: { tree: 'Domination', keystone: 'Electrocute', runes: ['Cheap Shot', 'Eyeball Collection', 'Ultimate Hunter'] },
      secondary: { tree: 'Inspiration', runes: ['Biscuit Delivery', 'Cosmic Insight'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for clear.' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      boots: [3020],
      core: { items: [6655, 4645, 3157], names: ["Luden's Companion", 'Shadowflame', "Zhonya's"], order: "Luden's → Shadowflame" },
      fullBuild: { standard: [3020, 6655, 4645, 3157, 3089, 3135], names: ['Sorc', "Luden's", 'Shadowflame', "Zhonya's", 'Rabadon', 'Void'] }
    },
    combos: ['E → E → W → R self/enemy', 'Flash → W stun', 'Passive ghosts in teamfights'],
    counters: { strongAgainst: ['Assassins', 'LeBlanc', 'Zed', 'Akali'], weakAgainst: ['Xerath', 'Syndra', 'Orianna'] }
  },
  Galio: {
    tier: 'A', difficulty: 'Medium', role: 'Mage',
    runes: {
      primary: { tree: 'Resolve', keystone: 'Aftershock', runes: ['Shield Bash', 'Bone Plating', 'Overgrowth'] },
      secondary: { tree: 'Sorcery', runes: ['Nimbus Cloak', 'Transcendence'] },
      shards: ['Ability Haste', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for waveclear.' },
    itemBuilds: {
      starter: { items: [1054, 2003], names: ["Doran's Shield", 'Potion'] },
      boots: [3047],
      core: { items: [3010, 3157, 3116], names: ['Rod of Ages', "Zhonya's", "Liandry's"], order: 'RoA → Zhonya' },
      fullBuild: { standard: [3047, 3010, 3157, 3151, 6665, 3065], names: ['Plated/Mercs', 'RoA', "Zhonya's", 'Liandry', 'JakSho', 'Spirit'] }
    },
    combos: ['E → W → Q → AA', 'R to ally engage/save', 'W taunt flash'],
    counters: { strongAgainst: ['AP assassins', 'Ahri', 'LeBlanc', 'Katarina'], weakAgainst: ['AD bruisers', 'Lucian', 'Yasuo'] }
  },
  Zoe: {
    tier: 'A', difficulty: 'Hard', role: 'Mage',
    runes: {
      primary: { tree: 'Domination', keystone: 'Electrocute', runes: ['Sudden Impact', 'Eyeball Collection', 'Treasure Hunter'] },
      secondary: { tree: 'Sorcery', runes: ['Nimbus Cloak', 'Gathering Storm'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for long range snipes.' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      boots: [3020],
      core: { items: [6655, 4646, 3089], names: ["Luden's Companion", 'Stormsurge', "Rabadon's"], order: "Luden's → Stormsurge" },
      fullBuild: { standard: [3020, 6655, 4646, 3089, 4629, 3135], names: ['Sorc', "Luden's", 'Stormsurge', 'Rabadon', 'Horizon Focus', 'Void'] }
    },
    combos: ['Q1 → Q2 → AA', 'E through walls → Q snipe', 'R to extend Q range'],
    counters: { strongAgainst: ['Syndra', 'Orianna', 'TF'], weakAgainst: ['Zed', 'Fizz', 'Yasuo'] }
  },
  Neeko: {
    tier: 'B', difficulty: 'Easy', role: 'Mage',
    runes: {
      primary: { tree: 'Domination', keystone: 'Electrocute', runes: ['Sudden Impact', 'Eyeball Collection', 'Treasure Hunter'] },
      secondary: { tree: 'Sorcery', runes: ['Manaflow Band', 'Scorch'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q.' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      boots: [3020],
      core: { items: [3152, 3157, 3089], names: ['Hextech Rocketbelt', "Zhonya's", "Rabadon's"], order: 'Rocketbelt → Zhonya' },
      fullBuild: { standard: [3020, 3152, 3157, 3089, 4645, 3135], names: ['Sorc', 'Rocketbelt', "Zhonya's", 'Rabadon', 'Shadowflame', 'Void'] }
    },
    combos: ['E root → Q → R', 'Clone mindgames', 'Flash → R engage'],
    counters: { strongAgainst: ['Ahri', 'Twisted Fate'], weakAgainst: ['Zed', 'Fizz', 'Yasuo'] }
  },
  Vex: {
    tier: 'A', difficulty: 'Easy', role: 'Mage',
    runes: {
      primary: { tree: 'Domination', keystone: 'Electrocute', runes: ['Sudden Impact', 'Eyeball Collection', 'Ultimate Hunter'] },
      secondary: { tree: 'Sorcery', runes: ['Manaflow Band', 'Transcendence'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q.' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      boots: [3020],
      core: { items: [6655, 4645, 3089], names: ["Luden's Companion", 'Shadowflame', "Rabadon's"], order: "Luden's → Shadowflame" },
      fullBuild: { standard: [3020, 6655, 4645, 3089, 3157, 3135], names: ['Sorc', "Luden's", 'Shadowflame', 'Rabadon', "Zhonya's", 'Void'] }
    },
    combos: ['Fear → Q → W', 'R → R follow → combo', 'Anti-dash passive'],
    counters: { strongAgainst: ['Yasuo', 'Irelia', 'Akali'], weakAgainst: ['Syndra', 'Xerath', 'Orianna'] }
  },
  Hwei: {
    tier: 'S', difficulty: 'Hard', role: 'Mage',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Arcane Comet', runes: ['Manaflow Band', 'Transcendence', 'Scorch'] },
      secondary: { tree: 'Precision', runes: ['Presence of Mind', 'Coup de Grace'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for poke/waveclear.' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      boots: [3020],
      core: { items: [2503, 4645, 3089], names: ['Blackfire Torch', 'Shadowflame', "Rabadon's"], order: 'Torch → Shadowflame' },
      fullBuild: { standard: [3020, 2503, 4645, 3089, 3157, 3135], names: ['Sorc', 'Blackfire Torch', 'Shadowflame', 'Rabadon', "Zhonya's", 'Void'] }
    },
    combos: ['QQ/QW/QE choice', 'E CC chain', 'R execute'],
    counters: { strongAgainst: ['Orianna', 'Viktor'], weakAgainst: ['Assassins', 'Fizz', 'Zed'] }
  },
  Talon: {
    tier: 'A', difficulty: 'Medium', role: 'Assassin',
    runes: {
      primary: { tree: 'Domination', keystone: 'Electrocute', runes: ['Sudden Impact', 'Eyeball Collection', 'Treasure Hunter'] },
      secondary: { tree: 'Sorcery', runes: ['Absolute Focus', 'Scorch'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'W > Q > E', notes: 'Max W for waveclear/poke.' },
    itemBuilds: {
      starter: { items: [1036, 2031], names: ['Long Sword', 'Refillable'] },
      boots: [3158],
      core: { items: [3142, 6698, 3814], names: ["Youmuu's Ghostblade", 'Profane Hydra', 'Edge of Night'], order: 'Youmuu → Profane' },
      fullBuild: { standard: [3158, 3142, 6698, 3814, 6694, 6696], names: ['CDR Boots', "Youmuu's", 'Profane', 'Edge', "Serylda's", 'Axiom Arc'] }
    },
    combos: ['W → Q → AA → W2', 'R → W → Q → AA → R', 'Wall jump roam'],
    counters: { strongAgainst: ['Lux', 'Xerath', 'Twisted Fate'], weakAgainst: ['Pantheon', 'Malphite', 'Diana'] }
  },
  Qiyana: {
    tier: 'A', difficulty: 'Very Hard', role: 'Assassin',
    runes: {
      primary: { tree: 'Domination', keystone: 'Electrocute', runes: ['Sudden Impact', 'Eyeball Collection', 'Treasure Hunter'] },
      secondary: { tree: 'Precision', runes: ['Presence of Mind', 'Last Stand'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q. Element usage key.' },
    itemBuilds: {
      starter: { items: [1036, 2031], names: ['Long Sword', 'Refillable'] },
      boots: [3158],
      core: { items: [6698, 3142, 6694], names: ['Profane Hydra', "Youmuu's Ghostblade", "Serylda's Grudge"], order: 'Profane → Youmuu' },
      fullBuild: { standard: [3158, 6698, 3142, 6694, 3814, 6696], names: ['CDR Boots', 'Profane', "Youmuu's", "Serylda's", 'Edge', "Axiom"] }
    },
    combos: ['Grass Q → W → E → R river', 'Element management', 'R wall stun'],
    counters: { strongAgainst: ['Xerath', 'Viktor', 'Orianna'], weakAgainst: ['Diana', 'Pantheon', 'Renekton'] }
  },
  Naafiri: {
    tier: 'S', difficulty: 'Easy', role: 'Assassin',
    runes: {
      primary: { tree: 'Domination', keystone: 'Electrocute', runes: ['Sudden Impact', 'Eyeball Collection', 'Treasure Hunter'] },
      secondary: { tree: 'Precision', runes: ['Presence of Mind', 'Coup de Grace'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for bleed/poke.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3158],
      core: { items: [6698, 6691, 6692], names: ['Profane Hydra', 'Opportunity', 'Eclipse'], order: 'Profane → Opportunity' },
      fullBuild: { standard: [3158, 6698, 6691, 6692, 6694, 3026], names: ['CDR Boots', 'Profane', 'Opportunity', 'Eclipse', 'Serylda', 'GA'] }
    },
    combos: ['W dash → Q × 2 → AA', 'R engage → burst', 'Dog pack management'],
    counters: { strongAgainst: ['Mages', 'Lux'], weakAgainst: ['Diana', 'Pantheon', 'Galio'] }
  },

  // Top laners
  Darius: {
    tier: 'S', difficulty: 'Easy', role: 'Fighter',
    skillOrder: { priority: 'Q > E > W', notes: 'Q heal + damage. E for armor pen.' },
    summonerSpells: ['Flash', 'Ghost'],
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Triumph', 'Legend: Alacrity', 'Last Stand'] },
      secondary: { tree: 'Sorcery', runes: ['Nimbus Cloak', 'Celerity'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health Scaling']
    },
    itemBuilds: {
      starter: { items: [1054, 2003], names: ["Doran's Shield", 'Potion'] },
      boots: [3047],
      core: { items: [6631, 3053, 3071], names: ['Stridebreaker', "Sterak's Gage", 'Black Cleaver'], order: 'Stride → Sterak' },
      fullBuild: { standard: [3047, 6631, 3053, 3071, 3742, 6664], names: ['Plated', 'Stridebreaker', 'Sterak', 'Black Cleaver', 'Dead Mans', 'Kaenic Rookern'] }
    },
    combos: ['E → AA → W → Q (standard)', 'Ghost → E → W → Q → R', '5 stacks → R execute'],
    counters: { strongAgainst: ['Sion', 'Nasus', 'Cho\'Gath'], weakAgainst: ['Vayne', 'Jayce', 'Fiora'] }
  },
  Garen: {
    tier: 'S', difficulty: 'Very Easy', role: 'Fighter',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Phase Rush', runes: ['Nimbus Cloak', 'Celerity', 'Gathering Storm'] },
      secondary: { tree: 'Resolve', runes: ['Conditioning', 'Overgrowth'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health Scaling']
    },
    itemBuilds: {
      starter: { items: [1054, 2003], names: ["Doran's Shield", 'Potion'] },
      boots: [3006],
      core: { items: [6631, 3046, 3033], names: ['Stridebreaker', 'Phantom Dancer', 'Mortal Reminder'], order: 'Stride → PD' },
      fullBuild: { standard: [3006, 6631, 3046, 3033, 3031, 3742], names: ['Berserker', 'Stridebreaker', 'PD', 'Mortal Reminder', 'IE', 'Deadmans'] }
    },
    skillOrder: { priority: 'E > Q > W', notes: 'E max for damage. Phase Rush for mobility/escape.' },
    combos: ['Q → E → W → R (execute)', 'Stridebreaker slow catch'],
    counters: { strongAgainst: ['Nasus', 'Jax', 'Riven'], weakAgainst: ['Camille', 'Vayne', 'Kayle'] }
  },



  Riven: {
    tier: 'S', difficulty: 'Very Hard', role: 'Fighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Triumph', 'Legend: Alacrity', 'Last Stand'] },
      secondary: { tree: 'Sorcery', runes: ['Transcendence', 'Nimbus Cloak'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health Scaling']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for damage. Fast Q combo is essential.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3158],
      core: { items: [6692, 3071, 6610], names: ['Eclipse', 'Black Cleaver', 'Sundered Sky'], order: 'Eclipse → Cleaver' },
      fullBuild: { standard: [3158, 6692, 3071, 6610, 6333, 3053], names: ['CDR Boots', 'Eclipse', 'Black Cleaver', 'Sundered Sky', 'DD', 'Sterak'] }
    },
    combos: ['Fast Q (Q-AA-Q-AA-Q-AA)', 'E-R1-Flash-W-R2-Q3', 'Double Casting E-W/E-Q'],
    counters: { strongAgainst: ['Gangplank', 'Gnar', 'Kennen'], weakAgainst: ['Renekton', 'Poppy', 'Malphite'] }
  },
  Mordekaiser: {
    tier: 'S', difficulty: 'Easy', role: 'Fighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Triumph', 'Legend: Alacrity', 'Last Stand'] },
      secondary: { tree: 'Resolve', runes: ['Bone Plating', 'Revitalize'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health Scaling']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for isolated damage.' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      boots: [3047],
      core: { items: [4633, 3151, 3116], names: ['Riftmaker', "Liandry's Torment", "Rylai's"], order: 'Rylai → Liandry' },
      fullBuild: { standard: [3047, 4633, 3151, 3116, 3157, 6665], names: ['Plated', 'Riftmaker', "Liandry's", "Rylai's", "Zhonya's", 'JakSho'] }
    },
    combos: ['E → Q → AA', 'R ultimate realm', 'Passive activation'],
    counters: { strongAgainst: ['Sion', 'Ornn', 'Cho\'Gath'], weakAgainst: ['Vayne', 'Fiora', 'Gwen'] }
  },
  Sett: {
    tier: 'S', difficulty: 'Easy', role: 'Fighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Triumph', 'Legend: Alacrity', 'Last Stand'] },
      secondary: { tree: 'Resolve', runes: ['Second Wind', 'Overgrowth'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health Scaling']
    },
    skillOrder: { priority: 'W > Q > E', notes: 'Max W for grit shield and true damage.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3047],
      core: { items: [6631, 3053, 3742], names: ['Stridebreaker', "Sterak's", "Dead Man's"], order: 'Stride → Sterak' },
      fullBuild: { standard: [3047, 6631, 3053, 3742, 6333, 3065], names: ['Plated', 'Stride', 'Sterak', 'Deadmans', 'DD', 'Spirit'] }
    },
    combos: ['E → AA → Q → AA → W', 'R target into their team', 'W sweet spot for true damage'],
    counters: { strongAgainst: ['Aatrox', 'Renekton', 'Urgot'], weakAgainst: ['Gangplank', 'Lillia', 'Vayne'] }
  },
  Aatrox: {
    tier: 'S', difficulty: 'Medium', role: 'Fighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Triumph', 'Legend: Haste', 'Last Stand'] },
      secondary: { tree: 'Resolve', runes: ['Bone Plating', 'Revitalize'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health Scaling']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for damage.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3047],
      core: { items: [6610, 3161, 3053], names: ['Sundered Sky', 'Spear of Shojin', "Sterak's Gage"], order: 'Sundered → Shojin' },
      fullBuild: { standard: [3047, 6610, 3161, 3053, 6333, 3065], names: ['Plated', 'Sundered Sky', 'Shojin', 'Sterak', 'DD', 'Spirit Visage'] }
    },
    combos: ['Q1 → Q2 → E → Q3', 'W pull into Q sweet spots', 'R for healing amp'],
    counters: { strongAgainst: ['Riven', 'Gangplank', 'Gnar'], weakAgainst: ['Fiora', 'Irelia', 'Vayne'] }
  },
  Renekton: {
    tier: 'S', difficulty: 'Easy', role: 'Fighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Triumph', 'Legend: Alacrity', 'Last Stand'] },
      secondary: { tree: 'Resolve', runes: ['Bone Plating', 'Unflinching'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health Scaling']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for healing and damage.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3047],
      core: { items: [6692, 3071, 3053], names: ['Eclipse', 'Black Cleaver', "Sterak's Gage"], order: 'Eclipse → Cleaver' },
      fullBuild: { standard: [3047, 6692, 3071, 3053, 6333, 3161], names: ['Plated', 'Eclipse', 'Black Cleaver', 'Sterak', 'DD', 'Shojin'] }
    },
    combos: ['E1 → W → Q → E2 out', 'Fury Q for maximum heal', 'R for extra HP in all-ins'],
    counters: { strongAgainst: ['Riven', 'Yasuo', 'Yone'], weakAgainst: ['Volibear', 'Vayne', 'Quinn'] }
  },
  Irelia: {
    tier: 'A', difficulty: 'Very Hard', role: 'Fighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Triumph', 'Legend: Alacrity', 'Last Stand'] },
      secondary: { tree: 'Inspiration', runes: ['Biscuit Delivery', 'Cosmic Insight'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for mobility/damage.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3047],
      core: { items: [3153, 3091, 3053], names: ['BOTRK', "Wit's End", "Sterak's"], order: 'BOTRK rush crucial' },
      fullBuild: { standard: [3047, 3153, 3091, 3053, 6333, 3026], names: ['Plated', 'BOTRK', "Wit's", 'Sterak', 'DD', 'GA'] }
    },
    combos: ['E1 → Q → E2 → Q → AA', 'Q resets on marked', 'R engage → Q spam'],
    counters: { strongAgainst: ['Jax', 'Gnar', 'Gangplank'], weakAgainst: ['Sett', 'Warwick', 'Tryndamere'] }
  },
  Gwen: {
    tier: 'S', difficulty: 'Hard', role: 'Fighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Presence of Mind', 'Legend: Alacrity', 'Last Stand'] },
      secondary: { tree: 'Resolve', runes: ['Bone Plating', 'Unflinching'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q/E.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3047],
      core: { items: [3115, 4633, 3157], names: ["Nashor's Tooth", 'Riftmaker', "Zhonya's"], order: "Nashor's → Rift" },
      fullBuild: { standard: [3047, 3115, 4633, 3089, 3157, 4645], names: ['Plated', "Nashor's", 'Riftmaker', 'Rabadon', "Zhonya's", 'Shadowflame'] }
    },
    combos: ['Q stack × 4 → E → Q', 'R → E → R2', 'W immune timing'],
    counters: { strongAgainst: ['Tanks', 'Sion', 'Ornn'], weakAgainst: ['Fiora', 'Riven', 'Tryndamere'] }
  },
  Gangplank: {
    tier: 'A', difficulty: 'Very Hard', role: 'Fighter',
    runes: {
      primary: { tree: 'Inspiration', keystone: 'First Strike', runes: ['Magical Footwear', 'Triple Tonic', 'Cosmic Insight'] },
      secondary: { tree: 'Resolve', runes: ['Second Wind', 'Overgrowth'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health Scaling']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for pressure and gold.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3158],
      core: { items: [3078, 6676, 3031], names: ['Trinity Force', 'The Collector', 'Infinity Edge'], order: 'Trinity → Collector' },
      fullBuild: { standard: [3158, 3078, 6676, 3031, 3036, 6673], names: ['CDR Boots', 'Trinity Force', 'Collector', 'IE', 'LDR', 'Shieldbow'] }
    },
    combos: ['Barrel Combo (E-E-Q)', 'Triple Barrel (E-E-E-Q)', 'R global impact'],
    counters: { strongAgainst: ['Tanks', 'Nasus'], weakAgainst: ['Irelia', 'Camille', 'Riven'] }
  },
  Illaoi: {
    tier: 'S', difficulty: 'Medium', role: 'Fighter',
    runes: {
      primary: { tree: 'Resolve', keystone: 'Grasp of the Undying', runes: ['Demolish', 'Bone Plating', 'Overgrowth'] },
      secondary: { tree: 'Precision', runes: ['Presence of Mind', 'Last Stand'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health Scaling']
    },
    skillOrder: { priority: 'E > Q > W', notes: 'Max E for spirit pull damage.' },
    itemBuilds: {
      starter: { items: [1054, 2003], names: ["Doran's Shield", 'Potion'] },
      boots: [3047],
      core: { items: [3025, 6610, 3071], names: ['Iceborn Gauntlet', 'Sundered Sky', 'Black Cleaver'], order: 'Sundered Sky → Iceborn' },
      fullBuild: { standard: [3047, 6610, 3025, 3071, 3053, 3065], names: ['Plated', 'Sundered Sky', 'Iceborn', 'Black Cleaver', 'Sterak', 'Spirit Visage'] }
    },
    combos: ['E → W → Q → R', 'Spirit Pull fight', 'Ultimate in 2+ groups'],
    counters: { strongAgainst: ['Darius', 'Garen', 'Nasus'], weakAgainst: ['Tryndamere', 'Mordekaiser', 'Vayne'] }
  },
  Nasus: {
    tier: 'A', difficulty: 'Easy', role: 'Fighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Fleet Footwork', runes: ['Triumph', 'Legend: Haste', 'Last Stand'] },
      secondary: { tree: 'Resolve', runes: ['Second Wind', 'Unflinching'] },
      shards: ['Ability Haste', 'Adaptive Force', 'Health Scaling']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for stacking.' },
    itemBuilds: {
      starter: { items: [1054, 2003], names: ["Doran's Shield", 'Potion'] },
      boots: [3158],
      core: { items: [3078, 3065, 3110], names: ['Trinity Force', 'Spirit Visage', 'Frozen Heart'], order: 'Trinity → Spirit' },
      fullBuild: { standard: [3158, 3078, 3065, 3110, 3053, 6665], names: ['CDR Boots', 'Trinity', 'Spirit', 'Frozen Heart', 'Sterak', 'JakSho'] }
    },
    combos: ['Q stacking', 'W slow', 'R stat boost + fight'],
    counters: { strongAgainst: ['Malphite', 'Ornn', 'Shen'], weakAgainst: ['Darius', 'Illaoi', 'Garen'] }
  },
  Yorick: {
    tier: 'A', difficulty: 'Easy', role: 'Fighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Triumph', 'Legend: Bloodline', 'Last Stand'] },
      secondary: { tree: 'Resolve', runes: ['Demolish', 'Bone Plating'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health Scaling']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for ghoul damage.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3047],
      core: { items: [3078, 6698, 3181], names: ['Trinity Force', 'Profane Hydra', 'Hullbreaker'], order: 'Trinity → Profane' },
      fullBuild: { standard: [3047, 3078, 6698, 3181, 3053, 3161], names: ['Plated', 'Trinity', 'Profane', 'Hullbreaker', 'Sterak', 'Shojin'] }
    },
    combos: ['E mark → W cage → Q ghouls', 'R Maiden split push', 'Passive grave setup'],
    counters: { strongAgainst: ['Nasus', 'Malphite', 'Camille'], weakAgainst: ['Irelia', 'Jax', 'Tryndamere'] }
  },
  Jinx: {
    tier: 'S', difficulty: 'Easy', role: 'Marksman',
    runes: {
      primary: { tree: 'Precision', keystone: 'Lethal Tempo', runes: ['Presence of Mind', 'Legend: Bloodline', 'Coup de Grace'] },
      secondary: { tree: 'Sorcery', runes: ['Absolute Focus', 'Gathering Storm'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for DPS.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3006],
      core: { items: [3031, 3085, 3036], names: ['Infinity Edge', "Runaan's Hurricane", 'LDR'], order: 'IE → Runaans → LDR' },
      fullBuild: { standard: [3006, 3031, 3085, 3036, 3072, 3026], names: ['Berserker', 'IE', "Runaan's", 'LDR', 'Bloodthirster', 'GA'] }
    },
    combos: ['Switch Q for range/AoE', 'W poke', 'E zone/CC chain'],
    counters: { strongAgainst: ['Short-range ADCs'], weakAgainst: ['Assassins', 'Draven', 'Caitlyn'] }
  },
  Tryndamere: {
    tier: 'S', difficulty: 'Easy', role: 'Fighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Lethal Tempo', runes: ['Triumph', 'Legend: Alacrity', 'Last Stand'] },
      secondary: { tree: 'Resolve', runes: ['Second Wind', 'Revitalize'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health Scaling']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q. Crit is key (200% base).' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3006],
      core: { items: [6672, 6675, 3031], names: ['Kraken Slayer', 'Navori Flickerblade', 'Infinity Edge'], order: 'Kraken → Navori' },
      fullBuild: { standard: [3006, 6672, 6675, 3031, 3033, 6333], names: ['Berserker', 'Kraken', 'Navori', 'IE', 'Mortal Reminder', 'DD'] }
    },
    combos: ['AA → E spin away', 'R timing', 'W slow'],
    counters: { strongAgainst: ['Yone', 'Gwen', 'Irelia'], weakAgainst: ['Malphite', 'Tahm Kench', 'Poppy'] }
  },
  Urgot: {
    tier: 'A', difficulty: 'Easy', role: 'Fighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Press the Attack', runes: ['Triumph', 'Legend: Tenacity', 'Last Stand'] },
      secondary: { tree: 'Resolve', runes: ['Conditioning', 'Overgrowth'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health Scaling']
    },
    skillOrder: { priority: 'W > E > Q', notes: 'Max W for toggle at level 9.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3047],
      core: { items: [3071, 3748, 3053], names: ['Black Cleaver', 'Titanic Hydra', "Sterak's Gage"], order: 'Cleaver → Titanic' },
      fullBuild: { standard: [3047, 3071, 3053, 3181, 6631, 3075], names: ['Plated', 'Black Cleaver', 'Sterak', 'Hullbreaker', 'Stridebreaker', 'Thornmail'] }
    },
    combos: ['E flip → W → AA circle', 'R execute', 'Passive leg procs'],
    counters: { strongAgainst: ['Ornn', 'Cho\'Gath', 'Sion'], weakAgainst: ['Aatrox', 'Mordekaiser', 'Vayne'] }
  },
  Volibear: {
    tier: 'A', difficulty: 'Easy', role: 'Fighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Press the Attack', runes: ['Presence of Mind', 'Legend: Haste', 'Last Stand'] },
      secondary: { tree: 'Resolve', runes: ['Second Wind', 'Revitalize'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'W > Q > E', notes: 'Max W for heal/bite.' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      boots: [3158],
      core: { items: [4633, 3115, 3065], names: ['Riftmaker', "Nashor's", 'Spirit Visage'], order: 'Riftmaker → Nashor' },
      fullBuild: { standard: [3158, 4633, 3115, 3065, 3742, 3075], names: ['CDR Boots', 'Riftmaker', "Nashor's", 'Spirit', 'Deadmans', 'Thornmail'] }
    },
    combos: ['Q stun → W × 2', 'E shield + damage', 'R tower dive'],
    counters: { strongAgainst: ['Renekton', 'Camille', 'Irelia'], weakAgainst: ['Lillia', 'Vayne', 'Teemo'] }
  },
  Volibear_jungle: {
    role: 'JungleFighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Press the Attack', runes: ['Triumph', 'Legend: Alacrity', 'Coup de Grace'] },
      secondary: { tree: 'Sorcery', runes: ['Celerity', 'Waterwalking'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health Scaling']
    },
    itemBuilds: {
      starter: { items: [1102, 2003], names: ['Gustwalker Hatchling', 'Potion'] },
      boots: [3158],
      core: { items: [4633, 3115, 3065], names: ['Riftmaker', "Nashor's", 'Spirit Visage'], order: 'Riftmaker → Nashor' },
      fullBuild: { standard: [3158, 4633, 3115, 3065, 3742, 3075], names: ['CDR Boots', 'Riftmaker', "Nashor's", 'Spirit', 'Deadmans', 'Thornmail'] }
    },
    playstyle: 'Fast Engage Jungler'
  },
  Kled: {
    tier: 'B', difficulty: 'Medium', role: 'Fighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Triumph', 'Legend: Alacrity', 'Last Stand'] },
      secondary: { tree: 'Resolve', runes: ['Demolish', 'Bone Plating'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for trading.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3047],
      core: { items: [6692, 3074, 3071], names: ['Eclipse', 'Ravenous Hydra', 'Black Cleaver'], order: 'Eclipse → Ravenous' },
      fullBuild: { standard: [3047, 6692, 3074, 3071, 3053, 3026], names: ['Plated', 'Eclipse', 'Ravenous', 'Cleaver', 'Sterak', 'GA'] }
    },
    combos: ['Q → E → E → W → AA', 'R engage', 'Remount timing'],
    counters: { strongAgainst: ['Gangplank', 'Gnar', 'Kayle'], weakAgainst: ['Fiora', 'Jax', 'Mordekaiser'] }
  },
  Olaf: {
    tier: 'B', difficulty: 'Easy', role: 'Fighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Triumph', 'Legend: Alacrity', 'Last Stand'] },
      secondary: { tree: 'Inspiration', runes: ['Approach Velocity', 'Biscuit Delivery'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for chase/poke.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3047],
      core: { items: [6631, 3053, 6333], names: ['Stridebreaker', "Sterak's", "Death's Dance"], order: 'Stride → Sterak' },
      fullBuild: { standard: [3047, 6631, 3053, 6333, 3065, 3026], names: ['Plated', 'Stride', 'Sterak', 'DD', 'Spirit', 'GA'] }
    },
    combos: ['Q spam', 'R unstoppable', 'W lifesteal + AA'],
    counters: { strongAgainst: ['Ornn', 'Maokai', 'Sion'], weakAgainst: ['Vayne', 'Teemo', 'Quinn'] }
  },
  Pantheon: {
    tier: 'A', difficulty: 'Easy', role: 'Fighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Press the Attack', runes: ['Triumph', 'Legend: Haste', 'Coup de Grace'] },
      secondary: { tree: 'Domination', runes: ['Sudden Impact', 'Treasure Hunter'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for poke/execute.' },
    itemBuilds: {
      starter: { items: [2033], names: ['Corrupting Potion'] },
      boots: [3047],
      core: { items: [6692, 3071, 3153], names: ['Eclipse', 'Black Cleaver', 'BOTRK'], order: 'Eclipse → Cleaver' },
      fullBuild: { standard: [3047, 6692, 3071, 3153, 6333, 6609], names: ['Plated', 'Eclipse', 'Cleaver', 'BOTRK', 'DD', 'Chempunk'] }
    },
    combos: ['W stun → Q × 3 → E', 'R global', 'E shield crucial'],
    counters: { strongAgainst: ['Yone', 'Yasuo', 'Irelia'], weakAgainst: ['Sett', 'Mordekaiser', 'Malphite'] }
  },
  Wukong: {
    tier: 'A', difficulty: 'Medium', role: 'Fighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Triumph', 'Legend: Alacrity', 'Last Stand'] },
      secondary: { tree: 'Resolve', runes: ['Bone Plating', 'Unflinching'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for armor shred.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3047],
      core: { items: [3078, 3071, 3053], names: ['Trinity Force', 'Black Cleaver', "Sterak's"], order: 'Trinity → Cleaver' },
      fullBuild: { standard: [3047, 3078, 3071, 3053, 6333, 3026], names: ['Plated', 'Trinity', 'Cleaver', 'Sterak', 'DD', 'GA'] }
    },
    combos: ['E → AA → Q', 'Clone mind games', 'R × 2 knockup'],
    counters: { strongAgainst: ['Gangplank', 'Gnar', 'Jayce'], weakAgainst: ['Darius', 'Sett', 'Mordekaiser'] }
  },
  Jayce: {
    tier: 'S', difficulty: 'Hard', role: 'Fighter',
    runes: {
      primary: { tree: 'Inspiration', keystone: 'First Strike', runes: ['Magical Footwear', 'Triple Tonic', 'Cosmic Insight'] },
      secondary: { tree: 'Sorcery', runes: ['Manaflow Band', 'Transcendence'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health Scaling']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for poke.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3158],
      core: { items: [6692, 3004, 3123], names: ['Eclipse', 'Manamune', "Serylda's Grudge"], order: 'Eclipse → Manamune' },
      fullBuild: { standard: [3158, 6692, 3004, 3123, 3161, 6699], names: ['CDR Boots', 'Eclipse', 'Manamune', 'Serylda', 'Shojin', 'Cyclosword'] }
    },
    combos: ['Ranged E → Q', 'Hammer Q → W → E', 'Form switching for MS'],
    counters: { strongAgainst: ['Darius', 'Garen', 'Tanks'], weakAgainst: ['Irelia', 'Camille', 'Malphite'] }
  },
  Kennen: {
    tier: 'A', difficulty: 'Medium', role: 'Mage',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Summon Aery', runes: ['Nimbus Cloak', 'Absolute Focus', 'Scorch'] },
      secondary: { tree: 'Domination', runes: ['Taste of Blood', 'Ultimate Hunter'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health Scaling']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for poke.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3020],
      core: { items: [3152, 3151, 3157], names: ['Hextech Rocketbelt', "Liandry's Torment", "Zhonya's"], order: 'Rocketbelt → Liandry' },
      fullBuild: { standard: [3020, 3152, 3151, 3157, 4645, 3089], names: ['Sorc', 'Rocketbelt', "Liandry's", "Zhonya's", 'Shadowflame', 'Rabadon'] }
    },
    combos: ['Q → W → E', 'E → Flash → R → Zhonya', 'Passive stun stacks'],
    counters: { strongAgainst: ['Darius', 'Sett', 'Melee'], weakAgainst: ['Irelia', 'Camille', 'Poppy'] }
  },
  Gnar: {
    tier: 'A', difficulty: 'Hard', role: 'Fighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Fleet Footwork', runes: ['Triumph', 'Legend: Alacrity', 'Last Stand'] },
      secondary: { tree: 'Resolve', runes: ['Bone Plating', 'Overgrowth'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health Scaling']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for poke/slow.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3047],
      core: { items: [3078, 3071, 3053], names: ['Trinity Force', 'Black Cleaver', "Sterak's Gage"], order: 'Trinity → Cleaver' },
      fullBuild: { standard: [3047, 3078, 3071, 3053, 3026, 6664], names: ['Plated', 'Trinity', 'Black Cleaver', 'Sterak', 'GA', 'Kaenic Rookern'] }
    },
    combos: ['Mini: Q poke & kite', 'Mega: E engage → R wall → W → Q', 'R wall stun into multiple targets'],
    counters: { strongAgainst: ['Malphite', 'Ornn', 'Cho\'Gath'], weakAgainst: ['Irelia', 'Camille', 'Yasuo'] }
  },
  Caitlyn: {
    tier: 'S', difficulty: 'Medium', role: 'Marksman',
    runes: {
      primary: { tree: 'Precision', keystone: 'Fleet Footwork', runes: ['Presence of Mind', 'Legend: Bloodline', 'Coup de Grace'] },
      secondary: { tree: 'Sorcery', runes: ['Absolute Focus', 'Gathering Storm'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for poke.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3006],
      core: { items: [3031, 3094, 3036], names: ['Infinity Edge', 'Rapid Firecannon', 'LDR'], order: 'IE → RFC → LDR' },
      fullBuild: { standard: [3006, 3031, 3094, 3036, 3072, 3026], names: ['Berserker', 'IE', 'RFC', 'LDR', 'Bloodthirster', 'GA'] }
    },
    combos: ['W trap → headshot', 'E → Q combo', 'R execute'],
    counters: { strongAgainst: ['Short-range ADCs'], weakAgainst: ['Sivir', 'Samira', 'Engage supports'] }
  },
  Quinn: {
    tier: 'S', difficulty: 'Medium', role: 'Fighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Fleet Footwork', runes: ['Presence of Mind', 'Legend: Alacrity', 'Cut Down'] },
      secondary: { tree: 'Domination', runes: ['Taste of Blood', 'Treasure Hunter'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health Scaling']
    },
    skillOrder: { priority: 'W > Q > E', notes: 'Max W for passive movement speed.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3006],
      core: { items: [6692, 6676, 3036], names: ['Eclipse', 'The Collector', 'LDR'], order: 'Eclipse → Collector' },
      fullBuild: { standard: [3006, 6692, 6676, 3036, 3031, 3072], names: ['Berserker', 'Eclipse', 'Collector', 'LDR', 'IE', 'BT'] }
    },
    combos: ['E flip → AA → Q → AA', 'R ultimate roam across map', 'Vault away from gapclosers'],
    counters: { strongAgainst: ['Darius', 'Garen', 'Nasus'], weakAgainst: ['Malphite', 'Irelia', 'Camille'] }
  },
  Teemo: {
    tier: 'S', difficulty: 'Easy', role: 'DotMage',
    runes: {
      primary: { tree: 'Precision', keystone: 'Press the Attack', runes: ['Presence of Mind', 'Legend: Alacrity', 'Last Stand'] },
      secondary: { tree: 'Sorcery', runes: ['Manaflow Band', 'Scorch'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health Scaling']
    },
    skillOrder: { priority: 'E > Q > W', notes: 'Max E for poison on hit.' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      boots: [3020],
      core: { items: [3115, 3151, 3118], names: ["Nashor's Tooth", "Liandry's Torment", 'Malignance'], order: "Nashor's → Liandry" },
      fullBuild: { standard: [3020, 3115, 3151, 3118, 3089, 3135], names: ['Sorc', "Nashor's", "Liandry's", 'Malignance', 'Rabadon', 'Void'] }
    },
    combos: ['Q blind when they engage', 'R mushroom objective control', 'Kite with W'],
    counters: { strongAgainst: ['Darius', 'Garen', 'Tryndamere'], weakAgainst: ['Yorick', 'Irelia', 'Pantheon'] }
  },
  Kayle: {
    tier: 'S', difficulty: 'Easy', role: 'Fighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Fleet Footwork', runes: ['Absorb Life', 'Legend: Alacrity', 'Cut Down'] },
      secondary: { tree: 'Inspiration', runes: ['Magical Footwear', 'Cosmic Insight'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health Scaling']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for early waveclear.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3006],
      core: { items: [3115, 3124, 3089], names: ["Nashor's Tooth", "Guinsoo's Rageblade", "Rabadon's"], order: "Nashor's → Guinsoo's" },
      fullBuild: { standard: [3006, 3115, 3124, 3089, 4633, 3100], names: ['Berserker', "Nashor's", "Guinsoo's", 'Rabadon', 'Riftmaker', 'Lich Bane'] }
    },
    combos: ['Scale till level 16', 'E poke whenever ready', 'R ultimate timing is vital'],
    counters: { strongAgainst: ['Nasus', 'Ornn', 'Tanks'], weakAgainst: ['Irelia', 'Riven', 'Camille'] }
  },
  KSante: {
    tier: 'S', difficulty: 'Very Hard', role: 'Tank',
    runes: {
      primary: { tree: 'Resolve', keystone: 'Grasp of the Undying', runes: ['Shield Bash', 'Second Wind', 'Overgrowth'] },
      secondary: { tree: 'Inspiration', runes: ['Biscuit Delivery', 'Cosmic Insight'] },
      shards: ['Adaptive Force', 'Armor', 'Health Scaling']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for trade and clear.' },
    itemBuilds: {
      starter: { items: [1054, 2003], names: ["Doran's Shield", 'Potion'] },
      boots: [3047],
      core: { items: [3025, 6665, 4401], names: ['Iceborn Gauntlet', 'JakSho', 'Kaenic Rookern'], order: 'Iceborn → JakSho → Kaenic' },
      fullBuild: { standard: [3047, 3025, 6665, 3066, 3075, 4401], names: ['Plated', 'Iceborn', 'JakSho', 'Hollow Radiance', 'Thornmail', "Kaenic Rookern"] }
    },
    combos: ['Q3 knock up → W push → R', 'R form swap for damage', 'E shield dash to allies'],
    counters: { strongAgainst: ['Gwen', 'Ornn', 'Sion'], weakAgainst: ['Fiora', 'Vayne', 'Camille'] }
  },
  Ambessa: {
    tier: 'S', difficulty: 'Hard', role: 'Fighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Triumph', 'Legend: Alacrity', 'Last Stand'] },
      secondary: { tree: 'Resolve', runes: ['Bone Plating', 'Unflinching'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health Scaling']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for damage and dash reset.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3047],
      core: { items: [6692, 3161, 6333], names: ['Eclipse', 'Spear of Shojin', "Death's Dance"], order: 'Eclipse → Shojin' },
      fullBuild: { standard: [3047, 6692, 3161, 6333, 3053, 6610], names: ['Plated', 'Eclipse', 'Shojin', 'DD', 'Sterak', 'Sundered Sky'] }
    },
    combos: ['Q dash → AA → E dash → AA', 'R ultimate engage', 'Passive dash management'],
    counters: { strongAgainst: ['Tanks', 'Sion', 'ChoGath'], weakAgainst: ['Jax', 'Fiora', 'Darius'] }
  },
  Camille: {
    tier: 'S', difficulty: 'Hard', role: 'Skirmisher',
    runes: {
      primary: { tree: 'Resolve', keystone: 'Grasp of the Undying', runes: ['Shield Bash', 'Second Wind', 'Unflinching'] },
      secondary: { tree: 'Inspiration', runes: ['Magical Footwear', 'Biscuit Delivery'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health Scaling']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for massive true damage.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3047],
      core: { items: [3078, 3074, 3053], names: ['Trinity Force', 'Ravenous Hydra', "Sterak's Gage"], order: 'Trinity → Ravenous' },
      fullBuild: { standard: [3047, 3078, 3074, 3161, 6333, 3053], names: ['Plated', 'Trinity Force', 'Ravenous Hydra', 'Spear of Shojin', 'DD', 'Sterak'] }
    },
    combos: ['Q1 minion → E → AA → Q2 (True Dmg)', 'W poke/slow', 'R to dodge key spells'],
    counters: { strongAgainst: ['Garen', 'Nasus', 'Aatrox'], weakAgainst: ['Jax', 'Renekton', 'Darius'] }
  },
  Fiora: {
    tier: 'S', difficulty: 'Very Hard', role: 'Skirmisher',
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Triumph', 'Legend: Alacrity', 'Last Stand'] },
      secondary: { tree: 'Resolve', runes: ['Bone Plating', 'Overgrowth'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health Scaling']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for vital poke.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3047],
      core: { items: [3074, 3078, 3053], names: ['Ravenous Hydra', 'Trinity Force', "Sterak's Gage"], order: 'Ravenous → Trinity' },
      fullBuild: { standard: [3047, 3074, 3078, 3053, 6333, 3031], names: ['Plated', 'Ravenous', 'Trinity', 'Sterak', 'DD', 'IE'] }
    },
    combos: ['Q vital → AA → E1 → E2', 'W parry CC', 'R burst 4 vitals'],
    counters: { strongAgainst: ['Kled', 'Aatrox', 'Sion'], weakAgainst: ['Malphite', 'Pantheon', 'Heimerdinger'] }
  },
  Jax: {
    tier: 'S', difficulty: 'Medium', role: 'Fighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Triumph', 'Legend: Alacrity', 'Last Stand'] },
      secondary: { tree: 'Inspiration', runes: ['Biscuit Delivery', 'Cosmic Insight'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health Scaling']
    },
    skillOrder: { priority: 'W > E > Q', notes: 'Max W for auto resets.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3047],
      core: { items: [3078, 6610, 3053], names: ['Trinity Force', 'Sundered Sky', "Sterak's Gage"], order: 'Trinity → Sundered' },
      fullBuild: { standard: [3047, 3078, 6610, 3110, 6333, 3053], names: ['Plated', 'Trinity', 'Sundered', 'Frozen Heart', 'DD', 'Sterak'] }
    },
    combos: ['E → Q → AA → W → E2', 'W auto reset', 'Leap to wards/allies'],
    counters: { strongAgainst: ['Camille', 'Irelia', 'Yasuo'], weakAgainst: ['Malphite', 'Garen', 'Illaoi'] }
  },
  Rumble: {
    tier: 'S', difficulty: 'Medium', role: 'BattleMage',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Arcane Comet', runes: ['Nimbus Cloak', 'Absolute Focus', 'Scorch'] },
      secondary: { tree: 'Domination', runes: ['Cheap Shot', 'Ultimate Hunter'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health Scaling']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for damage.' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      boots: [3020],
      core: { items: [3151, 3116, 4633], names: ["Liandry's Torment", "Rylai's", 'Riftmaker'], order: "Liandry's → Rylai" },
      fullBuild: { standard: [3020, 3151, 3116, 4633, 3157, 4645], names: ['Sorc', "Liandry's", "Rylai's", "Riftmaker", "Zhonya's", 'Shadowflame'] }
    },
    combos: ['Q flamespitter management', 'R Equalizer placement', 'Overheat management'],
    counters: { strongAgainst: ['Malphite', 'Ornn', 'Sion'], weakAgainst: ['Sylas', 'Irelia', 'Yasuo'] }
  },
  // Tanks
  Malphite: {
    tier: 'S', difficulty: 'Easy', role: 'Tank',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Arcane Comet', runes: ['Manaflow Band', 'Transcendence', 'Scorch'] },
      secondary: { tree: 'Resolve', runes: ['Second Wind', 'Overgrowth'] },
      shards: ['Adaptive Force', 'Armor', 'Health Scaling']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for poke/slow.' },
    itemBuilds: {
      starter: { items: [1054, 2003], names: ["Doran's Shield", 'Potion'] },
      boots: [3047],
      core: { items: [3025, 3068, 3075], names: ['Iceborn Gauntlet', 'Sunfire Aegis', 'Thornmail'], order: 'Iceborn → Sunfire' },
      fullBuild: { standard: [3047, 3025, 3068, 3075, 4401, 6665], names: ['Plated', 'Iceborn', 'Sunfire', 'Thornmail', 'Kaenic Rookern', 'JakSho'] }
    },
    combos: ['R → E → Q → W AA', 'Ult engage on multiple enemies', 'Stack armor vs AD'],
    counters: { strongAgainst: ['Tryndamere', 'Yasuo', 'ADCs'], weakAgainst: ['Darius', 'Sylas', 'Mordekaiser'] }
  },
  Ornn: {
    tier: 'S', difficulty: 'Medium', role: 'Tank',
    runes: {
      primary: { tree: 'Resolve', keystone: 'Grasp of the Undying', runes: ['Demolish', 'Bone Plating', 'Overgrowth'] },
      secondary: { tree: 'Inspiration', runes: ['Magical Footwear', 'Biscuit Delivery'] },
      shards: ['Adaptive Force', 'Armor', 'Health Scaling']
    },
    skillOrder: { priority: 'W > Q > E', notes: 'Max W for brittle damage.' },
    itemBuilds: {
      starter: { items: [1054, 2003], names: ["Doran's Shield", 'Potion'] },
      boots: [3047],
      core: { items: [3068, 6664, 6665], names: ['Sunfire Aegis', 'Kaenic Rookern', 'JakSho'], order: 'Sunfire → Kaenic' },
      fullBuild: { standard: [3047, 3068, 6664, 3075, 6665, 3024], names: ['Plated', 'Sunfire Aegis', 'Kaenic', 'Thornmail', 'JakSho', "Unending Despair"] }
    },
    combos: ['Q → W → AA → E', 'R1 → R2 (knockup)', 'Brittle procs for damage'],
    counters: { strongAgainst: ['Camille', 'Riven', 'Yasuo'], weakAgainst: ['Mordekaiser', 'Vayne', 'Fiora'] }
  },
  Sion: {
    tier: 'A', difficulty: 'Medium', role: 'Tank',
    runes: {
      primary: { tree: 'Resolve', keystone: 'Grasp of the Undying', runes: ['Demolish', 'Conditioning', 'Overgrowth'] },
      secondary: { tree: 'Inspiration', runes: ['Approach Velocity', 'Biscuit Delivery'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health Scaling']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for clear and CC.' },
    itemBuilds: {
      starter: { items: [1054, 2003], names: ["Doran's Shield", 'Potion'] },
      boots: [3047],
      core: { items: [3084, 3068, 3748], names: ['Heartsteel', 'Sunfire Aegis', 'Titanic Hydra'], order: 'Heartsteel → Sunfire' },
      fullBuild: { standard: [3047, 3084, 3068, 3748, 6665, 3075], names: ['Plated', 'Heartsteel', 'Sunfire', 'Titanic Hydra', 'JakSho', 'Thornmail'] }
    },
    combos: ['E slow → Q charge', 'R ultimate engage/escape', 'Stack health with W passive'],
    counters: { strongAgainst: ['Riven', 'Irelia', 'Fiora'], weakAgainst: ['Darius', 'Mordekaiser', 'Vayne'] }
  },
  Maokai: {
    tier: 'S', difficulty: 'Easy', role: 'Tank',
    runes: {
      primary: { tree: 'Resolve', keystone: 'Aftershock', runes: ['Font of Life', 'Bone Plating', 'Revitalize'] },
      secondary: { tree: 'Inspiration', runes: ['Magical Footwear', 'Cosmic Insight'] },
      shards: ['Ability Haste', 'Health', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for waveclear/knockback.' },
    itemBuilds: {
      starter: { items: [1054, 2003], names: ["Doran's Shield", 'Potion'] },
      boots: [3047],
      core: { items: [6664, 3065, 6665], names: ['Hollow Radiance', 'Spirit Visage', 'JakSho'], order: 'Hollow → Spirit' },
      fullBuild: { standard: [3047, 6664, 3065, 3068, 3110, 6665], names: ['Plated', 'Hollow', 'Spirit', 'Sunfire', 'Frozen Heart', 'JakSho'] }
    },
    combos: ['W engage → Q → E', 'R zone control', 'Passive sustain'],
    counters: { strongAgainst: ['Riven', 'Fiora', 'Irelia'], weakAgainst: ['Darius', 'Mordekaiser', 'Vayne'] }
  },
  Chogath: {
    tier: 'A', difficulty: 'Easy', role: 'Tank',
    runes: {
      primary: { tree: 'Resolve', keystone: 'Grasp of the Undying', runes: ['Demolish', 'Second Wind', 'Overgrowth'] },
      secondary: { tree: 'Inspiration', runes: ['Magical Footwear', 'Approach Velocity'] },
      shards: ['Attack Speed', 'Health Scaling', 'Health Scaling']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for poke and waveclear.' },
    itemBuilds: {
      starter: { items: [1054, 2003], names: ["Doran's Shield", 'Potion'] },
      boots: [3047],
      core: { items: [3084, 3068, 6664], names: ['Heartsteel', 'Sunfire Aegis', 'Kaenic Rookern'], order: 'Heartsteel → Sunfire' },
      fullBuild: { standard: [3047, 3084, 3068, 6664, 3075, 6665], names: ['Plated', 'Heartsteel', 'Sunfire', 'Kaenic Rookern', 'Thornmail', 'JakSho'] }
    },
    combos: [
      'Q → W → E → AA',
      'Q → R execute',
      'E auto reset'
    ],
    counters: {
      strongAgainst: ['Malphite', 'Sion', 'DrMundo'],
      weakAgainst: ['Vayne', 'Fiora', 'Darius']
    }
  },
  Shen: {
    tier: 'S', difficulty: 'Medium', role: 'Tank',
    runes: {
      primary: { tree: 'Resolve', keystone: 'Grasp of the Undying', runes: ['Shield Bash', 'Second Wind', 'Revitalize'] },
      secondary: { tree: 'Domination', runes: ['Cheap Shot', 'Ultimate Hunter'] },
      shards: ['Attack Speed', 'Health Scaling', 'Health Scaling']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for trading.' },
    itemBuilds: {
      starter: { items: [1054, 2003], names: ["Doran's Shield", 'Potion'] },
      boots: [3047],
      core: { items: [3084, 3748, 3068], names: ['Heartsteel', 'Titanic Hydra', 'Sunfire Aegis'], order: 'Heartsteel → Titanic' },
      fullBuild: { standard: [3047, 3084, 3748, 3068, 3075, 4401], names: ['Plated', 'Heartsteel', 'Titanic', 'Sunfire', 'Thornmail', 'Kaenic Rookern'] }
    },
    combos: ['E → Q (pull through) → AA', 'R shield global', 'W auto-attack dodge'],
    counters: { strongAgainst: ['Irelia', 'Riven', 'Camille'], weakAgainst: ['Darius', 'Mordekaiser', 'Singed'] }
  },
  TahmKench: {
    tier: 'A', difficulty: 'Easy', role: 'Tank',
    runes: {
      primary: { tree: 'Resolve', keystone: 'Grasp of the Undying', runes: ['Shield Bash', 'Second Wind', 'Unflinching'] },
      secondary: { tree: 'Precision', runes: ['Triumph', 'Legend: Alacrity'] },
      shards: ['Attack Speed', 'Health Scaling', 'Health Scaling']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for poke and sustain.' },
    itemBuilds: {
      starter: { items: [1054, 2003], names: ["Doran's Shield", 'Potion'] },
      boots: [3047],
      core: { items: [3084, 3068, 3024], names: ['Heartsteel', 'Sunfire Aegis', 'Unending Despair'], order: 'Heartsteel → Sunfire' },
      fullBuild: { standard: [3047, 3084, 3068, 3024, 3075, 6665], names: ['Plated', 'Heartsteel', 'Sunfire', 'Unending Despair', 'Thornmail', 'JakSho'] }
    },
    combos: ['Q slow → W knockup → R devour', 'E active for huge shield', 'Passive stacking for stun'],
    counters: { strongAgainst: ['Tryndamere', 'Riven', 'Irelia'], weakAgainst: ['Vayne', 'Gwen', 'Fiora'] }
  },
  Poppy: {
    tier: 'S', difficulty: 'Easy', role: 'Tank',
    runes: {
      primary: { tree: 'Resolve', keystone: 'Grasp of the Undying', runes: ['Shield Bash', 'Bone Plating', 'Revitalize'] },
      secondary: { tree: 'Inspiration', runes: ['Magical Footwear', 'Biscuit Delivery'] },
      shards: ['Ability Haste', 'Armor', 'Health Scaling']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for damage.' },
    itemBuilds: {
      starter: { items: [1054, 2003], names: ["Doran's Shield", 'Potion'] },
      boots: [3047],
      core: { items: [3068, 3025, 6664], names: ['Sunfire Aegis', 'Iceborn Gauntlet', 'Kaenic Rookern'], order: 'Sunfire → Iceborn' },
      fullBuild: { standard: [3047, 3068, 3025, 6664, 3075, 6665], names: ['Plated', 'Sunfire', 'Iceborn', 'Kaenic', 'Thornmail', 'JakSho'] }
    },
    combos: ['E wall stun → AA → Q', 'W anti-dash', 'R disengage/objective'],
    counters: { strongAgainst: ['Riven', 'Irelia', 'Camille'], weakAgainst: ['Darius', 'Mordekaiser', 'Ornn'] }
  },
  Gragas: {
    tier: 'S', difficulty: 'Medium', role: 'Fighter',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Phase Rush', runes: ['Manaflow Band', 'Transcendence', 'Scorch'] },
      secondary: { tree: 'Inspiration', runes: ['Biscuit Delivery', 'Cosmic Insight'] },
      shards: ['Ability Haste', 'Adaptive Force', 'Health Scaling']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for poke.' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      boots: [3020],
      core: { items: [3100, 4645, 3157], names: ['Lich Bane', 'Shadowflame', "Zhonya's"], order: 'Lich Bane → Shadowflame' },
      fullBuild: { standard: [3020, 3100, 4645, 3157, 3089, 3135], names: ['Sorc', 'Lich Bane', 'Shadowflame', "Zhonya's", 'Rabadon', 'Void'] }
    },
    combos: ['E → Flash → R', 'Q poke', 'W damage reduction'],
    counters: { strongAgainst: ['Riven', 'Camille', 'Irelia'], weakAgainst: ['Mordekaiser', 'Darius', 'Vayne'] }
  },
  Singed: {
    tier: 'S', difficulty: 'Medium', role: 'Tank',
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Triumph', 'Legend: Tenacity', 'Last Stand'] },
      secondary: { tree: 'Sorcery', runes: ['Celerity', 'Nimbus Cloak'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health Scaling']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for poison trail.' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      boots: [3009],
      core: { items: [3116, 3151, 3165], names: ["Rylai's", "Liandry's", 'Morellonomicon'], order: "Rylai's → Liandry" },
      fullBuild: { standard: [3009, 3116, 3151, 4633, 4401, 6665], names: ['Swifties', "Rylai's", 'Liandry', 'Riftmaker', 'Force of Nature', 'JakSho'] }
    },
    combos: ['Proxy farm', 'E flip → W', 'R sustain fight'],
    counters: { strongAgainst: ['Tanks', 'Immobile'], weakAgainst: ['Teemo', 'Vayne', 'Kayle'] }
  },
  DrMundo: {
    tier: 'A', difficulty: 'Easy', role: 'Tank',
    runes: {
      primary: { tree: 'Resolve', keystone: 'Grasp of the Undying', runes: ['Demolish', 'Second Wind', 'Overgrowth'] },
      secondary: { tree: 'Inspiration', runes: ['Magical Footwear', 'Approach Velocity'] },
      shards: ['Attack Speed', 'Health Scaling', 'Health Scaling']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for poke/slow.' },
    itemBuilds: {
      starter: { items: [1054, 2003], names: ["Doran's Shield", 'Potion'] },
      boots: [3047],
      core: { items: [3084, 3068, 3065], names: ['Heartsteel', 'Sunfire Aegis', 'Spirit Visage'], order: 'Heartsteel rush' },
      fullBuild: { standard: [3047, 3084, 3068, 3065, 3075, 4401], names: ['Plated', 'Heartsteel', 'Sunfire Aegis', 'Spirit Visage', 'Thornmail', 'Kaenic Rookern'] }
    },
    combos: ['Q spam poke', 'R ultimate tanking', 'E auto reset'],
    counters: { strongAgainst: ['Ornn', 'Malphite', 'Sion'], weakAgainst: ['Vayne', 'Fiora', 'Darius'] }
  },

  // Junglers
  LeeSin: {
    tier: 'S', difficulty: 'Very Hard', role: 'JungleFighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Triumph', 'Legend: Alacrity', 'Last Stand'] },
      secondary: { tree: 'Inspiration', runes: ['Magical Footwear', 'Cosmic Insight'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for execute damage.' },
    itemBuilds: {
      starter: { items: [1102, 2003], names: ['Gustwalker Hatchling', 'Potion'] },
      boots: [3047],
      core: { items: [6692, 6610, 3071], names: ['Eclipse', 'Sundered Sky', 'Black Cleaver'], order: 'Eclipse → Sundered' },
      fullBuild: { standard: [3047, 6692, 6610, 3071, 3053, 6333], names: ['Plated', 'Eclipse', 'Sundered', 'Black Cleaver', "Sterak's", "Death's Dance"] }
    },
    combos: ['Q → Q → E → R (kick)', 'Ward → W → R (insec)', 'Flash → R (flashkick)'],
    counters: { strongAgainst: ['Evelynn', 'Karthus', 'Amumu'], weakAgainst: ['Rammus', 'Warwick', 'Viego'] }
  },
  Viego: {
    tier: 'S', difficulty: 'Hard', role: 'JungleFighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Triumph', 'Legend: Alacrity', 'Coupe de Grace'] },
      secondary: { tree: 'Inspiration', runes: ['Magical Footwear', 'Cosmic Insight'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q. Crit/Bruiser hybrid.' },
    itemBuilds: {
      starter: { items: [1102, 2031], names: ['Gustwalker', 'Refillable'] },
      boots: [3047],
      core: { items: [6672, 6610, 3053], names: ['Kraken Slayer', 'Sundered Sky', "Sterak's Gage"], order: 'Kraken → Sundered' },
      fullBuild: { standard: [3047, 6672, 6610, 3053, 6333, 3026], names: ['Plated', 'Kraken', 'Sundered', 'Sterak', 'DD', 'GA'] }
    },
    combos: ['W → Q → AA', 'E camo + AS', 'Possess → abilities → R reset'],
    counters: { strongAgainst: ['Karthus', 'Amumu', 'Sejuani'], weakAgainst: ["Rek'Sai", 'Elise'] }
  },
  Kayn: {
    tier: 'A', difficulty: 'Medium', role: 'JungleFighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Triumph', 'Legend: Haste', 'Last Stand'] },
      secondary: { tree: 'Domination', runes: ['Sudden Impact', 'Treasure Hunter'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q first. Rhaast form recommended.' },
    itemBuilds: {
      starter: { items: [1102, 2003], names: ['Gustwalker Hatchling', 'Potion'] },
      boots: [3047],
      core: { items: [6692, 3071, 3161], names: ['Eclipse', 'Black Cleaver', 'Spear of Shojin'], order: 'Eclipse → Cleaver' },
      fullBuild: { standard: [3047, 6692, 3071, 3161, 3053, 6333], names: ['Plated', 'Eclipse', 'Cleaver', 'Shojin', 'Sterak', 'DD'] }
    },
    combos: ['Blue: W → Q → R → Q', 'Red: W → Q → AA → R in', 'Form choice crucial'],
    counters: { strongAgainst: ['Evelynn', 'Nidalee', 'Kindred'], weakAgainst: ['Lee Sin', 'Elise', 'Xin Zhao'] }
  },
  Khazix: {
    tier: 'S', difficulty: 'Medium', role: 'Assassin',
    summonerSpells: ['Flash', 'Smite'],
    runes: {
      primary: { tree: 'Domination', keystone: 'Dark Harvest', runes: ['Sudden Impact', 'Eyeball Collection', 'Treasure Hunter'] },
      secondary: { tree: 'Inspiration', runes: ['Magical Footwear', 'Cosmic Insight'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Evolve Q first usually, or R for ganks.' },
    itemBuilds: {
      starter: { items: [1102, 2031], names: ['Gustwalker', 'Refillable'] },
      boots: [3158],
      core: { items: [3142, 6691, 3814], names: ["Youmuu's Ghostblade", 'Opportunity', 'Edge of Night'], order: 'Youmuu → Opportunity' },
      fullBuild: { standard: [3158, 3142, 6691, 3814, 6694, 6696], names: ['CDR Boots', "Youmuu's", 'Opportunity', 'Edge', 'Serylda', 'Axiom Arc'] }
    },
    combos: ['Isolate → Q → AA → W → E reset', 'E resets sur kills', 'Evolve Q first'],
    counters: { strongAgainst: ['Evelynn', 'Kindred', 'Nidalee'], weakAgainst: ['Lee Sin', 'Elise', 'Rammus'] }
  },
  Vi: {
    tier: 'A', difficulty: 'Easy', role: 'JungleFighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Triumph', 'Legend: Alacrity', 'Last Stand'] },
      secondary: { tree: 'Inspiration', runes: ['Magical Footwear', 'Cosmic Insight'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for engage cd.' },
    itemBuilds: {
      starter: { items: [1102, 2003], names: ['Gustwalker Hatchling', 'Potion'] },
      boots: [3047],
      core: { items: [3078, 6610, 3053], names: ['Trinity Force', 'Sundered Sky', "Sterak's"], order: 'Trinity → Sundered' },
      fullBuild: { standard: [3047, 3078, 6610, 3053, 3071, 3026], names: ['Plated', 'Trinity', 'Sundered', 'Sterak', 'Cleaver', 'GA'] }
    },
    combos: ['Q charge → E → R', 'R lockdown priority target', 'Q flash for surprise'],
    counters: { strongAgainst: ['Evelynn', 'Nidalee', 'Kindred'], weakAgainst: ['Rammus', 'Gragas', 'Morgana'] }
  },
  Amumu: {
    tier: 'S', difficulty: 'Easy', role: 'JungleTank',
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Triumph', 'Legend: Tenacity', 'Last Stand'] },
      secondary: { tree: 'Domination', runes: ['Cheap Shot', 'Ultimate Hunter'] },
      shards: ['Ability Haste', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'E > Q > W', notes: 'Max E for clear/dmg reduction.' },
    itemBuilds: {
      starter: { items: [1102, 2031], names: ['Gustwalker', 'Refillable'] },
      boots: [3047],
      core: { items: [3151, 3068, 8020], names: ["Liandry's Torment", 'Sunfire Aegis', 'Abyssal Mask'], order: "Liandry's → Sunfire" },
      fullBuild: { standard: [3047, 3151, 3068, 8020, 3075, 6665], names: ['Plated', 'Liandry', 'Sunfire', 'Abyssal', 'Thornmail', 'JakSho'] }
    },
    combos: ['Q → Q → R → E → W', 'Double Q engage', 'R → team follow up'],
    counters: { strongAgainst: ['Kindred', 'Nidalee', 'Evelynn'], weakAgainst: ['Lee Sin', 'Elise', "Rek'Sai"] }
  },
  Sejuani: {
    tier: 'A', difficulty: 'Easy', role: 'JungleTank',
    runes: {
      primary: { tree: 'Resolve', keystone: 'Aftershock', runes: ['Font of Life', 'Conditioning', 'Overgrowth'] },
      secondary: { tree: 'Precision', runes: ['Triumph', 'Alacrity'] },
      shards: ['Attack Speed', 'Health', 'Health']
    },
    skillOrder: { priority: 'W > Q > E', notes: 'Max W for clear.' },
    itemBuilds: {
      starter: { items: [1102, 2003], names: ['Gustwalker Hatchling', 'Potion'] },
      boots: [3047],
      core: { items: [3068, 3083, 3075], names: ['Sunfire', "Warmog's", 'Thornmail'], order: 'Sunfire → Warmogs' },
      fullBuild: { standard: [3047, 3068, 3083, 3075, 8020, 6665], names: ['Plated', 'Sunfire', "Warmog's", 'Thornmail', 'Abyssal', "JakSho"] }
    },
    combos: ['Q → E (stun) → W → R', 'R engage → team follow', 'Passive frost stacks'],
    counters: { strongAgainst: ['Evelynn', 'Karthus', 'Kindred'], weakAgainst: ['Lee Sin', 'Graves', 'Kindred'] }
  },
  Warwick: {
    tier: 'B', difficulty: 'Easy', role: 'JungleFighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Press the Attack', runes: ['Triumph', 'Legend: Alacrity', 'Last Stand'] },
      secondary: { tree: 'Sorcery', runes: ['Celerity', 'Waterwalking'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'W > Q > E', notes: 'Max W for speed/ganks.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3047],
      core: { items: [3074, 3078, 3053], names: ['Ravenous Hydra', 'Trinity Force', "Sterak's"], order: 'Tiamat → Trinity' },
      fullBuild: { standard: [3047, 3074, 3078, 3053, 3065, 3026], names: ['Plated', 'Ravenous', 'Trinity', 'Sterak', 'Spirit', 'GA'] }
    },
    combos: ['R engage → Q → E', 'Q hold for follow', 'Blood trail chasing'],
    counters: { strongAgainst: ['Lee Sin', 'Elise', 'Nidalee'], weakAgainst: ['Rammus', 'Lillia', 'Kindred'] }
  },
  Warwick_top: {
    tier: 'A', difficulty: 'Easy', role: 'Fighter',
    runes: {
      primary: { tree: 'Resolve', keystone: 'Grasp of the Undying', runes: ['Second Wind', 'Revitalize', 'Demolish'] },
      secondary: { tree: 'Precision', runes: ['Presence of Mind', 'Last Stand'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    summonerSpells: ['Flash', 'Barrier'],
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for sustain trades.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3047],
      core: { items: [3153, 3748, 3053], names: ['BOTRK', 'Titanic Hydra', "Sterak's Gage"], order: 'BOTRK → Titanic' },
      fullBuild: { standard: [3047, 3153, 3748, 3053, 3065, 3026], names: ['Plated', 'BOTRK', 'Titanic', 'Sterak', 'Spirit', 'GA'] }
    },
    combos: ['Barrier bait low HP', 'E fear → Q hold through CC', 'R heal']
  },
  XinZhao: {
    tier: 'A', difficulty: 'Easy', role: 'JungleFighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Triumph', 'Legend: Alacrity', 'Last Stand'] },
      secondary: { tree: 'Inspiration', runes: ['Magical Footwear', 'Cosmic Insight'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'W > E > Q', notes: 'Max W for poke/slow.' },
    itemBuilds: {
      starter: { items: [1102, 2003], names: ['Gustwalker Hatchling', 'Potion'] },
      boots: [3047],
      core: { items: [3748, 6610, 3053], names: ['Titanic Hydra', 'Sundered Sky', "Sterak's"], order: 'Titanic → Sundered' },
      fullBuild: { standard: [3047, 3748, 6610, 3053, 6333, 3026], names: ['Plated', 'Titanic', 'Sundered', 'Sterak', 'DD', 'GA'] }
    },
    combos: ['E → AA → Q × 3 → W', 'R knockback zone', 'Early ganks'],
    counters: { strongAgainst: ['Evelynn', 'Karthus', 'Fiddlesticks'], weakAgainst: ['Lee Sin', 'Elise', 'Gragas'] }
  },

  Nocturne: {
    tier: 'A', difficulty: 'Easy', role: 'JungleFighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Lethal Tempo', runes: ['Triumph', 'Legend: Alacrity', 'Last Stand'] },
      secondary: { tree: 'Domination', runes: ['Eyeball Collection', 'Ultimate Hunter'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for pathing speed.' },
    itemBuilds: {
      starter: { items: [1102, 2003], names: ['Gustwalker Hatchling', 'Potion'] },
      boots: [3047],
      core: { items: [6631, 6696, 3071], names: ['Stridebreaker', 'Axiom Arc', 'Black Cleaver'], order: 'Stride → Axiom' },
      fullBuild: { standard: [3047, 6631, 6696, 3071, 3026, 6333], names: ['Plated', 'Stride', 'Axiom', 'Cleaver', 'GA', 'DD'] }
    },
    combos: ['R → Q → AA → E → W', 'Darkness pressure', 'Ult backline'],
    counters: { strongAgainst: ['Evelynn', 'Karthus', 'Kindred'], weakAgainst: ['Lee Sin', 'Warwick', 'Rammus'] }
  },
  Hecarim: {
    tier: 'A', difficulty: 'Medium', role: 'JungleFighter',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Phase Rush', runes: ['Nimbus Cloak', 'Celerity', 'Waterwalking'] },
      secondary: { tree: 'Precision', runes: ['Triumph', 'Legend: Alacrity'] },
      shards: ['Ability Haste', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for clear.' },
    itemBuilds: {
      starter: { items: [1102, 2003], names: ['Gustwalker Hatchling', 'Potion'] },
      boots: [3158],
      core: { items: [6692, 3161, 3053], names: ['Eclipse', 'Spear of Shojin', "Sterak's Gage"], order: 'Eclipse → Shojin' },
      fullBuild: { standard: [3158, 6692, 3161, 3053, 6610, 6333], names: ['CDR Boots', 'Eclipse', 'Shojin', 'Sterak', 'Sundered Sky', 'DD'] }
    },
    combos: ['E charge → R → Q spam', 'Ghost + E', 'Fear from R'],
    counters: { strongAgainst: ['Evelynn', 'Karthus', 'Fiddlesticks'], weakAgainst: ['Warwick', 'Rammus', 'Viego'] }
  },
  RekSai: {
    tier: 'A', difficulty: 'Medium', role: 'JungleFighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Triumph', 'Legend: Alacrity', 'Last Stand'] },
      secondary: { tree: 'Inspiration', runes: ['Magical Footwear', 'Cosmic Insight'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for clear/dmg.' },
    itemBuilds: {
      starter: { items: [1102, 2031], names: ['Gustwalker', 'Refillable'] },
      boots: [3047],
      core: { items: [6631, 3071, 3053], names: ['Stridebreaker', 'Black Cleaver', "Sterak's"], order: 'Stride → Cleaver' },
      fullBuild: { standard: [3047, 6631, 3071, 3053, 3026, 6333], names: ['Plated', 'Stride', 'Cleaver', 'Sterak', 'GA', 'DD'] }
    },
    combos: ['Burrow → knockup → E', 'R execute', 'Tunnel map control'],
    counters: { strongAgainst: ['Viego', 'Kayn', 'Kindred'], weakAgainst: ['Lee Sin', 'Elise', 'Warwick'] }
  },
  Graves: {
    tier: 'A', difficulty: 'Medium', role: 'JungleFighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Fleet Footwork', runes: ['Triumph', 'Legend: Alacrity', 'Coupe de Grace'] },
      secondary: { tree: 'Domination', runes: ['Sudden Impact', 'Treasure Hunter'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for burst.' },
    itemBuilds: {
      starter: { items: [1102, 2003], names: ['Gustwalker Hatchling', 'Potion'] },
      boots: [3047],
      core: { items: [3142, 6676, 3036], names: ["Youmuu's", 'Collector', 'LDR'], order: "Youmuu's → Collector" },
      fullBuild: { standard: [3047, 3142, 6676, 3036, 3031, 3026], names: ['Plated', 'Youmuu', 'Collector', 'LDR', 'IE', 'GA'] }
    },
    combos: ['E stack → AA × 2 → Q → R', 'Kite with E', 'Smokescreen zone'],
    counters: { strongAgainst: ['Kindred', 'Nidalee', 'Karthus'], weakAgainst: ['Rammus', 'Warwick', 'Udyr'] }
  },
  Kindred: {
    tier: 'A', difficulty: 'Hard', role: 'JungleFighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Press the Attack', runes: ['Triumph', 'Legend: Alacrity', 'Last Stand'] },
      secondary: { tree: 'Domination', runes: ['Sudden Impact', 'Treasure Hunter'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q. Crit priority.' },
    itemBuilds: {
      starter: { items: [1102, 2003], names: ['Gustwalker Hatchling', 'Potion'] },
      boots: [3006],
      core: { items: [6672, 6676, 3031], names: ['Kraken Slayer', 'Collector', 'Infinity Edge'], order: 'Kraken → Collector → IE' },
      fullBuild: { standard: [3006, 6672, 6676, 3031, 3036, 3302], names: ['Berserker', 'Kraken', 'Collector', 'IE', 'LDR', 'Terminus'] }
    },
    combos: ['Q kite → E slow → AA × 3', 'Mark stacking', 'R timing crucial'],
    counters: { strongAgainst: ['Evelynn', 'Karthus', 'Amumu'], weakAgainst: ['Rammus', 'Warwick', 'Graves'] }
  },



  Belveth: {
    tier: 'A', difficulty: 'Medium', role: 'JungleFighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Triumph', 'Legend: Alacrity', 'Last Stand'] },
      secondary: { tree: 'Domination', runes: ['Sudden Impact', 'Treasure Hunter'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for movement/clear.' },
    itemBuilds: {
      starter: { items: [1102, 2003], names: ['Gustwalker Hatchling', 'Potion'] },
      boots: [3047],
      core: { items: [6672, 6631, 3071], names: ['Kraken Slayer', 'Stridebreaker', 'Black Cleaver'], order: 'Kraken → Stride' },
      fullBuild: { standard: [3047, 6672, 6631, 3071, 6333, 3026], names: ['Plated', 'Kraken', 'Stride', 'Black Cleaver', 'DD', 'GA'] }
    },
    combos: ['Q × 4 → E → AA', 'R void form', 'Rift Herald spawn'],
    counters: { strongAgainst: ['Amumu', 'Sejuani', 'Karthus'], weakAgainst: ['Lee Sin', 'Warwick', 'Rammus'] }
  },
  Briar: {
    tier: 'A', difficulty: 'Medium', role: 'JungleFighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Press the Attack', runes: ['Triumph', 'Legend: Alacrity', 'Last Stand'] },
      secondary: { tree: 'Inspiration', runes: ['Magical Footwear', 'Cosmic Insight'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'W > Q > E', notes: 'Max W for frenzy.' },
    itemBuilds: {
      starter: { items: [1102, 2003], names: ['Gustwalker Hatchling', 'Potion'] },
      boots: [3047],
      core: { items: [6610, 6630, 3071], names: ['Sundered Sky', 'Eclipse', 'Black Cleaver'], order: 'Sundered → Eclipse' },
      fullBuild: { standard: [3047, 6610, 6630, 3071, 6333, 3026], names: ['Plated', 'Sundered', 'Eclipse', 'Cleaver', 'DD', 'GA'] }
    },
    combos: ['W → E → Q', 'R global', 'Blood Frenzy'],
    counters: { strongAgainst: ['Evelynn', 'Kindred', 'Nidalee'], weakAgainst: ['Rammus', 'Warwick', 'Viego'] }
  },
  MasterYi: {
    tier: 'A', difficulty: 'Easy', role: 'JungleFighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Lethal Tempo', runes: ['Triumph', 'Legend: Alacrity', 'Last Stand'] },
      secondary: { tree: 'Domination', runes: ['Eyeball Collection', 'Treasure Hunter'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for clear/dodge.' },
    itemBuilds: {
      starter: { items: [1102, 2003], names: ['Gustwalker Hatchling', 'Potion'] },
      boots: [3006],
      core: { items: [3153, 3124, 6672], names: ['BOTRK', "Guinsoo's", 'Kraken Slayer'], order: 'BOTRK → Guinsoo' },
      fullBuild: { standard: [3006, 3153, 3124, 6672, 3091, 6333], names: ['Berserker', 'BOTRK', "Guinsoo's", 'Kraken', "Wit's End", 'DD'] }
    },
    combos: ['Q dodge → AA → E → W reset', 'R + Q resets', 'Scale late'],
    counters: { strongAgainst: ['Amumu', 'Fiddlesticks'], weakAgainst: ['Rammus', 'Warwick', 'Elise'] }
  },
  Elise: {
    tier: 'A', difficulty: 'Hard', role: 'JungleFighter',
    runes: {
      primary: { tree: 'Domination', keystone: 'Electrocute', runes: ['Cheap Shot', 'Eyeball Collection', 'Relentless Hunter'] },
      secondary: { tree: 'Precision', runes: ['Triumph', 'Coup de Grace'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for execute.' },
    itemBuilds: {
      starter: { items: [1102, 2003], names: ['Gustwalker Hatchling', 'Potion'] },
      boots: [3020],
      core: { items: [3100, 4645, 3157], names: ['Lich Bane', 'Shadowflame', "Zhonya's"], order: 'Lich Bane → Shadowflame' },
      fullBuild: { standard: [3020, 3100, 4645, 3157, 3089, 3135], names: ['Sorc', 'Lich Bane', 'Shadowflame', "Zhonya's", 'Rabadon', 'Void'] }
    },
    combos: ['Human: E → W → Q → Spider: Q → AA', 'Rappel dodge', 'Early ganks'],
    counters: { strongAgainst: ['Amumu', 'Sejuani', 'Kindred'], weakAgainst: ['Warwick', 'Viego', 'Udyr'] }
  },
  Lillia: {
    tier: 'A', difficulty: 'Medium', role: 'JungleFighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Triumph', 'Legend: Tenacity', 'Coupe de Grace'] },
      secondary: { tree: 'Sorcery', runes: ['Celerity', 'Waterwalking'] },
      shards: ['Ability Haste', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for movement.' },
    itemBuilds: {
      starter: { items: [1102, 2003], names: ['Gustwalker Hatchling', 'Potion'] },
      boots: [3158],
      core: { items: [3116, 4633, 3151], names: ["Rylai's", 'Riftmaker', "Liandry's"], order: "Liandry's → Riftmaker" },
      fullBuild: { standard: [3158, 3116, 4633, 3151, 3115, 3089], names: ['CDR Boots', "Rylai's", 'Riftmaker', "Liandry's", "Nashor's", 'Rabadon'] }
    },
    combos: ['Q prance → E long range → R sleep', 'Passive stack', 'Kite forever'],
    counters: { strongAgainst: ['Amumu', 'Sejuani', 'Volibear'], weakAgainst: ['Lee Sin', 'Elise', 'Nocturne'] }
  },
  Zac: {
    tier: 'S', difficulty: 'Easy', role: 'JungleTank',
    runes: {
      primary: { tree: 'Resolve', keystone: 'Aftershock', runes: ['Font of Life', 'Conditioning', 'Revitalize'] },
      secondary: { tree: 'Precision', runes: ['Triumph', 'Legend: Tenacity'] },
      shards: ['Ability Haste', 'Health', 'Health']
    },
    skillOrder: { priority: 'E > W > Q', notes: 'Max E for range.' },
    itemBuilds: {
      starter: { items: [1102, 2031], names: ['Gustwalker', 'Refillable'] },
      boots: [3158],
      core: { items: [3068, 3065, 6665], names: ['Sunfire', 'Spirit Visage', 'JakSho'], order: 'Sunfire → Spirit' },
      fullBuild: { standard: [3158, 3068, 3065, 3075, 6665, 6665], names: ['CDR Boots', 'Sunfire', 'Spirit', 'Thornmail', 'Abyssal', 'JakSho'] }
    },
    combos: ['E charge → Q → R', 'Blob pickup', 'Engage from fog'],
    counters: { strongAgainst: ['Evelynn', 'Karthus', 'Kindred'], weakAgainst: ['Viego', 'Graves', 'Kindred'] }
  },
  Zac_top: {
    tier: 'A', difficulty: 'Easy', role: 'Tank',
    runes: {
      primary: { tree: 'Resolve', keystone: 'Grasp of the Undying', runes: ['Font of Life', 'Second Wind', 'Revitalize'] },
      secondary: { tree: 'Precision', runes: ['Triumph', 'Last Stand'] },
      shards: ['Ability Haste', 'Health', 'Health']
    },
    skillOrder: { priority: 'W > Q > E', notes: 'Max W for sustain trades.' },
    itemBuilds: {
      starter: { items: [1054, 2003], names: ["Doran's Shield", 'Potion'] },
      boots: [3158],
      core: { items: [3068, 3065, 3075], names: ['Sunfire Aegis', 'Spirit Visage', 'Thornmail'], order: 'Sunfire → Spirit' },
      fullBuild: { standard: [3158, 3068, 3065, 3075, 6665, 4633], names: ['CDR Boots', 'Sunfire', 'Spirit', 'Thornmail', 'JakSho', 'Riftmaker'] }
    },
    combos: ['Q minion -> AA champ -> smash', 'Passive blob healing', 'E engage'],
    counters: { strongAgainst: ['Malphite', 'Ornn'], weakAgainst: ['Fiora', 'Gwen', 'Vayne'] }
  },
  Rammus: {
    tier: 'S', difficulty: 'Easy', role: 'JungleTank',
    runes: {
      primary: { tree: 'Resolve', keystone: 'Aftershock', runes: ['Font of Life', 'Conditioning', 'Unflinching'] },
      secondary: { tree: 'Precision', runes: ['Triumph', 'Legend: Alacrity'] },
      shards: ['Attack Speed', 'Armor', 'Armor']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for speed.' },
    itemBuilds: {
      starter: { items: [1102, 2003], names: ['Gustwalker Hatchling', 'Potion'] },
      boots: [3047],
      core: { items: [3075, 3068, 6665], names: ['Thornmail', 'Sunfire Aegis', 'Abyssal Mask'], order: 'Thornmail rush' },
      fullBuild: { standard: [3047, 3075, 3068, 6665, 3110, 6665], names: ['Plated', 'Thornmail', 'Sunfire', 'Abyssal', 'Frozen Heart', 'JakSho'] }
    },
    combos: ['Q → E taunt → W', 'R engage', 'Anti-AD'],
    counters: { strongAgainst: ['Lee Sin', 'Master Yi', 'Kindred'], weakAgainst: ['AP junglers', 'Lillia', 'Shyvana'] }
  },
  Nunu: {
    tier: 'A', difficulty: 'Easy', role: 'JungleTank',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Phase Rush', runes: ['Nimbus Cloak', 'Celerity', 'Waterwalking'] },
      secondary: { tree: 'Precision', runes: ['Triumph', 'Legend: Alacrity'] },
      shards: ['Ability Haste', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for sustain.' },
    itemBuilds: {
      starter: { items: [1102, 2003], names: ['Gustwalker Hatchling', 'Potion'] },
      boots: [3047],
      core: { items: [3068, 3065, 4646], names: ['Sunfire', 'Spirit Visage', 'Stormsurge'], order: 'Sunfire → Spirit' },
      fullBuild: { standard: [3047, 3068, 3065, 4646, 3075, 6665], names: ['Plated', 'Sunfire', 'Spirit', 'Stormsurge', 'Thornmail', 'JakSho'] }
    },
    combos: ['W gank → E → Q', 'R channel', 'Objective control'],
    counters: { strongAgainst: ['Kindred', 'Karthus', 'Eve'], weakAgainst: ['Lee Sin', 'Elise', 'Graves'] }
  },
  Skarner: {
    tier: 'A', difficulty: 'Easy', role: 'JungleTank',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Phase Rush', runes: ['Nimbus Cloak', 'Celerity', 'Waterwalking'] },
      secondary: { tree: 'Inspiration', runes: ['Magical Footwear', 'Cosmic Insight'] },
      shards: ['Health', 'Health', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for clear/dmg.' },
    itemBuilds: {
      starter: { items: [1102, 2003], names: ['Gustwalker Hatchling', 'Potion'] },
      boots: [3047],
      core: { items: [3084, 3068, 6610], names: ['Heartsteel', 'Sunfire', 'Sundered Sky'], order: 'Heartsteel → Sunfire' },
      fullBuild: { standard: [3047, 3084, 3068, 6610, 3075, 6665], names: ['Plated', 'Heartsteel', 'Sunfire', 'Sundered', 'Thornmail', 'JakSho'] }
    },
    combos: ['E stun → Q → W → R', 'R suppression', 'Drag carry'],
    counters: { strongAgainst: ['Evelynn', 'Kindred', 'Karthus'], weakAgainst: ['Lillia', 'Kindred', 'Graves'] }
  },
  Udyr: {
    tier: 'B', difficulty: 'Easy', role: 'JungleTank',
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Triumph', 'Legend: Alacrity', 'Last Stand'] },
      secondary: { tree: 'Resolve', runes: ['Conditioning', 'Unflinching'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'R > W > E', notes: 'Max R for Phoenix clear.' },
    itemBuilds: {
      starter: { items: [1102, 2003], names: ['Gustwalker Hatchling', 'Potion'] },
      boots: [3009],
      core: { items: [3151, 3742, 3065], names: ["Liandry's", "Dead Man's", 'Spirit Visage'], order: "Liandry's → Deadmans" },
      fullBuild: { standard: [3009, 3151, 3742, 3065, 3110, 6665], names: ['Swifties', "Liandry's", 'Deadmans', 'Spirit', 'Frozen Heart', 'JakSho'] }
    },
    combos: ['E stun → Q', 'R waveclear', 'Bear stance gank'],
    counters: { strongAgainst: ['Kindred', 'Karthus', 'Evelynn'], weakAgainst: ['Lillia', 'Viego', 'Graves'] }
  },
  Udyr_top: {
    tier: 'A', difficulty: 'Medium', role: 'Juggernaut',
    runes: {
      primary: { tree: 'Resolve', keystone: 'Grasp of the Undying', runes: ['Shield Bash', 'Second Wind', 'Unflinching'] },
      secondary: { tree: 'Inspiration', runes: ['Biscuit Delivery', 'Approach Velocity'] },
      shards: ['Ability Haste', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'R > W > E', notes: 'Max R for waveclear/poke.' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      boots: [3009],
      core: { items: [3151, 3110, 3065], names: ["Liandry's Torment", 'Frozen Heart', 'Spirit Visage'], order: "Liandry's → Tank" },
      fullBuild: { standard: [3009, 3151, 3110, 3065, 6665, 4633], names: ['Swifties', "Liandry's", 'Frozen Heart', 'Spirit', 'JakSho', 'Riftmaker'] }
    },
    combos: ['R awakening waveclear', 'W awakening sustain', 'E stun trade'],
    counters: { strongAgainst: ['Melee tanks', 'Nasus'], weakAgainst: ['Vayne', 'Quinn', 'Jayce'] }
  },
  Shyvana: {
    tier: 'B', difficulty: 'Easy', role: 'JungleFighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Press the Attack', runes: ['Triumph', 'Legend: Alacrity', 'Last Stand'] },
      secondary: { tree: 'Sorcery', runes: ['Celerity', 'Waterwalking'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'E > W > Q', notes: 'Max E for pokeball damage.' },
    itemBuilds: {
      starter: { items: [1102, 2003], names: ['Gustwalker Hatchling', 'Potion'] },
      boots: [3020],
      core: { items: [3161, 3151, 4633], names: ['Spear of Shojin', "Liandry's", 'Riftmaker'], order: 'Shojin → Liandry' },
      fullBuild: { standard: [3020, 3161, 3151, 4633, 3157, 3089], names: ['Sorc', 'Shojin', "Liandry's", 'Riftmaker', "Zhonya's", 'Rabadon'] }
    },
    combos: ['R engage → E → Q', 'Dragon form', 'Objective focus'],
    counters: { strongAgainst: ['Rammus', 'Sejuani', 'Karthus'], weakAgainst: ['Lee Sin', 'Elise', 'Kindred'] }
  },
  Ivern: {
    tier: 'S', difficulty: 'Hard', role: 'SupportEnchant',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Summon Aery', runes: ['Nimbus Cloak', 'Transcendence', 'Waterwalking'] },
      secondary: { tree: 'Domination', runes: ['Eyeball Collection', 'Relentless Hunter'] },
      shards: ['Ability Haste', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'E > Q > W', notes: 'Max E for shield.' },
    itemBuilds: {
      starter: { items: [1102, 2031], names: ['Gustwalker', 'Refillable'] },
      boots: [3158],
      core: { items: [6617, 3107, 3504], names: ['Moonstone Renewer', 'Redemption', 'Ardent Censer'], order: 'Moonstone → Redemption' },
      fullBuild: { standard: [3158, 6617, 3107, 3504, 6621, 4642], names: ['CDR Boots', 'Moonstone', 'Redemption', 'Ardent', 'Dawncore', 'Mikael'] }
    },
    combos: ['Q link → ally dash', 'E shield + slow', 'Daisy control'],
    counters: { strongAgainst: ['Evelynn', 'Karthus'], weakAgainst: ['Lee Sin', 'Graves', 'Kindred'] }
  },
  Fiddlesticks: {
    tier: 'S', difficulty: 'Medium', role: 'Mage',
    summonerSpells: ['Flash', 'Smite'],
    runes: {
      primary: { tree: 'Domination', keystone: 'First Strike', runes: ['Cheap Shot', 'Eyeball Collection', 'Ultimate Hunter'] },
      secondary: { tree: 'Inspiration', runes: ['Cosmic Insight', 'Future Market'] },
      shards: ['Ability Haste', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'W > Q > E', notes: 'Max W for clear/sustain.' },
    itemBuilds: {
      starter: { items: [1102, 2031], names: ['Gustwalker', 'Refillable'] },
      boots: [3020],
      core: { items: [3118, 3157, 4645], names: ['Malignance', "Zhonya's", 'Shadowflame'], order: 'Malignance → Zhonya' },
      fullBuild: { standard: [3020, 3118, 3157, 4645, 3089, 3135], names: ['Sorc', 'Malignance', "Zhonya's", 'Shadowflame', 'Rabadon', 'Void'] }
    },
    combos: ['R from fog → E → W → Q', 'Fear crucial', 'Vision control'],
    counters: { strongAgainst: ['Kindred', 'Amumu', 'Sejuani'], weakAgainst: ['Lee Sin', 'Elise', 'Nocturne'] }
  },
  Evelynn: {
    tier: 'A', difficulty: 'Medium', role: 'Assassin',
    summonerSpells: ['Flash', 'Smite'],
    runes: {
      primary: { tree: 'Domination', keystone: 'Electrocute', runes: ['Sudden Impact', 'Eyeball Collection', 'Relentless Hunter'] },
      secondary: { tree: 'Sorcery', runes: ['Absolute Focus', 'Gathering Storm'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for clear/dmg.' },
    itemBuilds: {
      starter: { items: [1102, 2003], names: ['Gustwalker Hatchling', 'Potion'] },
      boots: [3020],
      core: { items: [3100, 3089, 3135], names: ['Lich Bane', "Rabadon's", 'Void Staff'], order: 'Lich Bane → Rabadon' },
      fullBuild: { standard: [3020, 3100, 3089, 3135, 4645, 3152], names: ['Sorc', 'Lich Bane', 'Rabadon', 'Void', 'Shadowflame', 'Rocketbelt'] }
    },
    combos: ['W charm → E → Q × n → R', 'R execute', 'Stealth 6+'],
    counters: { strongAgainst: ['Karthus', 'Fiddlesticks', 'Amumu'], weakAgainst: ['Lee Sin', 'Elise', 'Rengar'] }
  },
  Rengar: {
    tier: 'A', difficulty: 'Hard', role: 'Assassin',
    summonerSpells: ['Flash', 'Smite'],
    runes: {
      primary: { tree: 'Domination', keystone: 'Electrocute', runes: ['Sudden Impact', 'Eyeball Collection', 'Ultimate Hunter'] },
      secondary: { tree: 'Precision', runes: ['Triumph', 'Legend: Alacrity'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for burst.' },
    itemBuilds: {
      starter: { items: [1102, 2003], names: ['Gustwalker Hatchling', 'Potion'] },
      boots: [3158],
      core: { items: [6698, 6697, 3814], names: ['Profane Hydra', 'Hubris', 'Edge of Night'], order: 'Profane → Hubris' },
      fullBuild: { standard: [3158, 6698, 6697, 3814, 6701, 3026], names: ['CDR Boots', 'Profane', 'Hubris', 'Edge', 'Opportunity', 'GA'] }
    },
    combos: ['Leap → E → W → Q', 'R → leap assassinate', 'Bush resets'],
    counters: { strongAgainst: ['ADCs', 'Kindred', 'Karthus'], weakAgainst: ['Warwick', 'Rammus', 'Viego'] }
  },
  Shaco: {
    tier: 'A', difficulty: 'Hard', role: 'Assassin',
    summonerSpells: ['Flash', 'Smite'],
    runes: {
      primary: { tree: 'Domination', keystone: 'Hail of Blades', runes: ['Sudden Impact', 'Eyeball Collection', 'Relentless Hunter'] },
      secondary: { tree: 'Precision', runes: ['Triumph', 'Alacrity'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'E > Q > W', notes: 'Max E for slow/dmg.' },
    itemBuilds: {
      starter: { items: [1102, 2003], names: ['Gustwalker Hatchling', 'Potion'] },
      boots: [3006],
      core: { items: [3142, 6699, 3814], names: ["Youmuu's", 'Voltaic Cyclosword', 'Edge of Night'], order: "Youmuu's → Cyclosword" },
      fullBuild: { standard: [3006, 3142, 6699, 3814, 6694, 3031], names: ['Berserker', 'Youmuu', 'Voltaic Cyclosword', 'Edge', "Serylda's", 'IE'] }
    },
    combos: ['Q stealth → E → AA', 'Clone mind games', 'Box zones'],
    counters: { strongAgainst: ['Kindred', 'Karthus', 'Evelynn'], weakAgainst: ['Lee Sin', 'Warwick', 'Viego'] }
  },
  Nidalee: {
    tier: 'S', difficulty: 'Very Hard', role: 'JungleFighter',
    runes: {
      primary: { tree: 'Domination', keystone: 'Dark Harvest', runes: ['Sudden Impact', 'Eyeball Collection', 'Treasure Hunter'] },
      secondary: { tree: 'Sorcery', runes: ['Transcendence', 'Waterwalking'] },
      shards: ['Ability Haste', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for spear dmg.' },
    itemBuilds: {
      starter: { items: [1102, 2003], names: ['Gustwalker Hatchling', 'Potion'] },
      boots: [3020],
      core: { items: [3100, 4645, 3089], names: ['Lich Bane', 'Shadowflame', "Rabadon's"], order: 'Lich Bane → Shadowflame' },
      fullBuild: { standard: [3020, 3100, 4645, 3089, 3157, 3135], names: ['Sorc', 'Lich Bane', 'Shadowflame', 'Rabadon', "Zhonya's", 'Void'] }
    },
    combos: ['Human Q → Cougar combo', 'W trap', 'Heal in fights'],
    counters: { strongAgainst: ['Karthus', 'Fiddlesticks', 'Amumu'], weakAgainst: ['Warwick', 'Rammus', 'Viego'] }
  },

  // Supports (Season 16)
  Thresh: {
    tier: 'S', difficulty: 'Hard', role: 'SupportTank',
    runes: {
      primary: { tree: 'Resolve', keystone: 'Aftershock', runes: ['Font of Life', 'Bone Plating', 'Unflinching'] },
      secondary: { tree: 'Inspiration', runes: ['Glacial Augment', 'Cosmic Insight'] },
      shards: ['Ability Haste', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for hooks.' },
    itemBuilds: {
      starter: { items: [3867, 2003], names: ['World Atlas', 'Potion'] },
      boots: [3158],
      core: { items: [3869, 3190, 3110], names: ['Solstice Sleigh', 'Locket', 'Frozen Heart'], order: 'Sleigh → Locket' },
      fullBuild: { standard: [3158, 3869, 3190, 3110, 3109, 3050], names: ['CDR Boots', 'Solstice', 'Locket', 'Frozen Heart', 'Vow', "Zeke's"] }
    },
    combos: ['Q → Q2 → E → R', 'W lantern save', 'E interrupt'],
    counters: { strongAgainst: ['Leona', 'Nautilus', 'Engage'], weakAgainst: ['Morgana', 'Zyra', 'Brand'] }
  },
  Nautilus: {
    tier: 'S', difficulty: 'Easy', role: 'SupportTank',
    runes: {
      primary: { tree: 'Resolve', keystone: 'Aftershock', runes: ['Shield Bash', 'Conditioning', 'Overgrowth'] },
      secondary: { tree: 'Inspiration', runes: ['Hextech Flashtraption', 'Cosmic Insight'] },
      shards: ['Ability Haste', 'Health', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for CD.' },
    itemBuilds: {
      starter: { items: [3867, 2003], names: ['World Atlas', 'Potion'] },
      boots: [3047],
      core: { items: [3877, 3050, 3109], names: ['Celestial Opposition', "Zeke's Convergence", "Knight's Vow"], order: 'Celestial → Zeke' },
      fullBuild: { standard: [3047, 3877, 3050, 3109, 3190, 3075], names: ['Plated', 'Celestial', "Zeke's", 'Vow', 'Locket', 'Thornmail'] }
    },
    combos: ['Q → AA (root) → W → E', 'R point-click knockup', 'Flash AA'],
    counters: { strongAgainst: ['Sona', 'Yuumi', 'Soraka'], weakAgainst: ['Morgana', 'Braum', 'Alistar'] }
  },
  Leona: {
    tier: 'S', difficulty: 'Easy', role: 'SupportTank',
    runes: {
      primary: { tree: 'Resolve', keystone: 'Aftershock', runes: ['Font of Life', 'Bone Plating', 'Unflinching'] },
      secondary: { tree: 'Inspiration', runes: ['Hextech Flashtraption', 'Cosmic Insight'] },
      shards: ['Ability Haste', 'Armor', 'Health']
    },
    skillOrder: { priority: 'W > E > Q', notes: 'Max W for tankiness.' },
    itemBuilds: {
      starter: { items: [3867, 2003], names: ['World Atlas', 'Potion'] },
      boots: [3047],
      core: { items: [3869, 3190, 3050], names: ['Solstice Sleigh', 'Locket', "Zeke's Convergence"], order: 'Sleigh → Locket' },
      fullBuild: { standard: [3047, 3869, 3190, 3050, 3109, 3075], names: ['Plated', 'Solstice', 'Locket', "Zeke's", 'Vow', 'Thornmail'] }
    },
    combos: ['E → Q → W → R', 'R engage long range', 'Chain CC'],
    counters: { strongAgainst: ['Sona', 'Soraka', 'Nami'], weakAgainst: ['Morgana', 'Janna', 'Braum'] }
  },
  Lulu: {
    tier: 'A', difficulty: 'Easy', role: 'SupportEnchant',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Summon Aery', runes: ['Manaflow Band', 'Transcendence', 'Scorch'] },
      secondary: { tree: 'Inspiration', runes: ['Biscuit Delivery', 'Cosmic Insight'] },
      shards: ['Ability Haste', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'E > W > Q', notes: 'Max E for shield.' },
    itemBuilds: {
      starter: { items: [3867, 2003], names: ['World Atlas', 'Potion'] },
      boots: [3158],
      core: { items: [3876, 6617, 3504], names: ['Dream Maker', 'Moonstone Renewer', 'Ardent Censer'], order: 'Dream → Moonstone' },
      fullBuild: { standard: [3158, 3876, 6617, 3504, 3107, 4642], names: ['CDR Boots', 'Dream Maker', 'Moonstone', 'Ardent', 'Redemption', 'Mikael'] }
    },
    combos: ['E on enemy → Q (pix poke)', 'W polymorph divers', 'R on diving ally'],
    counters: { strongAgainst: ['Zed', 'Talon', 'Assassins'], weakAgainst: ['Nautilus', 'Blitzcrank', 'Zyra'] }
  },
  Nami: {
    tier: 'S', difficulty: 'Medium', role: 'SupportEnchant',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Summon Aery', runes: ['Manaflow Band', 'Transcendence', 'Scorch'] },
      secondary: { tree: 'Inspiration', runes: ['Biscuit Delivery', 'Cosmic Insight'] },
      shards: ['Ability Haste', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'W > E > Q', notes: 'Max W for trade.' },
    itemBuilds: {
      starter: { items: [3867, 2003], names: ['World Atlas', 'Potion'] },
      boots: [3158],
      core: { items: [3876, 6617, 3107], names: ['Dream Maker', 'Moonstone Renewer', 'Redemption'], order: 'Dream → Moonstone' },
      fullBuild: { standard: [3158, 3876, 6617, 3107, 6616, 3504], names: ['CDR Boots', 'Dream Maker', 'Moonstone', 'Redemption', 'Staff', 'Ardent'] }
    },
    combos: ['W bounce heal/poke', 'Q → R → W', 'E on ADC for slows'],
    counters: { strongAgainst: ['Soraka', 'Sona', 'Yuumi'], weakAgainst: ['Nautilus', 'Leona', 'Blitzcrank'] }
  },
  Soraka: {
    tier: 'A', difficulty: 'Easy', role: 'SupportEnchant',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Summon Aery', runes: ['Manaflow Band', 'Transcendence', 'Scorch'] },
      secondary: { tree: 'Resolve', runes: ['Revitalize', 'Bone Plating'] },
      shards: ['Ability Haste', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'W > Q > E', notes: 'Max W for heals.' },
    itemBuilds: {
      starter: { items: [3867, 2003], names: ['World Atlas', 'Potion'] },
      boots: [3158],
      core: { items: [3876, 6617, 3107], names: ['Dream Maker', 'Moonstone Renewer', 'Redemption'], order: 'Dream → Moonstone' },
      fullBuild: { standard: [3158, 3876, 6617, 3107, 3504, 3222], names: ['CDR Boots', 'Dream Maker', 'Moonstone', 'Redemption', 'Ardent', 'Mikael'] }
    },
    combos: ['Q poke → W heal', 'E silence zone', 'R global heal clutch'],
    counters: { strongAgainst: ['Lulu', 'Janna', 'Sona'], weakAgainst: ['Blitzcrank', 'Nautilus', 'Pyke'] }
  },
  Janna: {
    tier: 'A', difficulty: 'Easy', role: 'SupportEnchant',
    runes: {
      primary: { tree: 'Inspiration', keystone: 'Glacial Augment', runes: ['Magical Footwear', 'Biscuit Delivery', 'Cosmic Insight'] },
      secondary: { tree: 'Sorcery', runes: ['Celerity', 'Gathering Storm'] },
      shards: ['Ability Haste', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'E > W > Q', notes: 'Max E for shield.' },
    itemBuilds: {
      starter: { items: [3867, 2003], names: ['World Atlas', 'Potion'] },
      boots: [3158],
      core: { items: [3876, 6617, 3107], names: ['Dream Maker', 'Moonstone Renewer', 'Redemption'], order: 'Dream → Moonstone' },
      fullBuild: { standard: [3158, 3876, 6617, 3107, 3504, 6621], names: ['CDR Boots', 'Dream Maker', 'Moonstone', 'Redemption', 'Ardent', 'Dawncore'] }
    },
    combos: ['Q tornado disengage', 'W poke', 'R heal + knockback'],
    counters: { strongAgainst: ['Leona', 'Alistar', 'Nautilus'], weakAgainst: ['Zyra', 'Brand', 'Vel\'Koz'] }
  },
  Blitzcrank: {
    tier: 'S', difficulty: 'Medium', role: 'SupportTank',
    runes: {
      primary: { tree: 'Inspiration', keystone: 'Glacial Augment', runes: ['Hextech Flashtraption', 'Biscuit Delivery', 'Cosmic Insight'] },
      secondary: { tree: 'Resolve', runes: ['Bone Plating', 'Overgrowth'] },
      shards: ['Ability Haste', 'Health', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for pick.' },
    itemBuilds: {
      starter: { items: [3867, 2003], names: ['World Atlas', 'Potion'] },
      boots: [3009],
      core: { items: [3877, 3050, 3110], names: ['Celestial Opposition', "Zeke's Convergence", 'Frozen Heart'], order: 'Celestial → Zeke' },
      fullBuild: { standard: [3009, 3877, 3050, 3110, 3190, 3109], names: ['Swifties', 'Celestial', "Zeke's", 'Frozen Heart', 'Locket', 'Vow'] }
    },
    combos: ['Q → E → R', 'Flash → Q (surprise hook)', 'Bush control'],
    counters: { strongAgainst: ['Soraka', 'Sona', 'Yuumi'], weakAgainst: ['Morgana', 'Sivir', 'Ezreal'] }
  },
  Pyke: {
    tier: 'S', difficulty: 'Hard', role: 'Assassin',
    runes: {
      primary: { tree: 'Domination', keystone: 'Hail of Blades', runes: ['Sudden Impact', 'Zombie Ward', 'Treasure Hunter'] },
      secondary: { tree: 'Inspiration', runes: ['Biscuit Delivery', 'Cosmic Insight'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for hook cooldown.' },
    itemBuilds: {
      starter: { items: [3867, 2003], names: ['World Atlas', 'Potion'] },
      boots: [3009],
      core: { items: [3870, 3179, 6699], names: ['Bloodsong', 'Umbral Glaive', 'Voltaic Cyclosword'], order: 'Bloodsong → Umbral' },
      fullBuild: { standard: [3009, 3870, 3179, 6699, 3142, 6609], names: ['Swifties', 'Bloodsong', 'Umbral', 'Cyclosword', 'Youmuu', 'Edge'] }
    },
    combos: ['Q charge → E → R execute', 'E → Flash → Q → R', 'R resets on kills'],
    counters: { strongAgainst: ['Soraka', 'Sona', 'Yuumi'], weakAgainst: ['Nautilus', 'Morgana', 'Alistar'] }
  },
  Alistar: {
    tier: 'S', difficulty: 'Easy', role: 'SupportTank',
    runes: {
      primary: { tree: 'Resolve', keystone: 'Aftershock', runes: ['Font of Life', 'Bone Plating', 'Unflinching'] },
      secondary: { tree: 'Inspiration', runes: ['Hextech Flashtraption', 'Cosmic Insight'] },
      shards: ['Ability Haste', 'Health', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for CD.' },
    itemBuilds: {
      starter: { items: [3867, 2003], names: ['World Atlas', 'Potion'] },
      boots: [3158],
      core: { items: [3869, 3190, 3110], names: ['Solstice Sleigh', 'Locket', 'Frozen Heart'], order: 'Sleigh → Locket' },
      fullBuild: { standard: [3158, 3869, 3190, 3110, 3109, 3050], names: ['CDR Boots', 'Solstice', 'Locket', 'Frozen Heart', 'Vow', "Zeke's"] }
    },
    combos: ['W → Q (Headbutt-Pulverize)', 'Q → Flash', 'E charge → stun'],
    counters: { strongAgainst: ['Blitzcrank', 'Leona', 'Nautilus'], weakAgainst: ['Morgana', 'Janna', 'Braum'] }
  },
  Braum: {
    tier: 'S', difficulty: 'Medium', role: 'SupportTank',
    runes: {
      primary: { tree: 'Resolve', keystone: 'Guardian', runes: ['Font of Life', 'Bone Plating', 'Unflinching'] },
      secondary: { tree: 'Precision', runes: ['Triumph', 'Legend: Alacrity'] },
      shards: ['Ability Haste', 'Armor', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for slow/dmg.' },
    itemBuilds: {
      starter: { items: [3867, 2003], names: ['World Atlas', 'Potion'] },
      boots: [3047],
      core: { items: [3869, 3190, 3109], names: ['Solstice Sleigh', 'Locket', "Knight's Vow"], order: 'Sleigh → Locket' },
      fullBuild: { standard: [3047, 3869, 3190, 3109, 3110, 3075], names: ['Plated', 'Solstice', 'Locket', 'Vow', 'Frozen Heart', 'Thornmail'] }
    },
    combos: ['Q → AA → Passive stun', 'W to ally → E shield', 'R teamfight engage/peel'],
    counters: { strongAgainst: ['Leona', 'Nautilus', 'Blitzcrank'], weakAgainst: ['Morgana', 'Zyra', 'Brand'] }
  },
  Rell: {
    tier: 'S', difficulty: 'Hard', role: 'SupportTank',
    runes: {
      primary: { tree: 'Resolve', keystone: 'Aftershock', runes: ['Shield Bash', 'Bone Plating', 'Unflinching'] },
      secondary: { tree: 'Inspiration', runes: ['Hextech Flashtraption', 'Cosmic Insight'] },
      shards: ['Ability Haste', 'Health', 'Health']
    },
    skillOrder: { priority: 'W > E > Q', notes: 'Max W for engage.' },
    itemBuilds: {
      starter: { items: [3867, 2003], names: ['World Atlas', 'Potion'] },
      boots: [3047],
      core: { items: [3877, 3109, 3190], names: ['Celestial Opposition', "Knight's Vow", 'Locket'], order: 'Celestial → Vow' },
      fullBuild: { standard: [3047, 3877, 3109, 3190, 3050, 3110], names: ['Plated', 'Celestial', 'Vow', 'Locket', "Zeke's", 'Frozen Heart'] }
    },
    combos: ['W mount up/off → AA', 'E dash → R pull', 'Chain CC'],
    counters: { strongAgainst: ['Leona', 'Nautilus', 'Blitzcrank'], weakAgainst: ['Morgana', 'Thresh', 'Janna'] }
  },
  Taric: {
    tier: 'B', difficulty: 'Medium', role: 'SupportTank',
    runes: {
      primary: { tree: 'Inspiration', keystone: 'Glacial Augment', runes: ['Magical Footwear', 'Biscuit Delivery', 'Cosmic Insight'] },
      secondary: { tree: 'Resolve', runes: ['Font of Life', 'Revitalize'] },
      shards: ['Ability Haste', 'Armor', 'Health']
    },
    skillOrder: { priority: 'E > Q > W', notes: 'Max E for stun.' },
    itemBuilds: {
      starter: { items: [3867, 2003], names: ['World Atlas', 'Potion'] },
      boots: [3047],
      core: { items: [3869, 3109, 3024], names: ['Solstice Sleigh', "Knight's Vow", 'Fimbulwinter'], order: 'Sleigh → Vow' },
      fullBuild: { standard: [3047, 3869, 3109, 3024, 3190, 3075], names: ['Plated', 'Solstice', 'Vow', 'Fimbul', 'Locket', 'Thornmail'] }
    },
    combos: ['E stun → Q × n', 'R invulnerability timing', 'W link to diver'],
    counters: { strongAgainst: ['Assassins', 'Burst'], weakAgainst: ['Morgana', 'Zyra', 'Brand'] }
  },
  Rakan: {
    tier: 'S', difficulty: 'Medium', role: 'SupportTank',
    runes: {
      primary: { tree: 'Resolve', keystone: 'Guardian', runes: ['Font of Life', 'Bone Plating', 'Unflinching'] },
      secondary: { tree: 'Domination', runes: ['Zombie Ward', 'Ultimate Hunter'] },
      shards: ['Ability Haste', 'Health', 'Health']
    },
    skillOrder: { priority: 'W > E > Q', notes: 'Max W for engage.' },
    itemBuilds: {
      starter: { items: [3867, 2003], names: ['World Atlas', 'Potion'] },
      boots: [3158],
      core: { items: [3869, 3050, 3190], names: ['Solstice Sleigh', "Zeke's Convergence", 'Locket'], order: 'Sleigh → Zeke' },
      fullBuild: { standard: [3158, 3869, 3050, 3190, 3109, 3026], names: ['CDR Boots', 'Solstice', "Zeke's", 'Locket', 'Vow', "GA"] }
    },
    combos: ['R → Flash → W → E out', 'E → W → E', 'W knockup'],
    counters: { strongAgainst: ['Sona', 'Soraka', 'Yuumi'], weakAgainst: ['Morgana', 'Alistar', 'Braum'] }
  },
  Karma: {
    tier: 'S', difficulty: 'Easy', role: 'SupportEnchant',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Summon Aery', runes: ['Manaflow Band', 'Transcendence', 'Scorch'] },
      secondary: { tree: 'Inspiration', runes: ['Biscuit Delivery', 'Cosmic Insight'] },
      shards: ['Ability Haste', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for poke.' },
    itemBuilds: {
      starter: { items: [3867, 2003], names: ['World Atlas', 'Potion'] },
      boots: [3158],
      core: { items: [3871, 3116, 2065], names: ["Zaz'Zaq's", "Liandry's", 'Shurelya'], order: "Zaz'Zaq → Liandry" },
      fullBuild: { standard: [3158, 3871, 3116, 2065, 6621, 3107], names: ['CDR Boots', "Zaz'Zaq", 'Liandry', 'Shurelya', 'Dawncore', 'Redemption'] }
    },
    combos: ['Mantra Q poke', 'Mantra E team shield', 'W tether root'],
    counters: { strongAgainst: ['Leona', 'Nautilus', 'Blitzcrank'], weakAgainst: ['Sona', 'Nami', 'Soraka'] }
  },
  Yuumi: {
    tier: 'B', difficulty: 'Easy', role: 'SupportEnchant',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Summon Aery', runes: ['Manaflow Band', 'Transcendence', 'Scorch'] },
      secondary: { tree: 'Precision', runes: ['Presence of Mind', 'Cut Down'] },
      shards: ['Ability Haste', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for poke.' },
    itemBuilds: {
      starter: { items: [3867, 2003], names: ['World Atlas', 'Potion'] },
      boots: [3158],
      core: { items: [3876, 6617, 3504], names: ['Dream Maker', 'Moonstone Renewer', 'Ardent Censer'], order: 'Dream → Moonstone' },
      fullBuild: { standard: [3158, 3876, 6617, 3504, 3107, 3222], names: ['CDR Boots', 'Dream Maker', 'Moonstone', 'Ardent', 'Redemption', 'Mikael'] }
    },
    combos: ['Attach → Q', 'R roots', 'E heal/MS'],
    counters: { strongAgainst: ['Poke lanes'], weakAgainst: ['Nautilus', 'Leona', 'Hook supports'] }
  },
  Milio: {
    tier: 'A', difficulty: 'Easy', role: 'SupportEnchant',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Summon Aery', runes: ['Manaflow Band', 'Transcendence', 'Scorch'] },
      secondary: { tree: 'Inspiration', runes: ['Biscuit Delivery', 'Cosmic Insight'] },
      shards: ['Ability Haste', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'E > W > Q', notes: 'Max E for Shield.' },
    itemBuilds: {
      starter: { items: [3867, 2003], names: ['World Atlas', 'Potion'] },
      boots: [3158],
      core: { items: [3876, 6617, 3504], names: ['Dream Maker', 'Moonstone', 'Ardent'], order: 'Dream → Moonstone' },
      fullBuild: { standard: [3158, 3876, 6617, 3504, 3107, 3222], names: ['CDR Boots', 'Dream Maker', 'Moonstone', 'Ardent', 'Redemption', 'Mikael'] }
    },
    combos: ['Q poke', 'E shield + range', 'R cleanse + heal'],
    counters: { strongAgainst: ['Assassins', 'Divers'], weakAgainst: ['Nautilus', 'Leona', 'Engage'] }
  },
  Renata: {
    tier: 'A', difficulty: 'Medium', role: 'SupportEnchant',
    runes: {
      primary: { tree: 'Resolve', keystone: 'Guardian', runes: ['Shield Bash', 'Bone Plating', 'Revitalize'] },
      secondary: { tree: 'Inspiration', runes: ['Biscuit Delivery', 'Cosmic Insight'] },
      shards: ['Ability Haste', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'E > W > Q', notes: 'Max E for shield/poke.' },
    itemBuilds: {
      starter: { items: [3867, 2003], names: ['World Atlas', 'Potion'] },
      boots: [3158],
      core: { items: [3877, 3190, 2065], names: ['Celestial Opposition', 'Locket', 'Shurelya'], order: 'Celestial → Locket' },
      fullBuild: { standard: [3158, 3877, 3190, 2065, 3107, 6665], names: ['CDR Boots', 'Celestial', 'Locket', 'Shurelya', 'Redemption', 'JakSho'] }
    },
    combos: ['Q hook', 'W bailout save', 'R enemy team fight'],
    counters: { strongAgainst: ['Engage supports'], weakAgainst: ['Poke lanes', 'Zyra', 'Brand'] }
  },
  Morgana: {
    tier: 'S', difficulty: 'Easy', role: 'SupportEnchant',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Arcane Comet', runes: ['Manaflow Band', 'Transcendence', 'Scorch'] },
      secondary: { tree: 'Inspiration', runes: ['Biscuit Delivery', 'Cosmic Insight'] },
      shards: ['Ability Haste', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for root duration.' },
    itemBuilds: {
      starter: { items: [3867, 2003], names: ['World Atlas', 'Potion'] },
      boots: [3020],
      core: { items: [3871, 3157, 3116], names: ["Zaz'Zaq's", "Zhonya's", "Liandry's"], order: "Zaz'Zaq → Zhonya" },
      fullBuild: { standard: [3020, 3871, 3157, 3116, 4637, 3089], names: ['Sorc', "Zaz'Zaq", "Zhonya's", "Liandry's", 'Horizon Focus', 'Rabadon'] }
    },
    combos: ['Q root → W puddle', 'E Black Shield', 'Flash → R → Zhonya'],
    counters: { strongAgainst: ['Blitzcrank', 'Leona', 'Thresh'], weakAgainst: ['Sona', 'Soraka', 'Brand'] }
  },
  Zilean: {
    tier: 'A', difficulty: 'Medium', role: 'SupportEnchant',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Summon Aery', runes: ['Manaflow Band', 'Transcendence', 'Gathering Storm'] },
      secondary: { tree: 'Domination', runes: ['Zombie Ward', 'Ultimate Hunter'] },
      shards: ['Ability Haste', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for stun.' },
    itemBuilds: {
      starter: { items: [3867, 2003], names: ['World Atlas', 'Potion'] },
      boots: [3158],
      core: { items: [3869, 2065, 3165], names: ['Solstice Sleigh', 'Shurelya', 'Morellonomicon'], order: 'Solstice → Shurelya' },
      fullBuild: { standard: [3158, 3869, 2065, 3165, 3157, 6616], names: ['CDR Boots', 'Solstice', 'Shurelya', 'Morello', "Zhonya's", 'Staff'] }
    },
    combos: ['Q → W → Q (double bomb stun)', 'E speed/slow', 'R revive timing'],
    counters: { strongAgainst: ['Engage supports'], weakAgainst: ['Poke lanes', 'Brand', 'Zyra'] }
  },
  Bard: {
    tier: 'S', difficulty: 'Hard', role: 'SupportEnchant',
    runes: {
      primary: { tree: 'Resolve', keystone: 'Guardian', runes: ['Font of Life', 'Bone Plating', 'Unflinching'] },
      secondary: { tree: 'Domination', runes: ['Zombie Ward', 'Relentless Hunter'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for stun.' },
    itemBuilds: {
      starter: { items: [3867, 2003], names: ['World Atlas', 'Potion'] },
      boots: [3009],
      core: { items: [3869, 3190, 6617], names: ['Solstice Sleigh', 'Locket', 'Moonstone'], order: 'Solstice → Locket' },
      fullBuild: { standard: [3009, 3869, 3190, 6617, 3110, 3109], names: ['Swifties', 'Solstice', 'Locket', 'Moonstone', 'Frozen Heart', 'Vow'] }
    },
    combos: ['Q stun through minion', 'E portal plays', 'R timing crucial'],
    counters: { strongAgainst: ['Enchanters'], weakAgainst: ['Nautilus', 'Leona', 'Engage'] }
  },
  Sona: {
    tier: 'S', difficulty: 'Easy', role: 'SupportEnchant',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Summon Aery', runes: ['Manaflow Band', 'Transcendence', 'Gathering Storm'] },
      secondary: { tree: 'Resolve', runes: ['Revitalize', 'Conditioning'] },
      shards: ['Ability Haste', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q then W.' },
    itemBuilds: {
      starter: { items: [3867, 2003], names: ['World Atlas', 'Potion'] },
      boots: [3158],
      core: { items: [3876, 6617, 3107], names: ['Dream Maker', 'Moonstone Renewer', 'Redemption'], order: 'Dream → Moonstone' },
      fullBuild: { standard: [3158, 3876, 6617, 3107, 6616, 3504], names: ['CDR Boots', 'Dream Maker', 'Moonstone', 'Redemption', 'Staff', 'Ardent'] }
    },
    combos: ['Aura management', 'R crescendo', 'Power chord amplification'],
    counters: { strongAgainst: ['Scaling lanes'], weakAgainst: ['Nautilus', 'Leona', 'Blitzcrank'] }
  },
  Zyra: {
    tier: 'S', difficulty: 'Medium', role: 'Mage',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Arcane Comet', runes: ['Manaflow Band', 'Transcendence', 'Scorch'] },
      secondary: { tree: 'Domination', runes: ['Cheap Shot', 'Relentless Hunter'] },
      shards: ['Ability Haste', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'E > Q > W', notes: 'Max E for root.' },
    itemBuilds: {
      starter: { items: [3867, 2003], names: ['World Atlas', 'Potion'] },
      boots: [3020],
      core: { items: [3871, 3151, 2503], names: ["Zaz'Zaq's", "Liandry's", 'Blackfire Torch'], order: "Zaz'Zaq → Liandry" },
      fullBuild: { standard: [3020, 3871, 3151, 2503, 3116, 3089], names: ['Sorc', "Zaz'Zaq", "Liandry's", 'Torch', 'Rylai', 'Rabadon'] }
    },
    combos: ['E → W → Q → W → R', 'Plant zone control', 'R knockup'],
    counters: { strongAgainst: ['Enchanters', 'Soraka'], weakAgainst: ['Nautilus', 'Leona', 'Engage'] }
  },
  Heimerdinger: {
    tier: 'B', difficulty: 'Medium', role: 'Mage',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Arcane Comet', runes: ['Manaflow Band', 'Absolute Focus', 'Scorch'] },
      secondary: { tree: 'Domination', runes: ['Taste of Blood', 'Treasure Hunter'] },
      shards: ['Ability Haste', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for turret lane pressure.' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      boots: [3020],
      core: { items: [2503, 3151, 3116], names: ['Blackfire Torch', "Liandry's Torment", 'Rylai\'s'], order: 'Torch → Liandry' },
      fullBuild: { standard: [3020, 2503, 3151, 3116, 3157, 3089], names: ['Sorc Shoes', 'Blackfire Torch', "Liandry's", 'Rylai', "Zhonya's", "Rabadon's"] }
    },
    combos: ['Turret Triangle setup', 'E stun → W burst', 'R-Q for defense / R-E for engage'],
    counters: { strongAgainst: ['Yasuo', 'Irelia', 'Sylas'], weakAgainst: ['Syndra', 'Xerath', 'Vel\'Koz'] }
  },
  Seraphine: {
    tier: 'A', difficulty: 'Easy', role: 'SupportEnchant',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Summon Aery', runes: ['Manaflow Band', 'Transcendence', 'Gathering Storm'] },
      secondary: { tree: 'Inspiration', runes: ['Biscuit Delivery', 'Cosmic Insight'] },
      shards: ['Ability Haste', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for poke.' },
    itemBuilds: {
      starter: { items: [3867, 2003], names: ['World Atlas', 'Potion'] },
      boots: [3158],
      core: { items: [3871, 6617, 3116], names: ["Zaz'Zaq's", 'Moonstone', "Liandry's"], order: "Zaz'Zaq → Moonstone" },
      fullBuild: { standard: [3158, 3871, 6617, 3116, 6616, 3089], names: ['CDR Boots', "Zaz'Zaq", 'Moonstone', "Liandry's", 'Staff', 'Rabadon'] }
    },
    combos: ['Q poke', 'E slow/root', 'R extend charm'],
    counters: { strongAgainst: ['Teamfight'], weakAgainst: ['Engage supports', 'Nautilus'] }
  },
  Karthus: {
    tier: 'S', difficulty: 'Medium', role: 'JungleFighter',
    summonerSpells: ['Flash', 'Smite'],
    runes: {
      primary: { tree: 'Domination', keystone: 'Dark Harvest', runes: ['Cheap Shot', 'Eyeball Collection', 'Ultimate Hunter'] },
      secondary: { tree: 'Precision', runes: ['Presence of Mind', 'Last Stand'] },
      shards: ['Ability Haste', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q.' },
    itemBuilds: {
      starter: { items: [1102, 2031], names: ['Gustwalker', 'Refillable'] },
      boots: [3020],
      core: { items: [2503, 3151, 4645], names: ['Blackfire Torch', "Liandry's Torment", 'Shadowflame'], order: 'Torch → Liandry' },
      fullBuild: { standard: [3020, 2503, 3151, 4645, 3089, 3135], names: ['Sorc', 'Blackfire Torch', "Liandry's", 'Shadowflame', 'Rabadon', 'Void'] }
    },
    combos: ['Q spam', 'W slow zone', 'R global execute'],
    counters: { strongAgainst: ['Farming junglers'], weakAgainst: ['Lee Sin', 'Elise', 'Invade junglers'] }
  },

  Senna: {
    tier: 'S', difficulty: 'Hard', role: 'Marksman',
    runes: {
      primary: { tree: 'Precision', keystone: 'Fleet Footwork', runes: ['Presence of Mind', 'Legend: Alacrity', 'Cut Down'] },
      secondary: { tree: 'Inspiration', runes: ['Biscuit Delivery', 'Approach Velocity'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for heal/poke.' },
    itemBuilds: {
      starter: { items: [3867, 2003], names: ['World Atlas', 'Potion'] },
      boots: [3009],
      core: { items: [3870, 3179, 3094], names: ['Bloodsong', 'Umbral Glaive', 'Rapid Firecannon'], order: 'Bloodsong → Umbral' },
      fullBuild: { standard: [3009, 3870, 3179, 3094, 3036, 6676], names: ['Swifties', 'Bloodsong', 'Umbral', 'RFC', 'LDR', 'Collector'] }
    },
    combos: ['AA → Q → AA', 'W root setup', 'R global shield/dmg'],
    counters: { strongAgainst: ['Tanks', 'Enchanters'], weakAgainst: ['Pyke', 'Blitzcrank', 'Nautilus'] }
  },

  Aurora: {
    tier: 'S', difficulty: 'Hard', role: 'Mage',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Phase Rush', runes: ['Manaflow Band', 'Transcendence', 'Gathering Storm'] },
      secondary: { tree: 'Domination', runes: ['Sudden Impact', 'Treasure Hunter'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health Scaling']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for trading.' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      boots: [3020],
      core: { items: [3118, 3151, 3157], names: ['Malignance', "Liandry's Torment", "Zhonya's"], order: 'Malignance → Liandry' },
      fullBuild: { standard: [3020, 3118, 3151, 3157, 4645, 3089], names: ['Sorc', 'Malignance', "Liandry's", "Zhonya's", 'Shadowflame', 'Rabadon'] }
    },
    combos: ['Q1 → E → Q2 dash', 'R ultimate cage', 'W invisibility kite'],
    counters: { strongAgainst: ['Tanks', 'Darius', 'Sett'], weakAgainst: ['Irelia', 'Camille', 'Assassins'] }
  },

  // Missing Champions Added
  Akshan: {
    tier: 'A', difficulty: 'Hard', role: 'Marksman',
    runes: {
      primary: { tree: 'Precision', keystone: 'Press the Attack', runes: ['Presence of Mind', 'Legend: Alacrity', 'Coupe de Grace'] },
      secondary: { tree: 'Domination', runes: ['Taste of Blood', 'Treasure Hunter'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for poke/waveclear.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3006],
      core: { items: [6672, 3031, 6676], names: ['Kraken Slayer', 'Infinity Edge', 'The Collector'], order: 'Kraken → IE' },
      fullBuild: { standard: [3006, 6672, 3031, 6676, 3036, 3026], names: ['Berserker', 'Kraken', 'IE', 'The Collector', 'LDR', 'GA'] }
    },
    combos: ['E swing → Q → AA', 'W revive passive', 'R execute'],
    counters: { strongAgainst: ['Immobile mages'], weakAgainst: ['Syndra', 'Viktor', 'Ahri'] }
  },
  Corki: {
    tier: 'A', difficulty: 'Medium', role: 'Marksman',
    runes: {
      primary: { tree: 'Precision', keystone: 'First Strike', runes: ['Magical Footwear', 'Biscuit Delivery', 'Cosmic Insight'] },
      secondary: { tree: 'Sorcery', runes: ['Manaflow Band', 'Gathering Storm'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q. Package timing key.' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      boots: [3020],
      core: { items: [3078, 3031, 3094], names: ['Trinity Force', 'Infinity Edge', 'Rapid Firecannon'], order: 'Trinity → IE' },
      fullBuild: { standard: [3020, 3078, 3031, 3094, 3036, 3026], names: ['Sorc', 'Trinity', 'IE', 'RFC', 'LDR', 'GA'] }
    },
    combos: ['Q → AA → E', 'W Package engage', 'R poke spam'],
    counters: { strongAgainst: ['Short range mids'], weakAgainst: ['Syndra', 'Orianna', 'Viktor'] }
  },
  JarvanIV: {
    tier: 'A', difficulty: 'Easy', role: 'JungleFighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Triumph', 'Legend: Alacrity', 'Last Stand'] },
      secondary: { tree: 'Inspiration', runes: ['Magical Footwear', 'Cosmic Insight'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for damage.' },
    itemBuilds: {
      starter: { items: [1102, 2003], names: ['Gustwalker Hatchling', 'Potion'] },
      boots: [3047],
      core: { items: [6610, 3161, 3053], names: ['Sundered Sky', 'Spear of Shojin', "Sterak's"], order: 'Sundered → Shojin' },
      fullBuild: { standard: [3047, 6610, 3161, 3053, 3075, 3026], names: ['Plated', 'Sundered', 'Shojin', 'Sterak', 'Thornmail', 'GA'] }
    },
    combos: ['E → Q knockup', 'R cage', 'Flag for vision'],
    counters: { strongAgainst: ['Evelynn', 'Nidalee', 'Kindred'], weakAgainst: ['Lee Sin', 'Elise', 'Graves'] }
  },
  Mel: {
    tier: 'S', difficulty: 'Hard', role: 'Mage',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Arcane Comet', runes: ['Manaflow Band', 'Transcendence', 'Gathering Storm'] },
      secondary: { tree: 'Inspiration', runes: ['Biscuit Delivery', 'Cosmic Insight'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for poke.' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      boots: [3020],
      core: { items: [6655, 4645, 3089], names: ["Luden's Companion", 'Shadowflame', "Rabadon's"], order: "Luden's → Shadowflame" },
      fullBuild: { standard: [3020, 6655, 4645, 3089, 3157, 3135], names: ['Sorc', "Luden's", 'Shadowflame', 'Rabadon', "Zhonya's", 'Void'] }
    },
    combos: ['Q poke', 'W shield', 'R teamfight zone'],
    counters: { strongAgainst: ['Orianna', 'Viktor'], weakAgainst: ['Zed', 'Fizz', 'Yasuo'] }
  },
  Trundle: {
    tier: 'A', difficulty: 'Easy', role: 'Fighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Lethal Tempo', runes: ['Triumph', 'Legend: Alacrity', 'Last Stand'] },
      secondary: { tree: 'Resolve', runes: ['Demolish', 'Bone Plating'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health Scaling']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for attack damage steal.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3047],
      core: { items: [3074, 3078, 3181], names: ['Ravenous Hydra', 'Trinity Force', 'Hullbreaker'], order: 'Ravenous → Trinity' },
      fullBuild: { standard: [3047, 3074, 3078, 3181, 3053, 3026], names: ['Plated', 'Ravenous', 'Trinity Force', 'Hullbreaker', 'Sterak', 'GA'] }
    },
    combos: ['Q AA reset', 'W ground increase AS/Heal', 'E pillar displacement', 'R stat steal'],
    counters: { strongAgainst: ['Tanks', 'Ornn', 'ChoGath'], weakAgainst: ['Jax', 'Fiora', 'Teemo'] }
  },
  Trundle_top: {
    tier: 'S', difficulty: 'Easy', role: 'Fighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Lethal Tempo', runes: ['Triumph', 'Legend: Alacrity', 'Last Stand'] },
      secondary: { tree: 'Resolve', runes: ['Demolish', 'Bone Plating'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for dueling.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3047],
      core: { items: [3074, 3078, 3181], names: ['Ravenous Hydra', 'Trinity Force', 'Hullbreaker'], order: 'Ravenous → Trinity' },
      fullBuild: { standard: [3047, 3074, 3078, 3181, 3153, 3053], names: ['Plated', 'Ravenous', 'Trinity', 'Hullbreaker', 'BOTRK', 'Sterak'] }
    },
    combos: ['Q bite reset', 'W all-in', 'Splitpush forever']
  },
  Yunara: {
    tier: 'A', difficulty: 'Medium', role: 'Marksman',
    runes: {
      primary: { tree: 'Precision', keystone: 'Lethal Tempo', runes: ['Presence of Mind', 'Legend: Alacrity', 'Coupe de Grace'] },
      secondary: { tree: 'Inspiration', runes: ['Magical Footwear', 'Biscuit Delivery'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for damage.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3006],
      core: { items: [6672, 3031, 6676], names: ['Kraken Slayer', 'Infinity Edge', 'The Collector'], order: 'Kraken → IE' },
      fullBuild: { standard: [3006, 6672, 3031, 6676, 3036, 3026], names: ['Berserker', 'Kraken', 'IE', 'The Collector', 'LDR', 'GA'] }
    },
    combos: ['Q poke', 'E mobility', 'R teamfight'],
    counters: { strongAgainst: ['Short range ADCs'], weakAgainst: ['Caitlyn', 'Draven'] }
  },
  Zaahen: {
    tier: 'A', difficulty: 'Medium', role: 'Fighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Triumph', 'Legend: Alacrity', 'Last Stand'] },
      secondary: { tree: 'Resolve', runes: ['Second Wind', 'Unflinching'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for damage.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      boots: [3047],
      core: { items: [3748, 6610, 3053], names: ['Titanic Hydra', 'Sundered Sky', "Sterak's"], order: 'Titanic → Sundered' },
      fullBuild: { standard: [3047, 3748, 6610, 3053, 6333, 3026], names: ['Plated', 'Titanic', 'Sundered', 'Sterak', 'DD', 'GA'] }
    },
    combos: ['Q engage', 'E damage', 'R teamfight'],
    counters: { strongAgainst: ['Tanks', 'Scaling champs'], weakAgainst: ['Ranged tops', 'Quinn'] }
  },

};

// =================== CHAMPION ROLE MAPPINGS ===================

const championRoles = {
  // ADCs - Split by playstyle
  Jinx: 'Marksman', Caitlyn: 'Marksman', Jhin: 'Marksman', MissFortune: 'Marksman',
  Ashe: 'Marksman', Sivir: 'Marksman', Tristana: 'Marksman', Xayah: 'Marksman',
  Aphelios: 'Marksman', Draven: 'Marksman', Samira: 'Marksman', Zeri: 'Marksman', Smolder: 'Marksman', Akshan: 'Marksman', Corki: 'Marksman', Yunara: 'Marksman',
  // On-Hit ADCs
  KogMaw: 'OnHitADC', Varus: 'OnHitADC', Kalista: 'OnHitADC', Twitch: 'OnHitADC',
  Vayne: 'OnHitADC', KaiSa: 'OnHitADC', Nilah: 'OnHitADC',
  // Caster ADCs
  Ezreal: 'Marksman', Lucian: 'Marksman', Senna: 'Marksman',

  // Mages - Split by playstyle
  Ahri: 'Mage', Syndra: 'Mage', Orianna: 'Mage', Viktor: 'Mage', Lux: 'Mage',
  Veigar: 'Mage', Annie: 'Mage', TwistedFate: 'Mage', Neeko: 'Mage', Zoe: 'Mage', Vex: 'Mage', Hwei: 'Mage', Mel: 'Mage',
  // Artillery Mages
  Xerath: 'ArtilleryMage', Ziggs: 'ArtilleryMage', VelKoz: 'ArtilleryMage',
  // Battle Mages
  Cassiopeia: 'BattleMage', Ryze: 'BattleMage', Swain: 'BattleMage', Vladimir: 'BattleMage',
  Anivia: 'BattleMage', AurelionSol: 'BattleMage', Taliyah: 'BattleMage', Azir: 'BattleMage', Aurora: 'BattleMage',
  // DoT Mages
  Brand: 'DotMage', Malzahar: 'DotMage', Teemo: 'DotMage', Heimerdinger: 'DotMage', Seraphine: 'DotMage',

  // Assassins
  Zed: 'Assassin', Talon: 'Assassin', Qiyana: 'Assassin', Naafiri: 'Assassin',
  Katarina: 'APAssassin', LeBlanc: 'APAssassin', Fizz: 'APAssassin', Akali: 'APAssassin', Ekko: 'APAssassin',
  Kassadin: 'APAssassin', Diana: 'APAssassin', Evelynn: 'APAssassin', Nidalee: 'APAssassin',

  // Skirmishers (high mobility, outplay fighters)
  Yasuo: 'Skirmisher', Yone: 'Skirmisher', Fiora: 'Skirmisher', Irelia: 'Skirmisher',
  Riven: 'Skirmisher', Gwen: 'Skirmisher', Camille: 'Skirmisher', Tryndamere: 'Skirmisher',

  // Juggernauts (slow, tanky, high damage)
  Darius: 'Juggernaut', Garen: 'Juggernaut', Illaoi: 'Juggernaut', Yorick: 'Juggernaut',
  Mordekaiser: 'Juggernaut', Sett: 'Juggernaut', Urgot: 'Juggernaut', Nasus: 'Juggernaut',
  DrMundo: 'Juggernaut', Volibear: 'Juggernaut', Aatrox: 'Juggernaut', Olaf: 'Juggernaut',

  // Standard Fighters
  Jax: 'Fighter', Renekton: 'Fighter', Gangplank: 'Fighter', Kled: 'Fighter',
  Pantheon: 'Fighter', Wukong: 'Fighter', MonkeyKing: 'Fighter', Rengar: 'Fighter', Jayce: 'Fighter',
  Kennen: 'Fighter', Gnar: 'Fighter', Rumble: 'Fighter', Quinn: 'Fighter', Kayle: 'Fighter', KSante: 'Fighter', Ambessa: 'Fighter', Zaahen: 'Fighter',

  // Tanks (Top lane)
  Malphite: 'Tank', Ornn: 'Tank', Sion: 'Tank', Maokai: 'Tank', Chogath: 'Tank',
  Shen: 'Tank', TahmKench: 'Tank', Poppy: 'Tank', Gragas: 'Tank', Singed: 'Tank',

  // Jungle Fighters
  LeeSin: 'JungleFighter', Viego: 'JungleFighter', Kayn: 'JungleFighter', Vi: 'JungleFighter',
  Warwick: 'JungleFighter', XinZhao: 'JungleFighter', JarvanIV: 'JungleFighter', Nocturne: 'JungleFighter',
  Hecarim: 'JungleFighter', RekSai: 'JungleFighter', Graves: 'JungleFighter', Kindred: 'JungleFighter',
  Belveth: 'JungleFighter', Briar: 'JungleFighter', MasterYi: 'JungleFighter', Elise: 'JungleFighter',
  Lillia: 'JungleFighter', Trundle: 'JungleFighter',

  // Jungle Tanks
  Amumu: 'JungleTank', Sejuani: 'JungleTank', Zac: 'JungleTank', Rammus: 'JungleTank',
  Nunu: 'JungleTank', Skarner: 'JungleTank', Udyr: 'JungleTank', Shyvana: 'JungleTank',
  Ivern: 'SupportEnchant', Fiddlesticks: 'Mage',
  Karthus: 'Mage',

  // Jungle Assassins
  Khazix: 'Assassin', Shaco: 'Assassin',

  // Support Tanks
  Thresh: 'SupportTank', Nautilus: 'SupportTank', Leona: 'SupportTank', Alistar: 'SupportTank',
  Braum: 'SupportTank', Rell: 'SupportTank', Blitzcrank: 'SupportTank', Taric: 'SupportTank',
  Rakan: 'SupportTank', Pyke: 'Assassin',

  // Enchanter Supports
  Lulu: 'SupportEnchant', Nami: 'SupportEnchant', Soraka: 'SupportEnchant', Janna: 'SupportEnchant',
  Sona: 'SupportEnchant', Karma: 'SupportEnchant', Yuumi: 'SupportEnchant', Milio: 'SupportEnchant',
  Renata: 'SupportEnchant', Morgana: 'SupportEnchant', Zilean: 'SupportEnchant', Bard: 'SupportEnchant',
  Zyra: 'DotMage'
};

// =================== BUILD GENERATION FUNCTION ===================

/**
 * Generate a complete build based on champion ID and role/lane
 */
export function generateChampionBuild(championId, championData, lane = null) {
  // Check for specific lane override first (e.g., championOverrides["Lux_support"])
  const overrideKey = lane ? `${championId}_${lane}` : championId;
  const hasSpecificLaneOverride = lane && !!championOverrides[overrideKey];
  const override = championOverrides[overrideKey] || championOverrides[championId];

  // Map of lanes to default internal role templates
  const laneToRole = {
    top: 'Tank',
    jungle: 'JungleFighter',
    mid: 'Mage',
    adc: 'Marksman',
    support: 'SupportEnchant'
  };

  // Base role from our mapping
  const primaryRole = championRoles[championId];

  // Logic to pick the best template
  let role = laneToRole[lane] || primaryRole || 'Fighter';

  // Smarter role selection: if lane is provided, try to adapt the primary role
  if (lane) {
    if (lane === 'support') {
      if (primaryRole?.includes('Mage')) role = primaryRole;
      else if (primaryRole?.includes('Tank')) role = 'SupportTank';
      else role = 'SupportEnchant';
    } else if (lane === 'jungle') {
      if (primaryRole?.includes('Tank')) role = 'JungleTank';
      else role = 'JungleFighter';
    } else if (lane === 'top') {
      if (primaryRole?.includes('Mage')) role = 'BattleMage';
      else if (primaryRole?.includes('Assassin')) role = 'Skirmisher';
      else role = primaryRole || 'Fighter';
    } else if (lane === 'mid') {
      if (primaryRole?.includes('Mage') || primaryRole?.includes('Assassin')) role = primaryRole;
      else role = 'Mage';
    }
  }

  // Fallback for unknown champions
  if (!role && championData?.tags) {
    if (championData.tags.includes('Marksman')) role = 'Marksman';
    else if (championData.tags.includes('Assassin')) role = 'Assassin';
    else if (championData.tags.includes('Mage')) role = 'Mage';
    else if (championData.tags.includes('Tank')) role = 'Tank';
    else if (championData.tags.includes('Fighter')) role = 'Fighter';
    else if (championData.tags.includes('Support')) role = 'SupportEnchant';
  }
  if (!role) role = 'Fighter';

  // CLONE template to avoid mutating the master reference
  let finalData = JSON.parse(JSON.stringify(buildTemplates[role] || buildTemplates.Fighter));

  // 1. If we have a GENERIC override (e.g., "Zed"), merge it into finalData first
  if (!hasSpecificLaneOverride && championOverrides[championId]) {
    const genericOverride = championOverrides[championId];
    if (genericOverride.role && genericOverride.role !== role) {
      const templateOverride = buildTemplates[genericOverride.role];
      if (templateOverride) {
        finalData = JSON.parse(JSON.stringify(templateOverride));
      }
    }
    Object.assign(finalData, JSON.parse(JSON.stringify(genericOverride)));
  }

  // LANE-SPECIFIC PATCHES (Only if NO specific lane override exists)
  if (!hasSpecificLaneOverride && lane) {
    if (lane === 'support') {
      finalData.itemBuilds.starter = { items: [3867, 2003, 2003], names: ['World Atlas', '2x Potion'] };
      finalData.summonerSpells = ['Flash', 'Exhaust'];

      // Determine which support item to inject
      let supportItem = { id: 3871, name: "Zaz'Zak's Realmspike" }; // Mage default
      if (role.includes('Tank') || role.includes('Juggernaut')) supportItem = { id: 3869, name: "Solstice Sleigh" };
      else if (role.includes('Enchant')) supportItem = { id: 3876, name: "Dream Maker" };
      else if (role.includes('Marksman') || role.includes('Assassin')) supportItem = { id: 3870, name: "Bloodsong" };

      // Inject into core items if it's not already there
      if (finalData.itemBuilds.core && !finalData.itemBuilds.core.items.includes(supportItem.id)) {
        finalData.itemBuilds.core.items.unshift(supportItem.id);
        finalData.itemBuilds.core.names.unshift(supportItem.name);
        finalData.itemBuilds.core.order = `${supportItem.name.split(' ')[0]} → ${finalData.itemBuilds.core.order || ''}`;
      }
    } else if (lane === 'jungle') {
      // Determine jungle starter based on role
      let jungleItem = { id: 1102, name: 'Gustwalker Hatchling' }; // Blue (Speed)
      if (role.includes('Tank')) jungleItem = { id: 1103, name: 'Mosstomper Seedling' }; // Green (Shield)
      else if (role.includes('Assassin') || role.includes('Marksman')) jungleItem = { id: 1101, name: 'Scorchclaw Pup' }; // Red (Damage)

      finalData.itemBuilds.starter = { items: [jungleItem.id, 2003], names: [jungleItem.name, 'Potion'] };
      finalData.summonerSpells = ['Flash', 'Smite'];

      // Add default clear path if none exists
      if (!finalData.clearPath) {
        finalData.clearPath = 'Buff → Buff → Gromp → Gank/Scuttle (3-camp fast clear)';
      }
    }
  }

  // Final assembly
  const build = {
    role: lane ? lane.charAt(0).toUpperCase() + lane.slice(1) : (finalData.role || role).replace(/([A-Z])/g, ' $1').trim(),
    tier: finalData.tier || 'B',
    difficulty: finalData.difficulty || 'Medium',
    playstyle: finalData.playstyle,
    runes: finalData.runes,
    summonerSpells: finalData.summonerSpells,
    skillOrder: finalData.skillOrder,
    itemBuilds: finalData.itemBuilds,
    combos: finalData.combos,
    counters: finalData.counters || null,
    clearPath: finalData.clearPath || null
  };

  return build;
}

// Alias for internal names
championOverrides.MonkeyKing = championOverrides.Wukong;

// =================== EXPORTS ===================

export function getDetailedBuild(championId, championData = null, lane = null) {
  return generateChampionBuild(championId, championData, lane);
}

export function getChampionsWithBuilds() {
  return Object.keys(championRoles);
}

export { buildTemplates, championOverrides, championRoles };