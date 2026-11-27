export const modes = [
  {
    id: "royale",
    name: "BATTLE ROYALE",
    tagline: "The final call is yours.",
    image: "world",
    players: "60 PLAYERS",
    format: "SOLO · DUO · TRIO",
    description:
      "A vast world. A closing zone. Drop into Eden, find your gear, and make every move count. When the dust settles, only one squad will be standing.",
    features: [
      "An open map with dramatic terrain",
      "Gear to discover across the battlefield",
      "Tactical matches for solo, duo, or trio play",
    ],
  },
  {
    id: "multi",
    name: "MULTIPLAYER",
    tagline: "Make every move count together.",
    image: "gameplay-2",
    players: "6 VS 6",
    format: "TEAMS · OBJECTIVES",
    description:
      "Every second matters. Coordinate with your squad, control the objectives, and turn the match around in arenas built for nonstop action.",
    features: [
      "Team Deathmatch, Domination, and Capture",
      "Compact arenas with vertical routes",
      "Complementary roles for every play style",
    ],
  },
  {
    id: "ranked",
    name: "RANKED ARENA",
    tagline: "Your skill. Your ranking.",
    image: "gameplay-4",
    players: "4 VS 4",
    format: "COMPETITIVE · PRECISION",
    description:
      "Face teams at your level in matches where accuracy and communication make all the difference. Rise from Recruit to Legend, one win at a time.",
    features: [
      "Competitive four-on-four matches",
      "Balanced starting equipment",
      "Seven ranks to climb with your team",
    ],
  },
];

export const gallery = [
  {
    src: "/images/gameplay-4.jpg",
    alt: "Close-range combat inside a futuristic facility",
    caption: "In the thick of it · Original concept",
  },
  {
    src: "/images/gameplay-2.jpg",
    alt: "Two armored soldiers advance through an arena",
    caption: "Stronger together · Original concept",
  },
  {
    src: "/images/gameplay-6.jpg",
    alt: "A squad deploys from an aircraft",
    caption: "Ready to deploy · Original concept",
  },
  {
    src: "/images/gameplay-3.jpg",
    alt: "Red and blue armored soldiers face off",
    caption: "No time to stand still · Original concept",
  },
  {
    src: "/images/gameplay-5.jpg",
    alt: "A team battle inside a red-lit base",
    caption: "One final push · Original concept",
  },
  {
    src: "/images/gameplay-1.jpg",
    alt: "Advanced technology among the mountains",
    caption: "A world to claim · Original concept",
  },
];

export const rewards = [
  {
    level: "01",
    name: "Pathfinder",
    type: "ARMOR · RARE",
    image: "gameplay-2",
    position: "32% center",
    free: true,
  },
  {
    level: "25",
    name: "Shockwave",
    type: "ARSENAL · EPIC",
    image: "gameplay-4",
    position: "62% center",
    free: false,
  },
  {
    level: "50",
    name: "Red Specter",
    type: "ARMOR · EPIC",
    image: "gameplay-3",
    position: "28% center",
    free: false,
  },
  {
    level: "100",
    name: "Sovereign",
    type: "ARMOR · LEGENDARY",
    image: "gameplay-0",
    position: "58% center",
    free: false,
  },
];

export const articles = [
  {
    category: "NEW SEASON",
    title: "Fracture: it starts here.",
    image: "gameplay-3",
    date: "FIELD NOTE 01",
    body: "A rift cuts across Eden. Communications fail, alliances shift, and unfamiliar gear appears in the field. Fracture imagines a season where every decision leaves a mark.",
    detail:
      "This concept features a 100-level Battle Pass, four reward categories, and challenges that take you across every mode. Rewards are cosmetic: your accuracy remains your greatest advantage.",
  },
  {
    category: "IN THE FIELD",
    title: "Eden. Your next battleground.",
    image: "world",
    date: "FIELD NOTE 02",
    body: "From silent forests to abandoned structures, Eden is a world of contrasts. High ground offers a decisive view, while the valleys hold the resources you need to survive.",
    detail:
      "Plan your route with your team. Start on the outskirts to gear up, or head for the central facilities to jump straight into the action. Always keep an exit in sight.",
  },
  {
    category: "SQUAD GUIDE",
    title: "Victory is built together.",
    image: "gameplay-5",
    date: "FIELD NOTE 03",
    body: "A good shot wins a duel. Good communication wins a match. Share roles, call out your moves, and keep your eyes on the objective.",
    detail:
      "A scout leads the way, support holds the line, and a specialist controls the entrances. Switch roles as the match changes: the best teams adapt.",
  },
];
