const fs = require('fs');

async function checkItems() {
    const version = '15.1.1';
    const url = `https://ddragon.leagueoflegends.com/cdn/${version}/data/fr_FR/item.json`;

    console.log(`Fetching items from ${url}...`);
    const response = await fetch(url);
    const data = await response.json();
    const items = data.data;

    const targetItems = [
        "Compagnon de Luden",
        "Flamme-ombre",
        "Onde de choc orange", // Stormsurge?
        "Surtension", // Stormsurge
        "Malfaisance",
        "Créateur de failles",
        "Tourment de Liandry",
        "Sceptre de Rylai",
        "Bâton des âges",
        "Sablier de Zhonya",
        "Voile de la banshee",
        "Morellonomicon",
        "Fleur de crypte",
        "Bâton du vide",
        "Coiffe de Rabadon",
        "Lame d'infini",
        "Percepteur",
        "Salutations de Dominik",
        "Rappel mortel",
        "Canon ultrarapide",
        "Danseur fantôme",
        "Ouragan de Runaan",
        "Poignard de Statikk",
        "Tueur de krakens",
        "Lame du roi déchu",
        "Lame enragée de Guinsoo",
        "Terminus",
        "Au bout du rouleau",
        "Force de la trinité",
        "Couperet noir",
        "Gage de Sterak",
        "Danse de la mort",
        "Ange gardien",
        "Éclipse",
        "Ciel éventré",
        "Hydre titanesque",
        "Hydre vorace",
        "Hydre profane",
        "Cyclosabre voltaïque",
        "Orgueil", // Hubris
        "Opportunité",
        "Rancune de Serylda",
        "Épée vespérale de Draktharr",
        "Cœur gelé",
        "Armure de la ronce",
        "Cotte épineuse",
        "Visage spirituel",
        "Gantelet givré",
        "Cœuracier",
        "Égide solaire",
        "Masque abyssal",
        "Rookern kaénique",
        "Désespoir infini"
    ];

    const results = {};
    for (const id in items) {
        const item = items[id];
        const name = item.name;
        const found = targetItems.find(t => name.toLowerCase().includes(t.toLowerCase()) || t.toLowerCase().includes(name.toLowerCase()));
        if (found) {
            results[name] = id;
        }
    }

    console.log(JSON.stringify(results, null, 2));
}

checkItems();
