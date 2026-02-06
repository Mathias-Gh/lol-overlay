/**
 * Player Search API Service
 * Search for players by Riot ID (gameName#tagLine) and retrieve their stats
 */

import { RIOT_API_KEY } from './config.js';

// Regional routing values for account-v1 API
const REGIONS = {
    europe: 'https://europe.api.riotgames.com',
    americas: 'https://americas.api.riotgames.com',
    asia: 'https://asia.api.riotgames.com',
    sea: 'https://sea.api.riotgames.com'
};

// Platform routing values for other APIs
const PLATFORMS = {
    euw1: 'https://euw1.api.riotgames.com',
    eun1: 'https://eun1.api.riotgames.com',
    na1: 'https://na1.api.riotgames.com',
    kr: 'https://kr.api.riotgames.com',
    br1: 'https://br1.api.riotgames.com',
    la1: 'https://la1.api.riotgames.com',
    la2: 'https://la2.api.riotgames.com',
    oc1: 'https://oc1.api.riotgames.com',
    tr1: 'https://tr1.api.riotgames.com',
    ru: 'https://ru.api.riotgames.com',
    jp1: 'https://jp1.api.riotgames.com',
    ph2: 'https://ph2.api.riotgames.com',
    sg2: 'https://sg2.api.riotgames.com',
    th2: 'https://th2.api.riotgames.com',
    tw2: 'https://tw2.api.riotgames.com',
    vn2: 'https://vn2.api.riotgames.com'
};

// Platform to region mapping for match-v5
const PLATFORM_TO_REGION = {
    euw1: 'europe',
    eun1: 'europe',
    tr1: 'europe',
    ru: 'europe',
    na1: 'americas',
    br1: 'americas',
    la1: 'americas',
    la2: 'americas',
    kr: 'asia',
    jp1: 'asia',
    oc1: 'sea',
    ph2: 'sea',
    sg2: 'sea',
    th2: 'sea',
    tw2: 'sea',
    vn2: 'sea'
};

// Friendly names for platforms
const PLATFORM_NAMES = {
    euw1: 'EU West',
    eun1: 'EU Nordic & East',
    na1: 'North America',
    kr: 'South Korea',
    br1: 'Brazil',
    la1: 'LAS',
    la2: 'LAN',
    oc1: 'Oceania',
    tr1: 'Turkey',
    ru: 'Russia',
    jp1: 'Japan',
    ph2: 'Philippines',
    sg2: 'Singapore',
    th2: 'Thailand',
    tw2: 'Taiwan',
    vn2: 'Vietnam'
};

// LeagueOfGraphs specific region codes
const LOG_REGIONS = {
    euw1: 'euw',
    na1: 'na',
    kr: 'kr',
    eun1: 'eune',
    br1: 'br',
    la1: 'lan',
    la2: 'las',
    oc1: 'oce',
    tr1: 'tr',
    ru: 'ru',
    jp1: 'jp'
};

// Queue type display names
const QUEUE_NAMES = {
    RANKED_SOLO_5x5: 'Solo/Duo',
    RANKED_FLEX_SR: 'Flex 5v5',
    RANKED_TFT: 'TFT',
    RANKED_TFT_PAIRS: 'TFT Double Up'
};

// Tier order for display
const TIER_ORDER = ['CHALLENGER', 'GRANDMASTER', 'MASTER', 'DIAMOND', 'EMERALD', 'PLATINUM', 'GOLD', 'SILVER', 'BRONZE', 'IRON'];

// CORS proxies for browser requests (fallback list - updated with more reliable options)
const CORS_PROXIES = [
    'https://corsproxy.io/?',
    'https://api.codetabs.com/v1/proxy?url=',
    'https://api.allorigins.win/raw?url=',
    'https://proxy.cors.sh/',
    'https://thingproxy.freeboard.io/fetch/',
    ''  // Direct
];

class PlayerAPI {
    constructor() {
        this.currentPlatform = 'euw1';
        this.currentProxyIndex = 0;
        this.debug = false; // Set to false for a clean console
    }

    /**
     * Set the current platform for API calls
     */
    setPlatform(platform) {
        if (PLATFORMS[platform]) {
            this.currentPlatform = platform;
        }
    }

    /**
     * Get current platform name
     */
    getCurrentPlatformName() {
        return PLATFORM_NAMES[this.currentPlatform];
    }

    /**
     * Reset proxy index for new search
     */
    resetProxyIndex() {
        this.currentProxyIndex = 0;
    }

    /**
     * Build the proxied URL based on proxy type
     */
    buildProxiedUrl(apiUrl, proxyIndex) {
        const proxy = CORS_PROXIES[proxyIndex];

        // Empty proxy = direct request (for Electron)
        if (proxy === '') {
            return apiUrl;
        }

        // Different proxies need different URL encoding
        if (proxy.includes('allorigins') || proxy.includes('codetabs')) {
            return `${proxy}${encodeURIComponent(apiUrl)}`;
        }

        // Most proxies work with direct URL append
        return `${proxy}${apiUrl}`;
    }

    /**
     * Make an API request with CORS proxy support
     */
    async fetchApi(baseUrl, endpoint, retryCount = 0) {
        // Use raw fetch for external URLs (no base)
        if (!baseUrl && (endpoint.startsWith('http') || endpoint.startsWith('https'))) {
            return this.fetchRaw(endpoint);
        }

        // Use the imported key directly to ensure we always have the latest one
        const apiKey = RIOT_API_KEY;

        if (this.debug && retryCount === 0) {
            console.log(`🔑 Key Check: ...${apiKey.substring(apiKey.length - 8)}`);
        }

        const separator = endpoint.includes('?') ? '&' : '?';
        const apiUrl = `${baseUrl}${endpoint}${separator}api_key=${apiKey}&_c=${Date.now()}`;

        const url = this.buildProxiedUrl(apiUrl, this.currentProxyIndex);
        const currentProxy = CORS_PROXIES[this.currentProxyIndex] || 'direct';

        if (this.debug) {
            console.log(`📡 [Proxy ${this.currentProxyIndex + 1}/${CORS_PROXIES.length}] Fetching: ${baseUrl}${endpoint}`);
            if (retryCount === 0) console.log(`🔗 Target: ${apiUrl.substring(0, 120)}...`);
        }

        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 15000); // 15s timeout

            // Headers for the request
            const headers = {
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            };

            // If direct request, use the header-based auth which is sometimes required or more stable
            if (!currentProxy || currentProxy === 'direct') {
                headers['X-Riot-Token'] = apiKey;
            }

            if (this.debug) {
                console.log(`📡 [Proxy ${this.currentProxyIndex + 1}/${CORS_PROXIES.length}] Fetching: ${url.substring(0, 120)}...`);
            }

            const response = await fetch(url, {
                method: 'GET',
                headers: headers,
                signal: controller.signal
            });

            clearTimeout(timeoutId);

            if (this.debug) {
                console.log(`📡 Response status: ${response.status} for ${endpoint.split('/')[3] || 'API'}`);
            }

            // Handle specific HTTP status codes
            if (response.status === 404) {
                return null;
            }

            if (response.status === 429) {
                const retryAfter = response.headers.get('Retry-After') || '60';
                throw new Error(`RATE_LIMIT:Limite de requêtes atteinte. Réessayez dans ${retryAfter} secondes.`);
            }

            if (response.status === 403 || response.status === 401) {
                throw new Error(`PROXY_ERROR:Accès refusé (${response.status}) par Riot ou par le proxy.`);
            }

            if (!response.ok) {
                throw new Error(`HTTP_ERROR:Erreur HTTP ${response.status}: ${response.statusText}`);
            }

            // Try to parse JSON
            const text = await response.text();

            if (this.debug && (endpoint.includes('league/v4') || endpoint.includes('summoner/v4'))) {
                console.log(`📡 RAW response (${endpoint.split('/')[3]}):`, text.substring(0, 100));
            }

            // Check if response is HTML (proxy error page)
            if (text.trim().startsWith('<') || text.trim().startsWith('<!')) {
                throw new Error('PROXY_ERROR:Le proxy a retourné une page HTML au lieu de JSON');
            }

            try {
                let data = JSON.parse(text);

                // Robust unpacking for various proxy formats
                if (data && typeof data === 'object' && !Array.isArray(data)) {
                    // Check if it's actually a Riot error object 
                    if (data.status && data.status.status_code) {
                        const code = data.status.status_code;
                        if (code === 403 || code === 401) {
                            throw new Error(`PROXY_ERROR:Riot a retourné ${code} via ce proxy.`);
                        }
                        if (code >= 400) {
                            throw new Error(`RIOT_ERROR:${code}:${data.status.message}`);
                        }
                    }

                    // Case 1: Proxy wraps in "contents"
                    if (data.contents) {
                        try {
                            const nested = typeof data.contents === 'string' ? JSON.parse(data.contents) : data.contents;
                            data = nested;
                        } catch (e) {
                            data = data.contents;
                        }
                    } else if (data.data && !data.id && !Array.isArray(data)) {
                        data = data.data;
                    }
                }

                return data;
            } catch (parseError) {
                if (parseError.message.includes('RIOT_ERROR') || parseError.message.includes('PROXY_ERROR')) throw parseError;
                throw new Error(`PARSE_ERROR:JSON invalide: ${text.substring(0, 50)}`);
            }

        } catch (error) {
            const errorMessage = error.message || 'Unknown error';

            if (errorMessage.includes('RATE_LIMIT')) {
                throw new Error(errorMessage.split(':')[1]);
            }

            const isRetryableError =
                errorMessage.includes('PROXY_ERROR') ||
                errorMessage.includes('HTTP_ERROR') ||
                errorMessage.includes('PARSE_ERROR') ||
                errorMessage.includes('Failed to fetch') ||
                errorMessage.includes('NetworkError') ||
                errorMessage.includes('AbortError') ||
                error.name === 'AbortError';

            if (isRetryableError && this.currentProxyIndex < CORS_PROXIES.length - 1) {
                this.currentProxyIndex++;
                if (this.debug) console.warn(`🔄 Retry with Proxy ${this.currentProxyIndex + 1}...`);
                return this.fetchApi(baseUrl, endpoint, retryCount + 1);
            }

            if (this.currentProxyIndex >= CORS_PROXIES.length - 1) {
                throw new Error('Épuisement des proxies. Erreur réseau ou blocage API Riot.');
            }

            throw new Error(errorMessage.includes(':') ? errorMessage.split(':')[1] : errorMessage);
        }
    }

    /**
     * Get account by Riot ID (gameName#tagLine)
     */
    async getAccountByRiotId(gameName, tagLine) {
        const region = PLATFORM_TO_REGION[this.currentPlatform] || 'europe';
        const encodedGameName = encodeURIComponent(gameName);
        const encodedTagLine = encodeURIComponent(tagLine);

        return this.fetchApi(
            REGIONS[region],
            `/riot/account/v1/accounts/by-riot-id/${encodedGameName}/${encodedTagLine}`
        );
    }

    /**
     * Get summoner info by PUUID
     */
    async getSummonerByPuuid(puuid) {
        return this.fetchApi(
            PLATFORMS[this.currentPlatform],
            `/lol/summoner/v4/summoners/by-puuid/${encodeURIComponent(puuid)}`
        );
    }

    /**
     * Fetch external content through proxy without API Key
     */
    async fetchRaw(url) {
        const proxiedUrl = this.buildProxiedUrl(url, this.currentProxyIndex);
        try {
            const response = await fetch(proxiedUrl);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);

            const proxy = CORS_PROXIES[this.currentProxyIndex];
            if (proxy.includes('allorigins')) {
                const data = await response.json();
                return data.contents;
            }
            return response.text();
        } catch (error) {
            // Auto-rotate proxy on failure
            if (this.currentProxyIndex < CORS_PROXIES.length - 1) {
                this.currentProxyIndex++;
                console.log(`🔄 Raw Fetch failed, rotating to proxy ${this.currentProxyIndex}`);
                return this.fetchRaw(url);
            }
            throw error;
        }
    }

    /**
     * Get ranked stats by PUUID or Summoner ID
     */
    async getRankedStats(id, isPuuid = true) {
        const type = isPuuid ? 'by-puuid' : 'by-summoner';
        return this.fetchApi(
            PLATFORMS[this.currentPlatform],
            `/lol/league/v4/entries/${type}/${encodeURIComponent(id)}`
        );
    }

    /**
     * Get champion masteries by PUUID
     */
    async getChampionMasteries(puuid, count = 10) {
        return this.fetchApi(
            PLATFORMS[this.currentPlatform],
            `/lol/champion-mastery/v4/champion-masteries/by-puuid/${encodeURIComponent(puuid)}/top?count=${count}`
        );
    }

    /**
     * Get all champion masteries by PUUID (for ranking calculation)
     */
    async getAllChampionMasteries(puuid) {
        return this.fetchApi(
            PLATFORMS[this.currentPlatform],
            `/lol/champion-mastery/v4/champion-masteries/by-puuid/${encodeURIComponent(puuid)}`
        );
    }

    /**
     * Get total mastery score by PUUID
     */
    async getTotalMasteryScore(puuid) {
        return this.fetchApi(
            PLATFORMS[this.currentPlatform],
            `/lol/champion-mastery/v4/scores/by-puuid/${encodeURIComponent(puuid)}`
        );
    }

    /**
     * Get estimated rank number for a percentile
     */
    getEstimatedRankNumber(percentile) {
        const estimatedPlayers = {
            euw1: 3500000,
            na1: 2000000,
            kr: 4500000,
            eun1: 1800000,
            br1: 1500000,
            tr1: 1000000,
            la1: 800000,
            la2: 700000,
            oc1: 300000,
            ru: 250000,
            jp1: 400000
        };

        const worldPlayers = 115000000; // Total active LoL players approx
        const serverPlayers = estimatedPlayers[this.currentPlatform] || 1500000;

        return {
            worldRank: Math.max(1, Math.round(worldPlayers * percentile * 0.4)), // Adjusted curve
            serverRank: Math.max(1, Math.round(serverPlayers * percentile * 0.4))
        };
    }

    /**
     * Try to fetch actual rankings from LeagueOfGraphs
     */
    async getLeagueOfGraphsData(gameName, tagLine) {
        const logRegion = LOG_REGIONS[this.currentPlatform] || 'euw';
        const formattedName = encodeURIComponent(gameName.trim().replace(/\s+/g, '+'));
        const url = `https://www.leagueofgraphs.com/summoner/champions/${logRegion}/${formattedName}-${tagLine}`;

        try {
            console.log(`📡 Fetching real LoG ranks from: ${url}`);
            const html = await this.fetchApi('', url);
            if (html && typeof html === 'string') {
                return this.parseLogHtml(html);
            }
        } catch (e) {
            console.warn('⚠️ LoG synchronization failed:', e.message);
        }
        return null;
    }

    /**
     * Parse the LoG HTML for rankings (Robust RegEx)
     */
    parseLogHtml(html) {
        const results = {};
        // Match table rows that contain champion info
        const rowRegex = /<tr[^>]*>([\s\S]*?)<\/tr>/g;
        let match;

        while ((match = rowRegex.exec(html)) !== null) {
            const rowContent = match[1];

            // Extract Champion Name
            const nameMatch = rowContent.match(/class="championName"[^>]*>[\s\S]*?<span[^>]*>([^<]+)/i) ||
                rowContent.match(/championName[^>]*>([^<]+)/i);

            if (nameMatch) {
                const champName = nameMatch[1].trim();

                // Extract World Rank
                const worldRankMatch = rowContent.match(/Rank:\s*#?([0-9,]+)/i);

                // Extract Server Rank
                const serverRankMatch = rowContent.match(/\(([^:]+):\s*#?([0-9,]+)\)/i);

                // Extract Played and Winrate (LoG Specific classes)
                // Look for columns with numbers/percentages
                const playedMatch = rowContent.match(/<td[^>]*class="[^"]*played[^"]*"[^>]*>([\s\S]*?)<\/td>/i);
                const winrateMatch = rowContent.match(/<td[^>]*class="[^"]*winrate[^"]*"[^>]*>([\s\S]*?)<\/td>/i);

                if (worldRankMatch) {
                    // Extract numeric played value
                    let played = playedMatch ? parseInt(playedMatch[1].replace(/[^0-9]/g, '')) : 0;
                    // Extract winrate percentage
                    let wrPercent = winrateMatch ? parseFloat(winrateMatch[1].replace(/[^0-9.]/g, '')) : 0;

                    results[champName] = {
                        worldRank: parseInt(worldRankMatch[1].replace(/,/g, '')),
                        serverRank: serverRankMatch ? parseInt(serverRankMatch[2].replace(/,/g, '')) : null,
                        serverCode: serverRankMatch ? serverRankMatch[1] : null,
                        played: played,
                        winrate: wrPercent
                    };
                }
            }
        }

        if (Object.keys(results).length > 0) {
            console.log(`✅ Extracted real ranks for ${Object.keys(results).length} champions`);
        }
        return results;
    }

    /**
     * Calculate LeagueOfGraphs Score based on exact formula provided
     */
    calculateLogScore(tier, division, winrate, kda, gamesTotal, games30d) {
        // Base score
        let score = 100;

        // 1. Level Factor (+1 level -> score * 4)
        const tierBase = {
            'CHALLENGER': 31,
            'GRANDMASTER': 30,
            'MASTER': 29,
            'DIAMOND': 25,
            'EMERALD': 21,
            'PLATINUM': 17,
            'GOLD': 13,
            'SILVER': 9,
            'BRONZE': 5,
            'IRON': 1
        };

        const divOffset = { 'I': 3, 'II': 2, 'III': 1, 'IV': 0 };
        let level = tierBase[tier] || 9; // Default Silver
        if (division && divOffset[division] !== undefined && tier !== 'MASTER' && tier !== 'GRANDMASTER' && tier !== 'CHALLENGER') {
            level += divOffset[division];
        }

        // Exponential Level Bonus
        score *= Math.pow(4, level - 1);

        // 2. Winrate Factor (+12% relative WR -> score * 2)
        // Relative WR = WR - 0.5 (Average baseline is 50%)
        const avgWR = 0.5;
        const wrBonus = (winrate - avgWR) / 0.12;
        score *= Math.pow(2, wrBonus);

        // 3. KDA Factor (+100% KDA -> score * 1.33)
        // Relative KDA = KDA / 2.5 (Average baseline KDA approx 2.5)
        const avgKDA = 2.5;
        const kdaRatio = kda / avgKDA;
        if (kdaRatio > 1) {
            score *= Math.pow(1.33, kdaRatio - 1);
        } else if (kdaRatio < 1) {
            score *= Math.pow(0.75, 1 - kdaRatio); // Inverse for low KDA
        }

        // 4. Penalties - Total Games (Season)
        // If < 10 games, score is extremely low (basically not ranked)
        if (gamesTotal < 10) score *= 0.05;

        // If < 50 games: score * 0.75 for each missing game
        if (gamesTotal < 50) {
            score *= Math.pow(0.75, 50 - gamesTotal);
        }

        // 5. Penalties - 30-day Activity
        // If < 5 games: score * 0.5 for each missing game
        if (games30d < 5) {
            score *= Math.pow(0.5, 5 - games30d);
        }

        return score;
    }

    /**
     * Estimate champion rank leaderboard position
     * Multi-source approach: Real LoG data > Precise Formula Simulation
     */
    estimateChampionRank(mastery, soloQStats = null, champMatchStats = null, realLogData = null, championName = '') {
        // Source 1: Real LeagueOfGraphs data if available (Direct scrap)
        if (realLogData && realLogData[championName]) {
            const data = realLogData[championName];
            if (data.worldRank) {
                // Merge LoG stats into matchStats mockup if local stats are missing
                const mergedStats = champMatchStats || {
                    played: data.played || 0,
                    wins: Math.round((data.winrate || 0) * (data.played || 0) / 100),
                    kills: 0, deaths: 0, assists: 0
                };

                return {
                    worldRank: data.worldRank,
                    serverRank: data.serverRank,
                    serverName: PLATFORM_NAMES[this.currentPlatform] || 'Server',
                    matchStats: mergedStats,
                    title: this.getPrestigeTitle(data.worldRank / 500000, soloQStats?.tier),
                    serverCode: data.serverCode
                };
            }
        }

        // Source 2: Exact Formula Simulation
        const tier = soloQStats?.tier || 'SILVER';
        const division = soloQStats?.rank || 'IV';

        // Stats from match history (proxy for performance)
        const played = champMatchStats?.played || 0;
        const wins = champMatchStats?.wins || 0;
        const wr = played > 0 ? wins / played : 0.45;
        const kdaValue = played > 0 ?
            (champMatchStats.kills + champMatchStats.assists) / Math.max(1, champMatchStats.deaths) :
            2.0;

        // Simulate Season Games (Mastery Points as proxy for total games played)
        const estimatedSeasonGames = Math.max(played, Math.min(100, Math.floor(mastery.championPoints / 1200)));

        const finalScore = this.calculateLogScore(tier, division, wr, kdaValue, estimatedSeasonGames, played);

        // Map Score to Rank (Based on Score distributions)
        // Top 1 World is typically ~50,000,000,000+ with 4^level multipliers
        // This is purely statistical mapping for visuals
        let worldRank = null;
        let serverRank = null;

        if (played >= 2 || tier === 'DIAMOND' || tier === 'MASTER') {
            const worldPlayers = 115000000;
            const log10Score = Math.log10(finalScore);
            // Threshold for showing rank
            if (log10Score > 10) {
                const percentile = Math.max(0.0000001, 1 - (log10Score / 30));
                worldRank = Math.round(worldPlayers * percentile * 0.05);
                serverRank = Math.round(worldRank / 15);
            }
        }

        return {
            score: finalScore,
            title: this.getPrestigeTitle(worldRank ? worldRank / 1000000 : 0.5, tier),
            worldRank: worldRank,
            serverRank: serverRank,
            serverName: PLATFORM_NAMES[this.currentPlatform] || 'Server',
            matchStats: champMatchStats
        };
    }

    getPrestigeTitle(percentile, tier) {
        if (percentile < 0.0005) return 'LÉGENDE MONDIALE';
        if (percentile < 0.005) return 'Élite du Serveur';
        if (percentile < 0.02) return 'Expert';
        if (percentile < 0.10) return 'Confirmé';
        return 'Joueur Classé';
    }

    /**
     * Get match IDs by PUUID
     */
    async getMatchIds(puuid, count = 20, queueId = null) {
        const region = PLATFORM_TO_REGION[this.currentPlatform] || 'europe';
        let endpoint = `/lol/match/v5/matches/by-puuid/${encodeURIComponent(puuid)}/ids?start=0&count=${count}`;

        if (queueId) {
            endpoint += `&queue=${queueId}`;
        }

        return this.fetchApi(REGIONS[region], endpoint);
    }

    /**
     * Get match details by match ID
     */
    async getMatch(matchId) {
        const region = PLATFORM_TO_REGION[this.currentPlatform] || 'europe';
        return this.fetchApi(REGIONS[region], `/lol/match/v5/matches/${encodeURIComponent(matchId)}`);
    }

    /**
     * Get current game for a summoner (uses PUUID)
     */
    async getCurrentGame(puuid) {
        return this.fetchApi(
            PLATFORMS[this.currentPlatform],
            `/lol/spectator/v5/active-games/by-puuid/${encodeURIComponent(puuid)}`
        );
    }

    /**
     * Full player search - combines all APIs to get complete player profile
     */
    async searchPlayer(gameName, tagLine) {
        // Reset proxy index for new search
        this.resetProxyIndex();

        try {
            // Step 1: Start LoG fetching early as it's independent
            const logDataPromise = this.getLeagueOfGraphsData(gameName, tagLine);

            // Step 2: Get core account info (PUUID) - Essential first step
            const account = await this.getAccountByRiotId(gameName, tagLine);
            if (!account) {
                return {
                    error: `Joueur "${gameName}#${tagLine}" non trouvé. Vérifiez l'orthographe et la région.`,
                    notFound: true
                };
            }

            const puuid = account.puuid;

            // Step 3: Launch all PUUID-dependent data fetching in parallel
            console.log('🚀 Launching parallel data fetching...');
            const [
                summoner,
                matchIdsResult,
                rankedResult,
                masteriesResult,
                totalMasteryResult,
                currentGameResult,
                realLogData
            ] = await Promise.all([
                this.getSummonerByPuuid(puuid).catch(e => { console.warn('Summoner fetch failed', e); return null; }),
                this.getMatchIds(puuid, 40).catch(e => { console.warn('Match IDs fetch failed', e); return []; }),
                this.getRankedStats(puuid, true).catch(e => { console.warn('Ranked stats fetch failed', e); return null; }),
                this.getChampionMasteries(puuid, 7).catch(e => { console.warn('Masteries fetch failed', e); return []; }),
                this.getTotalMasteryScore(puuid).catch(e => { console.warn('Total mastery fetch failed', e); return 0; }),
                this.getCurrentGame(puuid).catch(e => { console.warn('Live game fetch failed', e); return null; }),
                logDataPromise // Wait for the early-started LoG fetch
            ]);

            // Step 4: Handle match details in parallel if we have IDs
            let recentMatches = [];
            const matchIds = Array.isArray(matchIdsResult) ? matchIdsResult : [];

            if (matchIds.length > 0) {
                // Fetch matches in parallel
                recentMatches = await Promise.all(
                    matchIds.map(id => this.getMatch(id).catch(() => null))
                );
                recentMatches = recentMatches.filter(m => m !== null);
            }

            // Fallback for Summoner ID if PUUID ranked stats failed (less common now with Puuid support)
            let finalRankedResult = rankedResult;
            if (!finalRankedResult && summoner) {
                const sid = summoner.id || summoner.summonerId;
                if (sid) {
                    finalRankedResult = await this.getRankedStats(sid, false).catch(() => null);
                }
            }

            console.log('✅ Profile data aggregated successfully');

            // Final data processing
            const processedRanked = this.processRankedStats(finalRankedResult);
            const soloQ = processedRanked.find(q => q.queueType === 'RANKED_SOLO_5x5') || null;

            // Aggregate Match-based stats for ranking precision
            const champMatchStats = {};
            recentMatches.forEach(match => {
                const participant = match.info?.participants?.find(p => p.puuid === puuid);
                if (!participant) return;
                const cid = participant.championId;
                if (!champMatchStats[cid]) {
                    champMatchStats[cid] = { played: 0, wins: 0, kills: 0, deaths: 0, assists: 0 };
                }
                champMatchStats[cid].played++;
                if (participant.win) champMatchStats[cid].wins++;
                champMatchStats[cid].kills += participant.kills || 0;
                champMatchStats[cid].deaths += participant.deaths || 0;
                champMatchStats[cid].assists += participant.assists || 0;
            });

            // Enrich masteries with rank estimates
            const enrichedMasteries = (masteriesResult || []).map(mastery => {
                const stats = champMatchStats[mastery.championId] || null;
                const champName = Object.values(this.championsData || {}).find(c => c.key === mastery.championId.toString())?.name || '';
                const rankEstimate = this.estimateChampionRank(mastery, soloQ, stats, realLogData, champName);
                return { ...mastery, rankEstimate };
            });

            return {
                success: true,
                account,
                summoner: summoner || { summonerLevel: 0, profileIconId: 0 },
                rankedStats: processedRanked,
                masteries: enrichedMasteries,
                totalMasteryScore: totalMasteryResult || 0,
                recentMatches: this.processMatches(recentMatches, puuid),
                currentGame: currentGameResult,
                platform: this.currentPlatform,
                platformName: PLATFORM_NAMES[this.currentPlatform]
            };

        } catch (error) {
            console.error('❌ Search failed:', error);
            return { error: error.message };
        }
    }

    /**
     * Process ranked stats for display
     */
    processRankedStats(stats) {
        // Ensure stats is an array
        if (!stats || !Array.isArray(stats)) {
            return [];
        }

        const normalized = stats.map(queue => {
            const wins = Number(queue.wins) || 0;
            const losses = Number(queue.losses) || 0;
            const leaguePoints = Number(queue.leaguePoints) || 0;
            const tier = (queue.tier || '').toUpperCase();
            const rank = queue.rank || '';
            const gamesPlayed = wins + losses;
            const winRate = gamesPlayed > 0 ? Math.round((wins / gamesPlayed) * 100) : 0;

            // compute tier order index (fallback to end if unknown)
            const tierIndex = TIER_ORDER.indexOf(tier);
            const _order = tierIndex === -1 ? TIER_ORDER.length : tierIndex;

            return {
                queueType: queue.queueType,
                queueName: QUEUE_NAMES[queue.queueType] || queue.queueType,
                tier,
                rank,
                leaguePoints,
                wins,
                losses,
                gamesPlayed,
                winRate,
                hotStreak: !!queue.hotStreak,
                veteran: !!queue.veteran,
                freshBlood: !!queue.freshBlood,
                inactive: !!queue.inactive,
                display: `${tier}${rank ? ' ' + rank : ''}${leaguePoints ? ` - ${leaguePoints} LP` : ''}`,
                _order
            };
        });

        // Sort by tier order, then by LP desc, then by games played desc
        normalized.sort((a, b) => {
            if (a._order !== b._order) return a._order - b._order;
            if (b.leaguePoints !== a.leaguePoints) return b.leaguePoints - a.leaguePoints;
            return b.gamesPlayed - a.gamesPlayed;
        });

        // Remove internal sort key before returning
        const result = normalized.map(({ _order, ...rest }) => rest);
        try {
            if (this.debug) console.log('🔧 processRankedStats normalized:', result);
        } catch (e) {
            console.warn('Could not log normalized ranked stats', e.message);
        }
        return result;
    }

    /**
     * Process match data for display
     */
    processMatches(matches, puuid) {
        // Ensure matches is an array
        if (!matches || !Array.isArray(matches)) {
            console.log('⚠️ Matches is not an array:', matches);
            return [];
        }

        return matches.map(match => {
            if (!match || !match.info || !match.info.participants) return null;
            const participant = match.info.participants.find(p => p.puuid === puuid);
            if (!participant) return null;

            return {
                matchId: match.metadata.matchId,
                gameMode: match.info.gameMode,
                gameDuration: match.info.gameDuration,
                gameCreation: match.info.gameCreation,
                queueId: match.info.queueId,
                champion: {
                    id: participant.championId,
                    name: participant.championName,
                },
                win: participant.win,
                kills: participant.kills,
                deaths: participant.deaths,
                assists: participant.assists,
                kda: participant.deaths === 0
                    ? 'Perfect'
                    : ((participant.kills + participant.assists) / participant.deaths).toFixed(2),
                cs: participant.totalMinionsKilled + participant.neutralMinionsKilled,
                csPerMin: ((participant.totalMinionsKilled + participant.neutralMinionsKilled) / (match.info.gameDuration / 60)).toFixed(1),
                visionScore: participant.visionScore,
                goldEarned: participant.goldEarned,
                items: [
                    participant.item0,
                    participant.item1,
                    participant.item2,
                    participant.item3,
                    participant.item4,
                    participant.item5,
                    participant.item6
                ].filter(id => id > 0),
                summoner1Id: participant.summoner1Id,
                summoner2Id: participant.summoner2Id,
                teamPosition: participant.teamPosition || participant.individualPosition,
                doubleKills: participant.doubleKills,
                tripleKills: participant.tripleKills,
                quadraKills: participant.quadraKills,
                pentaKills: participant.pentaKills
            };
        }).filter(m => m !== null);
    }

    /**
     * Get available platforms
     */
    getAvailablePlatforms() {
        return Object.entries(PLATFORM_NAMES).map(([key, name]) => ({
            id: key,
            name: name
        }));
    }
}

export const playerApi = new PlayerAPI();
export { PLATFORM_NAMES, QUEUE_NAMES, TIER_ORDER };
