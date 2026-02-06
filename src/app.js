/**
 * LoL Overlay Pro - Main Application
 * Enhanced with Tier List, Map Elements, and Wave Management
 */

import { dataDragon } from './api/dataDragon.js';
import { playerApi } from './api/playerApi.js';
import { getDetailedBuild } from './data/championBuilds.js';
import { tierList, tierColors, getChampionTier, championRoles } from './data/tierList.js';
import { dragons, baron, jungleCamps, towers, inhibitors } from './data/mapElements.js';
import { minionStats, waveTiming, waveStates, waveManagementTips, xpGoldFormulas } from './data/waveManagement.js';
import { regions } from './data/runeterra.js';
import { quizQuestions, roleTitles, championSuggestions } from './data/quiz.js';

// DOM Elements
const mainNav = document.getElementById('mainNav');
const championsView = document.getElementById('championsView');
const championDetail = document.getElementById('championDetail');
const tierlistView = document.getElementById('tierlistView');
const mapView = document.getElementById('mapView');
const wavesView = document.getElementById('wavesView');
const homeView = document.getElementById('homeView');
const runeterraView = document.getElementById('runeterraView');
const quizView = document.getElementById('quizView');
const regionsList = document.getElementById('regionsList');
const regionDetail = document.getElementById('regionDetail');

// Player Search Elements
const playerView = document.getElementById('playerView');
const playerGameName = document.getElementById('playerGameName');
const playerTagLine = document.getElementById('playerTagLine');
const playerRegion = document.getElementById('playerRegion');
const searchPlayerBtn = document.getElementById('searchPlayerBtn');
const playerLoading = document.getElementById('playerLoading');
const playerError = document.getElementById('playerError');
const playerErrorMessage = document.getElementById('playerErrorMessage');
const playerProfile = document.getElementById('playerProfile');

// Quiz Elements
const quizIntro = document.getElementById('quizIntro');
const quizQuestionContainer = document.getElementById('quizQuestionContainer');
const quizResult = document.getElementById('quizResult');
const questionText = document.getElementById('questionText');
const quizOptions = document.getElementById('quizOptions');
const quizProgress = document.getElementById('quizProgress');
const startQuizBtn = document.getElementById('startQuizBtn');
const restartQuizBtn = document.getElementById('restartQuizBtn');
const championGrid = document.getElementById('championGrid');
const searchInput = document.getElementById('searchInput');
const roleFilters = document.getElementById('roleFilters');
const backBtn = document.getElementById('backBtn');
const minimizeBtn = document.getElementById('minimizeBtn');
const closeBtn = document.getElementById('closeBtn');

// Items Elements
const itemsView = document.getElementById('itemsView');
const itemsGrid = document.getElementById('itemsGrid');
const itemsSearchInput = document.getElementById('itemsSearchInput');
const itemsFilters = document.getElementById('itemsFilters');
const itemDetailPanel = document.getElementById('itemDetailPanel');

// State
let allChampions = {};
let currentFilter = 'all';
let currentChampion = null;
let currentView = 'home';
let allItems = {};
let currentItemsFilter = 'all';
let currentLane = null;
let lastSearchedPlayer = null; // Store for refresh

// Quiz State
let quizStep = 0;
let quizScores = {
  tank: 0,
  fighter: 0,
  mage: 0,
  assassin: 0,
  marksman: 0,
  support: 0
};

// Role mappings
const roleMap = {
  'fighter': ['Fighter', 'Bruiser'],
  'mage': ['Mage'],
  'assassin': ['Assassin'],
  'marksman': ['Marksman'],
  'support': ['Support'],
  'tank': ['Tank']
};

const laneIcons = {
  top: '🛡️',
  jungle: '🌲',
  mid: '🔮',
  adc: '🏹',
  support: '💚'
};

/**
 * Initialize the application
 */
async function init() {

  try {
    allChampions = await dataDragon.getChampions();
    playerApi.championsData = allChampions; // Register for LoG Rank matching
    renderChampionGrid(Object.values(allChampions));
    allItems = await dataDragon.getItems();
    setupEventListeners();
    renderTierList('top');
    renderMapContent('dragons');
    renderWavesContent('basics');
    renderItemsGrid(Object.values(allItems));
  } catch (error) {
    championGrid.innerHTML = `
      <div class="loading-spinner">
        <p>Erreur de chargement</p>
        <p style="font-size: 0.8rem; color: var(--text-muted);">Vérifiez votre connexion</p>
      </div>
    `;
  }
}

/**
 * Setup event listeners
 */
function setupEventListeners() {
  // Main navigation
  mainNav.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const view = btn.dataset.view;
      switchView(view);
    });
  });

  // Search input
  searchInput.addEventListener('input', (e) => {
    filterChampions(e.target.value, currentFilter);
  });

  // Role filter buttons
  roleFilters.querySelectorAll('.role-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      roleFilters.querySelectorAll('.role-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.role;
      filterChampions(searchInput.value, currentFilter);
    });
  });

  // Back button
  backBtn.addEventListener('click', () => {
    championDetail.classList.remove('active');
    championsView.classList.add('active');
    updateNavActive('champions');
  });

  // Tab buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(`${btn.dataset.tab}Tab`).classList.add('active');
    });
  });

  // Tier list role buttons
  document.getElementById('tierRoleSelect').querySelectorAll('.tier-role-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tier-role-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderTierList(btn.dataset.tierRole);
    });
  });

  // Map nav buttons
  document.querySelectorAll('.map-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.map-nav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderMapContent(btn.dataset.mapSection);
    });
  });

  // Waves nav buttons
  document.querySelectorAll('.waves-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.waves-nav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderWavesContent(btn.dataset.wavesSection);
    });
  });

  // Window controls (Electron)
  if (window.electronAPI) {
    minimizeBtn.addEventListener('click', () => window.electronAPI.minimizeWindow());
    closeBtn.addEventListener('click', () => window.electronAPI.closeWindow());
  }

  // Quiz Buttons
  startQuizBtn.addEventListener('click', startQuiz);
  restartQuizBtn.addEventListener('click', resetQuiz);

  // Items Listeners
  if (itemsSearchInput) {
    itemsSearchInput.addEventListener('input', (e) => {
      filterItems(e.target.value, currentItemsFilter);
    });
  }

  if (itemsFilters) {
    itemsFilters.querySelectorAll('.items-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        itemsFilters.querySelectorAll('.items-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentItemsFilter = btn.dataset.filter;
        filterItems(itemsSearchInput.value, currentItemsFilter);
      });
    });
  }

  // Player Search Listeners
  if (searchPlayerBtn) {
    searchPlayerBtn.addEventListener('click', handlePlayerSearch);
  }

  if (playerGameName) {
    playerGameName.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') handlePlayerSearch();
    });
  }

  if (playerTagLine) {
    playerTagLine.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') handlePlayerSearch();
    });
  }

  if (playerRegion) {
    playerRegion.addEventListener('change', () => {
      playerApi.setPlatform(playerRegion.value);
    });
  }

  // LeagueOfGraphs Tab Listeners
  document.querySelectorAll('.log-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.log-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const queue = tab.dataset.logTab;
      console.log(`Switched LeagueOfGraphs tab to: ${queue}`);
    });
  });

  // Profile Reset Button
  const resetBtn = document.getElementById('resetProfileBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (playerGameName) playerGameName.value = '';
      if (playerTagLine) playerTagLine.value = '';
      hidePlayerProfile();
      hidePlayerError();
      lastSearchedPlayer = null;
    });
  }
}

/**
 * Switch between views
 */
function switchView(view) {
  currentView = view;
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  updateNavActive(view);

  switch (view) {
    case 'home':
      homeView.classList.add('active');
      break;
    case 'champions':
      championsView.classList.add('active');
      break;
    case 'items':
      itemsView.classList.add('active');
      break;
    case 'tierlist':
      tierlistView.classList.add('active');
      break;
    case 'map':
      mapView.classList.add('active');
      break;
    case 'runeterra':
      runeterraView.classList.add('active');
      renderRuneterraRegions();
      break;
    case 'quiz':
      quizView.classList.add('active');
      break;
    case 'waves':
      wavesView.classList.add('active');
      break;
    case 'player':
      playerView.classList.add('active');
      break;
  }
}

function updateNavActive(view) {
  mainNav.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  mainNav.querySelector(`[data-view="${view}"]`)?.classList.add('active');
}

/**
 * Filter champions
 */
function filterChampions(searchTerm, role) {
  const filtered = Object.values(allChampions).filter(champion => {
    const matchesSearch = champion.name.toLowerCase().includes(searchTerm.toLowerCase());
    let matchesRole = true;

    if (role !== 'all') {
      // Check if we are filtering by class (using roleMap)
      if (roleMap[role]) {
        const requiredTags = roleMap[role];
        matchesRole = champion.tags && champion.tags.some(tag => requiredTags.includes(tag));
      } else {
        // Fallback: check lane assignments (championRoles)
        const champLanes = championRoles[champion.id] || [];
        matchesRole = champLanes.includes(role);
      }
    }
    return matchesSearch && matchesRole;
  });
  renderChampionGrid(filtered);
}

/**
 * Render champion grid with tier badges
 */
function renderChampionGrid(champions) {
  if (champions.length === 0) {
    championGrid.innerHTML = '<div class="loading-spinner"><p>Aucun champion trouvé</p></div>';
    return;
  }

  champions.sort((a, b) => a.name.localeCompare(b.name));

  championGrid.innerHTML = champions.map(champion => {
    const tier = getChampionTier(champion.name, 'mid') || getChampionTier(champion.name, 'top') || 'B';
    const tierColor = tierColors[tier];

    return `
      <div class="champion-card" data-id="${champion.id}">
        <div class="tier-indicator" style="background: ${tierColor.bg}; color: ${tierColor.text}">${tier}</div>
        <img src="${dataDragon.getChampionIconUrl(champion.id)}" alt="${champion.name}" loading="lazy">
        <div class="champion-name-overlay">${champion.name}</div>
      </div>
    `;
  }).join('');

  championGrid.querySelectorAll('.champion-card').forEach(card => {
    card.addEventListener('click', () => showChampionDetail(card.dataset.id));
  });
}

/**
 * Show champion detail view
 */
async function showChampionDetail(championId, lane = null) {
  try {
    currentChampion = await dataDragon.getChampionDetail(championId);

    // Get roles for this champion from tierList
    const roles = championRoles[championId] || [];

    // If no lane specified, pick the first one from roles or default
    currentLane = lane;
    if (!currentLane && roles.length > 0) {
      currentLane = roles[0];
    }

    const detailedBuild = getDetailedBuild(championId, currentChampion, currentLane);

    const isAlreadyOpen = championDetail.classList.contains('active') && currentChampion?.id === championId;

    // Switch views
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    championDetail.classList.add('active');

    // Update header
    document.getElementById('championSplash').src = dataDragon.getChampionSplashUrl(championId);
    document.getElementById('championName').textContent = currentChampion.name;
    document.getElementById('championTitle').textContent = currentChampion.title;
    document.getElementById('championTags').innerHTML = currentChampion.tags
      .map(tag => `<span class="tag">${tag}</span>`).join('');

    // Role Switcher
    renderRoleSwitcher(championId, roles, currentLane);

    // Tier badge
    const tier = detailedBuild?.tier || 'B';
    const tierColor = tierColors[tier];
    document.getElementById('championTierBadge').innerHTML = `
      <span class="tier-badge" style="background: ${tierColor.bg}; color: ${tierColor.text}">${tier} Tier</span>
    `;

    // Only reset tabs if we're entering the view for a NEW champion
    if (!isAlreadyOpen) {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
      document.querySelector('[data-tab="stats"]').classList.add('active');
      document.getElementById('statsTab').classList.add('active');
    }

    // Render all content (updates the build info regardless of tab)
    renderStats(currentChampion.stats);
    renderAbilities(currentChampion, detailedBuild);
    renderDetailedBuild(detailedBuild, championId);
    renderDetailedRunes(detailedBuild);
    renderCombos(detailedBuild);
    renderMatchups(detailedBuild);

  } catch (error) {
    // Silent fail
  }
}

/**
 * Render role switcher buttons
 */
function renderRoleSwitcher(championId, roles, activeLane) {
  const container = document.getElementById('championRoleSelector');

  if (!roles || roles.length <= 1) {
    container.innerHTML = '';
    return;
  }

  container.innerHTML = `
    ${roles.map(role => `
      <button class="role-btn-toggle ${role === activeLane ? 'active' : ''}" data-role="${role}">
        ${laneIcons[role] || ''} ${role.toUpperCase()}
      </button>
    `).join('')}
  `;

  // Add event listeners
  container.querySelectorAll('.role-btn-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedRole = btn.dataset.role;
      if (selectedRole !== currentLane) {
        showChampionDetail(championId, selectedRole);
      }
    });
  });
}

/**
 * Render stats
 */
function renderStats(stats) {
  const statsConfig = [
    { key: 'hp', name: 'Vie', icon: '❤️', growth: 'hpperlevel' },
    { key: 'mp', name: 'Mana', icon: '💧', growth: 'mpperlevel' },
    { key: 'armor', name: 'Armure', icon: '🛡️', growth: 'armorperlevel' },
    { key: 'spellblock', name: 'Résist. Mag.', icon: '✨', growth: 'spellblockperlevel' },
    { key: 'attackdamage', name: 'Dégâts AD', icon: '⚔️', growth: 'attackdamageperlevel' },
    { key: 'attackspeed', name: 'Vitesse Atq', icon: '⚡', growth: 'attackspeedperlevel' },
    { key: 'movespeed', name: 'Vitesse', icon: '👟', growth: null },
    { key: 'attackrange', name: 'Portée', icon: '🎯', growth: null }
  ];

  document.getElementById('statsGrid').innerHTML = statsConfig.map(stat => {
    const value = stats[stat.key];
    const growth = stat.growth ? stats[stat.growth] : null;
    return `
      <div class="stat-card">
        <span class="stat-icon">${stat.icon}</span>
        <div class="stat-info">
          <span class="stat-name">${stat.name}</span>
          <span class="stat-value">${Math.round(value * 10) / 10}</span>
          ${growth ? `<span class="stat-growth">+${Math.round(growth * 100) / 100}/lvl</span>` : ''}
        </div>
      </div>
    `;
  }).join('');
}

/**
 * Render abilities with skill order
 */
function renderAbilities(champion, build) {
  // Skill order section
  const skillOrderSection = document.getElementById('skillOrderSection');
  if (build?.skillOrder) {

    // Skill Order Visualization (only if levels exist)
    let skillOrderHtml = '';
    if (build.skillOrder?.levels) {
      skillOrderHtml = `
      <div class="skill-order-visual">
        <div class="skill-row">
          <span class="skill-key">Q</span>
          ${build.skillOrder.levels.map((lvl, i) => `<span class="skill-point ${lvl === 'Q' ? 'active' : ''}">${i + 1}</span>`).join('')}
        </div>
        <div class="skill-row">
          <span class="skill-key">W</span>
          ${build.skillOrder.levels.map((lvl, i) => `<span class="skill-point ${lvl === 'W' ? 'active' : ''}">${i + 1}</span>`).join('')}
        </div>
        <div class="skill-row">
          <span class="skill-key">E</span>
          ${build.skillOrder.levels.map((lvl, i) => `<span class="skill-point ${lvl === 'E' ? 'active' : ''}">${i + 1}</span>`).join('')}
        </div>
        <div class="skill-row">
          <span class="skill-key">R</span>
          ${build.skillOrder.levels.map((lvl, i) => `<span class="skill-point ${lvl === 'R' ? 'active' : ''}">${i + 1}</span>`).join('')}
        </div>
      </div>
    `;
    }
    skillOrderSection.innerHTML = `
      <div class="skill-order-card">
        <h4>📈 Ordre des Skills</h4>
        <div class="skill-priority">
          <span class="priority-text">${build.skillOrder.priority}</span>
        </div>
        ${skillOrderHtml || '<span class="text-muted" style="font-size: 0.8rem; font-style: italic;">Ordre détaillé non disponible pour ce champion</span>'}
        ${build.skillOrder.notes ? `<p class="skill-notes">${build.skillOrder.notes}</p>` : ''}
      </div>
    `;
  } else {
    skillOrderSection.innerHTML = '';
  }

  // Abilities list
  const abilities = [
    {
      key: 'P',
      name: champion.passive.name,
      description: champion.passive.description,
      icon: dataDragon.getPassiveIconUrl(champion.passive.image.full)
    },
    ...champion.spells.map((spell, index) => ({
      key: ['Q', 'W', 'E', 'R'][index],
      name: spell.name,
      description: spell.description,
      icon: dataDragon.getAbilityIconUrl(spell.image.full)
    }))
  ];

  document.getElementById('abilitiesList').innerHTML = abilities.map(ability => `
    <div class="ability-card">
      <img class="ability-icon" src="${ability.icon}" alt="${ability.name}">
      <div class="ability-info">
        <div class="ability-header">
          <span class="ability-key ${ability.key.toLowerCase()}">${ability.key}</span>
          <span class="ability-name">${ability.name}</span>
        </div>
        <p class="ability-description">${stripTags(ability.description)}</p>
      </div>
    </div>
  `).join('');
}

/**
 * Render detailed build
 */
async function renderDetailedBuild(build, championId) {
  const buildPath = document.getElementById('buildPath');

  if (!build) {
    buildPath.innerHTML = `
      <div class="no-build">
        <p>Build détaillé non disponible</p>
        <p class="text-muted">Consultez les sites comme u.gg ou op.gg</p>
      </div>
    `;
    return;
  }

  const items = await dataDragon.getItems();

  buildPath.innerHTML = `
    <div class="build-section">
      <h4>🎯 Summoners</h4>
      <div class="summoners-display">
        ${build.summonerSpells?.map(spell => `<span class="summoner-spell">${spell}</span>`).join(' + ') || 'Flash + Ignite'}
      </div>
    </div>
    
    <div class="build-section">
      <h4>🚀 Starter</h4>
      <div class="items-row">
        ${build.itemBuilds?.starter?.items?.map(id => {
    const item = items[id];
    return item ? `
            <div class="item-card" title="${item.name}">
              <img src="${dataDragon.getItemIconUrl(id)}" alt="${item.name}">
            </div>
          ` : '';
  }).join('') || ''}
      </div>
    </div>

    ${build.itemBuilds?.boots && build.itemBuilds.boots.length > 0 ? `
    <div class="build-section">
      <h4>👟 Bottes</h4>
      <div class="items-row">
        ${build.itemBuilds.boots.map(id => {
    const item = items[id];
    return item ? `
            <div class="item-card boots-item" title="${item.name}">
              <img src="${dataDragon.getItemIconUrl(id)}" alt="${item.name}">
            </div>
          ` : '';
  }).join('')}
      </div>
    </div>
    ` : ''}
    
    <div class="build-section">
      <h4>⚡ Core Build</h4>
      <p class="build-order">${build.itemBuilds?.core?.order || ''}</p>
      <div class="items-row">
        ${build.itemBuilds?.core?.items?.map(id => {
    const item = items[id];
    return item ? `
            <div class="item-card core-item" title="${item.name}">
              <img src="${dataDragon.getItemIconUrl(id)}" alt="${item.name}">
            </div>
          ` : '';
  }).join('') || ''}
      </div>
    </div>
    
    <div class="build-section">
      <h4>🔧 Situationnel</h4>
      <div class="situational-items">
        ${Object.entries(build.itemBuilds?.situational || {}).map(([key, data]) => `
          <div class="situational-item">
            <div class="items-row">
              ${data.items?.map(id => {
    const item = items[id];
    return item ? `<div class="item-card small" title="${item.name}"><img src="${dataDragon.getItemIconUrl(id)}" alt="${item.name}"></div>` : '';
  }).join('') || ''}
            </div>
            <span class="when-text">${data.when}</span>
          </div>
        `).join('') || ''}
      </div>
    </div>
    
    <div class="build-section">
      <h4>🏆 Full Build</h4>
      <div class="items-row full-build">
        ${build.itemBuilds?.fullBuild?.standard?.map(id => {
    const item = items[id];
    return item ? `
            <div class="item-card" title="${item.name}">
              <img src="${dataDragon.getItemIconUrl(id)}" alt="${item.name}">
            </div>
          ` : '';
  }).join('') || ''}
      </div>
    </div>
  `;
}

/**
 * Render detailed runes
 */
function renderDetailedRunes(build) {
  const container = document.getElementById('runesContainer');

  if (!build?.runes) {
    container.innerHTML = '<p class="text-muted">Runes non disponibles</p>';
    return;
  }

  const runes = build.runes;

  container.innerHTML = `
    <div class="rune-tree primary">
      <div class="rune-tree-header">
        <span class="tree-icon">🎯</span>
        <span class="tree-name">${runes.primary.tree}</span>
      </div>
      <div class="keystone">
        <span class="keystone-name">${runes.primary.keystone}</span>
      </div>
      <div class="rune-list">
        ${runes.primary.runes.map(r => `<div class="rune-item">${r}</div>`).join('')}
      </div>
    </div>
    
    <div class="rune-tree secondary">
      <div class="rune-tree-header">
        <span class="tree-icon">⚡</span>
        <span class="tree-name">${runes.secondary.tree}</span>
      </div>
      <div class="rune-list">
        ${runes.secondary.runes.map(r => `<div class="rune-item">${r}</div>`).join('')}
      </div>
    </div>
    
    <div class="stat-shards">
      <h4>📊 Shards</h4>
      <div class="shards-list">
        ${runes.shards?.map(s => `<span class="shard">${s}</span>`).join('') || ''}
      </div>
    </div>
  `;
}

/**
 * Render combos
 */
function renderCombos(build) {
  const container = document.getElementById('combosList');

  if (!build?.combos || build.combos.length === 0) {
    container.innerHTML = `
      <div class="no-combos">
        <p>Combos spécifiques non disponibles</p>
        <div class="generic-tips">
          <h4>💡 Tips Généraux</h4>
          <ul>
            <li>Utilisez vos CC avant vos dégâts</li>
            <li>Auto-attack reset après les skills</li>
            <li>Weaving autos entre les abilities</li>
          </ul>
        </div>
      </div>
    `;
    return;
  }

  // Helper to format combo text with keys
  const formatCombo = (text) => {
    // Check if there's a description in parentheses like "Combo Name (Desc)"
    const descMatch = text.match(/\((.*?)\)/);
    const desc = descMatch ? descMatch[1] : null;
    const cleanText = text.replace(/\(.*?\)/, '').trim();

    // Elements to represent as keys
    const keys = ['Q', 'W', 'E', 'R', 'F', 'D', 'AA', 'P', 'S'];

    // Split by arrows or spaces but keep delimiters
    let parts = cleanText.split(/(\s*→\s*|\s*->\s*|\s*\+\s*|\s+)/);

    return `
      <div class="combo-sequence">
        ${parts.map(part => {
      const trimmed = part.trim();
      if (!trimmed) return '';
      if (trimmed === '→' || trimmed === '->') return '<span class="combo-arrow"><i class="fas fa-chevron-right"></i></span>';
      if (trimmed === '+') return '<span class="combo-arrow">+</span>';

      // Check if it's a key
      if (keys.includes(trimmed.toUpperCase())) {
        return `<span class="combo-key">${trimmed.toUpperCase()}</span>`;
      }

      return trimmed;
    }).join('')}
      </div>
      ${desc ? `<span class="combo-desc">${desc}</span>` : ''}
    `;
  };

  container.innerHTML = `
    <div class="combos-header">
      <h4>💥 Combos</h4>
    </div>
    <div class="combos-grid">
      ${build.combos.map((combo, i) => `
        <div class="combo-card">
          <span class="combo-num">${i + 1}</span>
          <div class="combo-text">${formatCombo(combo)}</div>
        </div>
      `).join('')}
    </div>
  `;
}

/**
 * Render matchups
 */
function renderMatchups(build) {
  const container = document.getElementById('matchupsContainer');

  if (!build?.counters) {
    container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-chess-pawn"></i>
                <p>Données de matchup non disponibles pour ce champion.</p>
                <small class="text-muted">Utilisez le build générique ci-dessus.</small>
            </div>`;
    return;
  }

  // Helper to normalize champion names for icons
  const getChampIcon = (name) => {
    // Mapping for specific DDragon IDs that don't match simple normalization
    const mapping = {
      "Cho'Gath": "Chogath",
      "ChoGath": "Chogath",
      "Kha'Zix": "Khazix",
      "Kai'Sa": "Kaisa",
      "Bel'Veth": "Belveth",
      "Vel'Koz": "Velkoz",
      "LeBlanc": "Leblanc",
      "Nunu & Willump": "Nunu",
      "Dr. Mundo": "DrMundo",
      "Renata Glasc": "Renata",
      "Wukong": "MonkeyKing",
      "K'Sante": "KSante"
    };

    if (mapping[name]) return dataDragon.getChampionIconUrl(mapping[name]);

    // Default normalization
    const id = name.replace(/[^a-zA-Z]/g, '');
    return dataDragon.getChampionIconUrl(id);
  };

  const renderMatchupList = (champs) => {
    if (!champs || champs.length === 0) return '<p class="text-muted">Aucun donnée</p>';
    return champs.map(c => `
      <div class="matchup-card" title="${c}">
        <img src="${getChampIcon(c)}" onerror="this.src='assets/default-champ.png'" alt="${c}">
        <span class="matchup-champion-name">${c}</span>
      </div>
    `).join('');
  };

  container.innerHTML = `
    <div class="matchup-section good">
      <h4>✅ Fort Contre</h4>
      <div class="matchup-list">
        ${renderMatchupList(build.counters.strongAgainst)}
      </div>
    </div>
    
    <div class="matchup-section bad">
      <h4>⚠️ Faible Contre</h4>
      <div class="matchup-list">
        ${renderMatchupList(build.counters.weakAgainst)}
      </div>
    </div>
    
    ${build.counters.tips ? `
      <div class="matchup-tips">
        <h4>💡 Tips de Lane</h4>
        <div class="tips-grid">
            ${Object.entries(build.counters.tips).map(([key, tip]) => `
            <div class="tip-item">
                <strong>${key}:</strong> ${tip}
            </div>
            `).join('')}
        </div>
      </div>
    ` : ''}
  `;
}


/**
 * Render tier list
 */
function renderTierList(role) {
  const content = document.getElementById('tierlistContent');
  const tiers = tierList[role];

  if (!tiers) {
    content.innerHTML = '<p>Tier list non disponible</p>';
    return;
  }

  content.innerHTML = ['S', 'A', 'B', 'C', 'D'].map(tier => {
    const championsInTier = tiers[tier] || [];
    const colors = tierColors[tier];

    return `
      <div class="tier-row">
        <div class="tier-label" style="background: ${colors.bg}; color: ${colors.text}; box-shadow: 0 0 15px ${colors.glow}">
          ${tier}
        </div>
        <div class="tier-champions">
          ${championsInTier.length > 0 ? championsInTier.map(name => {
      // Find the champion ID for the name
      const champId = Object.keys(allChampions).find(id =>
        allChampions[id].name.toLowerCase() === name.toLowerCase()
      ) || name.replace(/[^a-zA-Z]/g, '');

      return `
            <div class="tier-champion" data-id="${champId}" title="Voir le build de ${name}">
              <img src="${dataDragon.getChampionIconUrl(champId)}" alt="${name}">
              <span class="champ-name">${name}</span>
            </div>
          `;
    }).join('') : '<span class="empty-tier">Aucun champion</span>'}
        </div>
      </div>
    `;
  }).join('');

  // Add click listeners to tier champions
  content.querySelectorAll('.tier-champion').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.dataset.id;
      if (allChampions[id]) {
        showChampionDetail(id);
      }
    });
  });
}

/**
 * Render map content
 */
function renderMapContent(section) {
  const content = document.getElementById('mapContent');

  switch (section) {
    case 'dragons':
      content.innerHTML = `
        <div class="map-section-content">
          <h3>🐉 Dragons</h3>
          <div class="dragons-grid">
            ${Object.entries(dragons).map(([key, dragon]) => `
              <div class="dragon-card" style="border-color: ${dragon.color}">
                <div class="dragon-header">
                  <span class="dragon-icon">${dragon.icon}</span>
                  <span class="dragon-name">${dragon.name}</span>
                </div>
                <div class="dragon-buff">${dragon.buff}</div>
                ${dragon.soulBuff ? `<div class="dragon-soul"><strong>Soul:</strong> ${dragon.soulBuff}</div>` : ''}
                <div class="dragon-timing">
                  <span>Spawn: ${dragon.spawnTime}</span>
                  <span>Respawn: ${dragon.respawn}</span>
                </div>
                <ul class="dragon-tips">
                  ${dragon.tips.map(tip => `<li>${tip}</li>`).join('')}
                </ul>
              </div>
            `).join('')}
          </div>
        </div>
      `;
      break;

    case 'baron':
      content.innerHTML = `
        <div class="map-section-content">
          <h3>👁️ Baron Nashor</h3>
          <div class="baron-card">
            <div class="baron-header">
              <span class="baron-icon">${baron.icon}</span>
              <span class="baron-name">${baron.name}</span>
            </div>
            <div class="baron-stats">
              <div class="stat">HP: ${baron.hp}</div>
              <div class="stat">Spawn: ${baron.spawnTime}</div>
              <div class="stat">Respawn: ${baron.respawn}</div>
            </div>
            <div class="baron-buff">
              <h4>${baron.buff.name} (${baron.buff.duration})</h4>
              <ul>
                ${baron.buff.effects.map(e => `<li>${e}</li>`).join('')}
              </ul>
            </div>
            <div class="baron-tips">
              <h4>💡 Tips</h4>
              <ul>
                ${baron.tips.map(tip => `<li>${tip}</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>
      `;
      break;

    case 'jungle':
      content.innerHTML = `
        <div class="map-section-content">
          <h3>🌲 Camps Jungle</h3>
          <div class="camps-grid">
            ${Object.entries(jungleCamps).map(([key, camp]) => `
              <div class="camp-card">
                <div class="camp-header">
                  <span class="camp-icon">${camp.icon}</span>
                  <span class="camp-name">${camp.name}</span>
                </div>
                <div class="camp-stats">
                  <span>💰 ${camp.gold}g</span>
                  <span>📈 ${camp.xp} XP</span>
                  <span>⏰ ${camp.respawn || camp.spawnTime}</span>
                </div>
                ${camp.buff ? `<div class="camp-buff">${camp.buff}</div>` : ''}
                <p class="camp-tip">${camp.tips}</p>
              </div>
            `).join('')}
          </div>
        </div>
      `;
      break;

    case 'towers':
      content.innerHTML = `
        <div class="map-section-content">
          <h3>🏰 Tours & Structures</h3>
          <div class="towers-grid">
            ${Object.entries(towers).map(([key, tower]) => `
              <div class="tower-card">
                <div class="tower-header">
                  <span class="tower-tier">T${tower.tier}</span>
                  <span class="tower-name">${tower.name}</span>
                </div>
                <div class="tower-stats">
                  <div>❤️ ${tower.hp} HP</div>
                  <div>🛡️ ${tower.armor} Armor</div>
                  <div>✨ ${tower.magicResist} MR</div>
                  <div>💰 ${tower.goldTeam}g (équipe) / ${tower.goldLocal}g (local)</div>
                </div>
                ${tower.platings ? `
                  <div class="platings-info">
                    <strong>Plaques:</strong> ${tower.platings.count}x ${tower.platings.gold}g
                    <br>${tower.platings.bonusResist}
                    <br>Disparaissent à ${tower.fallTime}
                  </div>
                ` : ''}
                ${tower.tips ? `<p class="tower-tip">${tower.tips}</p>` : ''}
              </div>
            `).join('')}
          </div>
          
          <div class="inhibitor-section">
            <h4>🏛️ Inhibiteurs</h4>
            <div class="inhib-stats">
              <span>❤️ ${inhibitors.hp} HP</span>
              <span>⏰ Respawn: ${inhibitors.respawnTime}</span>
            </div>
            <p>${inhibitors.effect}</p>
            <ul>
              ${inhibitors.tips.map(t => `<li>${t}</li>`).join('')}
            </ul>
          </div>
        </div>
      `;
      break;
  }
}

/**
 * Render waves content
 */
function renderWavesContent(section) {
  const content = document.getElementById('wavesContent');

  switch (section) {
    case 'basics':
      content.innerHTML = `
        <div class="waves-section-content">
          <h3>📚 Minions & Timing</h3>
          
          <div class="minions-grid">
            ${Object.entries(minionStats).map(([key, minion]) => `
              <div class="minion-card">
                <div class="minion-header">
                  <span class="minion-icon">${minion.icon}</span>
                  <span class="minion-name">${minion.name}</span>
                </div>
                <div class="minion-stats">
                  <div>❤️ ${minion.hp} HP ${minion.hpGrowth ? `(${minion.hpGrowth})` : ''}</div>
                  <div>⚔️ ${minion.damage} DMG</div>
                  <div>💰 ${minion.gold}g ${minion.goldGrowth ? `(${minion.goldGrowth})` : ''}</div>
                  <div>📈 ${minion.xp} XP</div>
                </div>
                ${minion.spawnPattern ? `<p class="spawn-pattern">${minion.spawnPattern}</p>` : ''}
                ${minion.notes ? `<p class="minion-notes">${minion.notes}</p>` : ''}
              </div>
            `).join('')}
          </div>
          
          <div class="timing-section">
            <h4>⏰ Timing des Vagues</h4>
            <ul>
              <li><strong>Première vague:</strong> ${waveTiming.firstWave}</li>
              <li><strong>Intervalle:</strong> ${waveTiming.waveInterval}</li>
              <li><strong>Arrivée mid:</strong> ${waveTiming.midLaneArrival}</li>
            </ul>
            <div class="cannon-timing">
              <h5>💣 Vagues Canon</h5>
              ${waveTiming.cannonWaves.map(w => `<p>Vagues ${w.waves}: ${w.pattern}</p>`).join('')}
            </div>
          </div>
        </div>
      `;
      break;

    case 'states':
      content.innerHTML = `
        <div class="waves-section-content">
          <h3>🎯 États de la Vague</h3>
          <div class="states-grid">
            ${Object.entries(waveStates).map(([key, state]) => `
              <div class="state-card">
                <div class="state-header">
                  <span class="state-icon">${state.icon}</span>
                  <span class="state-name">${state.name}</span>
                </div>
                <p class="state-desc">${state.description}</p>
                
                <div class="state-section">
                  <h5>📝 Comment faire</h5>
                  <ul>${state.howTo.map(h => `<li>${h}</li>`).join('')}</ul>
                </div>
                
                <div class="state-section">
                  <h5>🎯 Quand l'utiliser</h5>
                  <ul>${state.when.map(w => `<li>${w}</li>`).join('')}</ul>
                </div>
                
                ${state.tips ? `
                  <div class="state-section">
                    <h5>💡 Tips</h5>
                    <ul>${state.tips.map(t => `<li>${t}</li>`).join('')}</ul>
                  </div>
                ` : ''}
                
                ${state.counters ? `
                  <div class="state-section">
                    <h5>🔄 Comment contrer</h5>
                    <ul>${state.counters.map(c => `<li>${c}</li>`).join('')}</ul>
                  </div>
                ` : ''}
              </div>
            `).join('')}
          </div>
        </div>
      `;
      break;

    case 'tips':
      content.innerHTML = `
        <div class="waves-section-content">
          <h3>💡 Tips par Phase</h3>
          
          <div class="tips-categories">
            <div class="tips-category">
              <h4>🌅 Early Game</h4>
              <ul>${waveManagementTips.earlyGame.map(t => `<li>${t}</li>`).join('')}</ul>
            </div>
            
            <div class="tips-category">
              <h4>☀️ Mid Game</h4>
              <ul>${waveManagementTips.midGame.map(t => `<li>${t}</li>`).join('')}</ul>
            </div>
            
            <div class="tips-category">
              <h4>🔄 Side Waves</h4>
              <ul>${waveManagementTips.sidewave.map(t => `<li>${t}</li>`).join('')}</ul>
            </div>
            
            <div class="tips-category">
              <h4>🏰 Sous Tour</h4>
              <ul>${waveManagementTips.underTower.map(t => `<li>${t}</li>`).join('')}</ul>
            </div>
          </div>
        </div>
      `;
      break;

    case 'xp':
      content.innerHTML = `
        <div class="waves-section-content">
          <h3>📈 XP & Gold</h3>
          
          <div class="xp-section">
            <h4>📊 Partage d'XP</h4>
            <p>Range de partage: ${xpGoldFormulas.xpRange} unités</p>
            <table class="xp-table">
              <thead>
                <tr><th>Joueurs</th><th>Part</th></tr>
              </thead>
              <tbody>
                ${xpGoldFormulas.xpSharing.map(x => `
                  <tr><td>${x.players}</td><td>${x.share}</td></tr>
                `).join('')}
              </tbody>
            </table>
          </div>
          
          <div class="level-section">
            <h4>🎚️ XP par Niveau</h4>
            <table class="level-table">
              <thead>
                <tr><th>Niveau</th><th>XP Requis</th><th>Total</th></tr>
              </thead>
              <tbody>
                ${xpGoldFormulas.levelXPRequired.map(l => `
                  <tr><td>${l.level}</td><td>${l.xp}</td><td>${l.totalFromStart}</td></tr>
                `).join('')}
              </tbody>
            </table>
          </div>
          
          <div class="gold-section">
            <h4>💰 Gold par Vague</h4>
            <ul>
              <li><strong>Vague normale:</strong> ${xpGoldFormulas.waveGold.regular}</li>
              <li><strong>Vague canon:</strong> ${xpGoldFormulas.waveGold.cannon}</li>
              <li><strong>Par minute:</strong> ${xpGoldFormulas.waveGold.perMinute}</li>
            </ul>
          </div>
        </div>
      `;
      break;
  }
}

/**
 * Render Runeterra regions list
 */
function renderRuneterraRegions() {
  regionsList.innerHTML = regions.map(region => `
    <div class="region-item" data-id="${region.id}">
      <span class="region-icon">${region.icon}</span>
      <span class="region-name">${region.name}</span>
    </div>
  `).join('');

  regionsList.querySelectorAll('.region-item').forEach(item => {
    item.addEventListener('click', () => {
      regionsList.querySelectorAll('.region-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      showRegionDetail(item.dataset.id);
    });
  });
}

/**
 * Show region details and champions
 */
function showRegionDetail(regionId) {
  const region = regions.find(r => r.id === regionId);
  if (!region) return;

  regionDetail.innerHTML = `
    <div class="region-detail-content">
      <div class="region-detail-header">
        <h2>${region.icon} ${region.name}</h2>
        <p class="region-desc">${region.description}</p>
      </div>
      <div class="region-champions-grid">
        ${region.champions.map(champId => {
    // Find champion by ID (exact or case-insensitive fallback)
    let champ = allChampions[champId];
    if (!champ) {
      // Case-insensitive search fallback
      const lowerId = champId.toLowerCase();
      const realId = Object.keys(allChampions).find(k => k.toLowerCase() === lowerId);
      if (realId) champ = allChampions[realId];
    }

    const name = champ ? champ.name : champId;
    const id = champ ? champ.id : champId;

    return `
            <div class="region-champ-card" data-id="${id}">
              <img class="region-champ-img" src="${dataDragon.getChampionIconUrl(id)}" alt="${name}" 
                onerror="this.src='https://ddragon.leagueoflegends.com/cdn/14.1.1/img/profileicon/29.png'">
              <div class="region-champ-name">${name}</div>
            </div>
          `;
  }).join('')}
      </div>
    </div>
  `;

  regionDetail.querySelectorAll('.region-champ-card').forEach(card => {
    card.addEventListener('click', () => showChampionDetail(card.dataset.id));
  });
}

/**
 * Quiz Functions
 */
function startQuiz() {
  quizStep = 0;
  quizScores = { tank: 0, fighter: 0, mage: 0, assassin: 0, marksman: 0, support: 0 };
  quizIntro.style.display = 'none';
  quizResult.style.display = 'none';
  quizQuestionContainer.style.display = 'block';
  renderQuizQuestion();
}

function resetQuiz() {
  startQuiz();
}

function renderQuizQuestion() {
  const question = quizQuestions[quizStep];
  questionText.textContent = question.text;

  // Progress bar
  const progress = ((quizStep) / quizQuestions.length) * 100;
  quizProgress.style.width = `${progress}%`;

  quizOptions.innerHTML = question.options.map((option, index) => `
    <div class="quiz-option" data-index="${index}">
      ${option.text}
    </div>
  `).join('');

  quizOptions.querySelectorAll('.quiz-option').forEach(opt => {
    opt.addEventListener('click', () => {
      const index = opt.dataset.index;
      handleQuizAnswer(question.options[index].values);
    });
  });
}

function handleQuizAnswer(values) {
  for (const [role, score] of Object.entries(values)) {
    quizScores[role] += score;
  }

  quizStep++;

  if (quizStep < quizQuestions.length) {
    renderQuizQuestion();
  } else {
    showQuizResult();
  }
}

function showQuizResult() {
  quizProgress.style.width = `100%`;
  quizQuestionContainer.style.display = 'none';
  quizResult.style.display = 'block';

  // Find top role
  const topRole = Object.entries(quizScores).reduce((a, b) => a[1] > b[1] ? a : b)[0];
  const resultRoleSpan = document.getElementById('resultRole');
  resultRoleSpan.textContent = roleTitles[topRole];

  // Suggest a random champion from that role
  const suggestions = championSuggestions[topRole];
  const randomChampName = suggestions[Math.floor(Math.random() * suggestions.length)];

  // Try to find the champion ID (some might need mapping if names differ from IDs)
  const champId = randomChampName.replace(/\s/g, ''); // Simple normalization
  const champData = allChampions[champId] || { name: randomChampName, id: champId };

  const resultChampionDiv = document.getElementById('resultChampion');
  resultChampionDiv.innerHTML = `
    <img class="result-champ-img" src="${dataDragon.getChampionIconUrl(champId)}" alt="${champData.name}">
    <div class="result-champ-name">${champData.name}</div>
    <button class="cta-btn primary" id="viewResultChampBtn">Voir le guide</button>
  `;

  document.getElementById('viewResultChampBtn').addEventListener('click', () => {
    showChampionDetail(champId);
  });
}

/**
 * Strip HTML tags
 */
function stripTags(text) {
  if (!text) return '';
  return text.replace(/<[^>]*>?/gm, '');
}

/**
 * Render items grid
 */
function renderItemsGrid(items) {
  if (!itemsGrid) return;
  // Filter for Summoner's Rift (map 11) and purchasable items
  const srItems = items.filter(item => {
    // Basic availability check
    const isAvailableOnSR = item.maps && item.maps['11'];
    const isPurchasable = item.gold && item.gold.purchasable;
    const isInStore = item.inStore !== false;

    // Filter out unwanted items (like placeholders or tokens)
    const isRealItem = !item.requiredChampion && !item.requiredAlly && item.name && item.description;

    // We keep boots and consumables if they are on SR
    return isAvailableOnSR && isPurchasable && isInStore && isRealItem;
  });

  srItems.sort((a, b) => b.gold.total - a.gold.total);

  itemsGrid.innerHTML = srItems.map(item => `
    <div class="item-card" data-id="${item.image.full.split('.')[0]}" title="${item.name}">
      <img src="${dataDragon.getItemIconUrl(item.image.full.split('.')[0])}" alt="${item.name}" loading="lazy">
    </div>
  `).join('');

  itemsGrid.querySelectorAll('.item-card').forEach(card => {
    card.addEventListener('click', () => showItemDetail(card.dataset.id));
  });
}

/**
 * Filter items
 */
function filterItems(searchTerm, filter) {
  const filtered = Object.values(allItems).filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    let matchesFilter = true;

    if (filter !== 'all') {
      // Simple mapping for demonstration
      const tags = item.tags || [];
      if (filter === 'assassin') matchesFilter = tags.includes('Lethality') || tags.includes('ArmorPenetration');
      if (filter === 'mage') matchesFilter = tags.includes('SpellDamage') || tags.includes('Mana');
      if (filter === 'marksman') matchesFilter = tags.includes('CriticalStrike') || tags.includes('AttackSpeed');
      if (filter === 'fighter') matchesFilter = tags.includes('Damage') || tags.includes('Health');
      if (filter === 'tank') matchesFilter = tags.includes('Armor') || tags.includes('HealthRegen') || tags.includes('SpellBlock');
      if (filter === 'support') matchesFilter = tags.includes('Support') || tags.includes('Aura');
    }

    const isAvailableOnSR = item.maps && item.maps['11'];
    const isInStore = item.inStore !== false;
    const isRealItem = !item.requiredChampion && !item.requiredAlly;

    return matchesSearch && matchesFilter && item.gold.purchasable && isAvailableOnSR && isInStore && isRealItem;
  });

  renderItemsGrid(filtered);
}

/**
 * Show item detail
 */
function showItemDetail(itemId) {
  const item = allItems[itemId];
  if (!item) return;

  // Update active state in grid
  itemsGrid.querySelectorAll('.item-card').forEach(card => {
    card.classList.toggle('active', card.dataset.id === itemId);
  });

  // Find recommended champions
  const recommendedChamps = findRecommendedChampionsForItem(itemId);

  itemDetailPanel.innerHTML = `
    <div class="item-detail-content">
      <div class="item-detail-header">
        <img src="${dataDragon.getItemIconUrl(itemId)}" class="item-large-icon" alt="${item.name}">
        <div class="item-title-group">
          <h3 class="item-detail-name">${item.name}</h3>
          <div class="item-detail-price">💰 ${item.gold.total} <span>(${item.gold.base} + components)</span></div>
        </div>
      </div>


      <div class="item-detail-section-title">📜 Description</div>
      <div class="item-description">
        ${item.description}
      </div>

      ${item.from && item.from.length > 0 ? `
        <div class="item-detail-section-title">🛠️ Build Path</div>
        <div class="item-build-path">
          ${item.from.map(compId => `
            <img src="${dataDragon.getItemIconUrl(compId)}" class="component-icon" title="${allItems[compId]?.name || compId}">
          `).join('')}
        </div>
      ` : ''}

      ${recommendedChamps.length > 0 ? `
        <div class="item-detail-section-title">🏆 Recommandé pour</div>
        <div class="recommended-champions">
          ${recommendedChamps.map(champ => `
            <img src="${dataDragon.getChampionIconUrl(champ.id)}" class="rec-champ-icon" title="${champ.name}" onclick="window.app.showChampion('${champ.id}')">
          `).join('')}
        </div>
      ` : ''}
    </div>
  `;
}

/**
 * Find champions that use this item in their build
 */
function findRecommendedChampionsForItem(itemId) {
  const recommended = [];
  const targetId = String(itemId); // Normalize to string

  for (const [champId, champ] of Object.entries(allChampions)) {
    const build = getDetailedBuild(champId, champ);
    if (!build) continue;

    const coreItems = build.itemBuilds?.core?.items || [];
    const fullItems = build.itemBuilds?.fullBuild?.standard || [];

    // Check if any item ID matches (normalized to string)
    const isCore = coreItems.some(id => String(id) === targetId);
    const isFull = fullItems.some(id => String(id) === targetId);

    if (isCore || isFull) {
      recommended.push({ id: champId, name: champ.name });
    }

    if (recommended.length >= 8) break;
  }

  return recommended;
}

/**
 * Format stat name for display
 */
function formatStatName(stat) {
  const mapping = {
    'FlatPhysicalDamageMod': 'AD',
    'FlatMagicDamageMod': 'AP',
    'FlatCritChanceMod': 'Crit %',
    'FlatArmorMod': 'Armure',
    'FlatSpellBlockMod': 'Résist. Mag.',
    'FlatHPPoolMod': 'PV',
    'FlatMPPoolMod': 'Mana',
    'PercentAttackSpeedMod': 'Vit. Atq %',
    'PercentMovementSpeedMod': 'Vit. Déplac. %',
    'FlatMovementSpeedMod': 'Vitesse',
    'PercentLifeStealMod': 'Vol de Vie %'
  };

  let name = mapping[stat] || stat.replace('Flat', '').replace('Mod', '').replace('Percent', '').replace('Pool', '');
  return name;
}

// =====================================================
// PLAYER SEARCH FUNCTIONS
// =====================================================

/**
 * Handle player search
 */
async function handlePlayerSearch(forcedName = null, forcedTag = null) {
  const gameName = forcedName || (playerGameName?.value.trim());
  const tagLine = forcedTag || (playerTagLine?.value.trim() || 'EUW');

  // If using "Faker#KR1" format in first box
  if (!forcedName && gameName && gameName.includes('#')) {
    const parts = gameName.split('#');
    const newName = parts[0].trim();
    const newTag = parts[1].trim();
    if (playerGameName) playerGameName.value = newName;
    if (playerTagLine) playerTagLine.value = newTag;
    return handlePlayerSearch(newName, newTag);
  }

  if (!gameName || !tagLine) {
    showPlayerError('Veuillez entrer un pseudo et un tag (ex: Faker#KR1)');
    return;
  }

  // Validate tag format (1-5 characters)
  if (tagLine.length > 5) {
    showPlayerError('Le tag ne peut pas dépasser 5 caractères');
    return;
  }

  // Update platform
  if (playerRegion) {
    playerApi.setPlatform(playerRegion.value);
  }

  showPlayerLoading(true);
  hidePlayerError();
  // Only hide profile if it's a NEW search, not a refresh
  if (!forcedName) {
    hidePlayerProfile();
  }
  updateLoadingStatus('Connexion à l\'API Riot...');

  try {
    const result = await playerApi.searchPlayer(gameName, tagLine);

    if (result.error) {
      showPlayerError(result.error);
      return;
    }

    if (result.success) {
      lastSearchedPlayer = { name: gameName, tag: tagLine };
      renderPlayerProfile(result);
    }
  } catch (error) {
    // Provide more helpful error messages
    let errorMessage = 'Une erreur est survenue. ';
    if (error.message.includes('API')) {
      errorMessage += 'Problème avec la clé API Riot.';
    } else if (error.message.includes('proxy') || error.message.includes('fetch')) {
      errorMessage += 'Problème de connexion. Vérifiez votre internet.';
    } else {
      errorMessage += error.message || 'Veuillez réessayer.';
    }

    showPlayerError(errorMessage);
  } finally {
    showPlayerLoading(false);
  }
}

/**
 * Update loading status message
 */
function updateLoadingStatus(message) {
  const loadingText = playerLoading?.querySelector('p');
  if (loadingText) {
    loadingText.textContent = message;
  }
}

/**
 * Show/hide loading state
 */
function showPlayerLoading(show) {
  if (playerLoading) {
    playerLoading.style.display = show ? 'flex' : 'none';
  }
  if (searchPlayerBtn) {
    searchPlayerBtn.disabled = show;
    const btnText = searchPlayerBtn.querySelector('.btn-text');
    const btnLoading = searchPlayerBtn.querySelector('.btn-loading');
    if (btnText) btnText.style.display = show ? 'none' : 'inline';
    if (btnLoading) btnLoading.style.display = show ? 'inline' : 'none';
  }
}

/**
 * Show player error
 */
function showPlayerError(message) {
  if (playerError) {
    playerError.style.display = 'flex';
  }
  if (playerErrorMessage) {
    playerErrorMessage.textContent = message;
  }
}

/**
 * Hide player error
 */
function hidePlayerError() {
  if (playerError) {
    playerError.style.display = 'none';
  }
}

/**
 * Hide player profile
 */
function hidePlayerProfile() {
  if (playerProfile) {
    playerProfile.style.display = 'none';
  }
}

/**
 * Render player profile
 */
function renderPlayerProfile(data) {
  if (!playerProfile) return;

  playerProfile.style.display = 'block';

  // Profile Icon URL
  const profileIconUrl = `https://ddragon.leagueoflegends.com/cdn/${dataDragon.version}/img/profileicon/${data.summoner.profileIconId}.png`;

  // Update profile header
  document.getElementById('profileIcon').src = profileIconUrl;
  document.getElementById('profileLevel').textContent = data.summoner.summonerLevel;
  document.getElementById('profileName').textContent = `${data.account.gameName}#${data.account.tagLine}`;
  document.getElementById('profileRegion').textContent = `📍 ${data.platformName}`;

  // Show live game indicator if in game
  const liveGameEl = document.getElementById('profileLiveGame');
  if (liveGameEl) {
    liveGameEl.style.display = data.currentGame ? 'block' : 'none';
  }

  // Ensure rankedStats is an array
  const rankedStats = Array.isArray(data.rankedStats) ? data.rankedStats : [];
  const masteries = Array.isArray(data.masteries) ? data.masteries : [];
  const recentMatches = Array.isArray(data.recentMatches) ? data.recentMatches : [];

  // Render badges
  const badgesContainer = document.getElementById('profileBadges');
  if (badgesContainer) {
    let profileBadges = [];
    if (data.summoner.summonerLevel >= 500) profileBadges.push('🎖️ Vétéran');
    if (data.summoner.summonerLevel >= 100) profileBadges.push('⭐ Expérimenté');

    // Top individual champion rankings highlight
    masteries.slice(0, 3).forEach(m => {
      if (m.rankEstimate?.worldRank < 500000) {
        const champions = dataDragon.champions;
        const champName = Object.values(champions || {}).find(c => c.key === m.championId.toString())?.name || 'Champ';
        const r = m.rankEstimate.worldRank;
        const rankFormatted = r < 1000 ? `#${r}` : `${Math.round(r / 1000)}k`;
        profileBadges.push(`🌍 ${rankFormatted} ${champName}`);
      }
    });

    if (rankedStats.some(q => q.tier === 'CHALLENGER')) profileBadges.push('🔥 Challenger');
    if (rankedStats.some(q => q.tier === 'GRANDMASTER')) profileBadges.push('💎 Grandmaster');
    if (rankedStats.some(q => q.tier === 'MASTER')) profileBadges.push('👑 Master');

    badgesContainer.innerHTML = profileBadges.map(b => `<span class="profile-badge">${b}</span>`).join('');
  }

  // Render global stats (winrate, games played, etc.)
  renderGlobalStats(rankedStats, recentMatches);

  // Render masteries (with ranking table)
  renderMasteries(masteries, data.totalMasteryScore, recentMatches, rankedStats);

  // Render match history
  renderMatchHistory(recentMatches);
}

/**
 * Render global stats (winrate, games played, etc.)
 */
function renderGlobalStats(rankedStats, recentMatches) {
  const container = document.getElementById('globalStatsGrid');
  if (!container) return;

  // Calculate ranked stats
  let totalRankedWins = 0;
  let totalRankedLosses = 0;
  let mainRank = null;

  if (rankedStats && rankedStats.length > 0) {
    // Find Solo/Duo rank (main rank)
    mainRank = rankedStats.find(q => q.queueType === 'RANKED_SOLO_5x5') || rankedStats[0];

    rankedStats.forEach(q => {
      totalRankedWins += q.wins || 0;
      totalRankedLosses += q.losses || 0;
    });
  }

  const totalRankedGames = totalRankedWins + totalRankedLosses;
  const rankedWinRate = totalRankedGames > 0 ? Math.round((totalRankedWins / totalRankedGames) * 100) : 0;

  // Calculate recent matches stats
  let recentWins = 0;
  let recentLosses = 0;
  let totalKills = 0;
  let totalDeaths = 0;
  let totalAssists = 0;

  if (recentMatches && recentMatches.length > 0) {
    recentMatches.forEach(m => {
      if (m.win) recentWins++;
      else recentLosses++;
      totalKills += m.kills || 0;
      totalDeaths += m.deaths || 0;
      totalAssists += m.assists || 0;
    });
  }

  const recentWinRate = recentMatches.length > 0 ? Math.round((recentWins / recentMatches.length) * 100) : 0;
  const avgKDA = totalDeaths > 0 ? ((totalKills + totalAssists) / totalDeaths).toFixed(2) : 'Perfect';

  // Determine winrate class
  const getWinRateClass = (rate) => rate >= 55 ? 'high' : rate >= 50 ? 'medium' : 'low';

  // Rank Icon Mapping - Final Stable Path
  const getRankIcon = (tier) => {
    const tierLower = tier ? tier.toLowerCase() : 'unranked';
    // This is the verified static-assets path for 2026
    return `https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/images/ranked-emblem/emblem-${tierLower}.png`;
  };

  container.innerHTML = `
    <div class="global-stat-card main-rank">
        ${mainRank ? `
          <img class="main-rank-icon" src="${getRankIcon(mainRank.tier)}" alt="${mainRank.tier}">
          <div class="main-rank-info">
            <span class="lp-text">${mainRank.leaguePoints || 0} LP</span>
          </div>
        ` : '<span class="unranked">Non classé</span>'}

    </div>
    <div class="global-stat-card">
      <div class="stat-label">Winrate Ranked</div>
      <div class="stat-value ${getWinRateClass(rankedWinRate)}">${rankedWinRate}%</div>
      <div class="stat-detail">${totalRankedWins}V / ${totalRankedLosses}D</div>
    </div>
    <div class="global-stat-card">
      <div class="stat-label">Parties Ranked</div>
      <div class="stat-value">${totalRankedGames}</div>
      <div class="stat-detail">cette saison</div>
    </div>
    <div class="global-stat-card">
      <div class="stat-label">Winrate Récent</div>
      <div class="stat-value ${getWinRateClass(recentWinRate)}">${recentWinRate}%</div>
      <div class="stat-detail">${recentWins}V / ${recentLosses}D (${recentMatches.length} games)</div>
    </div>
    <div class="global-stat-card">
      <div class="stat-label">KDA Moyen</div>
      <div class="stat-value kda">${avgKDA}</div>
      <div class="stat-detail">${totalKills}/${totalDeaths}/${totalAssists}</div>
    </div>
  `;
}

/**
 * Render ranked cards
 */
function renderRankedCards(rankedStats) {
  const container = document.getElementById('rankedCards');
  if (!container) return;

  try {
    if (!rankedStats || rankedStats.length === 0) {
      container.innerHTML = `
        <div class="unranked-message">
          <span>🎮</span>
          <p>Ce joueur n'a pas encore de classement cette saison</p>
        </div>
      `;
      return;
    }

    const getRankedEmblemUrl = (tier) => {
      if (!tier) return '';
      const tierLower = String(tier).toLowerCase();
      return `https://raw.communitydragon.org/latest/game/assets/ux/symbols/ranked-emblem/emblem-${tierLower}.png`;
    };

    container.innerHTML = rankedStats.map(queue => {
      // Defensive defaults
      const tier = queue.tier || '';
      const rank = queue.rank || '';
      const leaguePoints = Number(queue.leaguePoints) || 0;
      const wins = Number(queue.wins) || 0;
      const losses = Number(queue.losses) || 0;
      const winRate = Number(queue.winRate) || 0;
      const queueName = queue.queueName || queue.queueType || 'Ranked';

      const winRateClass = winRate >= 55 ? 'high' : winRate >= 50 ? 'medium' : 'low';
      const emblemUrl = getRankedEmblemUrl(tier);
      const tierClass = tier ? String(tier).toLowerCase() : 'unranked';

      return `
        <div class="ranked-card">
          ${emblemUrl ? `<img class="ranked-emblem" src="${emblemUrl}" alt="${tier}" onerror="this.style.display='none'">` : ''}
          <div class="ranked-info">
            <div class="ranked-queue">${queueName}</div>
            <div class="ranked-tier ${tierClass}">${tier || 'Unranked'} ${rank}</div>
            <div class="ranked-lp">${leaguePoints} LP</div>
          </div>
          <div class="ranked-stats">
            <div class="ranked-winrate ${winRateClass}">${winRate}%</div>
            <div class="ranked-record">${wins}V ${losses}D</div>
          </div>
        </div>
      `;
    }).join('');

  } catch (err) {
    container.innerHTML = `
      <div class="unranked-message">
        <span>⚠️</span>
        <p>Impossible d'afficher les informations de classement (erreur interne).</p>
      </div>
    `;
  }
}

/**
 * Render champion showcase in two categories: Ranked Performance (LOG Style) and Total Mastery
 */
async function renderMasteries(masteries, totalScore, recentMatches = [], rankedStats = []) {
  const masteryGrid = document.getElementById('masteriesGrid');
  const rankedGrid = document.getElementById('rankedChampionsGrid');
  const totalMasteryEl = document.getElementById('totalMastery');

  if (totalMasteryEl) {
    totalMasteryEl.textContent = `Score total: ${(totalScore || 0).toLocaleString()}`;
  }

  if (!masteries || !Array.isArray(masteries) || masteries.length === 0) {
    const noData = `<p class="no-matches-message">Aucune donnée de champion trouvée</p>`;
    if (masteryGrid) masteryGrid.innerHTML = noData;
    if (rankedGrid) rankedGrid.innerHTML = noData;
    return;
  }

  // Get champion data to map IDs to names
  const champions = await dataDragon.getChampions();
  const championById = {};
  Object.values(champions).forEach(c => {
    championById[c.key] = c;
  });

  // Calculate Match-based stats for Ranked section (LeagueOfGraphs style)
  const champStats = {};
  recentMatches.forEach(match => {
    const cid = match.championId;
    if (!champStats[cid]) {
      champStats[cid] = { played: 0, wins: 0, kills: 0, deaths: 0, assists: 0 };
    }
    champStats[cid].played++;
    if (match.win) champStats[cid].wins++;
    champStats[cid].kills += match.kills || 0;
    champStats[cid].deaths += match.deaths || 0;
    champStats[cid].assists += match.assists || 0;
  });

  // Player Highest Tier for Icon Badge
  const highestTier = rankedStats.length > 0 ? rankedStats[0].tier : 'UNRANKED';

  // Category 1: Sorted by Mastery Points (Experience)
  const sortedByPoints = [...masteries].sort((a, b) => b.championPoints - a.championPoints);

  // Category 2: Sorted by Rank Percentile (Performance)
  const sortedByRank = [...masteries].sort((a, b) => {
    const playedA = champStats[a.championId]?.played || 0;
    const playedB = champStats[b.championId]?.played || 0;
    if (playedA !== playedB) return playedB - playedA; // Most played first
    return (a.rankEstimate?.percentile || 1) - (b.rankEstimate?.percentile || 1);
  });

  const formatRank = (rank) => {
    if (!rank) return '-';
    return rank.toLocaleString();
  };

  // Render for the "Masteries" grid (Standard Cards)
  if (masteryGrid) {
    masteryGrid.innerHTML = sortedByPoints.map(m => {
      const champion = championById[m.championId];
      const championName = champion?.name || 'Unknown';
      const championId = champion?.id || 'Unknown';
      const mColor = m.championLevel >= 7 ? 'mastery-7' : m.championLevel >= 6 ? 'mastery-6' : m.championLevel >= 5 ? 'mastery-5' : 'mastery-low';

      return `
        <div class="mastery-card" onclick="app.showChampion('${championId}')">
          <span class="mastery-level ${mColor}">M${m.championLevel}</span>
          <img class="mastery-champion-icon" src="${dataDragon.getChampionIconUrl(championId)}" alt="${championName}">
          <div class="mastery-champion-name">${championName}</div>
          <div class="mastery-mini-meta">
              <span>${m.championPoints.toLocaleString()} pts</span>
          </div>
        </div>
      `;
    }).join('');
  }

  // Render for the "Ranked" list (LeagueOfGraphs Style)
  if (rankedGrid) {
    // Only show champions actually played this season (Riot Match History or LoG)
    const topRanked = sortedByRank.filter(m => (m.rankEstimate?.matchStats?.played > 0)).slice(0, 15);

    if (topRanked.length === 0) {
      rankedGrid.innerHTML = `<p class="no-matches-message">Aucun champion classé trouvé pour cette file</p>`;
    } else {
      rankedGrid.innerHTML = topRanked.map(m => {
        const champion = championById[m.championId];
        const championName = champion?.name || 'Unknown';
        const championId = champion?.id || 'Unknown';
        const rx = m.rankEstimate;
        const stats = rx?.matchStats || { played: 0, wins: 0, kills: 0, deaths: 0, assists: 0 };

        const winrate = stats.played > 0 ? Math.round((stats.wins / stats.played) * 100) : 0;
        const kda = stats.played > 0 ?
          `${(stats.kills / stats.played).toFixed(1)} / ${(stats.deaths / stats.played).toFixed(1)} / ${(stats.assists / stats.played).toFixed(1)}` :
          '0.0 / 0.0 / 0.0';

        const winrateClass = winrate >= 60 ? 'high' : winrate < 45 ? 'low' : '';
        const rankValue = rx?.worldRank ? `#${rx.worldRank.toLocaleString()}` : '-';
        const serverName = rx?.serverCode || rx?.serverName || 'EUW';
        const serverRankValue = rx?.serverRank ? `${serverName}: #${rx.serverRank.toLocaleString()}` : '';

        return `
          <div class="log-row" onclick="app.showChampion('${championId}')">
            <div class="log-row-info">
              <div class="log-champ-wrapper">
                <img class="log-champ-img" src="${dataDragon.getChampionIconUrl(championId)}" alt="${championName}">
                <div class="log-champ-rank-badge ${highestTier.toLowerCase()}">
                  <i class="fas fa-crown"></i>
                </div>
              </div>
              <div class="log-details">
                <span class="log-name">${championName}</span>
                <div class="log-rank-display">
                  Rank: <span class="highlight">${rankValue}</span>
                  ${serverRankValue ? `<span class="world">(${serverRankValue})</span>` : ''}
                </div>
                <div class="log-kda">${kda}</div>
              </div>
            </div>

            <div class="log-played-col">
              <div class="log-progress-container">
                <div class="log-progress-fill played" style="width: ${Math.min(100, stats.played * 5)}%"></div>
              </div>
              <span class="log-value">${stats.played}</span>
            </div>

            <div class="log-winrate-col">
              <div class="log-progress-container">
                <div class="log-progress-fill winrate ${winrateClass}" style="width: ${winrate}%"></div>
              </div>
              <span class="log-value">${winrate}%</span>
            </div>
          </div>
        `;
      }).join('');
    }
  }
}


/**
 * Get CSS class for rank badge based on percentile
 */
function getRankBadgeClass(percentile) {
  if (!percentile) return 'rank-normal';
  if (percentile <= 0.01) return 'rank-elite';      // Top 1%
  if (percentile <= 0.05) return 'rank-high';       // Top 5%
  if (percentile <= 0.20) return 'rank-good';       // Top 20%
  if (percentile <= 0.50) return 'rank-average';    // Top 50%
  return 'rank-normal';
}

/**
 * Render match history
 */
function renderMatchHistory(matches) {
  const container = document.getElementById('matchesList');
  const statsContainer = document.getElementById('matchesStats');

  if (!container) return;

  if (!matches || matches.length === 0) {
    container.innerHTML = `<div class="no-matches-message">Aucune partie récente trouvée</div>`;
    if (statsContainer) statsContainer.innerHTML = '';
    return;
  }

  // Calculate stats
  const wins = matches.filter(m => m.win).length;
  const losses = matches.length - wins;
  const winRate = Math.round((wins / matches.length) * 100);

  if (statsContainer) {
    statsContainer.innerHTML = `
      <div class="match-stat">
        <div class="match-stat-value wins">${wins}</div>
        <div class="match-stat-label">Victoires</div>
      </div>
      <div class="match-stat">
        <div class="match-stat-value losses">${losses}</div>
        <div class="match-stat-label">Défaites</div>
      </div>
      <div class="match-stat">
        <div class="match-stat-value winrate">${winRate}%</div>
        <div class="match-stat-label">Winrate</div>
      </div>
    `;
  }

  // Queue type names
  const queueNames = {
    420: 'Ranked Solo',
    440: 'Ranked Flex',
    400: 'Normal Draft',
    430: 'Normal Blind',
    450: 'ARAM',
    900: 'URF',
    1020: 'One for All',
    1300: 'Nexus Blitz',
    1400: 'Ultimate Spellbook'
  };

  // Position icons
  const positionIcons = {
    TOP: '🛡️',
    JUNGLE: '🌲',
    MIDDLE: '🔮',
    BOTTOM: '🏹',
    UTILITY: '💚',
    '': ''
  };

  container.innerHTML = matches.map(match => {
    const kdaValue = parseFloat(match.kda);
    let kdaClass = 'average';
    if (match.kda === 'Perfect') kdaClass = 'perfect';
    else if (kdaValue >= 4) kdaClass = 'good';
    else if (kdaValue < 2) kdaClass = 'bad';

    const gameDurationMin = Math.floor(match.gameDuration / 60);
    const gameDurationSec = match.gameDuration % 60;

    const timeAgo = getTimeAgo(match.gameCreation);
    const queueName = queueNames[match.queueId] || match.gameMode || 'Game';
    const positionIcon = positionIcons[match.teamPosition] || '';

    // Multi-kills badges
    let multiKillBadge = '';
    if (match.pentaKills > 0) multiKillBadge = '<span class="multi-kill penta">PENTA</span>';
    else if (match.quadraKills > 0) multiKillBadge = '<span class="multi-kill quadra">QUADRA</span>';
    else if (match.tripleKills > 0) multiKillBadge = '<span class="multi-kill triple">TRIPLE</span>';

    return `
      <div class="match-card ${match.win ? 'win' : 'loss'}">
        <div class="match-result-bar ${match.win ? 'win' : 'loss'}"></div>
        <div class="match-champion-section">
          <img class="match-champion-icon" src="${dataDragon.getChampionIconUrl(match.champion.name)}" 
               alt="${match.champion.name}" onerror="this.style.opacity='0.5'">
          <span class="match-position">${positionIcon}</span>
        </div>
        <div class="match-info">
          <div class="match-result ${match.win ? 'win' : 'loss'}">${match.win ? 'Victoire' : 'Défaite'}</div>
          <div class="match-champion-name">${match.champion.name}</div>
          <div class="match-queue">${queueName}</div>
        </div>
        <div class="match-kda">
          <div class="match-kda-values">${match.kills}/${match.deaths}/${match.assists}</div>
          <div class="match-kda-ratio ${kdaClass}">${match.kda} KDA</div>
          ${multiKillBadge}
        </div>
        <div class="match-stats-grid">
          <div class="match-stat-item">
            <span class="stat-icon">🗡️</span>
            <span class="stat-value">${match.cs} CS</span>
            <span class="stat-detail">${match.csPerMin}/min</span>
          </div>
          <div class="match-stat-item">
            <span class="stat-icon">👁️</span>
            <span class="stat-value">${match.visionScore || 0}</span>
            <span class="stat-detail">Vision</span>
          </div>
          <div class="match-stat-item">
            <span class="stat-icon">💰</span>
            <span class="stat-value">${((match.goldEarned || 0) / 1000).toFixed(1)}k</span>
            <span class="stat-detail">Gold</span>
          </div>
        </div>
        <div class="match-items">
          ${(match.items || []).slice(0, 6).map(itemId => `
            <img class="match-item-icon" src="${dataDragon.getItemIconUrl(itemId)}" 
                 alt="Item" onerror="this.style.display='none'">
          `).join('')}
        </div>
        <div class="match-time">
          <div class="match-duration">${gameDurationMin}:${gameDurationSec.toString().padStart(2, '0')}</div>
          <div class="match-date">${timeAgo}</div>
        </div>
      </div>
    `;
  }).join('');
}

/**
 * Get time ago string
 */
function getTimeAgo(timestamp) {
  const now = Date.now();
  const diff = now - timestamp;

  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (days > 0) return `Il y a ${days}j`;
  if (hours > 0) return `Il y a ${hours}h`;
  if (minutes > 0) return `Il y a ${minutes}min`;
  return 'À l\'instant';
}

// Expose some functions to global for onclick handlers
window.app = {
  showChampion: (id) => {
    switchView('champions');
    showChampionDetail(id);
  }
};

// Initialize
init();
