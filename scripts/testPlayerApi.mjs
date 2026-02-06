// Import the exported instance `playerApi`
let apiInstance;
try {
  const mod = await import('../src/api/playerApi.js');
  apiInstance = mod.playerApi;
} catch (e) {
  console.error('Failed to import playerApi module:', e.message);
  process.exit(1);
}

if (!apiInstance) {
  console.error('Could not find exported `playerApi` instance in module');
  process.exit(1);
}

// Make sure debug is enabled
apiInstance.debug = true;

const sample = [
  {
    queueType: 'RANKED_SOLO_5x5',
    tier: 'GOLD',
    rank: 'II',
    leaguePoints: 75,
    wins: 120,
    losses: 100,
    hotStreak: false
  },
  {
    queueType: 'RANKED_FLEX_SR',
    tier: 'SILVER',
    rank: 'I',
    leaguePoints: 20,
    wins: 30,
    losses: 40
  }
];

try {
  const normalized = apiInstance.processRankedStats(sample);
  console.log('Normalized ranked stats:', JSON.stringify(normalized, null, 2));
} catch (err) {
  console.error('Error calling processRankedStats:', err);
  process.exit(1);
}
