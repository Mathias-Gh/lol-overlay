/**
  * Season 2025 Champion Builds - Complete Database
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
      core: { items: [3031, 3094, 3036], names: ['Infinity Edge', 'RFC', 'LDR'], order: 'IE → Zeal item → LDR' },
      situational: {
        vsHeal: { items: [3033], when: 'Contre heal/lifesteal' },
        vsTanks: { items: [3036], when: 'Équipe tanky' },
        lifesteal: { items: [3072], when: 'Besoin de sustain' },
        s16range: { items: [2523], when: 'Besoin de portée (Hexoptics C44)' },
        s16ultimate: { items: [2512], when: 'Hypercarry (Fiendhunter Bolts)' }
      },
      boots: [3006],
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
      core: { items: [6655, 4645, 3089], names: ["Luden's Echo", 'Shadowflame', 'Rabadon'], order: "Lost Chapter → Luden's → Shadowflame" },
      situational: {
        vsBurst: { items: [3157], when: 'Contre burst mages' },
        vsDive: { items: [3157], when: 'Contre assassins/divers' },
        vsHeal: { items: [3165], when: 'Contre healing' }
      },
      boots: [3020],
      fullBuild: { standard: [3020, 6655, 4645, 3089, 3135, 3157], names: ['Sorc', "Luden's", 'Shadowflame', 'Rabadon', 'Void Staff', "Zhonya's"] }
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
      core: { items: [6697, 3142, 6692], names: ['Hubris', "Youmuu's", 'Eclipse'], order: 'Dirk → Hubris → Youmuu' },
      situational: {
        vsShields: { items: [6609], when: 'Contre shields (Lulu, Shieldbow)' },
        survie: { items: [3814], when: 'Besoin de spell shield' }
      },
      boots: [3158],
      fullBuild: { standard: [3158, 6697, 3142, 6692, 3814, 6609], names: ['CDR Boots', 'Hubris', 'Youmuu', 'Eclipse', 'Edge of Night', 'Serpent'] }
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
      core: { items: [3078, 3053, 6333], names: ['Trinity Force', "Sterak's Gage", "Death's Dance"], order: 'Sheen → Trinity → Sterak' },
      situational: {
        vsAP: { items: [3156], when: 'Contre AP burst' },
        vsAD: { items: [3742], when: 'Contre AD threats' },
        split: { items: [3181], when: 'Splitpush focus' }
      },
      boots: [3047],
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
      core: { items: [6662, 3075, 3065], names: ['Iceborn Gauntlet', 'Thornmail', 'Spirit Visage'], order: 'Bami → Iceborn → situational' },
      situational: {
        vsAD: { items: [3143], when: 'Contre crit ADC' },
        vsAP: { items: [4401], when: 'Contre AP heavy' },
        teamfight: { items: [3083], when: 'Long fights' }
      },
      boots: [3047],
      fullBuild: { standard: [3047, 6662, 3075, 3065, 3143, 3083], names: ['Plated', 'Iceborn', 'Thornmail', 'Spirit', 'Randuin', 'Warmog'] }
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
      starter: { items: [3862, 2003], names: ['Relic Shield', 'Potion'] },
      core: { items: [3190, 3109, 3050], names: ['Locket', "Knight's Vow", "Zeke's"], order: 'Upgrade Supp → Locket → Vow' },
      situational: {
        heal: { items: [3107], when: 'Besoin de heal AoE' },
        antiheal: { items: [3075], when: 'Contre healing' }
      },
      boots: [3117],
      fullBuild: { standard: [3117, 3190, 3109, 3050, 3107, 3075], names: ['Mobility', 'Locket', 'Vow', "Zeke's", 'Redemption', 'Thornmail'] }
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
      starter: { items: [3850, 2003], names: ["Spellthief's Edge", 'Potion'] },
      core: { items: [3504, 3107, 3222], names: ['Ardent Censer', 'Redemption', "Mikael's"], order: 'Upgrade Supp → Ardent' },
      situational: {
        ap: { items: [6616], when: 'Team AP heavy' },
        antiheal: { items: [3165], when: 'Contre healing' }
      },
      boots: [3158],
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
      starter: { items: [1035, 2003], names: ['Jungle Item', 'Potion'] },
      core: { items: [3153, 3078, 6333], names: ['BOTRK', 'Trinity', "Death's Dance"], order: 'BOTRK rush → Trinity' },
      situational: {
        burst: { items: [6692], when: 'Need burst' },
        tanky: { items: [3053], when: 'Need survivability' }
      },
      boots: [3006],
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
      starter: { items: [1035, 2003], names: ['Jungle Item', 'Potion'] },
      core: { items: [223110, 3075, 3065], names: ['Iceborn', 'Thornmail', 'Spirit Visage'], order: 'Bami → Iceborn' },
      situational: {
        engage: { items: [3742], when: 'Need engage speed' },
        peel: { items: [3143], when: 'Peel for carries' }
      },
      boots: [3047],
      fullBuild: { standard: [3047, 223110, 3075, 3065, 3742, 3143], names: ['Plated', 'Iceborn', 'Thornmail', 'Spirit', "Dead Man's", 'Randuin'] }
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
      core: { items: [4646, 3100, 3089], names: ['Stormsurge', 'Lich Bane', 'Rabadon'], order: 'Alternator → Stormsurge → Lich' },
      situational: {
        survie: { items: [3157], when: 'Besoin de Zhonya' },
        burst: { items: [4645], when: 'More burst' }
      },
      boots: [3020],
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
      core: { items: [4633, 3116, 3089], names: ['Riftmaker', "Rylai's", 'Rabadon'], order: 'Riftmaker → Rylai' },
      boots: [3020],
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
      core: { items: [3124, 3153, 3091], names: ["Guinsoo's", 'BOTRK', "Wit's End"], order: "Guinsoo's → BOTRK" },
      boots: [3006],
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
      core: { items: [6631, 3053, 3742], names: ['Stridebreaker', "Sterak's", "Dead Man's"], order: 'Stride → Sterak' },
      boots: [3047],
      fullBuild: { standard: [3047, 6631, 3053, 3742, 223101, 3143], names: ['Plated', 'Stride', 'Sterak', 'Deadmans', 'FoN', 'Randuin'] }
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
      core: { items: [3153, 3031, 6333], names: ['BOTRK', 'IE', "Death's Dance"], order: 'BOTRK → IE' },
      boots: [3006],
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
      core: { items: [223116, 3089, 3135], names: ["Luden's", 'Rabadon', 'Void Staff'], order: "Luden's → Rabadon" },
      boots: [3020],
      fullBuild: { standard: [3020, 223116, 3089, 3135, 4629, 3157], names: ['Sorc', "Luden's", 'Rabadon', 'Void', 'Horizon', "Zhonya's"] }
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
      core: { items: [3118, 3116, 3165], names: ['Malignance', "Rylai's", 'Morello'], order: 'Malignance → Rylai' },
      boots: [3020],
      fullBuild: { standard: [3020, 3118, 3116, 3165, 3089, 3135], names: ['Sorc', 'Malignance', "Rylai's", 'Morello', 'Rabadon', 'Void'] }
    },
    combos: ['Apply DoTs and kite', 'Spread damage in fights', 'Zone enemies'],
    playstyle: 'DoT Mage'
  }
};

// =================== CHAMPION SPECIFIC OVERRIDES ===================

const championOverrides = {
  // ADCs
  Jinx: {
    tier: 'S', difficulty: 'Medium',
    skillOrder: { priority: 'Q > W > E', levels: ['Q', 'W', 'E', 'Q', 'Q', 'R', 'Q', 'W', 'Q', 'W', 'R', 'W', 'W', 'E', 'E', 'R', 'E', 'E'], notes: 'Max Q pour le DPS. Rockets pour poke, Minigun pour DPS single target.' },
    itemBuilds: {
      core: { items: [6672, 3031, 2523], names: ['Kraken Slayer', 'Infinity Edge', 'Hexoptics C44'], order: 'Kraken → IE → Hexoptics' }
    },
    combos: ['W → Auto → Swap Q (slow into rockets)', 'E zone control', 'R snipe puis cleanup avec passive reset'],
    counters: { strongAgainst: ["Kog'Maw", 'Twitch', 'Aphelios'], weakAgainst: ['Draven', 'Lucian', 'Samira'] }
  },
  Caitlyn: {
    tier: 'S', difficulty: 'Medium',
    combos: ['E → Q → W (combo standard)', 'Headshot weaving', 'Trap zone control'],
    counters: { strongAgainst: ['Vayne', "Kai'Sa", "Kog'Maw"], weakAgainst: ['Sivir', 'Samira'] }
  },
  Ezreal: {
    tier: 'A', difficulty: 'Hard',
    runes: {
      primary: { tree: 'Precision', keystone: 'Press the Attack', runes: ['Presence of Mind', 'Legend: Bloodline', 'Cut Down'] },
      secondary: { tree: 'Inspiration', runes: ['Magical Footwear', 'Biscuit Delivery'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Q poke constant. E pour safety.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      core: { items: [3078, 3004, 3158], names: ['Trinity Force', 'Manamune', 'CDR Boots'], order: 'Tear → Sheen → Trinity → Manamune' },
      situational: {
        vsTank: { items: [3036], when: 'Armor heavy' },
        vsBurst: { items: [3156], when: 'AP threats' }
      },
      boots: [3158],
      fullBuild: { standard: [3158, 3078, 3004, 223105, 3036, 6333], names: ['CDR Boots', 'Trinity', 'Muramana', 'Shojin', 'LDR', "Death's Dance"] }
    },
    combos: ['Q poke constant', 'W → E → Q (burst)', 'R global snippet'],
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
      core: { items: [3031, 3094, 3036], names: ['Infinity Edge', 'Collector', 'LDR'], order: 'IE → Collector → LDR' },
      boots: [3006],
      fullBuild: { standard: [3006, 3031, 3094, 3036, 3072, 3026], names: ['Berserker', 'IE', 'Collector', 'LDR', 'Bloodthirster', 'GA'] }
    },
    combos: ['Q bounce kill', 'E slow → R', 'R channel'],
    counters: { strongAgainst: ['Immobile ADCs'], weakAgainst: ['Samira', 'Yasuo', 'Divers'] }
  },
  KaiSa: {
    tier: 'S', difficulty: 'Hard',
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q pour evolve rapide' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      core: { items: [6672, 3124, 3006], names: ['Kraken Slayer', "Guinsoo's Rageblade", "Berserker's Greaves"], order: 'Kraken → Guinsoo' },
      boots: [3006],
      fullBuild: { standard: [3006, 6672, 3124, 3115, 3302, 3157], names: ['Berserker', 'Kraken', "Guinsoo's", "Nashor's", 'Terminus', "Zhonya's"] }
    },
    combos: ['AA → Q → AA', 'W snipe → R in', 'E reposition/stealth'],
    counters: { strongAgainst: ['Ezreal', 'Jhin', 'Twitch'], weakAgainst: ['Draven', 'Caitlyn', 'Samira'] }
  },
  Vayne: {
    tier: 'A', difficulty: 'Hard',
    runes: {
      primary: { tree: 'Precision', keystone: 'Lethal Tempo', runes: ['Triumph', 'Legend: Alacrity', 'Cut Down'] },
      secondary: { tree: 'Resolve', runes: ['Bone Plating', 'Overgrowth'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    combos: ['Tumble + auto reset', 'E into wall stun', 'R + Q for reposition'],
    counters: { strongAgainst: ['Tanks', 'Bruisers'], weakAgainst: ['Caitlyn', 'Draven', 'Miss Fortune'] }
  },
  Jhin: {
    tier: 'S', difficulty: 'Medium',
    runes: {
      primary: { tree: 'Precision', keystone: 'Fleet Footwork', runes: ['Presence of Mind', 'Legend: Bloodline', 'Coup de Grace'] },
      secondary: { tree: 'Sorcery', runes: ['Celerity', 'Gathering Storm'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for waveclear/dmg.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      core: { items: [3009, 3009, 3031], names: ['The Collector', 'Boots of Swiftness', 'Infinity Edge'], order: 'Collector → Swifties → IE' },
      boots: [3009],
      fullBuild: { standard: [3009, 3009, 3031, 3094, 3036, 3072], names: ['Swifties', 'Collector', 'IE', 'RFC', 'LDR', 'Bloodthirster'] }
    },
    combos: ['4th shot execute', 'W root off ally damage', 'R curtain call engage/finish'],
    counters: { strongAgainst: ['Caitlyn', 'Ashe', 'Xayah'], weakAgainst: ['Tristana', 'Draven', 'Samira'] }
  },
  Ashe: {
    tier: 'S', difficulty: 'Easy',
    itemBuilds: {
      core: { items: [6672, 3302, 6675], names: ['Kraken Slayer', 'Terminus', 'Experimental Hexplate'], order: 'Kraken → Terminus → Hexplate' }
    },
    combos: ['W poke → AA', 'R engage → team follow', 'E vision control'],
    counters: { strongAgainst: ['Jhin', 'Aphelios', 'Twitch'], weakAgainst: ['Samira', 'Yasuo', 'Sivir'] }
  },
  Sivir: {
    tier: 'B', difficulty: 'Easy',
    combos: ['Q poke', 'E spellshield crucial', 'R engage/disengage'],
    counters: { strongAgainst: ['Caitlyn', 'Ashe', 'Jhin'], weakAgainst: ['Draven', 'Lucian', 'Kalista'] }
  },
  Tristana: {
    tier: 'A', difficulty: 'Medium',
    combos: ['E → AA × 4 → Q', 'W in → E → burst → W reset', 'R peel/execute'],
    counters: { strongAgainst: ['Jhin', 'Ashe', 'Varus'], weakAgainst: ['Draven', 'Samira', 'Kalista'] }
  },
  Xayah: {
    tier: 'A', difficulty: 'Medium',
    combos: ['Q → AA → E root', 'R immunity → E root', 'Feather management'],
    counters: { strongAgainst: ['Vayne', 'Lucian', 'Samira'], weakAgainst: ['Caitlyn', 'Draven', 'Jhin'] }
  },
  Draven: {
    tier: 'S', difficulty: 'Very Hard',
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Triumph', 'Legend: Bloodline', 'Last Stand'] },
      secondary: { tree: 'Domination', runes: ['Taste of Blood', 'Treasure Hunter'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    itemBuilds: {
      core: { items: [3072, 3031, 3094], names: ['Bloodthirster', 'Infinity Edge', 'The Collector'], order: 'BT → IE → Collector' }
    },
    combos: ['Axe catching → AA', 'W reset on catch', 'R snipe → Cash in stacks'],
    counters: { strongAgainst: ['Jinx', 'Tristana', 'Ashe'], weakAgainst: ['Samira', 'Nilah', 'Vayne'] }
  },
  Lucian: {
    tier: 'A', difficulty: 'Medium',
    combos: ['AA → Ability → AA (passive)', 'E → AA → Q → AA → W → AA', 'R kiting'],
    counters: { strongAgainst: ['Ezreal', 'Ashe', 'Varus'], weakAgainst: ['Draven', 'Samira', 'Vayne'] }
  },
  Samira: {
    tier: 'S', difficulty: 'Hard',
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Triumph', 'Legend: Bloodline', 'Last Stand'] },
      secondary: { tree: 'Domination', runes: ['Taste of Blood', 'Treasure Hunter'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    combos: ['Build Style → R (S rank)', 'W wind wall', 'E dash through minions'],
    counters: { strongAgainst: ['Jinx', 'Jhin', 'Ashe'], weakAgainst: ['Caitlyn', 'Xayah', 'Tristana'] }
  },
  Aphelios: {
    tier: 'A', difficulty: 'Very Hard',
    combos: ['Weapon cycle management', 'Infernum R teamfight', 'Gravitum root + Crescendum'],
    counters: { strongAgainst: ['Ezreal', 'Sivir', 'Varus'], weakAgainst: ['Draven', 'Samira', 'Lucian'] }
  },
  KogMaw: {
    tier: 'B', difficulty: 'Hard',
    combos: ['W active → kite', 'R artillery poke', 'E slow + Q shred'],
    counters: { strongAgainst: ['Tanks', 'Short range ADCs'], weakAgainst: ['Assassins', 'Draven', 'Lucian'] }
  },
  Twitch: {
    tier: 'A', difficulty: 'Hard',
    combos: ['Q stealth → R spray', 'E execute', 'W slow zone'],
    counters: { strongAgainst: ['Ezreal', 'Jhin', 'Ashe'], weakAgainst: ['Caitlyn', 'Draven', 'Lucian'] }
  },
  Varus: {
    tier: 'A', difficulty: 'Medium',
    itemBuilds: {
      core: { items: [3124, 6672, 3302], names: ["Guinsoo's", 'Kraken Slayer', 'Terminus'], order: 'Guinsoo → Kraken → Terminus' }
    },
    combos: ['Q poke charge', 'R engage → team follow', 'W blight stacks'],
    counters: { strongAgainst: ['Ezreal', 'Jhin', 'Aphelios'], weakAgainst: ['Samira', 'Draven', 'Lucian'] }
  },
  Kalista: {
    tier: 'A', difficulty: 'Very Hard',
    combos: ['AA → jump → AA (kite)', 'E rend execute', 'R save support'],
    counters: { strongAgainst: ['Jhin', 'Ashe', 'Varus'], weakAgainst: ['Caitlyn', 'Draven', 'Vayne'] }
  },
  Nilah: {
    tier: 'A', difficulty: 'Hard',
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Triumph', 'Legend: Bloodline', 'Last Stand'] },
      secondary: { tree: 'Resolve', runes: ['Second Wind', 'Overgrowth'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    combos: ['Q → AA reset', 'W dodge skillshots', 'R pull + crit'],
    counters: { strongAgainst: ['Jinx', 'Ashe', 'Jhin'], weakAgainst: ['Caitlyn', 'Draven', 'Varus'] }
  },
  Zeri: {
    tier: 'B', difficulty: 'Hard',
    combos: ['Q spam kite', 'E wall dash', 'R overcharge + run down'],
    counters: { strongAgainst: ['Jhin', 'Ashe', 'Aphelios'], weakAgainst: ['Draven', 'Samira', 'Caitlyn'] }
  },
  Smolder: {
    tier: 'B', difficulty: 'Medium',
    itemBuilds: {
      core: { items: [3508, 3161, 3094], names: ['Essence Reaver', 'Shojin', 'RFC'], order: 'ER → Shojin → RFC' }
    },
    combos: ['Q poke → stack', 'W execute', 'R teamfight burn'],
    counters: { strongAgainst: ['Short trades ADCs'], weakAgainst: ['All-in lanes', 'Draven', 'Lucian'] }
  },
  Ahri: {
    tier: 'S', difficulty: 'Medium',
    skillOrder: { priority: 'Q > E > W', levels: ['Q', 'W', 'E', 'Q', 'Q', 'R', 'Q', 'E', 'Q', 'E', 'R', 'E', 'E', 'W', 'W', 'R', 'W', 'W'], notes: 'Q waveclear + poke. E pour les picks.' },
    itemBuilds: {
      core: { items: [6655, 4645, 3089], names: ["Luden's Echo", 'Shadowflame', 'Rabadon'], order: "Luden's → Shadowflame" }
    },
    combos: ['E → Q → W → Auto (standard)', 'E → Flash → combo (surprise)', 'R → E → Q → W → R → R (all-in)'],
    counters: { strongAgainst: ['Twisted Fate', 'Veigar', 'Lux'], weakAgainst: ['Syndra', 'Zed', 'Kassadin'] }
  },
  Syndra: {
    tier: 'S', difficulty: 'Hard',
    skillOrder: { priority: 'Q > W > E', notes: 'Q spam pour lane dominance.' },
    combos: ['Q → E (stun)', 'Q × 3 → W → E → Q → R (max orbs)', 'W grab → E → Q → R'],
    counters: { strongAgainst: ['Ahri', 'LeBlanc', 'Katarina'], weakAgainst: ['Fizz', 'Zed', 'Yasuo'] }
  },
  Sylas: {
    tier: 'S', difficulty: 'Hard', role: 'APAssassin',
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Presence of Mind', 'Legend: Tenacity', 'Last Stand'] },
      secondary: { tree: 'Resolve', runes: ['Second Wind', 'Overgrowth'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'W > E > Q', notes: 'Max W pour sustain/trades.' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      core: { items: [3100, 4645, 3157], names: ['Lich Bane', 'Shadowflame', "Zhonya's"], order: 'Lich Bane rush' },
      boots: [3020],
      fullBuild: { standard: [3020, 3100, 4645, 3157, 3089, 3135], names: ['Sorc', 'Lich Bane', 'Shadowflame', "Zhonya's", 'Rabadon', 'Void'] }
    },
    combos: ['E1 → E2 → AA → W → AA → Q', 'Steal good Ult → Engage', 'W for clutch heal'],
    counters: { strongAgainst: ['Malphite', 'Twisted Fate', 'Swain'], weakAgainst: ['Cassiopeia', 'Taliyah', 'Heimerdinger'] }
  },
  Lux: {
    tier: 'A', difficulty: 'Easy', role: 'Mage',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Arcane Comet', runes: ['Manaflow Band', 'Transcendence', 'Scorch'] },
      secondary: { tree: 'Domination', runes: ['Cheap Shot', 'Ultimate Hunter'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'E > Q > W', notes: 'Max E for waveclear/poke.' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      core: { items: [6655, 4646, 4645], names: ["Luden's Companion", 'Stormsurge', 'Shadowflame'], order: "Luden's → Stormsurge" },
      boots: [3020],
      fullBuild: { standard: [3020, 6655, 4646, 4645, 3089, 3135], names: ['Sorc', "Luden's", 'Stormsurge', 'Shadowflame', 'Rabadon', 'Void'] }
    },
    combos: ['Q → E → R → E2', 'Catch avec Q → Full combo', 'E pour zone control'],
    counters: { strongAgainst: ['Annie', 'Brand', 'Vex'], weakAgainst: ['Zed', 'Fizz', 'Yasuo'] }
  },
  Zed: {
    tier: 'A', difficulty: 'Very Hard', role: 'Assassin',
    runes: {
      primary: { tree: 'Domination', keystone: 'Electrocute', runes: ['Taste of Blood', 'Eyeball Collection', 'Ultimate Hunter'] },
      secondary: { tree: 'Sorcery', runes: ['Transcendence', 'Scorch'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for burst.' },
    itemBuilds: {
      starter: { items: [1036, 2031], names: ['Long Sword', 'Refillable'] },
      core: { items: [3074, 6692, 6695], names: ['Ravenous Hydra', 'Voltaic Cyclosword', "Serylda's"], order: 'Hydra → Voltaic' },
      boots: [3158],
      fullBuild: { standard: [3158, 3074, 6692, 6695, 6630, 3814], names: ['CDR Boots', 'Hydra', 'Voltaic', 'Serylda', 'Eclipse', 'Edge of Night'] }
    },
    combos: ['W → E → Q (poke)', 'R → W → E → Q → AA → R back', 'W → Q → E → R → swap'],
    counters: { strongAgainst: ['Lux', 'Xerath', 'Veigar'], weakAgainst: ['Lissandra', 'Malzahar', 'Galio'] }
  },
  Yasuo: {
    tier: 'A', difficulty: 'Very Hard', role: 'Fighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Lethal Tempo', runes: ['Triumph', 'Legend: Alacrity', 'Last Stand'] },
      secondary: { tree: 'Resolve', runes: ['Bone Plating', 'Overgrowth'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      core: { items: [3153, 3031, 3046], names: ['BOTRK', 'IE', 'PD'], order: 'BOTRK rush → IE' },
      boots: [3006],
      fullBuild: { standard: [3006, 3153, 3031, 3046, 6333, 3156], names: ['Berserker', 'BOTRK', 'IE', 'PD', 'DD', 'Maw'] }
    },
    combos: ['E → Q (dash + tornado)', 'E × n → Q3 → R (airblade)', 'Windwall timing crucial'],
    counters: { strongAgainst: ['Lux', 'Syndra', 'Xerath'], weakAgainst: ['Renekton', 'Annie', 'Malzahar'] }
  },
  Yone: {
    tier: 'S', difficulty: 'Hard', role: 'Fighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Lethal Tempo', runes: ['Triumph', 'Legend: Alacrity', 'Last Stand'] },
      secondary: { tree: 'Resolve', runes: ['Second Wind', 'Overgrowth'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      core: { items: [3153, 3031, 6673], names: ['BOTRK', 'Infinity Edge', 'Immortal Shieldbow'], order: 'BOTRK → IE' },
      boots: [3006],
      fullBuild: { standard: [3006, 3153, 3031, 6673, 6333, 3156], names: ['Berserker', 'BOTRK', 'IE', 'Shieldbow', 'DD', 'Maw'] }
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
      core: { items: [3153, 6672, 6694], names: ['BOTRK', 'Kraken Slayer', 'Terminus'], order: 'BOTRK → Kraken' },
      boots: [3006],
      fullBuild: { standard: [3006, 3153, 6672, 6694, 6333, 3091], names: ['Berserker', 'BOTRK', 'Kraken', 'Terminus', "Death's Dance", "Wit's End"] }
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
      core: { items: [6655, 4645, 4646], names: ["Luden's Companion", 'Shadowflame', 'Stormsurge'], order: "Luden's → Shadowflame" },
      boots: [3020],
      fullBuild: { standard: [3020, 6655, 4645, 4646, 3089, 3135], names: ['Sorc', "Luden's", 'Shadowflame', 'Stormsurge', 'Rabadon', 'Void'] }
    },
    combos: ['W → Q → E → W return', 'Q → R → W → E (max damage)', 'Use R clone for mindgames'],
    counters: { strongAgainst: ['Lux', 'Xerath', 'Ziggs'], weakAgainst: ['Galio', 'Kassadin', 'Malzahar'] }
  },
  Fizz: {
    tier: 'A', difficulty: 'Medium', role: 'APAssassin',
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
      core: { items: [3100, 4645, 3157], names: ['Lich Bane', 'Shadowflame', "Zhonya's"], order: 'Lich → Shadowflame' },
      boots: [3020],
      fullBuild: { standard: [3020, 3100, 4645, 3157, 3089, 3135], names: ['Sorc', 'Lich Bane', 'Shadowflame', "Zhonya's", 'Rabadon', 'Void'] }
    },
    combos: ['Q → AA (passive proc)', 'E → R1 → Q → R2', 'Shroud timing for trades'],
    counters: { strongAgainst: ['Syndra', 'Orianna', 'Ahri'], weakAgainst: ['Galio', 'Annie', 'Malzahar'] }
  },
  Ekko: {
    tier: 'A', difficulty: 'Medium', role: 'APAssassin',
    combos: ['E → Q → AA (passive)', 'W zone → R bait', 'R for escape/damage'],
    counters: { strongAgainst: ['Twisted Fate', 'Cassiopeia', 'Ryze'], weakAgainst: ['Sylas', 'Diana', 'Kassadin'] }
  },
  Diana: {
    tier: 'A', difficulty: 'Medium', role: 'APAssassin',
    combos: ['Q → E → W → AA', 'R pull → Zhonya', 'E reset on Q mark'],
    counters: { strongAgainst: ['Fizz', 'Katarina', 'Akali'], weakAgainst: ['Syndra', 'Cassiopeia', 'Malzahar'] }
  },
  Kassadin: {
    tier: 'S', difficulty: 'Hard', role: 'APAssassin',
    combos: ['R → E → W → Q → AA', 'Stack R → Flash → R × n', 'Scale to 16'],
    counters: { strongAgainst: ['AP mages', 'Ahri', 'LeBlanc'], weakAgainst: ['AD mids', 'Talon', 'Zed', 'Lucian'] }
  },
  Viktor: {
    tier: 'A', difficulty: 'Hard', role: 'Mage',
    combos: ['E poke → Q trade', 'W zone → R → E', 'Evolve E first'],
    counters: { strongAgainst: ['Orianna', 'Ahri', 'Neeko'], weakAgainst: ['Fizz', 'Zed', 'Yasuo'] }
  },
  Orianna: {
    tier: 'A', difficulty: 'Hard', role: 'Mage',
    combos: ['Q → W (poke)', 'R shockwave → Q → W', 'Ball on ally → R'],
    counters: { strongAgainst: ['Twisted Fate', 'Ahri', 'Lux'], weakAgainst: ['Zed', 'Fizz', 'Yasuo'] }
  },
  Veigar: {
    tier: 'A', difficulty: 'Easy', role: 'Mage',
    combos: ['E cage → W → Q → R', 'Stack Q infinitely', 'R execute'],
    counters: { strongAgainst: ['Annie', 'Malzahar', 'Twisted Fate'], weakAgainst: ['Fizz', 'Zed', 'Yasuo'] }
  },
  Annie: {
    tier: 'B', difficulty: 'Easy', role: 'Mage',
    combos: ['Stun → R Tibbers → Q → W', 'Flash → R stun', 'Stack passive → engage'],
    counters: { strongAgainst: ['Yasuo', 'Katarina', 'Akali'], weakAgainst: ['Syndra', 'Orianna', 'Xerath'] }
  },
  Xerath: {
    tier: 'A', difficulty: 'Medium', role: 'Mage',
    combos: ['Q poke spam', 'E stun → W → Q', 'R snipes'],
    counters: { strongAgainst: ['Annie', 'Twisted Fate', 'Veigar'], weakAgainst: ['Zed', 'Fizz', 'Talon'] }
  },
  Ziggs: {
    tier: 'A', difficulty: 'Medium', role: 'Mage',
    combos: ['Q spam poke', 'W tower execute', 'R cross-map'],
    counters: { strongAgainst: ['Orianna', 'Viktor', 'Twisted Fate'], weakAgainst: ['Yasuo', 'Fizz', 'Zed'] }
  },
  VelKoz: {
    tier: 'B', difficulty: 'Medium', role: 'Mage',
    combos: ['Q geometry', 'E → W → R melt', 'R channel timing'],
    counters: { strongAgainst: ['Orianna', 'Syndra', 'Viktor'], weakAgainst: ['Fizz', 'Zed', 'Katarina'] }
  },
  Brand: {
    tier: 'A', difficulty: 'Easy', role: 'Mage',
    combos: ['E → Q stun', 'W → E → Q → R', 'R bounce in groups'],
    counters: { strongAgainst: ['Tanks', 'Enchanters'], weakAgainst: ['Assassins', 'Fizz', 'Zed'] }
  },
  Malzahar: {
    tier: 'A', difficulty: 'Easy', role: 'Mage',
    combos: ['E spread → W voidlings', 'R lockdown → Q → E', 'R priority carry'],
    counters: { strongAgainst: ['Zed', 'Fizz', 'Assassins'], weakAgainst: ['Syndra', 'Orianna', 'QSS'] }
  },
  Ryze: {
    tier: 'B', difficulty: 'Medium', role: 'Mage',
    combos: ['E → E → Q (spread)', 'W root → E → Q', 'R TP team'],
    counters: { strongAgainst: ['Tanks', 'Short range'], weakAgainst: ['Syndra', 'Xerath', 'Long range'] }
  },
  Cassiopeia: {
    tier: 'A', difficulty: 'Very Hard', role: 'Mage',
    combos: ['Q → E spam', 'R flash stun', 'W ground zone'],
    counters: { strongAgainst: ['Sylas', 'Katarina', 'Akali'], weakAgainst: ['Xerath', 'Ziggs', 'Long range'] }
  },
  Swain: {
    tier: 'A', difficulty: 'Medium', role: 'Mage',
    combos: ['E pull → W → Q', 'R sustain + Zhonya', 'Passive soul stacking'],
    counters: { strongAgainst: ['Melee assassins'], weakAgainst: ['Long range', 'Xerath', 'Syndra'] }
  },
  Vladimir: {
    tier: 'A', difficulty: 'Medium', role: 'Mage',
    combos: ['E charge → Flash → R → E → Q', 'Pool for safety', 'Scale late'],
    counters: { strongAgainst: ['Assassins', 'Fighters'], weakAgainst: ['GW', 'Grievous Wounds', 'Burst'] }
  },
  TwistedFate: {
    tier: 'A', difficulty: 'Hard', role: 'Mage',
    combos: ['Gold card → W → Q', 'R gank + Gold card', 'Pick a card timing'],
    counters: { strongAgainst: ['Short range mages'], weakAgainst: ['Assassins', 'Fizz', 'Zed'] }
  },
  Anivia: {
    tier: 'A', difficulty: 'Hard', role: 'Mage',
    combos: ['Q stun → E', 'R zone → W wall', 'Passive egg'],
    counters: { strongAgainst: ['Yasuo', 'Katarina'], weakAgainst: ['Kassadin', 'Fizz', 'Zed'] }
  },
  AurelionSol: {
    tier: 'A', difficulty: 'Hard', role: 'Mage',
    combos: ['Q → W → R', 'Scale stardust', 'Roam early'],
    counters: { strongAgainst: ['Short range'], weakAgainst: ['Assassins', 'Fizz', 'Zed'] }
  },
  Azir: {
    tier: 'A', difficulty: 'Very Hard', role: 'Mage',
    combos: ['W → Q → AA', 'Shurima Shuffle E → Q → R', 'Wall engage'],
    counters: { strongAgainst: ['Tanks', 'Mages'], weakAgainst: ['Assassins', 'Zed', 'Fizz'] }
  },
  Taliyah: {
    tier: 'A', difficulty: 'Hard', role: 'Mage',
    itemBuilds: {
      core: { items: [3007, 4645, 3089], names: ["Archangel's", 'Shadowflame', 'Rabadon'], order: "Archangel's → Shadowflame" }
    },
    combos: ['W → E combo', 'R cross-map gank', 'Worked ground management'],
    counters: { strongAgainst: ['Orianna', 'Viktor'], weakAgainst: ['Yasuo', 'Fizz', 'Assassins'] }
  },
  Neeko: {
    tier: 'B', difficulty: 'Easy', role: 'Mage',
    combos: ['E root → Q → R', 'Clone mindgames', 'Flash → R engage'],
    counters: { strongAgainst: ['Ahri', 'Twisted Fate'], weakAgainst: ['Zed', 'Fizz', 'Yasuo'] }
  },
  Vex: {
    tier: 'A', difficulty: 'Easy', role: 'Mage',
    combos: ['Fear → Q → W', 'R → R follow → combo', 'Anti-dash passive'],
    counters: { strongAgainst: ['Yasuo', 'Irelia', 'Akali'], weakAgainst: ['Syndra', 'Xerath', 'Orianna'] }
  },
  Hwei: {
    tier: 'A', difficulty: 'Very Hard', role: 'Mage',
    combos: ['QQ burst', 'WQ shield', 'EE root', 'Art combos'],
    counters: { strongAgainst: ['Orianna', 'Viktor'], weakAgainst: ['Assassins', 'Fizz', 'Zed'] }
  },
  Talon: {
    tier: 'A', difficulty: 'Medium', role: 'Assassin',
    combos: ['W → Q → AA → W2', 'R → W → Q → AA → R', 'Wall jump roam'],
    counters: { strongAgainst: ['Lux', 'Xerath', 'Twisted Fate'], weakAgainst: ['Pantheon', 'Malphite', 'Diana'] }
  },
  Qiyana: {
    tier: 'A', difficulty: 'Very Hard', role: 'Assassin',
    combos: ['Grass Q → W → E → R river', 'Element management', 'R wall stun'],
    counters: { strongAgainst: ['Xerath', 'Viktor', 'Orianna'], weakAgainst: ['Diana', 'Pantheon', 'Renekton'] }
  },
  Naafiri: {
    tier: 'B', difficulty: 'Easy', role: 'Assassin',
    combos: ['W dash → Q × 2 → AA', 'R engage → burst', 'Dog pack management'],
    counters: { strongAgainst: ['Mages', 'Lux'], weakAgainst: ['Diana', 'Pantheon', 'Galio'] }
  },

  // Top laners
  Darius: {
    tier: 'S', difficulty: 'Easy', role: 'Fighter',
    skillOrder: { priority: 'Q > E > W', notes: 'Q heal + damage. E pour armor pen stacks.' },
    summonerSpells: ['Flash', 'Ghost'],
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Triumph', 'Legend: Alacrity', 'Last Stand'] },
      secondary: { tree: 'Resolve', runes: ['Bone Plating', 'Unflinching'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    itemBuilds: {
      starter: { items: [1054, 2003], names: ["Doran's Shield", 'Potion'] },
      core: { items: [6631, 3053, 3742], names: ['Stridebreaker', "Sterak's", "Dead Man's"], order: 'Stride → Sterak' },
      boots: [3047],
      fullBuild: { standard: [3047, 6631, 3053, 3742, 223101, 3075], names: ['Plated', 'Stridebreaker', 'Sterak', 'Deadmans', 'Force of Nature', 'JakSho'] }
    },
    combos: ['E → AA → W → Q (standard)', 'Ghost → E → W → Q → R', '5 stacks → R execute'],
    counters: { strongAgainst: ['Sion', 'Nasus', 'Cho\'Gath'], weakAgainst: ['Vayne', 'Jayce', 'Fiora'] }
  },
  Garen: {
    tier: 'B', difficulty: 'Very Easy', role: 'Fighter',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Phase Rush', runes: ['Nimbus Cloak', 'Celerity', 'Gathering Storm'] },
      secondary: { tree: 'Resolve', runes: ['Conditioning', 'Overgrowth'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    itemBuilds: {
      starter: { items: [1054, 2003], names: ["Doran's Shield", 'Potion'] },
      core: { items: [6631, 3046, 3031], names: ['Stridebreaker', 'Phantom Dancer', 'Infinity Edge'], order: 'Stride → PD' },
      situational: {
        tank: { items: [3742], when: 'Need Frontline' },
        antiheal: { items: [3075], when: 'Heavy Heal' }
      },
      boots: [3006],
      fullBuild: { standard: [3006, 6631, 3046, 3031, 3742, 223101], names: ['Berserker', 'Stridebreaker', 'PD', 'IE', 'Deadmans', 'Force of Nature'] }
    },
    skillOrder: { priority: 'E > Q > W', notes: 'E max pour damage. Phase Rush pour mobility.' },
    combos: ['Q → E → W → R (execute)', 'Stridebreaker pour slow et catch'],
    counters: { strongAgainst: ['Nasus', 'Jax', 'Riven'], weakAgainst: ['Camille', 'Vayne', 'Kayle'] }
  },
  Camille: {
    tier: 'S', difficulty: 'Hard', role: 'Fighter',
    runes: {
      primary: { tree: 'Resolve', keystone: 'Grasp of the Undying', runes: ['Shield Bash', 'Second Wind', 'Overgrowth'] },
      secondary: { tree: 'Inspiration', runes: ['Magical Footwear', 'Biscuit Delivery'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q first for damage. E second for cd.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      core: { items: [3078, 3074, 3053], names: ['Trinity Force', 'Ravenous Hydra', "Sterak's"], order: 'Trinity → Ravenous' },
      situational: { vsTank: { items: [3036], when: 'Heavy armor' } },
      boots: [3047],
      fullBuild: { standard: [3047, 3078, 3074, 3053, 6333, 3026], names: ['Plated', 'Trinity', 'Ravenous', 'Sterak', "Death's Dance", 'GA'] }
    },
    combos: ['E → E → Q → W → Q2', 'R lockdown → full combo', 'W poke in lane'],
    counters: { strongAgainst: ['Gangplank', 'Gnar', 'Kayle'], weakAgainst: ['Jax', 'Renekton', 'Darius'] }
  },
  Fiora: {
    tier: 'A', difficulty: 'Hard', role: 'Fighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Triumph', 'Legend: Alacrity', 'Last Stand'] },
      secondary: { tree: 'Resolve', runes: ['Bone Plating', 'Demolish'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for mobility/poke.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      core: { items: [3074, 3153, 3078], names: ['Ravenous Hydra', 'BOTRK', 'Trinity Force'], order: 'Ravenous rush' },
      boots: [3047],
      fullBuild: { standard: [3047, 3074, 3153, 3078, 6333, 3026], names: ['Plated', 'Ravenous', 'BOTRK', 'Trinity', "Death's Dance", 'GA'] }
    },
    combos: ['Q vitals', 'W riposte timing crucial', 'R → proc all vitals'],
    counters: { strongAgainst: ['Malphite', 'Sion', 'Ornn'], weakAgainst: ['Kennen', 'Quinn', 'Teemo'] }
  },
  Jax: {
    tier: 'S', difficulty: 'Medium', role: 'Fighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Lethal Tempo', runes: ['Triumph', 'Legend: Alacrity', 'Last Stand'] },
      secondary: { tree: 'Resolve', runes: ['Second Wind', 'Unflinching'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'W > Q > E', notes: 'Max W for trade damage.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      core: { items: [3078, 3153, 3053], names: ['Trinity Force', 'BOTRK', "Sterak's"], order: 'Trinity → BOTRK' },
      boots: [3047],
      fullBuild: { standard: [3047, 3078, 3153, 3053, 6333, 3161], names: ['Plated', 'Trinity', 'BOTRK', 'Sterak', 'DD', 'Spear of Shojin'] }
    },
    combos: ['E → Q → AA → W', 'Counter Strike timing', 'R for extended fights'],
    counters: { strongAgainst: ['Camille', 'Riven', 'Tryndamere'], weakAgainst: ['Malphite', 'Gragas', 'Illaoi'] }
  },
  Riven: {
    tier: 'A', difficulty: 'Very Hard', role: 'Fighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Triumph', 'Legend: Alacrity', 'Last Stand'] },
      secondary: { tree: 'Sorcery', runes: ['Transcendence', 'Nimbus Cloak'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for damage/mobility.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      core: { items: [3071, 6630, 6333], names: ['Black Cleaver', 'Eclipse', "Death's Dance"], order: 'Eclipse → Cleaver' },
      boots: [3158],
      fullBuild: { standard: [3158, 6630, 3071, 6333, 3156, 3026], names: ['CDR Boots', 'Eclipse', 'Cleaver', 'DD', 'Maw', 'GA'] }
    },
    combos: ['Fast Q combo (Q → AA → Q → AA...)', 'E → R1 → Flash → W → R2', 'Animation cancels'],
    counters: { strongAgainst: ['Gangplank', 'Gnar', 'Kennen'], weakAgainst: ['Renekton', 'Poppy', 'Malphite'] }
  },
  Mordekaiser: {
    tier: 'A', difficulty: 'Easy', role: 'Fighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Triumph', 'Legend: Tenacity', 'Last Stand'] },
      secondary: { tree: 'Domination', runes: ['Taste of Blood', 'Ravenous Hunter'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      core: { items: [4633, 3116, 3089], names: ['Riftmaker', "Rylai's", 'Rabadon'], order: 'Riftmaker rush' },
      boots: [3047],
      fullBuild: { standard: [3047, 4633, 3116, 3089, 3157, 3065], names: ['Plated', 'Riftmaker', "Rylai's", 'Rabadon', "Zhonya's", 'Spirit'] }
    },
    combos: ['E → Q → AA', 'R isolate carry', 'Passive shield management'],
    counters: { strongAgainst: ['Sion', 'Ornn', 'Cho\'Gath'], weakAgainst: ['Vayne', 'Fiora', 'Gwen'] }
  },
  Sett: {
    tier: 'A', difficulty: 'Easy', role: 'Fighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Triumph', 'Legend: Alacrity', 'Last Stand'] },
      secondary: { tree: 'Resolve', runes: ['Second Wind', 'Overgrowth'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'W > Q > E', notes: 'Max W for big shield/true damage.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      core: { items: [6631, 3053, 3742], names: ['Stridebreaker', "Sterak's", "Dead Man's"], order: 'Stride → Sterak' },
      boots: [3047],
      fullBuild: { standard: [3047, 6631, 3053, 3742, 6333, 3065], names: ['Plated', 'Stride', 'Sterak', 'Deadmans', 'DD', 'Spirit'] }
    },
    combos: ['E → AA → Q → AA → W (max grit)', 'R suplex carry into team', 'W true damage sweet spot'],
    counters: { strongAgainst: ['Aatrox', 'Renekton', 'Urgot'], weakAgainst: ['Gangplank', 'Lillia', 'Vayne'] }
  },
  Aatrox: {
    tier: 'S', difficulty: 'Medium', role: 'Fighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Triumph', 'Legend: Tenacity', 'Last Stand'] },
      secondary: { tree: 'Resolve', runes: ['Second Wind', 'Revitalize'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for damage.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      core: { items: [6692, 6610, 3071], names: ['Eclipse', 'Sundered Sky', 'Black Cleaver'], order: 'Eclipse → Sundered → Cleaver' },
      boots: [3047],
      fullBuild: { standard: [3047, 6692, 6610, 3071, 3053, 6333], names: ['Plated', 'Eclipse', 'Sundered', 'Cleaver', 'Sterak', 'DD'] }
    },
    combos: ['Q × 3 sweet spots', 'W pull → Q', 'E reposition'],
    counters: { strongAgainst: ['Riven', 'Gangplank', 'Gnar'], weakAgainst: ['Fiora', 'Irelia', 'Vayne'] }
  },
  Renekton: {
    tier: 'B', difficulty: 'Easy', role: 'Fighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Triumph', 'Legend: Alacrity', 'Last Stand'] },
      secondary: { tree: 'Resolve', runes: ['Bone Plating', 'Unflinching'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for sustain/clear.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      core: { items: [6630, 3071, 3053], names: ['Eclipse', 'Black Cleaver', "Sterak's"], order: 'Eclipse → Cleaver' },
      boots: [3047],
      fullBuild: { standard: [3047, 6630, 3071, 3053, 6333, 3026], names: ['Plated', 'Eclipse', 'Cleaver', 'Sterak', 'DD', 'GA'] }
    },
    combos: ['E → W → Q → E out', 'Fury management', 'R for all-in'],
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
      core: { items: [3153, 3091, 3053], names: ['BOTRK', "Wit's End", "Sterak's"], order: 'BOTRK rush crucial' },
      boots: [3047],
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
      core: { items: [3115, 4633, 3157], names: ["Nashor's Tooth", 'Riftmaker', "Zhonya's"], order: "Nashor's → Rift" },
      boots: [3047],
      fullBuild: { standard: [3047, 3115, 4633, 3089, 3157, 4645], names: ['Plated', "Nashor's", 'Riftmaker', 'Rabadon', "Zhonya's", 'Shadowflame'] }
    },
    combos: ['Q stack × 4 → E → Q', 'R → E → R2', 'W immune timing'],
    counters: { strongAgainst: ['Tanks', 'Sion', 'Ornn'], weakAgainst: ['Fiora', 'Riven', 'Tryndamere'] }
  },
  Gangplank: {
    tier: 'A', difficulty: 'Very Hard', role: 'Fighter',
    runes: {
      primary: { tree: 'Inspiration', keystone: 'First Strike', runes: ['Magical Footwear', 'Biscuit Delivery', 'Cosmic Insight'] },
      secondary: { tree: 'Domination', runes: ['Taste of Blood', 'Treasure Hunter'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for poke/gold.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      core: { items: [3078, 3009, 3031], names: ['Trinity Force', 'Collector', 'IE'], order: 'Trinity → Collector' },
      boots: [3158],
      fullBuild: { standard: [3158, 3078, 3009, 3031, 3036, 6676], names: ['CDR Boots', 'Trinity', 'Collector', 'IE', 'LDR', 'Shieldbow'] }
    },
    combos: ['Barrel combo (E → E → Q)', 'Triple barrel', 'R global'],
    counters: { strongAgainst: ['Tanks', 'Nasus'], weakAgainst: ['Irelia', 'Camille', 'Riven'] }
  },
  Illaoi: {
    tier: 'B', difficulty: 'Medium', role: 'Fighter',
    runes: {
      primary: { tree: 'Resolve', keystone: 'Grasp of the Undying', runes: ['Demolish', 'Bone Plating', 'Overgrowth'] },
      secondary: { tree: 'Precision', runes: ['Presence of Mind', 'Last Stand'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'E > Q > W', notes: 'Max E for spirit pull damage.' },
    itemBuilds: {
      starter: { items: [2033], names: ['Corrupting Potion'] },
      core: { items: [3025, 3053, 3071], names: ['Iceborn Gauntlet', "Sterak's", 'Black Cleaver'], order: 'Iceborn → Sterak' },
      boots: [3047],
      fullBuild: { standard: [3047, 3025, 3053, 3071, 3065, 3742], names: ['Plated', 'Iceborn', 'Sterak', 'Cleaver', 'Spirit', 'Deadmans'] }
    },
    combos: ['E → W → Q → R', 'Never run in R', 'E spirit fight'],
    counters: { strongAgainst: ['Darius', 'Garen', 'Nasus'], weakAgainst: ['Tryndamere', 'Mordekaiser', 'Vayne'] }
  },
  Nasus: {
    tier: 'B', difficulty: 'Easy', role: 'Fighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Fleet Footwork', runes: ['Triumph', 'Legend: Tenacity', 'Last Stand'] },
      secondary: { tree: 'Resolve', runes: ['Second Wind', 'Unflinching'] },
      shards: ['Ability Haste', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for stacking.' },
    itemBuilds: {
      starter: { items: [1054, 2003], names: ["Doran's Shield", 'Potion'] },
      core: { items: [3078, 3110, 3065], names: ['Trinity Force', 'Frozen Heart', 'Spirit Visage'], order: 'Trinity → Tank' },
      boots: [3158],
      fullBuild: { standard: [3158, 3078, 3110, 3065, 3742, 3053], names: ['CDR Boots', 'Trinity', 'Frozen Heart', 'Spirit', 'Deadmans', 'Sterak'] }
    },
    combos: ['Q stacking', 'W slow', 'R stat boost + fight'],
    counters: { strongAgainst: ['Malphite', 'Ornn', 'Shen'], weakAgainst: ['Darius', 'Illaoi', 'Garen'] }
  },
  Yorick: {
    tier: 'B', difficulty: 'Easy', role: 'Fighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Triumph', 'Legend: Bloodline', 'Last Stand'] },
      secondary: { tree: 'Resolve', runes: ['Demolish', 'Bone Plating'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for ghoul damage.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      core: { items: [3078, 6693, 3053], names: ['Trinity Force', 'Profane Hydra', "Sterak's"], order: 'Trinity → Profane' },
      boots: [3047],
      fullBuild: { standard: [3047, 3078, 6693, 3053, 3161, 6333], names: ['Plated', 'Trinity', 'Profane', 'Sterak', 'Shojin', 'DD'] }
    },
    combos: ['E mark → W cage → Q → ghouls', 'R Maiden push', 'Split push'],
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
      core: { items: [3031, 3085, 3036], names: ['Infinity Edge', "Runaan's Hurricane", 'LDR'], order: 'IE → Runaan → LDR' },
      boots: [3006],
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
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q. Crit is key (200% base).' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      core: { items: [6672, 6675, 3031], names: ['Kraken Slayer', 'Navori Flickerblade', 'Infinity Edge'], order: 'Kraken → Navori' },
      boots: [3006],
      fullBuild: { standard: [3006, 6672, 6675, 3031, 3033, 6333], names: ['Berserker', 'Kraken', 'Navori', 'IE', 'Mortal Reminder', 'DD'] }
    },
    combos: ['AA → E spin away', 'R timing', 'W slow'],
    counters: { strongAgainst: ['Yone', 'Gwen', 'Irelia'], weakAgainst: ['Malphite', 'Tahm Kench', 'Poppy'] }
  },
  Urgot: {
    tier: 'B', difficulty: 'Easy', role: 'Fighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Press the Attack', runes: ['Triumph', 'Legend: Tenacity', 'Last Stand'] },
      secondary: { tree: 'Resolve', runes: ['Conditioning', 'Overgrowth'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'W > E > Q', notes: 'Max W (Purge) for toggle.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      core: { items: [3071, 3053, 6631], names: ['Black Cleaver', "Sterak's", 'Stridebreaker'], order: 'Cleaver → Sterak' },
      boots: [3047],
      fullBuild: { standard: [3047, 3071, 3053, 6631, 3075, 6333], names: ['Plated', 'Cleaver', 'Sterak', 'Stride', 'Thornmail', 'DD'] }
    },
    combos: ['E flip → W → Q', 'R execute', 'Passive legs management'],
    counters: { strongAgainst: ['Ornn', 'Cho\'Gath', 'Sion'], weakAgainst: ['Aatrox', 'Morde', 'Vayne'] }
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
      core: { items: [4633, 3115, 3065], names: ['Riftmaker', "Nashor's", 'Spirit Visage'], order: 'Riftmaker → Nashor' },
      boots: [3158],
      fullBuild: { standard: [3158, 4633, 3115, 3065, 3742, 3075], names: ['CDR Boots', 'Riftmaker', "Nashor's", 'Spirit', 'Deadmans', 'Thornmail'] }
    },
    combos: ['Q stun → W × 2', 'E shield + damage', 'R tower dive'],
    counters: { strongAgainst: ['Renekton', 'Camille', 'Irelia'], weakAgainst: ['Lillia', 'Vayne', 'Teemo'] }
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
      core: { items: [6630, 3074, 3071], names: ['Eclipse', 'Ravenous Hydra', 'Black Cleaver'], order: 'Eclipse → Ravenous' },
      boots: [3047],
      fullBuild: { standard: [3047, 6630, 3074, 3071, 3053, 3026], names: ['Plated', 'Eclipse', 'Ravenous', 'Cleaver', 'Sterak', 'GA'] }
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
      core: { items: [6631, 3053, 6333], names: ['Stridebreaker', "Sterak's", "Death's Dance"], order: 'Stride → Sterak' },
      boots: [3047],
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
      core: { items: [6630, 3071, 3153], names: ['Eclipse', 'Black Cleaver', 'BOTRK'], order: 'Eclipse → Cleaver' },
      boots: [3047],
      fullBuild: { standard: [3047, 6630, 3071, 3153, 6333, 6609], names: ['Plated', 'Eclipse', 'Cleaver', 'BOTRK', 'DD', 'Chempunk'] }
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
      core: { items: [3078, 3071, 3053], names: ['Trinity Force', 'Black Cleaver', "Sterak's"], order: 'Trinity → Cleaver' },
      boots: [3047],
      fullBuild: { standard: [3047, 3078, 3071, 3053, 6333, 3026], names: ['Plated', 'Trinity', 'Cleaver', 'Sterak', 'DD', 'GA'] }
    },
    combos: ['E → AA → Q', 'Clone mind games', 'R × 2 knockup'],
    counters: { strongAgainst: ['Gangplank', 'Gnar', 'Jayce'], weakAgainst: ['Darius', 'Sett', 'Mordekaiser'] }
  },
  Jayce: {
    tier: 'A', difficulty: 'Hard', role: 'Fighter',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Phase Rush', runes: ['Manaflow Band', 'Absolute Focus', 'Gathering Storm'] },
      secondary: { tree: 'Inspiration', runes: ['Magical Footwear', 'Biscuit Delivery'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for poke.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      core: { items: [6692, 3004, 6694], names: ['Eclipse', 'Muramana', "Serylda's"], order: 'Eclipse → Manamune' },
      boots: [3158],
      fullBuild: { standard: [3158, 6692, 3004, 6694, 3142, 3026], names: ['CDR Boots', 'Eclipse', 'Muramana', 'Serylda', "Youmuu's", 'GA'] }
    },
    combos: ['Range: Q → E (gate)', 'Melee: W → Q → E', 'Form swapping'],
    counters: { strongAgainst: ['Darius', 'Nasus', 'Ornn'], weakAgainst: ['Irelia', 'Camille', 'Wukong'] }
  },
  Ahri: {
    tier: 'S', difficulty: 'Easy', role: 'Mage',
    runes: {
      primary: { tree: 'Domination', keystone: 'Electrocute', runes: ['Taste of Blood', 'Eyeball Collection', 'Ultimate Hunter'] },
      secondary: { tree: 'Sorcery', runes: ['Manaflow Band', 'Transcendence'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for waveclear/poke.' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      core: { items: [3118, 3020, 4637], names: ['Malignance', "Sorcerer's Shoes", 'Horizon Focus'], order: 'Malignance → Horizon' },
      boots: [3020],
      fullBuild: { standard: [3020, 3118, 4637, 3089, 3157, 4645], names: ['Sorc', 'Malignance', 'Horizon', 'Rabadon', "Zhonya's", 'Shadowflame'] }
    },
    combos: ['E → Q → W', 'R → E → Q → W', 'R repositioning'],
    counters: { strongAgainst: ['Veigar', 'Twisted Fate', 'Syndra'], weakAgainst: ['Yasuo', 'Fizz', 'Kassadin'] }
  },
  Kennen: {
    tier: 'B', difficulty: 'Medium', role: 'Fighter',
    runes: {
      primary: { tree: 'Domination', keystone: 'Electrocute', runes: ['Taste of Blood', 'Eyeball Collection', 'Ultimate Hunter'] },
      secondary: { tree: 'Sorcery', runes: ['Nimbus Cloak', 'Transcendence'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for poke.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      core: { items: [3152, 3157, 4645], names: ['Hextech Rocketbelt', "Zhonya's", 'Shadowflame'], order: 'Rocketbelt → Zhonya' },
      boots: [3020],
      fullBuild: { standard: [3020, 3152, 3157, 4645, 3089, 3135], names: ['Sorc', 'Rocketbelt', "Zhonya's", 'Shadowflame', 'Rabadon', 'Void'] }
    },
    combos: ['E → R → Zhonya', 'W proc stuns', 'Q poke'],
    counters: { strongAgainst: ['Fiora', 'Gnar', 'Gangplank'], weakAgainst: ['Irelia', 'Yasuo', 'Yone'] }
  },
  Gnar: {
    tier: 'A', difficulty: 'Hard', role: 'Fighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Fleet Footwork', runes: ['Triumph', 'Legend: Alacrity', 'Last Stand'] },
      secondary: { tree: 'Resolve', runes: ['Bone Plating', 'Overgrowth'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for poke/slow.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      core: { items: [3078, 3053, 3071], names: ['Trinity Force', "Sterak's", 'Black Cleaver'], order: 'Trinity → Sterak' },
      boots: [3047],
      fullBuild: { standard: [3047, 3078, 3053, 3071, 3026, 3193], names: ['Plated', 'Trinity', 'Sterak', 'Cleaver', 'GA', "Gargoyle"] }
    },
    combos: ['Q poke mini', 'E into walls mega', 'R into wall stun'],
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
      core: { items: [3031, 3094, 3036], names: ['Infinity Edge', 'Rapid Firecannon', 'LDR'], order: 'IE → RFC → LDR' },
      boots: [3006],
      fullBuild: { standard: [3006, 3031, 3094, 3036, 3072, 3026], names: ['Berserker', 'IE', 'RFC', 'LDR', 'Bloodthirster', 'GA'] }
    },
    combos: ['W trap → headshot', 'E → Q combo', 'R execute'],
    counters: { strongAgainst: ['Short-range ADCs'], weakAgainst: ['Sivir', 'Samira', 'Engage supports'] }
  },
  Quinn: {
    tier: 'B', difficulty: 'Medium', role: 'Fighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Fleet Footwork', runes: ['Presence of Mind', 'Legend: Alacrity', 'Cut Down'] },
      secondary: { tree: 'Domination', runes: ['Taste of Blood', 'Treasure Hunter'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'W > Q > E', notes: 'Max W for passive speed.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      core: { items: [6692, 3009, 3036], names: ['Eclipse', 'Collector', 'LDR'], order: 'Eclipse → Collector' },
      boots: [3006],
      fullBuild: { standard: [3006, 6692, 3009, 3036, 3031, 3142], names: ['Berserker', 'Eclipse', 'Collector', 'LDR', 'IE', "Youmuu's"] }
    },
    combos: ['E flip → AA → Q → AA', 'R roam', 'Vault disengage'],
    counters: { strongAgainst: ['Darius', 'Garen', 'Nasus'], weakAgainst: ['Malphite', 'Irelia', 'Camille'] }
  },
  Teemo: {
    tier: 'B', difficulty: 'Easy', role: 'DotMage',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Summon Aery', runes: ['Manaflow Band', 'Absolute Focus', 'Scorch'] },
      secondary: { tree: 'Precision', runes: ['Presence of Mind', 'Alacrity'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'E > Q > W', notes: 'Max E for poison.' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      core: { items: [3115, 3118, 3165], names: ["Nashor's", 'Malignance', 'Liandry'], order: "Nashor's → Malignance" },
      boots: [3020],
      fullBuild: { standard: [3020, 3115, 3118, 3165, 3089, 3135], names: ['Sorc', "Nashor's", 'Malignance', 'Liandry', 'Rabadon', 'Void'] }
    },
    combos: ['Q blind', 'R shroom trap', 'Kite melee'],
    counters: { strongAgainst: ['Darius', 'Garen', 'Tryndamere'], weakAgainst: ['Yorick', 'Irelia', 'Pantheon'] }
  },
  Kayle: {
    tier: 'A', difficulty: 'Easy', role: 'Fighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Fleet Footwork', runes: ['Triumph', 'Legend: Alacrity', 'Last Stand'] },
      secondary: { tree: 'Resolve', runes: ['Bone Plating', 'Overgrowth'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for waveclear early.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      core: { items: [3115, 3124, 3089], names: ["Nashor's", "Guinsoo's", 'Rabadon'], order: "Nashor's → Guinsoo's" },
      boots: [3006],
      fullBuild: { standard: [3006, 3115, 3124, 3089, 4633, 3100], names: ['Berserker', "Nashor's", "Guinsoo's", 'Rabadon', 'Riftmaker', 'Lich Bane'] }
    },
    combos: ['Scale to 16', 'E poke', 'R immunity clutch'],
    counters: { strongAgainst: ['Nasus', 'Ornn', 'Late game'], weakAgainst: ['Irelia', 'Riven', 'Camille'] }
  },
  KSante: {
    tier: 'A', difficulty: 'Very Hard', role: 'Tank',
    runes: {
      primary: { tree: 'Resolve', keystone: 'Grasp of the Undying', runes: ['Shield Bash', 'Second Wind', 'Overgrowth'] },
      secondary: { tree: 'Inspiration', runes: ['Biscuit Delivery', 'Cosmic Insight'] },
      shards: ['Ability Haste', 'Armor', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for trade/clear.' },
    itemBuilds: {
      starter: { items: [1054, 2003], names: ["Doran's Shield", 'Potion'] },
      core: { items: [3025, 6662, 3068], names: ['Iceborn Gauntlet', 'JakSho', 'Sunfire'], order: 'Iceborn → JakSho' },
      boots: [3047],
      fullBuild: { standard: [3047, 3025, 6662, 3068, 3075, 4401], names: ['Plated', 'Iceborn', 'JakSho', 'Sunfire', 'Thornmail', "FoN"] }
    },
    combos: ['Q × 3 → W stun', 'R form swap', 'E dash'],
    counters: { strongAgainst: ['Gwen', 'Ornn', 'Sion'], weakAgainst: ['Fiora', 'Vayne', 'Camille'] }
  },
  Ambessa: {
    tier: 'S', difficulty: 'Hard', role: 'Fighter',
    runes: {
      primary: { tree: 'Resolve', keystone: 'Grasp of the Undying', runes: ['Shield Bash', 'Second Wind', 'Overgrowth'] },
      secondary: { tree: 'Inspiration', runes: ['Magical Footwear', 'Biscuit Delivery'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q. Grasp for trades.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      core: { items: [6630, 3161, 6333], names: ['Eclipse', 'Spear of Shojin', "Death's Dance"], order: 'Eclipse → Shojin' },
      boots: [3047],
      fullBuild: { standard: [3047, 6630, 3161, 6333, 3053, 3026], names: ['Plated', 'Eclipse', 'Shojin', 'DD', 'Sterak', 'GA'] }
    },
  },
  Camille: {
    tier: 'S', difficulty: 'Hard', role: 'Skirmisher',
    runes: {
      primary: { tree: 'Resolve', keystone: 'Grasp of the Undying', runes: ['Shield Bash', 'Second Wind', 'Unflinching'] },
      secondary: { tree: 'Inspiration', runes: ['Magical Footwear', 'Biscuit Delivery'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for true damage.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      core: { items: [3078, 3074, 3161], names: ['Trinity Force', 'Ravenous Hydra', 'Spear of Shojin'], order: 'Trinity → Ravenous' },
      boots: [3047],
      fullBuild: { standard: [3047, 3078, 3074, 3161, 6333, 3053], names: ['Plated', 'Trinity', 'Ravenous', 'Shojin', 'DD', 'Sterak'] }
    },
    combos: ['Q1 minion → E → AA → Q2 (true dmg)', 'W poke', 'R dodge'],
    counters: { strongAgainst: ['Garen', 'Nasus', 'Aatrox'], weakAgainst: ['Jax', 'Renekton', 'Darius'] }
  },
  Fiora: {
    tier: 'S', difficulty: 'Very Hard', role: 'Skirmisher',
    runes: {
      primary: { tree: 'Precision', keystone: 'Press the Attack', runes: ['Triumph', 'Legend: Alacrity', 'Last Stand'] },
      secondary: { tree: 'Inspiration', runes: ['Biscuit Delivery', 'Magical Footwear'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for poking vitals.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      core: { items: [3074, 3078, 3181], names: ['Ravenous Hydra', 'Trinity Force', 'Hullbreaker'], order: 'Ravenous → Trinity' },
      boots: [3047],
      fullBuild: { standard: [3047, 3074, 3078, 3181, 6333, 3026], names: ['Plated', 'Ravenous', 'Trinity', 'Hullbreaker', 'DD', 'GA'] }
    },
    combos: ['Q vital → AA → E → Q', 'W parry timing', 'R → 4 vitals speed'],
    counters: { strongAgainst: ['Kled', 'Aatrox', 'Sion'], weakAgainst: ['Malphite', 'Pantheon', 'Heimerdinger'] }
  },
  Jax: {
    tier: 'S', difficulty: 'Medium', role: 'Fighter',
    runes: {
      primary: { tree: 'Resolve', keystone: 'Grasp of the Undying', runes: ['Demolish', 'Second Wind', 'Unflinching'] },
      secondary: { tree: 'Inspiration', runes: ['Biscuit Delivery', 'Cosmic Insight'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'W > E > Q', notes: 'Max W for trade.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      core: { items: [3078, 6632, 6333], names: ['Trinity Force', 'Sundered Sky', "Death's Dance"], order: 'Trinity → Sundered' },
      boots: [3047],
      fullBuild: { standard: [3047, 3078, 6632, 6333, 3053, 3026], names: ['Plated', 'Trinity', 'Sundered', 'DD', 'Sterak', 'GA'] }
    },
    combos: ['E → Q → E2 (stun) → W → AA', 'R passive stacking', 'W reset'],
    counters: { strongAgainst: ['Camille', 'Irelia', 'Yasuo'], weakAgainst: ['Malphite', 'Garen', 'Illaoi'] }
  },
  Rumble: {
    tier: 'B', difficulty: 'Medium', role: 'BattleMage',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Arcane Comet', runes: ['Nimbus Cloak', 'Absolute Focus', 'Scorch'] },
      secondary: { tree: 'Domination', runes: ['Cheap Shot', 'Ultimate Hunter'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for damage.' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      core: { items: [3116, 4637, 3157], names: ["Liandry's", 'Riftmaker', "Zhonya's"], order: "Liandry's → Riftmaker" },
      boots: [3020],
      fullBuild: { standard: [3020, 3116, 4637, 3157, 4645, 3135], names: ['Sorc', "Liandry's", 'Riftmaker', "Zhonya's", 'Shadowflame', 'Void'] }
    },
    combos: ['Q flamespitter', 'R Equalizer', 'Heat management'],
    counters: { strongAgainst: ['Malphite', 'Ornn', 'Sion'], weakAgainst: ['Sylas', 'Irelia', 'Yasuo'] }
  },
  // Tanks
  Malphite: {
    tier: 'B', difficulty: 'Easy', role: 'Tank',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Arcane Comet', runes: ['Manaflow Band', 'Transcendence', 'Scorch'] },
      secondary: { tree: 'Resolve', runes: ['Second Wind', 'Overgrowth'] },
      shards: ['Ability Haste', 'Armor', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for poke/slow.' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      core: { items: [3068, 3110, 3075], names: ['Sunfire', 'Frozen Heart', 'Thornmail'], order: 'Sunfire → Frozen Heart' },
      boots: [3047],
      fullBuild: { standard: [3047, 3068, 3110, 3075, 4401, 6665], names: ['Plated', 'Sunfire', 'Frozen Heart', 'Thornmail', 'FoN', 'JakSho'] }
    },
    combos: ['R → E → Q → W', 'Ulti engage = teamfight win', 'Stack armor vs AD'],
    counters: { strongAgainst: ['Tryndamere', 'Yasuo', 'Auto-attackers'], weakAgainst: ['Darius', 'Sylas', 'AP tops'] }
  },
  Ornn: {
    tier: 'S', difficulty: 'Medium', role: 'Tank',
    runes: {
      primary: { tree: 'Resolve', keystone: 'Grasp of the Undying', runes: ['Demolish', 'Bone Plating', 'Overgrowth'] },
      secondary: { tree: 'Inspiration', runes: ['Magical Footwear', 'Biscuit Delivery'] },
      shards: ['Ability Haste', 'Armor', 'Health']
    },
    skillOrder: { priority: 'W > Q > E', notes: 'Max W for brittle dmg.' },
    itemBuilds: {
      starter: { items: [1054, 2003], names: ["Doran's Shield", 'Potion'] },
      core: { items: [6662, 3068, 3075], names: ['JakSho', 'Sunfire', 'Thornmail'], order: 'JakSho → Sunfire' },
      boots: [3047],
      fullBuild: { standard: [3047, 6662, 3068, 3075, 4401, 3193], names: ['Plated', 'JakSho', 'Sunfire', 'Thornmail', 'FoN', "Gargoyle"] }
    },
    combos: ['Q → W → E → R → R', 'R1 → R2 (knock up double)', 'Brittle procs'],
    counters: { strongAgainst: ['Camille', 'Riven', 'Yasuo'], weakAgainst: ['Mordekaiser', 'Vayne', 'Fiora'] }
  },
  Sion: {
    tier: 'A', difficulty: 'Medium', role: 'Tank',
    runes: {
      primary: { tree: 'Resolve', keystone: 'Grasp of the Undying', runes: ['Demolish', 'Conditioning', 'Overgrowth'] },
      secondary: { tree: 'Inspiration', runes: ['Approach Velocity', 'Biscuit Delivery'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for clear/cc.' },
    itemBuilds: {
      starter: { items: [1054, 2003], names: ["Doran's Shield", 'Potion'] },
      core: { items: [3068, 3084, 3009], names: ['Sunfire', 'Heartsteel', 'Titanic Hydra'], order: 'Sunfire → Heartsteel' },
      boots: [3047],
      fullBuild: { standard: [3047, 3068, 3084, 3009, 6662, 3075], names: ['Plated', 'Sunfire', 'Heartsteel', 'Titanic', 'JakSho', 'Thornmail'] }
    },
    combos: ['E → Q (slow + charge)', 'R engage', 'Passive after death'],
    counters: { strongAgainst: ['Riven', 'Irelia', 'Fiora'], weakAgainst: ['Darius', 'Mordekaiser', 'Vayne'] }
  },
  Maokai: {
    tier: 'A', difficulty: 'Easy', role: 'Tank',
    runes: {
      primary: { tree: 'Resolve', keystone: 'Grasp of the Undying', runes: ['Demolish', 'Second Wind', 'Revitalize'] },
      secondary: { tree: 'Inspiration', runes: ['Biscuit Delivery', 'Cosmic Insight'] },
      shards: ['Ability Haste', 'Health', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for waveclear/knockback.' },
    itemBuilds: {
      starter: { items: [1054, 2003], names: ["Doran's Shield", 'Potion'] },
      core: { items: [6664, 3065, 3068], names: ['Hollow Radiance', 'Spirit Visage', 'Sunfire'], order: 'Hollow → Spirit' },
      boots: [3047],
      fullBuild: { standard: [3047, 6664, 3065, 3068, 3110, 6662], names: ['Plated', 'Hollow', 'Spirit', 'Sunfire', 'Frozen Heart', 'JakSho'] }
    },
    combos: ['W engage → Q → E', 'R zone control', 'Passive sustain'],
    counters: { strongAgainst: ['Riven', 'Fiora', 'Irelia'], weakAgainst: ['Darius', 'Mordekaiser', 'Vayne'] }
  },
  ChoGath: {
    tier: 'A', difficulty: 'Easy', role: 'Tank',
    runes: {
      primary: { tree: 'Resolve', keystone: 'Grasp of the Undying', runes: ['Demolish', 'Conditioning', 'Overgrowth'] },
      secondary: { tree: 'Inspiration', runes: ['Approach Velocity', 'Biscuits'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'E > W > Q', notes: 'Max E for auto damage.' },
    itemBuilds: {
      starter: { items: [1054, 2003], names: ["Doran's Shield", 'Potion'] },
      core: { items: [3084, 3068, 6662], names: ['Heartsteel', 'Sunfire', 'JakSho'], order: 'Heartsteel → Sunfire' },
      boots: [3047],
      fullBuild: { standard: [3047, 3084, 3068, 6662, 3075, 4401], names: ['Plated', 'Heartsteel', 'Sunfire', 'JakSho', 'Thornmail', 'FoN'] }
    },
    combos: ['Q → W → AA', 'R stack infinitely', 'E slow'],
    counters: { strongAgainst: ['Gangplank', 'Kayle', 'Vladimir'], weakAgainst: ['Darius', 'Vayne', 'Fiora'] }
  },
  Shen: {
    tier: 'A', difficulty: 'Medium', role: 'Tank',
    runes: {
      primary: { tree: 'Resolve', keystone: 'Grasp of the Undying', runes: ['Shield Bash', 'Second Wind', 'Revitalize'] },
      secondary: { tree: 'Domination', runes: ['Cheap Shot', 'Ultimate Hunter'] },
      shards: ['Attack Speed', 'Health', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for trade.' },
    itemBuilds: {
      starter: { items: [1054, 2003], names: ["Doran's Shield", 'Potion'] },
      core: { items: [3084, 3074, 3068], names: ['Heartsteel', 'Titanic Hydra', 'Sunfire'], order: 'Heartsteel → Titanic' },
      boots: [3047],
      fullBuild: { standard: [3047, 3084, 3074, 3068, 3075, 3065], names: ['Plated', 'Heartsteel', 'Titanic', 'Sunfire', 'Thornmail', 'Spirit'] }
    },
    combos: ['E taunt → Q → AA', 'R global shield', 'W dodge autos'],
    counters: { strongAgainst: ['Irelia', 'Riven', 'Camille'], weakAgainst: ['Darius', 'Mordekaiser', 'Singed'] }
  },
  TahmKench: {
    tier: 'A', difficulty: 'Easy', role: 'Tank',
    runes: {
      primary: { tree: 'Resolve', keystone: 'Grasp of the Undying', runes: ['Shield Bash', 'Second Wind', 'Unflinching'] },
      secondary: { tree: 'Precision', runes: ['Triumph', 'Alacrity'] },
      shards: ['Attack Speed', 'Health', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for poke/stun.' },
    itemBuilds: {
      starter: { items: [1054, 2003], names: ["Doran's Shield", 'Potion'] },
      core: { items: [3084, 3068, 3065], names: ['Heartsteel', 'Sunfire', 'Spirit Visage'], order: 'Heartsteel → Sunfire' },
      boots: [3047],
      fullBuild: { standard: [3047, 3084, 3068, 3065, 3075, 6662], names: ['Plated', 'Heartsteel', 'Sunfire', 'Spirit', 'Thornmail', 'JakSho'] }
    },
    combos: ['Q slow → W → devour → R', 'W enemy/ally', 'E shield'],
    counters: { strongAgainst: ['Tryndamere', 'Riven', 'Irelia'], weakAgainst: ['Vayne', 'Gwen', 'Fiora'] }
  },
  Poppy: {
    tier: 'B', difficulty: 'Easy', role: 'Tank',
    runes: {
      primary: { tree: 'Resolve', keystone: 'Grasp of the Undying', runes: ['Shield Bash', 'Bone Plating', 'Revitalize'] },
      secondary: { tree: 'Inspiration', runes: ['Biscuits', 'Time Warp Tonic'] },
      shards: ['Ability Haste', 'Armor', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for damage.' },
    itemBuilds: {
      starter: { items: [1054, 2003], names: ["Doran's Shield", 'Potion'] },
      core: { items: [3068, 3025, 3075], names: ['Sunfire', 'Iceborn Gauntlet', 'Thornmail'], order: 'Sunfire → Iceborn' },
      boots: [3047],
      fullBuild: { standard: [3047, 3068, 3025, 3075, 3065, 6662], names: ['Plated', 'Sunfire', 'Iceborn', 'Thornmail', 'Spirit', 'JakSho'] }
    },
    combos: ['E wall stun → Q', 'W anti-dash', 'R disengage/execute'],
    counters: { strongAgainst: ['Riven', 'Irelia', 'Camille'], weakAgainst: ['Darius', 'Mordekaiser', 'Ornn'] }
  },
  Gragas: {
    tier: 'A', difficulty: 'Medium', role: 'Tank',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Phase Rush', runes: ['Manaflow Band', 'Transcendence', 'Scorch'] },
      secondary: { tree: 'Inspiration', runes: ['Biscuits', 'Cosmic Insight'] },
      shards: ['Ability Haste', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for poke.' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      core: { items: [6656, 3165, 3089], names: ['Everfrost', 'Morello', 'Rabadon'], order: 'Everfrost → Cosmic' },
      boots: [3158],
      fullBuild: { standard: [3158, 6656, 4629, 3165, 3089, 3135], names: ['CDR Boots', 'Everfrost', 'Cosmic', 'Morello', 'Rabadon', 'Void'] }
    },
    combos: ['E → Flash → R', 'Q poke', 'W damage reduction'],
    counters: { strongAgainst: ['Riven', 'Camille', 'Irelia'], weakAgainst: ['Mordekaiser', 'Darius', 'Vayne'] }
  },
  Singed: {
    tier: 'B', difficulty: 'Medium', role: 'Tank',
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Triumph', 'Legend: Tenacity', 'Last Stand'] },
      secondary: { tree: 'Sorcery', runes: ['Celerity', 'Nimbus Cloak'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for poison trail.' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      core: { items: [3116, 4633, 3165], names: ["Rylai's", 'Riftmaker', "Liandry's"], order: "Rylai's → Riftmaker" },
      boots: [3009],
      fullBuild: { standard: [3009, 3116, 4633, 3165, 3143, 6662], names: ['Swifties', "Rylai's", 'Riftmaker', 'Liandry', "Dead Man's", 'JakSho'] }
    },
    combos: ['Proxy farm', 'E flip → W', 'R sustain fight'],
    counters: { strongAgainst: ['Tanks', 'Immobile'], weakAgainst: ['Teemo', 'Vayne', 'Kayle'] }
  },
  DrMundo: {
    tier: 'B', difficulty: 'Easy', role: 'Tank',
    runes: {
      primary: { tree: 'Resolve', keystone: 'Grasp of the Undying', runes: ['Demolish', 'Second Wind', 'Overgrowth'] },
      secondary: { tree: 'Inspiration', runes: ['Magical Footwear', 'Approach Velocity'] },
      shards: ['Health', 'Health', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for poke/slow.' },
    itemBuilds: {
      starter: { items: [1054, 2003], names: ["Doran's Shield", 'Potion'] },
      core: { items: [3084, 3068, 3065], names: ['Heartsteel', 'Sunfire', 'Spirit Visage'], order: 'Heartsteel → Sunfire' },
      boots: [3047],
      fullBuild: { standard: [3047, 3084, 3068, 3065, 3075, 4401], names: ['Plated', 'Heartsteel', 'Sunfire', 'Spirit', 'Thornmail', 'FoN'] }
    },
    combos: ['Q spam poke', 'R unkillable', 'E AA reset'],
    counters: { strongAgainst: ['Ornn', 'Malphite', 'Sion'], weakAgainst: ['GW', 'Vayne', 'Fiora'] }
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
      core: { items: [6692, 6610, 3071], names: ['Eclipse', 'Sundered Sky', 'Black Cleaver'], order: 'Eclipse → Sundered' },
      boots: [3111],
      fullBuild: { standard: [3111, 6692, 6610, 6333, 3071, 3053], names: ['Mercs', 'Eclipse', 'Sundered', "Death's Dance", 'Black Cleaver', "Sterak's"] }
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
      starter: { items: [1102, 2003], names: ['Gustwalker Hatchling', 'Potion'] },
      core: { items: [6672, 3009, 3153], names: ['Kraken Slayer', 'The Collector', 'BOTRK'], order: 'Kraken → Collector → BOTRK' },
      boots: [3047],
      fullBuild: { standard: [3047, 6672, 3009, 3153, 3053, 3091], names: ['Plated', 'Kraken', 'Collector', 'BOTRK', "Sterak's", "Wit's End"] }
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
      core: { items: [6630, 3071, 3053], names: ['Eclipse', 'Black Cleaver', "Sterak's"], order: 'Eclipse → Cleaver' },
      boots: [3047],
      fullBuild: { standard: [3047, 6630, 3071, 3053, 6333, 3065], names: ['Plated', 'Eclipse', 'Cleaver', 'Sterak', 'DD', 'Spirit'] }
    },
    combos: ['Blue: W → Q → R → Q', 'Red: W → Q → AA → R in', 'Form choice crucial'],
    counters: { strongAgainst: ['Evelynn', 'Nidalee', 'Kindred'], weakAgainst: ['Lee Sin', 'Elise', 'Xin Zhao'] }
  },
  Khazix: {
    tier: 'A', difficulty: 'Medium', role: 'Assassin',
    runes: {
      primary: { tree: 'Domination', keystone: 'First Strike', runes: ['Sudden Impact', 'Eyeball Collection', 'Treasure Hunter'] },
      secondary: { tree: 'Inspiration', runes: ['Magical Footwear', 'Cosmic Insight'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Evolve Q first usually, or R for ganks.' },
    itemBuilds: {
      starter: { items: [1102, 2003], names: ['Gustwalker Hatchling', 'Potion'] },
      core: { items: [3142, 6692, 3814], names: ["Youmuu's", 'Eclipse', 'Edge of Night'], order: "Youmuu's → Eclipse" },
      boots: [3158],
      fullBuild: { standard: [3158, 3142, 6692, 3814, 6694, 3026], names: ['CDR Boots', 'Youmuu', 'Eclipse', 'Edge', 'Serylda', 'GA'] }
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
      core: { items: [3078, 6610, 3053], names: ['Trinity Force', 'Sundered Sky', "Sterak's"], order: 'Trinity → Sundered' },
      boots: [3047],
      fullBuild: { standard: [3047, 3078, 6610, 3053, 3071, 3026], names: ['Plated', 'Trinity', 'Sundered', 'Sterak', 'Cleaver', 'GA'] }
    },
    combos: ['Q charge → E → R', 'R lockdown priority target', 'Q flash for surprise'],
    counters: { strongAgainst: ['Evelynn', 'Nidalee', 'Kindred'], weakAgainst: ['Rammus', 'Gragas', 'Morgana'] }
  },
  Amumu: {
    tier: 'B', difficulty: 'Easy', role: 'JungleTank',
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Triumph', 'Legend: Tenacity', 'Last Stand'] },
      secondary: { tree: 'Domination', runes: ['Cheap Shot', 'Ultimate Hunter'] },
      shards: ['Ability Haste', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'E > Q > W', notes: 'Max E for clear/dmg reduction.' },
    itemBuilds: {
      starter: { items: [1102, 2003], names: ['Gustwalker Hatchling', 'Potion'] },
      core: { items: [3116, 3068, 6665], names: ["Liandry's", 'Sunfire', 'Abyssal Mask'], order: "Liandry's → Sunfire" },
      boots: [3047],
      fullBuild: { standard: [3047, 3116, 3068, 6665, 3075, 6662], names: ['Plated', 'Liandry', 'Sunfire', 'Abyssal', 'Thornmail', 'JakSho'] }
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
      core: { items: [3068, 3083, 3075], names: ['Sunfire', "Warmog's", 'Thornmail'], order: 'Sunfire → Warmogs' },
      boots: [3047],
      fullBuild: { standard: [3047, 3068, 3083, 3075, 6665, 3193], names: ['Plated', 'Sunfire', "Warmog's", 'Thornmail', 'Abyssal', "Gargoyle"] }
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
      core: { items: [3074, 3078, 3053], names: ['Ravenous Hydra', 'Trinity Force', "Sterak's"], order: 'Tiamat → Trinity' },
      boots: [3047],
      fullBuild: { standard: [3047, 3074, 3078, 3053, 3065, 3026], names: ['Plated', 'Ravenous', 'Trinity', 'Sterak', 'Spirit', 'GA'] }
    },
    combos: ['R engage → Q → E', 'Q hold for follow', 'Blood trail chasing'],
    counters: { strongAgainst: ['Lee Sin', 'Elise', 'Nidalee'], weakAgainst: ['Rammus', 'Lillia', 'Kindred'] }
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
      core: { items: [3074, 6610, 3053], names: ['Titanic Hydra', 'Sundered Sky', "Sterak's"], order: 'Titanic → Sundered' },
      boots: [3047],
      fullBuild: { standard: [3047, 3074, 6610, 3053, 6333, 3026], names: ['Plated', 'Titanic', 'Sundered', 'Sterak', 'DD', 'GA'] }
    },
    combos: ['E → AA → Q × 3 → W', 'R knockback zone', 'Early ganks'],
    counters: { strongAgainst: ['Evelynn', 'Karthus', 'Fiddlesticks'], weakAgainst: ['Lee Sin', 'Elise', 'Gragas'] }
  },
  Jarvan: {
    tier: 'A', difficulty: 'Easy', role: 'JungleFighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Triumph', 'Legend: Alacrity', 'Last Stand'] },
      secondary: { tree: 'Inspiration', runes: ['Magical Footwear', 'Cosmic Insight'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for damage.' },
    itemBuilds: {
      starter: { items: [1102, 2003], names: ['Gustwalker Hatchling', 'Potion'] },
      core: { items: [6610, 3161, 3053], names: ['Sundered Sky', 'Spear of Shojin', "Sterak's"], order: 'Sundered → Shojin' },
      boots: [3047],
      fullBuild: { standard: [3047, 6610, 3161, 3053, 3075, 3026], names: ['Plated', 'Sundered', 'Shojin', 'Sterak', 'Thornmail', 'GA'] }
    },
    combos: ['E → Q knockup', 'R cage', 'Flag for vision'],
    counters: { strongAgainst: ['Evelynn', 'Nidalee', 'Kindred'], weakAgainst: ['Lee Sin', 'Elise', 'Graves'] }
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
      core: { items: [6631, 6694, 3071], names: ['Stridebreaker', 'Axiom Arc', 'Black Cleaver'], order: 'Stride → Axiom' },
      boots: [3047],
      fullBuild: { standard: [3047, 6631, 6694, 3071, 3026, 6333], names: ['Plated', 'Stride', 'Axiom', 'Cleaver', 'GA', 'DD'] }
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
      core: { items: [3161, 6630, 3053], names: ['Spear of Shojin', 'Eclipse', "Sterak's"], order: 'Shojin → Eclipse' },
      boots: [3158],
      fullBuild: { standard: [3158, 3161, 6630, 3053, 3742, 6333], names: ['CDR Boots', 'Shojin', 'Eclipse', 'Sterak', 'Deadmans', 'DD'] }
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
      starter: { items: [1102, 2003], names: ['Gustwalker Hatchling', 'Potion'] },
      core: { items: [6631, 3071, 3053], names: ['Stridebreaker', 'Black Cleaver', "Sterak's"], order: 'Stride → Cleaver' },
      boots: [3047],
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
      core: { items: [3142, 3009, 3036], names: ["Youmuu's", 'Collector', 'LDR'], order: "Youmuu's → Collector" },
      boots: [3047],
      fullBuild: { standard: [3047, 3142, 3009, 3036, 3031, 3026], names: ['Plated', 'Youmuu', 'Collector', 'LDR', 'IE', 'GA'] }
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
      core: { items: [6672, 3009, 3031], names: ['Kraken Slayer', 'Collector', 'Infinity Edge'], order: 'Kraken → Collector → IE' },
      boots: [3006],
      fullBuild: { standard: [3006, 6672, 3009, 3031, 3036, 6694], names: ['Berserker', 'Kraken', 'Collector', 'IE', 'LDR', 'Terminus'] }
    },
    combos: ['Q kite → E slow → AA × 3', 'Mark stacking', 'R timing crucial'],
    counters: { strongAgainst: ['Evelynn', 'Karthus', 'Amumu'], weakAgainst: ['Rammus', 'Warwick', 'Graves'] }
  },
  Wukong: {
    tier: 'S', difficulty: 'Medium', role: 'JungleFighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Triumph', 'Legend: Alacrity', 'Last Stand'] },
      secondary: { tree: 'Domination', runes: ['Sudden Impact', 'Treasure Hunter'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for shred.' },
    itemBuilds: {
      starter: { items: [1102, 2003], names: ['Gustwalker Hatchling', 'Potion'] },
      core: { items: [6610, 3078, 3071], names: ['Sundered Sky', 'Trinity Force', 'Black Cleaver'], order: 'Sundered → Trinity' },
      boots: [3047],
      fullBuild: { standard: [3047, 6610, 3078, 3071, 3053, 6333], names: ['Plated', 'Sundered', 'Trinity', 'Cleaver', 'Sterak', 'DD'] }
    },
    combos: ['E → Q → R → W → R2', 'W clone tanks', 'R spin 2 wins'],
    counters: { strongAgainst: ['Lee Sin', 'Xin Zhao', 'Kha\'Zix'], weakAgainst: ['Lillia', 'Gragas', 'AP'] }
  },
  Volibear: {
    tier: 'S', difficulty: 'Easy', role: 'JungleTank',
    runes: {
      primary: { tree: 'Precision', keystone: 'Press the Attack', runes: ['Triumph', 'Legend: Alacrity', 'Last Stand'] },
      secondary: { tree: 'Sorcery', runes: ['Celerity', 'Waterwalking'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Q speed for ganks.' },
    itemBuilds: {
      starter: { items: [1102, 2003], names: ['Gustwalker Hatchling', 'Potion'] },
      core: { items: [6610, 3115, 3065], names: ['Sundered Sky', "Nashor's Tooth", 'Spirit Visage'], order: 'Sundered → Nashor' },
      boots: [3158],
      fullBuild: { standard: [3158, 6610, 3115, 3065, 3742, 6662], names: ['CDR Boots', 'Sundered', "Nashor's", 'Spirit', 'Deadmans', 'JakSho'] }
    },
    combos: ['Q run → R leap → E → W', 'Tower dive expert', 'W sustain'],
    counters: { strongAgainst: ['Hecarim', 'Rammus', 'Master Yi'], weakAgainst: ['Lillia', 'Trundle', 'Vayne'] }
  },
  Diana: {
    tier: 'S', difficulty: 'Medium', role: 'Assassin',
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Triumph', 'Legend: Alacrity', 'Last Stand'] },
      secondary: { tree: 'Inspiration', runes: ['Magical Footwear', 'Cosmic Insight'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for clear.' },
    itemBuilds: {
      starter: { items: [1102, 2003], names: ['Gustwalker Hatchling', 'Potion'] },
      core: { items: [3115, 3100, 4645], names: ["Nashor's Tooth", 'Lich Bane', 'Shadowflame'], order: 'Nashor → Lich' },
      boots: [3020],
      fullBuild: { standard: [3020, 3115, 3100, 4645, 3089, 3157], names: ['Sorc/Plated', "Nashor's", 'Lich', 'Shadowflame', 'Rabadon', "Zhonya's"] }
    },
    combos: ['Q → E → W → AA... → E', 'Moonlight reset', 'R multiman'],
    counters: { strongAgainst: ['Squishies', 'Karthus', 'Ekko'], weakAgainst: ['Trundle', 'Warwick', 'Bruisers'] }
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
      core: { items: [6672, 6631, 3153], names: ['Kraken Slayer', 'Stridebreaker', 'BOTRK'], order: 'Kraken → Stride' },
      boots: [3047],
      fullBuild: { standard: [3047, 6672, 6631, 3153, 6333, 3026], names: ['Plated', 'Kraken', 'Stride', 'BOTRK', 'DD', 'GA'] }
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
      core: { items: [6610, 6630, 3071], names: ['Sundered Sky', 'Eclipse', 'Black Cleaver'], order: 'Sundered → Eclipse' },
      boots: [3047],
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
      core: { items: [3153, 3124, 6672], names: ['BOTRK', "Guinsoo's", 'Kraken Slayer'], order: 'BOTRK → Guinsoo' },
      boots: [3006],
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
      core: { items: [3100, 4645, 3157], names: ['Lich Bane', 'Shadowflame', "Zhonya's"], order: 'Lich Bane → Shadowflame' },
      boots: [3020],
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
      core: { items: [3116, 4633, 3165], names: ["Liandry's", 'Riftmaker', "Zhonya's"], order: "Liandry's → Riftmaker" },
      boots: [3158],
      fullBuild: { standard: [3158, 3116, 4633, 3157, 3115, 3089], names: ['CDR Boots', "Liandry's", 'Riftmaker', "Zhonya's", "Nashor's", 'Rabadon'] }
    },
    combos: ['Q prance → E long range → R sleep', 'Passive stack', 'Kite forever'],
    counters: { strongAgainst: ['Amumu', 'Sejuani', 'Volibear'], weakAgainst: ['Lee Sin', 'Elise', 'Nocturne'] }
  },
  Zac: {
    tier: 'A', difficulty: 'Easy', role: 'JungleTank',
    runes: {
      primary: { tree: 'Resolve', keystone: 'Aftershock', runes: ['Font of Life', 'Conditioning', 'Revitalize'] },
      secondary: { tree: 'Precision', runes: ['Triumph', 'Legend: Tenacity'] },
      shards: ['Ability Haste', 'Health', 'Health']
    },
    skillOrder: { priority: 'E > W > Q', notes: 'Max E for range.' },
    itemBuilds: {
      starter: { items: [1102, 2003], names: ['Gustwalker Hatchling', 'Potion'] },
      core: { items: [3068, 3065, 3075], names: ['Sunfire', 'Spirit Visage', 'Thornmail'], order: 'Sunfire → Spirit' },
      boots: [3158],
      fullBuild: { standard: [3158, 3068, 3065, 3075, 6665, 6662], names: ['CDR Boots', 'Sunfire', 'Spirit', 'Thornmail', 'Abyssal', 'JakSho'] }
    },
    combos: ['E charge → Q → R', 'Blob pickup', 'Engage from fog'],
    counters: { strongAgainst: ['Evelynn', 'Karthus', 'Kindred'], weakAgainst: ['Viego', 'Graves', 'Kindred'] }
  },
  Rammus: {
    tier: 'A', difficulty: 'Easy', role: 'JungleTank',
    runes: {
      primary: { tree: 'Resolve', keystone: 'Aftershock', runes: ['Font of Life', 'Conditioning', 'Unflinching'] },
      secondary: { tree: 'Precision', runes: ['Triumph', 'Alacrity'] },
      shards: ['Attack Speed', 'Armor', 'Armor']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for speed.' },
    itemBuilds: {
      starter: { items: [1102, 2003], names: ['Gustwalker Hatchling', 'Potion'] },
      core: { items: [3075, 6664, 3068], names: ['Thornmail', 'Hollow Radiance', 'Sunfire Aegis'], order: 'Thornmail rush' },
      boots: [3047],
      fullBuild: { standard: [3047, 3075, 6664, 3068, 6665, 6662], names: ['Plated', 'Thornmail', 'Hollow', 'Sunfire', 'Abyssal', 'JakSho'] }
    },
    combos: ['Q → E taunt → W', 'R engage', 'Anti-AD'],
    counters: { strongAgainst: ['Lee Sin', 'MasterYi', 'Kindred'], weakAgainst: ['AP junglers', 'Lillia', 'Shyvana'] }
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
      core: { items: [3068, 3065, 4646], names: ['Sunfire', 'Spirit Visage', 'Stormsurge'], order: 'Sunfire → Spirit' },
      boots: [3047],
      fullBuild: { standard: [3047, 3068, 3065, 4646, 3075, 6662], names: ['Plated', 'Sunfire', 'Spirit', 'Stormsurge', 'Thornmail', 'JakSho'] }
    },
    combos: ['W gank → E → Q', 'R channel', 'Objective control'],
    counters: { strongAgainst: ['Kindred', 'Karthus', 'Eve'], weakAgainst: ['Lee Sin', 'Elise', 'Graves'] }
  },
  Skarner: {
    tier: 'A', difficulty: 'Easy', role: 'JungleTank',
    runes: {
      primary: { tree: 'Resolve', keystone: 'Phase Rush', runes: ['Nimbus Cloak', 'Celerity', 'Waterwalking'] },
      secondary: { tree: 'Inspiration', runes: ['Magical Footwear', 'Cosmic Insight'] },
      shards: ['Health', 'Health', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for clear/dmg.' },
    itemBuilds: {
      starter: { items: [1102, 2003], names: ['Gustwalker Hatchling', 'Potion'] },
      core: { items: [3084, 3068, 6610], names: ['Heartsteel', 'Sunfire', 'Sundered Sky'], order: 'Heartsteel → Sunfire' },
      boots: [3047],
      fullBuild: { standard: [3047, 3084, 3068, 6610, 3075, 6662], names: ['Plated', 'Heartsteel', 'Sunfire', 'Sundered', 'Thornmail', 'JakSho'] }
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
      core: { items: [3116, 3742, 3065], names: ["Liandry's", "Dead Man's", 'Spirit Visage'], order: "Liandry's → Deadmans" },
      boots: [3009],
      fullBuild: { standard: [3009, 3116, 3742, 3065, 3110, 6662], names: ['Swifties', "Liandry's", 'Deadmans', 'Spirit', 'Frozen Heart', 'JakSho'] }
    },
    combos: ['E stun → Q', 'R waveclear', 'Bear stance gank'],
    counters: { strongAgainst: ['Kindred', 'Karthus', 'Evelynn'], weakAgainst: ['Lillia', 'Viego', 'Graves'] }
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
      core: { items: [3161, 3116, 4633], names: ['Spear of Shojin', "Liandry's", 'Riftmaker'], order: 'Shojin → Liandry' },
      boots: [3020],
      fullBuild: { standard: [3020, 3161, 3116, 4633, 3157, 3089], names: ['Sorc', 'Shojin', "Liandry's", 'Riftmaker', "Zhonya's", 'Rabadon'] }
    },
    combos: ['R engage → E → Q', 'Dragon form', 'Objective focus'],
    counters: { strongAgainst: ['Rammus', 'Sejuani', 'Karthus'], weakAgainst: ['Lee Sin', 'Elise', 'Kindred'] }
  },
  Ivern: {
    tier: 'B', difficulty: 'Hard', role: 'SupportEnchant',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Summon Aery', runes: ['Nimbus Cloak', 'Transcendence', 'Waterwalking'] },
      secondary: { tree: 'Domination', runes: ['Eyeball Collection', 'Relentless Hunter'] },
      shards: ['Ability Haste', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'E > Q > W', notes: 'Max E for shield.' },
    itemBuilds: {
      starter: { items: [1102, 2003], names: ['Gustwalker Hatchling', 'Potion'] },
      core: { items: [6617, 3107, 3504], names: ['Moonstone Renewer', 'Redemption', 'Ardent Censer'], order: 'Moonstone → Redemption' },
      boots: [3158],
      fullBuild: { standard: [3158, 6617, 3107, 3504, 3011, 4642], names: ['CDR Boots', 'Moonstone', 'Redemption', 'Ardent', 'Chemtech', 'Mikael'] }
    },
    combos: ['Q link → ally dash', 'E shield + slow', 'Daisy control'],
    counters: { strongAgainst: ['Evelynn', 'Karthus'], weakAgainst: ['Lee Sin', 'Graves', 'Kindred'] }
  },
  Fiddlesticks: {
    tier: 'A', difficulty: 'Medium', role: 'Mage',
    runes: {
      primary: { tree: 'Domination', keystone: 'First Strike', runes: ['Cheap Shot', 'Eyeball Collection', 'Ultimate Hunter'] },
      secondary: { tree: 'Inspiration', runes: ['Cosmic Insight', 'Future Market'] },
      shards: ['Ability Haste', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'W > Q > E', notes: 'Max W for clear/sustain.' },
    itemBuilds: {
      starter: { items: [1102, 2003], names: ['Gustwalker Hatchling', 'Potion'] },
      core: { items: [3118, 3157, 4645], names: ['Malignance', "Zhonya's", 'Shadowflame'], order: 'Malignance → Zhonya' },
      boots: [3020],
      fullBuild: { standard: [3020, 3118, 3157, 4645, 3089, 3135], names: ['Sorc', 'Malignance', "Zhonya's", 'Shadowflame', 'Rabadon', 'Void'] }
    },
    combos: ['R from fog → E → W → Q', 'Fear crucial', 'Vision control'],
    counters: { strongAgainst: ['Kindred', 'Amumu', 'Sejuani'], weakAgainst: ['Lee Sin', 'Elise', 'Nocturne'] }
  },
  Evelynn: {
    tier: 'A', difficulty: 'Medium', role: 'Assassin',
    runes: {
      primary: { tree: 'Domination', keystone: 'Electrocute', runes: ['Sudden Impact', 'Eyeball Collection', 'Relentless Hunter'] },
      secondary: { tree: 'Sorcery', runes: ['Absolute Focus', 'Gathering Storm'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for clear/dmg.' },
    itemBuilds: {
      starter: { items: [1102, 2003], names: ['Gustwalker Hatchling', 'Potion'] },
      core: { items: [3100, 3089, 3135], names: ['Lich Bane', "Rabadon's", 'Void Staff'], order: 'Lich Bane → Rabadon' },
      boots: [3020],
      fullBuild: { standard: [3020, 3100, 3089, 3135, 4645, 3152], names: ['Sorc', 'Lich Bane', 'Rabadon', 'Void', 'Shadowflame', 'Rocketbelt'] }
    },
    combos: ['W charm → E → Q × n → R', 'R execute', 'Stealth 6+'],
    counters: { strongAgainst: ['Karthus', 'Fiddlesticks', 'Amumu'], weakAgainst: ['Lee Sin', 'Elise', 'Rengar'] }
  },
  Rengar: {
    tier: 'A', difficulty: 'Hard', role: 'Assassin',
    runes: {
      primary: { tree: 'Domination', keystone: 'Electrocute', runes: ['Sudden Impact', 'Eyeball Collection', 'Ultimate Hunter'] },
      secondary: { tree: 'Precision', runes: ['Triumph', 'Legend: Alacrity'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for burst.' },
    itemBuilds: {
      starter: { items: [1102, 2003], names: ['Gustwalker Hatchling', 'Potion'] },
      core: { items: [6693, 223137, 3814], names: ['Profane Hydra', 'Hubris', 'Edge of Night'], order: 'Profane → Hubris' },
      boots: [3158],
      fullBuild: { standard: [3158, 6693, 223137, 3814, 6694, 3026], names: ['CDR Boots', 'Profane', 'Hubris', 'Edge', 'Serylda', 'GA'] }
    },
    combos: ['Leap → E → W → Q', 'R → leap assassinate', 'Bush resets'],
    counters: { strongAgainst: ['ADCs', 'Kindred', 'Karthus'], weakAgainst: ['Warwick', 'Rammus', 'Viego'] }
  },
  Shaco: {
    tier: 'B', difficulty: 'Hard', role: 'Assassin',
    runes: {
      primary: { tree: 'Domination', keystone: 'Hail of Blades', runes: ['Sudden Impact', 'Eyeball Collection', 'Relentless Hunter'] },
      secondary: { tree: 'Precision', runes: ['Triumph', 'Alacrity'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'E > Q > W', notes: 'Max E for slow/dmg.' },
    itemBuilds: {
      starter: { items: [1102, 2003], names: ['Gustwalker Hatchling', 'Potion'] },
      core: { items: [3142, 6692, 3031], names: ["Youmuu's", 'Voltaic Cyclosword', 'IE'], order: "Youmuu's → Cyclosword" },
      boots: [3006],
      fullBuild: { standard: [3006, 3142, 6692, 3031, 3036, 3153], names: ['Berserker', 'Youmuu', 'Cyclosword', 'IE', 'LDR', 'BOTRK'] }
    },
    combos: ['Q stealth → E → AA', 'Clone mind games', 'Box zones'],
    counters: { strongAgainst: ['Kindred', 'Karthus', 'Evelynn'], weakAgainst: ['Lee Sin', 'Warwick', 'Viego'] }
  },
  Nidalee: {
    tier: 'A', difficulty: 'Very Hard', role: 'JungleFighter',
    runes: {
      primary: { tree: 'Domination', keystone: 'Dark Harvest', runes: ['Sudden Impact', 'Eyeball Collection', 'Treasure Hunter'] },
      secondary: { tree: 'Sorcery', runes: ['Transcendence', 'Waterwalking'] },
      shards: ['Ability Haste', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for spear dmg.' },
    itemBuilds: {
      starter: { items: [1102, 2003], names: ['Gustwalker Hatchling', 'Potion'] },
      core: { items: [3100, 4645, 3157], names: ['Lich Bane', 'Shadowflame', "Zhonya's"], order: 'Lich Bane → Shadowflame' },
      boots: [3020],
      fullBuild: { standard: [3020, 3100, 4645, 3157, 3089, 3135], names: ['Sorc', 'Lich Bane', 'Shadowflame', "Zhonya's", 'Rabadon', 'Void'] }
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
      core: { items: [3869, 3110, 3190], names: ['Solstice Sleigh', 'Frozen Heart', 'Locket'], order: 'Sleigh → Frozen Heart' },
      boots: [3158],
      fullBuild: { standard: [3158, 3869, 3110, 3190, 3109, 3050], names: ['CDR Boots', 'Solstice', 'Frozen Heart', 'Locket', 'Vow', "Zeke's"] }
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
      core: { items: [3877, 3050, 3109], names: ['Celestial Opposition', "Zeke's Convergence", "Knight's Vow"], order: 'Celestial → Zeke' },
      boots: [3047],
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
      core: { items: [3869, 3190, 3050], names: ['Solstice Sleigh', 'Locket', "Zeke's Convergence"], order: 'Sleigh → Locket' },
      boots: [3047],
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
      core: { items: [3876, 6617, 3504], names: ['Dream Maker', 'Moonstone Renewer', 'Ardent Censer'], order: 'Dream → Moonstone' },
      boots: [3158],
      fullBuild: { standard: [3158, 3876, 6617, 3504, 3107, 4642], names: ['CDR Boots', 'Dream Maker', 'Moonstone', 'Ardent', 'Redemption', 'Mikael'] }
    },
    combos: ['E on enemy → Q (pix poke)', 'W polymorph divers', 'R on diving ally'],
    counters: { strongAgainst: ['Zed', 'Talon', 'Assassins'], weakAgainst: ['Nautilus', 'Blitzcrank', 'Zyra'] }
  },
  Nami: {
    tier: 'A', difficulty: 'Medium', role: 'SupportEnchant',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Summon Aery', runes: ['Manaflow Band', 'Transcendence', 'Scorch'] },
      secondary: { tree: 'Inspiration', runes: ['Biscuit Delivery', 'Cosmic Insight'] },
      shards: ['Ability Haste', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'W > E > Q', notes: 'Max W for trade.' },
    itemBuilds: {
      starter: { items: [3867, 2003], names: ['World Atlas', 'Potion'] },
      core: { items: [3876, 6616, 6617], names: ['Dream Maker', 'Staff of Water', 'Moonstone'], order: 'Dream → Staff' },
      boots: [3158],
      fullBuild: { standard: [3158, 3876, 6616, 6617, 3504, 3107], names: ['CDR Boots', 'Dream Maker', 'Staff', 'Moonstone', 'Ardent', 'Redemption'] }
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
      core: { items: [3876, 6617, 3107], names: ['Dream Maker', 'Moonstone Renewer', 'Redemption'], order: 'Dream → Moonstone' },
      boots: [3158],
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
      core: { items: [3876, 6617, 2065], names: ['Dream Maker', 'Moonstone', 'Shurelya'], order: 'Dream → Moonstone' },
      boots: [3158],
      fullBuild: { standard: [3158, 3876, 6617, 2065, 3504, 3107], names: ['CDR Boots', 'Dream Maker', 'Moonstone', 'Shurelya', 'Ardent', 'Redemption'] }
    },
    combos: ['Q tornado disengage', 'W poke', 'R heal + knockback'],
    counters: { strongAgainst: ['Leona', 'Alistar', 'Nautilus'], weakAgainst: ['Zyra', 'Brand', 'Vel\'Koz'] }
  },
  Blitzcrank: {
    tier: 'A', difficulty: 'Medium', role: 'SupportTank',
    runes: {
      primary: { tree: 'Inspiration', keystone: 'Glacial Augment', runes: ['Hextech Flashtraption', 'Biscuit Delivery', 'Cosmic Insight'] },
      secondary: { tree: 'Resolve', runes: ['Bone Plating', 'Overgrowth'] },
      shards: ['Ability Haste', 'Health', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for pick.' },
    itemBuilds: {
      starter: { items: [3867, 2003], names: ['World Atlas', 'Potion'] },
      core: { items: [3877, 3050, 3110], names: ['Celestial Opposition', "Zeke's Convergence", 'Frozen Heart'], order: 'Celestial → Zeke' },
      boots: [3117],
      fullBuild: { standard: [3117, 3877, 3050, 3110, 3190, 3109], names: ['Mobi', 'Celestial', "Zeke's", 'Frozen Heart', 'Locket', 'Vow'] }
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
    itemBuilds: {
      starter: { items: [3867, 2003], names: ['World Atlas', 'Potion'] },
      core: { items: [3870, 3134, 6693], names: ['Bloodsong', 'Umbral Glaive', 'Profane Hydra'], order: 'Bloodsong → Umbral' },
      boots: [3117],
      fullBuild: { standard: [3117, 3870, 3134, 6693, 3142, 6609], names: ['Mobility', 'Bloodsong', 'Umbral', 'Profane', 'Youmuu', 'Edge'] }
    },
    combos: ['Q charge → E → R execute', 'E → Flash → Q → R', 'R resets on kills'],
    counters: { strongAgainst: ['Soraka', 'Sona', 'Yuumi'], weakAgainst: ['Nautilus', 'Morgana', 'Alistar'] }
  },
  Alistar: {
    tier: 'A', difficulty: 'Easy', role: 'SupportTank',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Phase Rush', runes: ['Nimbus Cloak', 'Celerity', 'Waterwalking'] },
      secondary: { tree: 'Inspiration', runes: ['Hextech Flashtraption', 'Cosmic Insight'] },
      shards: ['Ability Haste', 'Health', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for engage.' },
    itemBuilds: {
      starter: { items: [3867, 2003], names: ['World Atlas', 'Potion'] },
      core: { items: [3869, 3190, 3050], names: ['Solstice Sleigh', 'Locket', "Zeke's Convergence"], order: 'Sleigh → Locket' },
      boots: [3117],
      fullBuild: { standard: [3117, 3869, 3190, 3050, 3109, 3110], names: ['Mobi', 'Solstice', 'Locket', "Zeke's", 'Vow', 'Frozen Heart'] }
    },
    combos: ['W → Q (headbutt pulv)', 'Flash → W → Q', 'R sustain'],
    counters: { strongAgainst: ['Thresh', 'Nautilus', 'Leona'], weakAgainst: ['Morgana', 'Janna', 'Braum'] }
  },
  Braum: {
    tier: 'A', difficulty: 'Medium', role: 'SupportTank',
    runes: {
      primary: { tree: 'Resolve', keystone: 'Guardian', runes: ['Font of Life', 'Bone Plating', 'Unflinching'] },
      secondary: { tree: 'Inspiration', runes: ['Biscuit Delivery', 'Cosmic Insight'] },
      shards: ['Attack Speed', 'Health', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for poke/slow.' },
    itemBuilds: {
      starter: { items: [3867, 2003], names: ['World Atlas', 'Potion'] },
      core: { items: [3869, 3190, 3109], names: ['Solstice Sleigh', 'Locket', "Knight's Vow"], order: 'Sleigh → Locket' },
      boots: [3047],
      fullBuild: { standard: [3047, 3869, 3190, 3109, 3050, 3075], names: ['Plated', 'Solstice', 'Locket', 'Vow', "Zeke's", 'Thornmail'] }
    },
    combos: ['Q → AA → Passive stun', 'W jump → E shield', 'R disengage'],
    counters: { strongAgainst: ['Thresh', 'Leona', 'Nautilus'], weakAgainst: ['Zyra', 'Brand', 'Vel\'Koz'] }
  },
  Rell: {
    tier: 'B', difficulty: 'Medium', role: 'SupportTank',
    runes: {
      primary: { tree: 'Resolve', keystone: 'Aftershock', runes: ['Shield Bash', 'Bone Plating', 'Unflinching'] },
      secondary: { tree: 'Inspiration', runes: ['Hextech Flashtraption', 'Cosmic Insight'] },
      shards: ['Ability Haste', 'Armor', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q/W.' },
    itemBuilds: {
      starter: { items: [3867, 2003], names: ['World Atlas', 'Potion'] },
      core: { items: [3877, 3050, 3109], names: ['Celestial Opposition', "Zeke's Convergence", "Knight's Vow"], order: 'Celestial → Zeke' },
      boots: [3047],
      fullBuild: { standard: [3047, 3877, 3050, 3109, 3190, 3075], names: ['Plated', 'Celestial', "Zeke's", 'Vow', 'Locket', 'Thornmail'] }
    },
    combos: ['W crash → E → R', 'Form swap timing', 'R drag in'],
    counters: { strongAgainst: ['Sona', 'Yuumi', 'Soraka'], weakAgainst: ['Morgana', 'Janna', 'Lulu'] }
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
      core: { items: [3869, 3109, 3024], names: ['Solstice Sleigh', "Knight's Vow", 'Fimbulwinter'], order: 'Sleigh → Vow' },
      boots: [3047],
      fullBuild: { standard: [3047, 3869, 3109, 3024, 3190, 3075], names: ['Plated', 'Solstice', 'Vow', 'Fimbul', 'Locket', 'Thornmail'] }
    },
    combos: ['E stun → Q × n', 'R invulnerability timing', 'W link to diver'],
    counters: { strongAgainst: ['Assassins', 'Burst'], weakAgainst: ['Morgana', 'Zyra', 'Brand'] }
  },
  Rakan: {
    tier: 'A', difficulty: 'Medium', role: 'SupportTank',
    runes: {
      primary: { tree: 'Resolve', keystone: 'Guardian', runes: ['Font of Life', 'Bone Plating', 'Unflinching'] },
      secondary: { tree: 'Domination', runes: ['Zombie Ward', 'Ultimate Hunter'] },
      shards: ['Ability Haste', 'Health', 'Health']
    },
    skillOrder: { priority: 'W > E > Q', notes: 'Max W for engage.' },
    itemBuilds: {
      starter: { items: [3867, 2003], names: ['World Atlas', 'Potion'] },
      core: { items: [3869, 3050, 3190], names: ['Solstice Sleigh', "Zeke's Convergence", 'Locket'], order: 'Sleigh → Zeke' },
      boots: [3158],
      fullBuild: { standard: [3158, 3869, 3050, 3190, 3109, 6653], names: ['CDR Boots', 'Solstice', "Zeke's", 'Locket', 'Vow', "Liandry's"] }
    },
    combos: ['R → Flash → W → E out', 'E → W → E', 'W knockup'],
    counters: { strongAgainst: ['Sona', 'Soraka', 'Yuumi'], weakAgainst: ['Morgana', 'Alistar', 'Braum'] }
  },
  Karma: {
    tier: 'A', difficulty: 'Easy', role: 'SupportEnchant',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Arcane Comet', runes: ['Manaflow Band', 'Transcendence', 'Scorch'] },
      secondary: { tree: 'Domination', runes: ['Cheap Shot', 'Ultimate Hunter'] },
      shards: ['Ability Haste', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for poke.' },
    itemBuilds: {
      starter: { items: [3867, 2003], names: ['World Atlas', 'Potion'] },
      core: { items: [3871, 3118, 6616], names: ["Zaz'Zaq's Realmspike", 'Malignance', 'Staff of Water'], order: 'ZazZaq → Malignance' },
      boots: [3158],
      fullBuild: { standard: [3158, 3871, 3118, 6616, 2065, 3089], names: ['CDR Boots', "Zaz'Zaq", 'Malignance', 'Staff', 'Shurelya', 'Rabadon'] }
    },
    combos: ['R → Q poke', 'R → E team speed', 'W root'],
    counters: { strongAgainst: ['Engage supports'], weakAgainst: ['Soraka', 'Yuumi', 'Sona'] }
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
      core: { items: [3876, 6617, 3504], names: ['Dream Maker', 'Moonstone Renewer', 'Ardent Censer'], order: 'Dream → Moonstone' },
      boots: [3158],
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
      core: { items: [3876, 6617, 3504], names: ['Dream Maker', 'Moonstone', 'Ardent'], order: 'Dream → Moonstone' },
      boots: [3158],
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
      core: { items: [3877, 3190, 2065], names: ['Celestial Opposition', 'Locket', 'Shurelya'], order: 'Celestial → Locket' },
      boots: [3158],
      fullBuild: { standard: [3158, 3877, 3190, 2065, 3107, 6662], names: ['CDR Boots', 'Celestial', 'Locket', 'Shurelya', 'Redemption', 'JakSho'] }
    },
    combos: ['Q hook', 'W bailout save', 'R enemy team fight'],
    counters: { strongAgainst: ['Engage supports'], weakAgainst: ['Poke lanes', 'Zyra', 'Brand'] }
  },
  Morgana: {
    tier: 'A', difficulty: 'Easy', role: 'SupportEnchant',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Arcane Comet', runes: ['Manaflow Band', 'Transcendence', 'Scorch'] },
      secondary: { tree: 'Inspiration', runes: ['Perfect Timing', 'Cosmic Insight'] },
      shards: ['Ability Haste', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for root.' },
    itemBuilds: {
      starter: { items: [3867, 2003], names: ['World Atlas', 'Potion'] },
      core: { items: [3871, 3157, 3116], names: ["Zaz'Zaq's", "Zhonya's", "Liandry's"], order: "Zaz'Zaq → Zhonya" },
      boots: [3020],
      fullBuild: { standard: [3020, 3871, 3157, 3116, 4637, 3089], names: ['Sorc', "Zaz'Zaq", "Zhonya's", "Liandry's", 'Horizon', 'Rabadon'] }
    },
    combos: ['Q root → W', 'E black shield timing', 'R → Zhonya'],
    counters: { strongAgainst: ['Thresh', 'Nautilus', 'Leona'], weakAgainst: ['Zyra', 'Brand', 'Vel\'Koz'] }
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
      core: { items: [3869, 2065, 6617], names: ['Solstice Sleigh', 'Shurelya', 'Moonstone'], order: 'Solstice → Shurelya' },
      boots: [3158],
      fullBuild: { standard: [3158, 3869, 2065, 6617, 3157, 3089], names: ['CDR Boots', 'Solstice', 'Shurelya', 'Moonstone', "Zhonya's", 'Rabadon'] }
    },
    combos: ['Q → W → Q (double bomb stun)', 'E speed/slow', 'R revive timing'],
    counters: { strongAgainst: ['Engage supports'], weakAgainst: ['Poke lanes', 'Brand', 'Zyra'] }
  },
  Bard: {
    tier: 'A', difficulty: 'Hard', role: 'SupportEnchant',
    runes: {
      primary: { tree: 'Resolve', keystone: 'Guardian', runes: ['Font of Life', 'Bone Plating', 'Unflinching'] },
      secondary: { tree: 'Domination', runes: ['Zombie Ward', 'Relentless Hunter'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for stun.' },
    itemBuilds: {
      starter: { items: [3867, 2003], names: ['World Atlas', 'Potion'] },
      core: { items: [3869, 3190, 6653], names: ['Solstice Sleigh', 'Locket', "Liandry's"], order: 'Solstice → Locket' },
      boots: [3117],
      fullBuild: { standard: [3117, 3869, 3190, 6653, 3110, 3109], names: ['Mobi', 'Solstice', 'Locket', "Liandry's", 'Frozen Heart', 'Vow'] }
    },
    combos: ['Q stun through minion', 'E portal plays', 'R timing crucial'],
    counters: { strongAgainst: ['Enchanters'], weakAgainst: ['Nautilus', 'Leona', 'Engage'] }
  },
  Sona: {
    tier: 'B', difficulty: 'Easy', role: 'SupportEnchant',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Summon Aery', runes: ['Manaflow Band', 'Transcendence', 'Gathering Storm'] },
      secondary: { tree: 'Resolve', runes: ['Revitalize', 'Conditioning'] },
      shards: ['Ability Haste', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q then W.' },
    itemBuilds: {
      starter: { items: [3867, 2003], names: ['World Atlas', 'Potion'] },
      core: { items: [3876, 6617, 6616], names: ['Dream Maker', 'Moonstone', 'Staff of Water'], order: 'Dream → Moonstone' },
      boots: [3158],
      fullBuild: { standard: [3158, 3876, 6617, 6616, 3504, 3089], names: ['CDR Boots', 'Dream Maker', 'Moonstone', 'Staff', 'Ardent', 'Rabadon'] }
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
      core: { items: [3871, 3116, 3110], names: ["Zaz'Zaq's", "Liandry's", 'Rylai'], order: "Zaz'Zaq → Liandry" },
      boots: [3020],
      fullBuild: { standard: [3020, 3871, 3116, 3110, 4637, 3089], names: ['Sorc', "Zaz'Zaq", "Liandry's", 'Rylai', 'Horizon', 'Rabadon'] }
    },
    combos: ['E → W → Q → W → R', 'Plant zone control', 'R knockup'],
    counters: { strongAgainst: ['Enchanters', 'Soraka'], weakAgainst: ['Nautilus', 'Leona', 'Engage'] }
  },
  Heimerdinger: {
    tier: 'B', difficulty: 'Medium', role: 'Mage',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Arcane Comet', runes: ['Manaflow Band', 'Absolute Focus', 'Scorch'] },
      secondary: { tree: 'Domination', runes: ['Cheap Shot', 'Treasure Hunter'] },
      shards: ['Ability Haste', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for push.' },
    itemBuilds: {
      starter: { items: [3867, 2003], names: ['World Atlas', 'Potion'] },
      core: { items: [3871, 3110, 3116], names: ["Zaz'Zaq's", 'Rylai', "Liandry's"], order: 'Rylai → Liandry' },
      boots: [3020],
      fullBuild: { standard: [3020, 3871, 3110, 3116, 3157, 3089], names: ['Sorc', "Zaz'Zaq", 'Rylai', "Liandry's", "Zhonya's", 'Rabadon'] }
    },
    combos: ['Turret setup', 'E stun', 'R upgrade abilities'],
    counters: { strongAgainst: ['Melee supports'], weakAgainst: ['Xerath', 'Vel\'Koz', 'Range poke'] }
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
      core: { items: [3871, 6617, 3116], names: ["Zaz'Zaq's", 'Moonstone', "Liandry's"], order: "Zaz'Zaq → Moonstone" },
      boots: [3158],
      fullBuild: { standard: [3158, 3871, 6617, 3116, 6616, 3089], names: ['CDR Boots', "Zaz'Zaq", 'Moonstone', "Liandry's", 'Staff', 'Rabadon'] }
    },
    combos: ['Q poke', 'E slow/root', 'R extend charm'],
    counters: { strongAgainst: ['Teamfight'], weakAgainst: ['Engage supports', 'Nautilus'] }
  },
  Karthus: {
    tier: 'S', difficulty: 'Medium', role: 'JungleFighter',
    runes: {
      primary: { tree: 'Domination', keystone: 'Dark Harvest', runes: ['Cheap Shot', 'Eyeball Collection', 'Ultimate Hunter'] },
      secondary: { tree: 'Precision', runes: ['Presence of Mind', 'Last Stand'] },
      shards: ['Ability Haste', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q.' },
    itemBuilds: {
      starter: { items: [1102, 2031], names: ['Gustwalker', 'Refillable'] },
      core: { items: [3118, 3116, 4645], names: ['Malignance', "Liandry's", 'Shadowflame'], order: 'Malignance → Liandry' },
      boots: [3020],
      fullBuild: { standard: [3020, 3118, 3116, 4645, 3089, 3135], names: ['Sorc', 'Malignance', "Liandry's", 'Shadowflame', 'Rabadon', 'Void'] }
    },
    combos: ['Q spam', 'W slow zone', 'R global execute'],
    counters: { strongAgainst: ['Farming junglers'], weakAgainst: ['Lee Sin', 'Elise', 'Invade junglers'] }
  },
  Xerath: {
    tier: 'A', difficulty: 'Medium', role: 'Mage',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Arcane Comet', runes: ['Manaflow Band', 'Absolute Focus', 'Scorch'] },
      secondary: { tree: 'Domination', runes: ['Cheap Shot', 'Ultimate Hunter'] },
      shards: ['Ability Haste', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for poke.' },
    itemBuilds: {
      starter: { items: [3867, 2003], names: ['World Atlas', 'Potion'] },
      core: { items: [3871, 223116, 4637], names: ["Zaz'Zaq's", "Luden's Companion", 'Horizon Focus'], order: "Zaz'Zaq → Luden's" },
      boots: [3020],
      fullBuild: { standard: [3020, 3871, 223116, 4637, 4645, 3089], names: ['Sorc', "Zaz'Zaq", "Luden's", 'Horizon', 'Shadowflame', 'Rabadon'] }
    },
    combos: ['W slow → Q', 'E stun → W → Q', 'R snipe'],
    counters: { strongAgainst: ['Mages', 'Enchanters'], weakAgainst: ['Blitzcrank', 'Nautilus', 'Pyke'] }
  },
  VelKoz: {
    tier: 'A', difficulty: 'Hard', role: 'Mage',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Arcane Comet', runes: ['Manaflow Band', 'Transcendence', 'Scorch'] },
      secondary: { tree: 'Inspiration', runes: ['Biscuit Delivery', 'Cosmic Insight'] },
      shards: ['Ability Haste', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for poke.' },
    itemBuilds: {
      starter: { items: [3867, 2003], names: ['World Atlas', 'Potion'] },
      core: { items: [3871, 3116, 4637], names: ["Zaz'Zaq's", "Liandry's", 'Horizon Focus'], order: "Zaz'Zaq → Liandry's" },
      boots: [3020],
      fullBuild: { standard: [3020, 3871, 3116, 4637, 4645, 3089], names: ['Sorc', "Zaz'Zaq", "Liandry's", 'Horizon', 'Shadowflame', 'Rabadon'] }
    },
    combos: ['Q angle poke', 'E knockup → W → R', 'True dmg proc'],
    counters: { strongAgainst: ['Brahm', 'Taric'], weakAgainst: ['Pyke', 'Blitzcrank', 'Yasuo'] }
  },
  Brand: {
    tier: 'S', difficulty: 'Easy', role: 'Mage',
    runes: {
      primary: { tree: 'Domination', keystone: 'Dark Harvest', runes: ['Cheap Shot', 'Eyeball Collection', 'Treasure Hunter'] },
      secondary: { tree: 'Sorcery', runes: ['Manaflow Band', 'Scorch'] },
      shards: ['Ability Haste', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'W > Q > E', notes: 'Max W for poke.' },
    itemBuilds: {
      starter: { items: [3867, 2003], names: ['World Atlas', 'Potion'] },
      core: { items: [3871, 3116, 3110], names: ["Zaz'Zaq's", "Liandry's", 'Rylai'], order: "Liandry's → Rylai" },
      boots: [3020],
      fullBuild: { standard: [3020, 3871, 3116, 3110, 3157, 3089], names: ['Sorc', "Zaz'Zaq", "Liandry's", 'Rylai', "Zhonya's", 'Rabadon'] }
    },
    combos: ['E → Q (stun) → W', 'R bouncing bomb', 'Passive burn'],
    counters: { strongAgainst: ['Tanks', 'Braum', 'Taric'], weakAgainst: ['Xerath', 'Vel\'Koz', 'Assassins'] }
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
      core: { items: [3870, 3134, 6694], names: ['Bloodsong', 'Umbral Glaive', 'Rapid Firecannon'], order: 'Bloodsong → Umbral' },
      boots: [3009],
      fullBuild: { standard: [3009, 3870, 3134, 6694, 3036, 6676], names: ['Swifties', 'Bloodsong', 'Umbral', 'RFC', 'LDR', 'Collector'] }
    },
    combos: ['AA → Q → AA', 'W root setup', 'R global shield/dmg'],
    counters: { strongAgainst: ['Tanks', 'Enchanters'], weakAgainst: ['Pyke', 'Blitzcrank', 'Nautilus'] }
  },
  Graves: {
    tier: 'A', difficulty: 'Medium', role: 'JungleFighter',
    runes: {
      primary: { tree: 'Domination', keystone: 'Dark Harvest', runes: ['Sudden Impact', 'Eyeball Collection', 'Treasure Hunter'] },
      secondary: { tree: 'Precision', runes: ['Legend: Alacrity', 'Triumph'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for burst/clear.' },
    itemBuilds: {
      starter: { items: [1102, 2031], names: ['Gustwalker', 'Refillable'] },
      core: { items: [3142, 3009, 3036], names: ["Youmuu's Ghostblade", 'The Collector', 'LDR'], order: 'Youmuu → Collector' },
      boots: [3047],
      fullBuild: { standard: [3047, 3142, 3009, 3036, 3031, 3026], names: ['Plated', "Youmuu's", 'Collector', 'LDR', 'IE', 'GA'] }
    },
    combos: ['AA → E → AA → Q', 'R execute', 'W smoke usage'],
    counters: { strongAgainst: ['Melee junglers', 'Viego'], weakAgainst: ['Evelynn', 'Nidalee', 'AP Burst'] }
  },
  Kayn: {
    tier: 'S', difficulty: 'Medium', role: 'JungleFighter',
    runes: {
      primary: { tree: 'Domination', keystone: 'Dark Harvest', runes: ['Sudden Impact', 'Eyeball Collection', 'Treasure Hunter'] },
      secondary: { tree: 'Inspiration', runes: ['Magical Footwear', 'Cosmic Insight'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for clear.' },
    itemBuilds: {
      starter: { items: [1102, 2031], names: ['Gustwalker', 'Refillable'] },
      core: { items: [3142, 6694, 6692], names: ["Youmuu's", 'Axiom Arc', 'Voltaic Cyclosword'], order: 'Youmuu → Axiom' },
      boots: [3117],
      fullBuild: { standard: [3117, 3142, 6694, 6692, 3004, 3026], names: ['Mobi', "Youmuu's", 'Axiom', 'Voltaic', 'Muramana', 'GA'] }
    },
    combos: ['Q through walls', 'W slow/knockup', 'R infest wait/dash'],
    counters: { strongAgainst: ['Immobile squishies', 'Tanks (Red)'], weakAgainst: ['Graves', 'Poppy', 'Invaders'] }
  },
  KaiSa: {
    tier: 'S', difficulty: 'Hard', role: 'Marksman',
    runes: {
      primary: { tree: 'Precision', keystone: 'Press the Attack', runes: ['Triumph', 'Legend: Alacrity', 'Coup de Grace'] },
      secondary: { tree: 'Inspiration', runes: ['Magical Footwear', 'Biscuit Delivery'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q. Evolve Q first.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      core: { items: [3087, 3124, 3115], names: ['Statikk Shiv', "Guinsoo's Rageblade", "Nashor's Tooth"], order: 'Statikk → Guinsoo' },
      boots: [3006],
      fullBuild: { standard: [3006, 3087, 3124, 3115, 3089, 3157], names: ['Berserker', 'Statikk', "Guinsoo's", "Nashor's", 'Rabadon', "Zhonya's"] }
    },
    combos: ['AA → Q → W', 'R shield/dash', 'E evolve positioning'],
    counters: { strongAgainst: ['Ezreal', 'Jhin'], weakAgainst: ['Draven', 'Caitlyn', 'Samira'] }
  },
  Varus: {
    tier: 'A', difficulty: 'Medium', role: 'Marksman',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Arcane Comet', runes: ['Manaflow Band', 'Transcendence', 'Scorch'] },
      secondary: { tree: 'Inspiration', runes: ['Biscuit Delivery', 'Cosmic Insight'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for poke.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      core: { items: [3142, 3004, 3147], names: ["Youmuu's", 'Manamune', 'Edge of Night'], order: 'Youmuu → Manamune' },
      boots: [3009],
      fullBuild: { standard: [3009, 3142, 3004, 3147, 6694, 3036], names: ['Swifties', "Youmuu's", 'Manamune', 'Edge', 'Axiom', 'LDR'] }
    },
    combos: ['Q charge poke', 'R root initiate', 'E slow/anti-heal'],
    counters: { strongAgainst: ['Draven', 'Lucian'], weakAgainst: ['Tristana', 'Samira', 'Engage'] }
  },
  Draven: {
    tier: 'S', difficulty: 'Hard', role: 'Marksman',
    runes: {
      primary: { tree: 'Precision', keystone: 'Lethal Tempo', runes: ['Triumph', 'Legend: Bloodline', 'Last Stand'] },
      secondary: { tree: 'Domination', runes: ['Eyeball Collection', 'Treasure Hunter'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q. Axe catching key.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      core: { items: [3072, 3508, 3009], names: ['Bloodthirster', 'Essence Reaver', 'Collector'], order: 'BT → ER' },
      boots: [3006],
      fullBuild: { standard: [3006, 3072, 3508, 3009, 3031, 3036], names: ['Berserker', 'BT', 'ER', 'Collector', 'IE', 'LDR'] }
    },
    combos: ['Axe juggle', 'W reset', 'R execute'],
    counters: { strongAgainst: ['Vayne', 'Kai\'Sa', 'Ezreal'], weakAgainst: ['Caitlyn', 'Varus', 'Ashe'] }
  },
  Malphite: {
    tier: 'S', difficulty: 'Easy', role: 'Tank',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Arcane Comet', runes: ['Manaflow Band', 'Transcendence', 'Scorch'] },
      secondary: { tree: 'Resolve', runes: ['Second Wind', 'Overgrowth'] },
      shards: ['Ability Haste', 'Armor', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q for poke.' },
    itemBuilds: {
      starter: { items: [1054, 2003], names: ["Doran's Shield", 'Potion'] },
      core: { items: [3025, 3068, 3075], names: ['Iceborn Gauntlet', 'Sunfire Aegis', 'Thornmail'], order: 'Iceborn → Sunfire' },
      boots: [3047],
      fullBuild: { standard: [3047, 3025, 3068, 3075, 4401, 6662], names: ['Plated', 'Iceborn', 'Sunfire', 'Thornmail', 'Force of Nature', 'JakSho'] }
    },
    combos: ['Q poke', 'R → E → Q', 'Unstoppable Force engage'],
    counters: { strongAgainst: ['Tryndamere', 'Jax', 'Fiora'], weakAgainst: ['Sylas', 'Mordekaiser', 'Rumble'] }
  },
  Nocturne: {
    tier: 'S', difficulty: 'Easy', role: 'JungleFighter',
    runes: {
      primary: { tree: 'Precision', keystone: 'Conqueror', runes: ['Triumph', 'Legend: Alacrity', 'Last Stand'] },
      secondary: { tree: 'Domination', runes: ['Eyeball Collection', 'Ultimate Hunter'] },
      shards: ['Attack Speed', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q.' },
    itemBuilds: {
      starter: { items: [1102, 2031], names: ['Gustwalker', 'Refillable'] },
      core: { items: [6631, 3071, 25044], names: ['Stridebreaker', 'Black Cleaver', 'Experimental Hexplate'], order: 'Stride → Hexplate' },
      boots: [3047],
      fullBuild: { standard: [3047, 6631, 6692, 3071, 3026, 6333], names: ['Plated', 'Stridebreaker', 'Eclipse', 'Cleaver', 'GA', 'DD'] }
    },
    combos: ['R → Q → E', 'Spellshield timing', 'Darkness pressure'],
    counters: { strongAgainst: ['Immobile carries'], weakAgainst: ['Rammus', 'Graves', 'Udyr'] }
  },
  Aurora: {
    tier: 'A', difficulty: 'Medium', role: 'BattleMage',
    runes: {
      primary: { tree: 'Domination', keystone: 'Electrocute', runes: ['Sudden Impact', 'Eyeball Collection', 'Ultimate Hunter'] },
      secondary: { tree: 'Sorcery', runes: ['Manaflow Band', 'Transcendence'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q.' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      core: { items: [4646, 3165, 4629], names: ['Stormsurge', "Liandry's Torment", 'Cosmic Drive'], order: 'Stormsurge → Liandry' },
      boots: [3020],
      fullBuild: { standard: [3020, 4646, 3165, 4629, 3157, 3089], names: ['Sorc', 'Stormsurge', "Liandry's", 'Cosmic', "Zhonya's", 'Rabadon'] }
    },
    combos: ['Q → Q2', 'R trap', 'Stealth movement'],
    counters: { strongAgainst: ['Immobile Mages'], weakAgainst: ['Assassins', 'Yasuo', 'Yone'] }
  },
  Smolder: {
    tier: 'A', difficulty: 'Easy', role: 'Marksman',
    runes: {
      primary: { tree: 'Precision', keystone: 'Fleet Footwork', runes: ['Presence of Mind', 'Legend: Bloodline', 'Cut Down'] },
      secondary: { tree: 'Inspiration', runes: ['Biscuit Delivery', 'Magical Footwear'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > W > E', notes: 'Max Q for stacks.' },
    itemBuilds: {
      starter: { items: [1055, 2003], names: ["Doran's Blade", 'Potion'] },
      core: { items: [3508, 3094, 3031], names: ['Essence Reaver', 'Rapid Firecannon', 'Infinity Edge'], order: 'ER → RFC → IE' },
      boots: [3158],
      fullBuild: { standard: [3158, 3508, 3094, 3031, 3036, 3026], names: ['CDR Boots', 'ER', 'RFC', 'IE', 'LDR', 'GA'] }
    },
    combos: ['Q poke', 'Stacking passive', 'E flight escape'],
    counters: { strongAgainst: ['Tanks'], weakAgainst: ['Draven', 'Samira', 'Lucian'] }
  },
  Hwei: {
    tier: 'S', difficulty: 'Hard', role: 'Mage',
    runes: {
      primary: { tree: 'Sorcery', keystone: 'Arcane Comet', runes: ['Manaflow Band', 'Transcendence', 'Scorch'] },
      secondary: { tree: 'Precision', runes: ['Presence of Mind', 'Coup de Grace'] },
      shards: ['Adaptive Force', 'Adaptive Force', 'Health']
    },
    skillOrder: { priority: 'Q > E > W', notes: 'Max Q.' },
    itemBuilds: {
      starter: { items: [1056, 2003], names: ["Doran's Ring", 'Potion'] },
      core: { items: [25060, 4645, 3089], names: ['Blackfire Torch', 'Shadowflame', "Rabadon's"], order: 'Blackfire → Shadowflame' },
      boots: [3020],
      fullBuild: { standard: [3020, 25060, 4645, 3089, 3157, 3135], names: ['Sorc', 'Blackfire', 'Shadowflame', 'Rabadon', "Zhonya's", 'Void'] }
    },
    combos: ['QQ/QW/QE choice', 'E CC chain', 'R execute'],
    counters: { strongAgainst: ['Control Mages'], weakAgainst: ['Assassins', 'Fizz', 'Zed'] }
  },
};

// =================== CHAMPION ROLE MAPPINGS ===================

const championRoles = {
  // ADCs - Split by playstyle
  Jinx: 'Marksman', Caitlyn: 'Marksman', Jhin: 'Marksman', MissFortune: 'Marksman',
  Ashe: 'Marksman', Sivir: 'Marksman', Tristana: 'Marksman', Xayah: 'Marksman',
  Aphelios: 'Marksman', Draven: 'Marksman', Samira: 'Marksman', Zeri: 'Marksman', Smolder: 'Marksman',
  // On-Hit ADCs
  KogMaw: 'OnHitADC', Varus: 'OnHitADC', Kalista: 'OnHitADC', Twitch: 'OnHitADC',
  Vayne: 'OnHitADC', KaiSa: 'OnHitADC', Nilah: 'OnHitADC',
  // Caster ADCs
  Ezreal: 'Marksman', Lucian: 'Marksman', Senna: 'Marksman',

  // Mages - Split by playstyle
  Ahri: 'Mage', Syndra: 'Mage', Orianna: 'Mage', Viktor: 'Mage', Lux: 'Mage',
  Veigar: 'Mage', Annie: 'Mage', TwistedFate: 'Mage', Neeko: 'Mage', Zoe: 'Mage', Vex: 'Mage', Hwei: 'Mage',
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
  Pantheon: 'Fighter', Wukong: 'Fighter', Rengar: 'Fighter', Jayce: 'Fighter',
  Kennen: 'Fighter', Gnar: 'Fighter', Rumble: 'Fighter', Quinn: 'Fighter', Kayle: 'Fighter', KSante: 'Fighter', Ambessa: 'Fighter',

  // Tanks (Top lane)
  Malphite: 'Tank', Ornn: 'Tank', Sion: 'Tank', Maokai: 'Tank', ChoGath: 'Tank',
  Shen: 'Tank', TahmKench: 'Tank', Poppy: 'Tank', Gragas: 'Tank', Singed: 'Tank',

  // Jungle Fighters
  LeeSin: 'JungleFighter', Viego: 'JungleFighter', Kayn: 'JungleFighter', Vi: 'JungleFighter',
  Warwick: 'JungleFighter', XinZhao: 'JungleFighter', Jarvan: 'JungleFighter', Nocturne: 'JungleFighter',
  Hecarim: 'JungleFighter', RekSai: 'JungleFighter', Graves: 'JungleFighter', Kindred: 'JungleFighter',
  Belveth: 'JungleFighter', Briar: 'JungleFighter', MasterYi: 'JungleFighter', Elise: 'JungleFighter',
  Lillia: 'JungleFighter',

  // Jungle Tanks
  Amumu: 'JungleTank', Sejuani: 'JungleTank', Zac: 'JungleTank', Rammus: 'JungleTank',
  Nunu: 'JungleTank', Skarner: 'JungleTank', Udyr: 'JungleTank', Shyvana: 'JungleTank',
  Ivern: 'JungleTank', Fiddlesticks: 'JungleTank',
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

function generateChampionBuild(championId, championData) {
  // Check for specific override first
  const override = championOverrides[championId];

  // Determine role from championData tags or our mapping
  let role = championRoles[championId];
  if (!role && championData?.tags) {
    if (championData.tags.includes('Marksman')) role = 'Marksman';
    else if (championData.tags.includes('Assassin')) role = 'Assassin';
    else if (championData.tags.includes('Mage')) role = 'Mage';
    else if (championData.tags.includes('Tank')) role = 'Tank';
    else if (championData.tags.includes('Fighter')) role = 'Fighter';
    else if (championData.tags.includes('Support')) role = 'SupportEnchant';
    else role = 'Fighter'; // Default
  }
  if (!role) role = 'Fighter';

  // CLONE template to avoid mutating the master reference
  const template = JSON.parse(JSON.stringify(buildTemplates[role] || buildTemplates.Fighter));

  // If we have an override with a different role, use that template (also cloned)
  if (override?.role && override.role !== role) {
    const overrideBaseToken = buildTemplates[override.role];
    if (overrideBaseToken) {
      Object.assign(template, JSON.parse(JSON.stringify(overrideBaseToken)));
    }
  }

  // Merge template with override
  const build = {
    role: role.replace(/([A-Z])/g, ' $1').trim(),
    tier: override?.tier || 'B',
    difficulty: override?.difficulty || 'Medium',
    playstyle: template.playstyle,
    runes: override?.runes || template.runes,
    summonerSpells: override?.summonerSpells || template.summonerSpells,
    skillOrder: override?.skillOrder || template.skillOrder,
    itemBuilds: override?.itemBuilds || template.itemBuilds,
    combos: override?.combos || template.combos,
    counters: override?.counters || null,
    clearPath: override?.clearPath || template.clearPath || null
  };

  return build;
}

// =================== EXPORTS ===================

export function getDetailedBuild(championId, championData = null) {
  return generateChampionBuild(championId, championData);
}

export function getChampionsWithBuilds() {
  return Object.keys(championRoles);
}

export { buildTemplates, championOverrides, championRoles };
