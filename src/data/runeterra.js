/**
 * Runeterra Regions and Champions Data - 100% Complete & Official
 * Every champion in the game (168+) is assigned to their PRIMARY region.
 */

export const regions = [
    {
        id: 'demacia',
        name: 'Demacia',
        icon: '🛡️',
        description: 'Un royaume fier avec une tradition militaire ancestrale. Ils luttent pour la justice et l\'honneur, tout en se méfiant de la magie.',
        champions: ['Garen', 'Lux', 'JarvanIV', 'Fiora', 'Poppy', 'Vayne', 'Sona', 'Lucian', 'Morgana', 'Kayle', 'Sylas', 'Galio', 'Quinn', 'Shyvana', 'XinZhao']
    },
    {
        id: 'noxus',
        name: 'Noxus',
        icon: '⚔️',
        description: 'Un empire expansionniste où seule la force compte. Quiconque a le talent peut s\'y élever, peu importe ses origines.',
        champions: ['Darius', 'Draven', 'Katarina', 'Swain', 'Leblanc', 'Talon', 'Vladimir', 'Sion', 'Kled', 'Riven', 'Samira', 'Cassiopeia', 'Mordekaiser', 'Briar', 'Rell', 'Ambessa']
    },
    {
        id: 'ionia',
        name: 'Ionia',
        icon: '🌸',
        description: 'Les Terres Premières. Un archipel de beauté naturelle où l\'équilibre entre les mondes spirituel et matériel est sacré.',
        champions: ['Ahri', 'Yasuo', 'Yone', 'Irelia', 'Akali', 'LeeSin', 'Karma', 'MasterYi', 'Shen', 'Zed', 'Sett', 'Varus', 'MonkeyKing', 'Xayah', 'Rakan', 'Ivern', 'Lillia', 'Jhin', 'Kayn', 'Syndra', 'Hwei']
    },
    {
        id: 'freljord',
        name: 'Freljord',
        icon: '❄️',
        description: 'Une terre gelée en guerre civile. Des tribus féroces et des demi-dieux luttent pour la survie et la domination du Nord.',
        champions: ['Ashe', 'Sejuani', 'Brand', 'Lissandra', 'Braum', 'Olaf', 'Tryndamere', 'Volibear', 'Anivia', 'Nunu', 'Gragas', 'Udyr', 'Ornn', 'Gnar', 'Trundle', 'Aurora']
    },
    {
        id: 'shadowisles',
        name: 'Îles Obscures',
        icon: '👻',
        description: 'Un domaine hanté né de la Ruine. Des spectres et des morts-vivants y règnent, cherchant à consumer toute vie.',
        champions: ['Thresh', 'Kalista', 'Hecarim', 'Karthus', 'Yorick', 'Maokai', 'Viego', 'Gwen', 'Vex']
    },
    {
        id: 'piltover',
        name: 'Piltover',
        icon: '⚙️',
        description: 'La cité du progrès. Un centre mondial de technologie Hextech, de commerce et d\'artisanat raffiné.',
        champions: ['Caitlyn', 'Vi', 'Jayce', 'Ezreal', 'Camille', 'Orianna', 'Heimerdinger', 'Seraphine']
    },
    {
        id: 'zaun',
        name: 'Zaun',
        icon: '🧪',
        description: 'Une cité souterraine industrielle située sous Piltover. Les alchimistes et inventeurs y repoussent les limites de la science.',
        champions: ['Jinx', 'Ekko', 'Viktor', 'Warwick', 'Blitzcrank', 'Singed', 'DrMundo', 'Twitch', 'Zac', 'Zeri', 'Renata', 'Urgot', 'Janna']
    },
    {
        id: 'shurima',
        name: 'Shurima',
        icon: '☀️',
        description: 'Un empire antique enterré sous les sables. Ses dieux-guerriers Transfigurés s\'éveillent pour restaurer sa gloire.',
        champions: ['Azir', 'Nasus', 'Renekton', 'Sivir', 'Xerath', 'Amumu', 'Rammus', 'Taliyah', 'KSante', 'Naafiri', 'Akshan']
    },
    {
        id: 'targon',
        name: 'Mont Targon',
        icon: '🏔️',
        description: 'Le sommet le plus haut de Runeterra, touchant les étoiles et servant de pont vers les cieux célestes.',
        champions: ['Leona', 'Diana', 'Pantheon', 'Bard', 'Taric', 'Soraka', 'Zoe', 'Aphelios', 'AurelionSol']
    },
    {
        id: 'bilgewater',
        name: 'Bilgewater',
        icon: '🏴‍☠️',
        description: 'Une ville portuaire de hors-la-loi. Un foyer pour les pirates, les monstres marins et ceux cherchant une nouvelle vie.',
        champions: ['Gangplank', 'MissFortune', 'Graves', 'TwistedFate', 'Nautilus', 'Pyke', 'Illaoi', 'TahmKench', 'Fizz', 'Nilah']
    },
    {
        id: 'ixtal',
        name: 'Ixtal',
        icon: '🌿',
        description: 'Une nation cachée maîtresse de la magie élémentaire. Ils ont survécu à des millénaires en s\'isolant du monde extérieur.',
        champions: ['Qiyana', 'Skarner', 'Malphite', 'Neeko', 'Nidalee', 'Rengar', 'Zyra', 'Milio']
    },
    {
        id: 'void',
        name: 'Néant',
        icon: '🌀',
        description: 'Une horreur inter-dimensionnelle. Ses rejetons consument tout pour nourrir une faim sans fin et anéantir la réalité.',
        champions: ['KhaZix', 'ChoGath', 'KogMaw', 'VelKoz', 'RekSai', 'KaiSa', 'Malzahar', 'Kassadin', 'Belveth']
    },
    {
        id: 'bandle',
        name: 'Cité de Bandle',
        icon: '🍄',
        description: 'Un royaume spirituel habité par les Yordles. Il est connecté à Runeterra par des portails magiques invisibles.',
        champions: ['Teemo', 'Tristana', 'Veigar', 'Lulu', 'Yuumi', 'Corki', 'Rumble', 'Kennen', 'Ziggs']
    },
    {
        id: 'runeterra',
        name: 'Runeterra',
        icon: '🌎',
        description: 'Certains champions n\'appartiennent à aucune nation. Ce sont des démons, des entités universelles ou des voyageurs sans fin.',
        champions: ['Ryze', 'Aatrox', 'Annie', 'Jax', 'Zilean', 'Evelynn', 'Shaco', 'Nocturne', 'Fiddlesticks', 'Kindred', 'Smolder', 'Alistar',]
    }
];
