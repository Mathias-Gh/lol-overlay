import { RIOT_API_KEY, RIOT_BASE_URL } from './config.js';

class RiotAPI {
    constructor() {
        this.apiKey = RIOT_API_KEY;
        this.baseUrl = RIOT_BASE_URL;
    }

    async fetchWithKey(endpoint) {
        const url = `${this.baseUrl}${endpoint}${endpoint.includes('?') ? '&' : '?'}api_key=${this.apiKey}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Riot API Error: ${response.status} ${response.statusText}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Riot API Fetch Failed:', error);
            throw error;
        }
    }

    /**
     * Get Challenger League to identify top tier champions
     */
    async getChallengerLeague(queue = 'RANKED_SOLO_5x5') {
        return this.fetchWithKey(`/lol/league/v4/challengerleagues/by-queue/${queue}`);
    }

    /**
     * Get champion masteries for a summoner (example usage)
     */
    async getChampionMasteries(summonerId) {
        return this.fetchWithKey(`/lol/champion-mastery/v4/champion-masteries/by-summoner/${summonerId}`);
    }

    /**
     * Get current game info for a summoner
     */
    async getCurrentGame(summonerId) {
        return this.fetchWithKey(`/lol/spectator/v4/active-games/by-summoner/${summonerId}`);
    }
}

export const riotApi = new RiotAPI();