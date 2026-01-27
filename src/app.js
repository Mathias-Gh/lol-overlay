/**
 * LoL Overlay Pro - Main Application
 * Enhanced with Tier List, Map Elements, and Wave Management
 */

import { dataDragon } from './api/dataDragon.js';
import { getDetailedBuild } from './data/championBuilds.js';
import { tierList, tierColors, getChampionTier } from './data/tierList.js';
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

// State
let allChampions = {};
let currentFilter = 'all';
let currentChampion = null;
let currentView = 'home';

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

/**
 * Initialize the application
 */
async function init() {
  console.log('🎮 LoL Overlay Pro initializing...');

  try {
    allChampions = await dataDragon.getChampions();
    renderChampionGrid(Object.values(allChampions));
    setupEventListeners();
    renderTierList('top');
    renderMapContent('dragons');
    renderWavesContent('basics');
    console.log('✅ Application ready!');
  } catch (error) {
    console.error('❌ Failed to initialize:', error);
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
      const targetTags = roleMap[role] || [];
      matchesRole = champion.tags.some(tag => targetTags.includes(tag));
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
async function showChampionDetail(championId) {
  try {
    currentChampion = await dataDragon.getChampionDetail(championId);
    // Pass champion data for role-based build generation
    const detailedBuild = getDetailedBuild(championId, currentChampion);

    // Switch views
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    championDetail.classList.add('active');

    // Update header
    document.getElementById('championSplash').src = dataDragon.getChampionSplashUrl(championId);
    document.getElementById('championName').textContent = currentChampion.name;
    document.getElementById('championTitle').textContent = currentChampion.title;
    document.getElementById('championTags').innerHTML = currentChampion.tags
      .map(tag => `<span class="tag">${tag}</span>`).join('');

    // Tier badge
    const tier = detailedBuild?.tier || 'B';
    const tierColor = tierColors[tier];
    document.getElementById('championTierBadge').innerHTML = `
      <span class="tier-badge" style="background: ${tierColor.bg}; color: ${tierColor.text}">${tier} Tier</span>
    `;

    // Reset tabs
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
    document.querySelector('[data-tab="stats"]').classList.add('active');
    document.getElementById('statsTab').classList.add('active');

    // Render all content
    renderStats(currentChampion.stats);
    renderAbilities(currentChampion, detailedBuild);
    renderDetailedBuild(detailedBuild, championId);
    renderDetailedRunes(detailedBuild);
    renderCombos(detailedBuild);
    renderMatchups(detailedBuild);

  } catch (error) {
    console.error('Failed to load champion:', error);
  }
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

  container.innerHTML = `
    <div class="combos-header">
      <h4>💥 Combos</h4>
    </div>
    <div class="combos-grid">
      ${build.combos.map((combo, i) => `
        <div class="combo-card">
          <span class="combo-num">${i + 1}</span>
          <span class="combo-text">${combo}</span>
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

  container.innerHTML = `
    <div class="matchup-section good">
      <h4>✅ Fort Contre</h4>
      <div class="matchup-list">
        ${build.counters.strongAgainst?.map(c => `<span class="matchup-champion">${c}</span>`).join('') || 'Aucun'}
      </div>
    </div>
    
    <div class="matchup-section bad">
      <h4>⚠️ Faible Contre</h4>
      <div class="matchup-list">
        ${build.counters.weakAgainst?.map(c => `<span class="matchup-champion">${c}</span>`).join('') || 'Aucun'}
      </div>
    </div>
    
    ${build.counters.tips ? `
      <div class="matchup-tips">
        <h4>💡 Tips de Lane</h4>
        ${Object.entries(build.counters.tips).map(([key, tip]) => `
          <div class="tip-item">
            <strong>${key}:</strong> ${tip}
          </div>
        `).join('')}
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
    const champions = tiers[tier] || [];
    const colors = tierColors[tier];

    return `
      <div class="tier-row">
        <div class="tier-label" style="background: ${colors.bg}; color: ${colors.text}; box-shadow: 0 0 15px ${colors.glow}">
          ${tier}
        </div>
        <div class="tier-champions">
          ${champions.length > 0 ? champions.map(name => `
            <div class="tier-champion" data-name="${name}">
              <span class="champ-name">${name}</span>
            </div>
          `).join('') : '<span class="empty-tier">Aucun champion</span>'}
        </div>
      </div>
    `;
  }).join('');
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
  return text.replace(/<[^>]*>/g, '').replace(/\{\{[^}]+\}\}/g, '');
}

// Initialize
init();
