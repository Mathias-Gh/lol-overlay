/**
 * Data Dragon API Service
 * Fetches champion, item, and rune data from Riot's Data Dragon CDN
 */

const DDRAGON_BASE = 'https://ddragon.leagueoflegends.com';
const CDRAGON_BASE = 'https://raw.communitydragon.org/latest';

class DataDragonAPI {
    constructor() {
        this.version = null;
        this.champions = null;
        this.items = null;
        this.runes = null;
        this.cache = new Map();
    }

    /**
     * Get the latest game version
     */
    async getLatestVersion() {
        if (this.version) return this.version;

        try {
            const response = await fetch(`${DDRAGON_BASE}/api/versions.json`);
            const versions = await response.json();
            this.version = versions[0];
            return this.version;
        } catch (error) {
            // Fallback to a known version
            this.version = '14.1.1';
            return this.version;
        }
    }

    /**
     * Get all champions data
     */
    async getChampions() {
        if (this.champions) return this.champions;

        const version = await this.getLatestVersion();
        const cacheKey = `champions_${version}`;

        // Check local storage cache
        const cached = localStorage.getItem(cacheKey);
        if (cached) {
            this.champions = JSON.parse(cached);
            return this.champions;
        }

        try {
            const response = await fetch(
                `${DDRAGON_BASE}/cdn/${version}/data/fr_FR/champion.json`
            );
            const data = await response.json();
            this.champions = data.data;

            // Cache in local storage
            localStorage.setItem(cacheKey, JSON.stringify(this.champions));

            return this.champions;
        } catch (error) {
            throw error;
        }
    }

    /**
     * Get detailed champion data
     */
    async getChampionDetail(championId) {
        const version = await this.getLatestVersion();
        const cacheKey = `champion_${championId}_${version}`;

        // Check cache
        if (this.cache.has(cacheKey)) {
            return this.cache.get(cacheKey);
        }

        const cached = localStorage.getItem(cacheKey);
        if (cached) {
            const data = JSON.parse(cached);
            this.cache.set(cacheKey, data);
            return data;
        }

        try {
            const response = await fetch(
                `${DDRAGON_BASE}/cdn/${version}/data/fr_FR/champion/${championId}.json`
            );
            const data = await response.json();
            const champion = data.data[championId];

            // Cache the data
            this.cache.set(cacheKey, champion);
            localStorage.setItem(cacheKey, JSON.stringify(champion));

            return champion;
        } catch (error) {
            throw error;
        }
    }

    /**
     * Get all items data
     */
    async getItems() {
        if (this.items) return this.items;

        const version = await this.getLatestVersion();

        try {
            const response = await fetch(
                `${DDRAGON_BASE}/cdn/${version}/data/fr_FR/item.json`
            );
            const data = await response.json();
            this.items = data.data;
            return this.items;
        } catch (error) {
            throw error;
        }
    }

    /**
     * Get runes data
     */
    async getRunes() {
        if (this.runes) return this.runes;

        const version = await this.getLatestVersion();

        try {
            const response = await fetch(
                `${DDRAGON_BASE}/cdn/${version}/data/fr_FR/runesReforged.json`
            );
            this.runes = await response.json();
            return this.runes;
        } catch (error) {
            throw error;
        }
    }

    /**
     * Get champion icon URL
     */
    getChampionIconUrl(championId) {
        return `${DDRAGON_BASE}/cdn/${this.version}/img/champion/${championId}.png`;
    }

    /**
     * Get champion splash art URL
     */
    getChampionSplashUrl(championId, skinNum = 0) {
        return `${DDRAGON_BASE}/cdn/img/champion/splash/${championId}_${skinNum}.jpg`;
    }

    /**
     * Get ability icon URL
     */
    getAbilityIconUrl(abilityImage) {
        return `${DDRAGON_BASE}/cdn/${this.version}/img/spell/${abilityImage}`;
    }

    /**
     * Get passive icon URL
     */
    getPassiveIconUrl(passiveImage) {
        return `${DDRAGON_BASE}/cdn/${this.version}/img/passive/${passiveImage}`;
    }

    /**
     * Get item icon URL
     */
    getItemIconUrl(itemId) {
        return `${DDRAGON_BASE}/cdn/${this.version}/img/item/${itemId}.png`;
    }

    /**
     * Get rune icon URL
     */
    getRuneIconUrl(iconPath) {
        // Rune icons need a different path
        return `https://ddragon.canisback.com/img/${iconPath}`;
    }
}

// Export singleton instance
export const dataDragon = new DataDragonAPI();
