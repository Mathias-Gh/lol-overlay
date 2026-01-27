/**
 * Enhanced Quiz Data - Nuanced Questions & Role Mappings
 */

export const quizQuestions = [
    {
        id: 1,
        text: "Dans la Faille, quelle est ta priorité absolue ?",
        options: [
            { text: "Être le mur infranchissable pour mon équipe", values: { tank: 4, fighter: 1 } },
            { text: "Annihiler les cibles fragiles en un instant", values: { assassin: 4, mage: 1 } },
            { text: "Infliger des dégâts constants et dévastateurs", values: { marksman: 4, fighter: 1 } },
            { text: "Contrôler le rythme du combat avec ma magie", values: { mage: 4, support: 1 } },
            { text: "L'utilité et la survie de mes alliés", values: { support: 4 } }
        ]
    },
    {
        id: 2,
        text: "Quelle est ta réaction face à une situation de crise ?",
        options: [
            { text: "Je fonce dans le tas pour créer l'espace", values: { tank: 3, fighter: 3 } },
            { text: "Je cherche l'angle parfait pour contourner l'ennemi", values: { assassin: 4, marksman: 1 } },
            { text: "Je reste en retrait et j'analyse avant de frapper", values: { marksman: 3, mage: 3 } },
            { text: "J'utilise mes sorts pour sauver mes compagnons", values: { support: 4, tank: 1 } }
        ]
    },
    {
        id: 3,
        text: "Quel type de pouvoir te fascine le plus ?",
        options: [
            { text: "La force brute et la résistance physique", values: { tank: 2, fighter: 4 } },
            { text: "La magie dévastatrice à longue distance", values: { mage: 4 } },
            { text: "La précision chirurgicale et la célérité", values: { assassin: 3, marksman: 3 } },
            { text: "Les bénédictions et la protection d'autrui", values: { support: 4 } }
        ]
    },
    {
        id: 4,
        text: "Quelle est ta philosophie de victoire ?",
        options: [
            { text: "Écraser l'adversaire sous une pression constante", values: { fighter: 4, tank: 2 } },
            { text: "Gagner par la ruse et l'effet de surprise", values: { assassin: 4, mage: 1 } },
            { text: "Dominer par une exécution technique parfaite", values: { marksman: 4, assassin: 1 } },
            { text: "Être le cerveau tactique qui rend son équipe imbattable", values: { support: 4, mage: 2 } }
        ]
    },
    {
        id: 5,
        text: "Comment préfères-tu que tes ennemis te perçoivent ?",
        options: [
            { text: "Comme un colosse impossible à faire tomber", values: { tank: 4 } },
            { text: "Comme une menace invisible et terrifiante", values: { assassin: 4 } },
            { text: "Comme un tireur d'élite intouchable", values: { marksman: 4 } },
            { text: "Comme un prodige de la magie élémentaire", values: { mage: 4 } }
        ]
    }
];

export const roleTitles = {
    tank: "Le Colosse de la Faille (Tank)",
    fighter: "Le Gladiateur Implacable (Combattant)",
    mage: "L'Archimage Suprême (Mage)",
    assassin: "Le Prédateur de l'Ombre (Assassin)",
    marksman: "La Gâchette d'Or (ADC)",
    support: "L'Ange Gardien (Support)"
};

export const championSuggestions = {
    tank: ["Malphite", "Leona", "Ornn", "Nautilus", "Braum", "ChoGath", "Amumu"],
    fighter: ["Darius", "Garen", "Sett", "Jax", "Vi", "Aatrox", "Renekton"],
    mage: ["Lux", "Ahri", "Hwei", "Veigar", "Vex", "Syndra", "Orianna"],
    assassin: ["Zed", "Akali", "Katarina", "KhaZix", "Evelynn", "Talon", "Pyke"],
    marksman: ["Jinx", "Caitlyn", "Ezreal", "KaiSa", "Ashe", "Vayne", "Lucian"],
    support: ["Thresh", "Lulu", "Nami", "Seraphine", "Karma", "Janna", "Soraka"]
};
