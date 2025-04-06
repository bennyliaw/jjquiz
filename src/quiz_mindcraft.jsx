const segment = {
  basic: 'Basic',
  medium: 'Medium',
  advanced: 'Advanced',
};

const quiz =  {
  "quizTitle": "Mindcraft",
  "quizSynopsis": "Mindcraft Trivia Game Questions v1",
  "nrOfQuestions": "10",
  "defaultPoint": "10",
  "defaultMessageForCorrectAnswer": [
    "Well done, Steve!",
    "Good job!",
    "Keep calm and ssssurvive!",
  ],
  "defaultMessageForIncorrectAnswer": [
    "Something went wrong", 
    "Glitched",
    "Ouch",
  ],
  "questions": [
    {
      "question": "What is the main objective in Minecraft?",
      "questionPic": "https://upload.wikimedia.org/wikipedia/en/b/b6/Minecraft_2024_cover_art.png",
      "questionType": "text",
      "answers": [
        "Build the tallest tower",
        "Defeat the Ender Dragon",
        "Collect all mobs",
        "Mine every block type"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "Which of these is NOT a dimension in Minecraft?",
      "questionType": "text",
      "answers": [
        "The Nether",
        "The End",
        "The Aether",
        "Overworld"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "What material is required to make a Nether Portal?",
      "questionType": "text",
      "answers": [
        "Iron blocks",
        "Gold blocks",
        "Obsidian",
        "Diamond blocks"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "Which mob drops blaze rods?",
      "questionPic": "https://assets.badlion.net/blog/minecraft-blaze/minecraft-blaze-rod.webp",
      "questionType": "text",
      "answers": [
        "Ghast",
        "Blaze",
        "Magma Cube",
        "Enderman"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "How many eyes of ender are needed to activate the End Portal?",
      "questionType": "text",
      "answers": [
        "6",
        "8",
        "10",
        "12"
      ],
      "correctAnswer": "4"
    },
    {
      "question": "What is the strongest tool material in vanilla Minecraft?",
      "questionPic": "https://static.toiimg.com/thumb/msid-118635860,width-1280,height-720,resizemode-4/118635860.jpg",
      "questionType": "text",
      "answers": [
        "Iron",
        "Diamond",
        "Netherite",
        "Gold"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "Which of these blocks cannot be obtained in Survival mode without commands?",
      "questionPic": "https://upload.wikimedia.org/wikipedia/en/b/b6/Minecraft_2024_cover_art.png",
      "questionType": "text",
      "answers": [
        "Bedrock",
        "Obsidian",
        "End Stone",
        "Netherrack"
      ],
      "correctAnswer": "1"
    },
    {
      "question": "What do you need to breed cows?",
      "questionPic": "https://preview.redd.it/2-new-cow-variants-have-been-revealed-as-well-as-firefly-v0-0jtau8n6oyfe1.jpg?width=657&format=pjpg&auto=webp&s=ced54dc63348d7fb7d832e613e58588fe12857fe",
      "questionType": "text",
      "answers": [
        "Seeds",
        "Carrots",
        "Wheat",
        "Potatoes"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "Which potion makes you immune to fall damage?",
      "questionPic": "https://qph.cf2.quoracdn.net/main-qimg-f07ed10121e50ef5c69b921d0f89366d-lq",
      "questionType": "text",
      "answers": [
        "Fire Resistance",
        "Slow Falling",
        "Leaping",
        "Swiftness"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "What is the maximum enchantment level for most enchantments?",
      "questionType": "text",
      "answers": [
        "III",
        "IV",
        "V",
        "VI"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "Which food restores the most hunger points?",
      "questionPic": "https://i.redd.it/f9t5l63r2hfb1.png",
      "questionType": "text",
      "answers": [
        "Bread",
        "Steak",
        "Golden Carrot",
        "Cooked Porkchop"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "What is the rarest ore in Minecraft?",
      "questionType": "text",
      "answers": [
        "Diamond",
        "Emerald",
        "Ancient Debris",
        "Gold"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "Which of these is NOT a hostile mob?",
      "questionType": "text",
      "answers": [
        "Creeper",
        "Enderman",
        "Zombie",
        "Pig"
      ],
      "correctAnswer": "4"
    },
    {
      "question": "What is the maximum height limit in Minecraft?",
      "questionType": "text",
      "answers": [
        "128",
        "256",
        "320",
        "512"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "Which block is NOT affected by gravity?",
      "questionType": "text",
      "answers": [
        "Sand",
        "Gravel",
        "Anvil",
        "Dirt"
      ],
      "correctAnswer": "4"
    },
    {
      "question": "What is required to craft a shield?",
      "questionType": "text",
      "answers": [
        "Iron ingot and wood planks",
        "Gold ingot and wood planks",
        "Diamond and wood planks",
        "Leather and wood planks"
      ],
      "correctAnswer": "1"
    },
    {
      "question": "Which biome do pandas spawn in?",
      "questionType": "text",
      "answers": [
        "Desert",
        "Jungle",
        "Bamboo Jungle",
        "Taiga"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "What is the maximum number of players that can play on a single vanilla Minecraft world simultaneously?",
      "questionType": "text",
      "answers": [
        "10",
        "20",
        "50",
        "Unlimited (limited by server hardware)"
      ],
      "correctAnswer": "4"
    },
    {
      "question": "Which of these is NOT a type of village in Minecraft?",
      "questionType": "text",
      "answers": [
        "Desert",
        "Plains",
        "Taiga",
        "Ocean"
      ],
      "correctAnswer": "4"
    },
    {
      "question": "What is the name of Minecraft's main theme?",
      "questionType": "text",
      "answers": [
        "Sweden",
        "Norway",
        "Finland",
        "Denmark"
      ],
      "correctAnswer": "1"
    },
    {
      "question": "Which block is the best fuel source?",
      "questionType": "text",
      "answers": [
        "Coal Block",
        "Lava Bucket",
        "Blaze Rod",
        "Dried Kelp Block"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "What does a composter do?",
      "questionType": "text",
      "answers": [
        "Turns food into bonemeal",
        "Creates compost for farming",
        "Both of the above",
        "None of the above"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "Which mob can pick up blocks?",
      "questionType": "text",
      "answers": [
        "Zombie",
        "Skeleton",
        "Enderman",
        "Creeper"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "What is the maximum number of hearts a player can have without effects?",
      "questionType": "text",
      "answers": [
        "10",
        "15",
        "20",
        "30"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "Which of these is NOT a type of wood in Minecraft?",
      "questionType": "text",
      "answers": [
        "Oak",
        "Spruce",
        "Pine",
        "Dark Oak"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "What is the name of the underwater structures added in the Update Aquatic?",
      "questionType": "text",
      "answers": [
        "Coral Castles",
        "Ocean Monuments",
        "Sea Palaces",
        "Water Temples"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "Which of these is NOT a boss in Minecraft?",
      "questionType": "text",
      "answers": [
        "Ender Dragon",
        "Wither",
        "Elder Guardian",
        "Phantom"
      ],
      "correctAnswer": "4"
    },
    {
      "question": "What is the maximum level of the Fortune enchantment?",
      "questionType": "text",
      "answers": [
        "II",
        "III",
        "IV",
        "V"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "Which of these blocks is NOT transparent?",
      "questionType": "text",
      "answers": [
        "Glass",
        "Leaves",
        "Slime Block",
        "Ice"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "What is the name of the Minecraft virtual reality version?",
      "questionType": "text",
      "answers": [
        "Minecraft VR",
        "Minecraft: Virtual Edition",
        "Minecraft: Reality",
        "Minecraft: Immersive"
      ],
      "correctAnswer": "1"
    },
    {
      "question": "Which of these is NOT a type of villager profession?",
      "questionType": "text",
      "answers": [
        "Fletcher",
        "Cartographer",
        "Blacksmith",
        "Miner"
      ],
      "correctAnswer": "4"
    },
    {
      "question": "What is the name of the hostile underwater mob that shoots lasers?",
      "questionType": "text",
      "answers": [
        "Drowned",
        "Guardian",
        "Elder Guardian",
        "Squid"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "Which of these is NOT a status effect?",
      "questionType": "text",
      "answers": [
        "Haste",
        "Mining Fatigue",
        "Luck",
        "Hunger"
      ],
      "correctAnswer": "4"
    },
    {
      "question": "What is the name of the redstone component that detects block updates?",
      "questionType": "text",
      "answers": [
        "Observer",
        "Detector Rail",
        "Comparator",
        "Repeater"
      ],
      "correctAnswer": "1"
    },
    {
      "question": "Which of these mobs can be sheared?",
      "questionType": "text",
      "answers": [
        "Sheep",
        "Pig",
        "Cow",
        "Chicken"
      ],
      "correctAnswer": "1"
    },
    {
      "question": "What is the name of the hostile mob that explodes when near players?",
      "questionType": "text",
      "answers": [
        "Zombie",
        "Skeleton",
        "Creeper",
        "Enderman"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "Which of these is NOT a type of minecart?",
      "questionType": "text",
      "answers": [
        "Furnace Minecart",
        "Chest Minecart",
        "Hopper Minecart",
        "Shulker Minecart"
      ],
      "correctAnswer": "4"
    },
    {
      "question": "What is the name of the structure that generates in the End containing loot?",
      "questionType": "text",
      "answers": [
        "End Castle",
        "End City",
        "End Tower",
        "End Dungeon"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "Which of these is NOT a type of fish in Minecraft?",
      "questionType": "text",
      "answers": [
        "Cod",
        "Salmon",
        "Tuna",
        "Pufferfish"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "What is the name of the block that can push other blocks when powered?",
      "questionType": "text",
      "answers": [
        "Sticky Piston",
        "Observer",
        "Dispenser",
        "Dropper"
      ],
      "correctAnswer": "1"
    },
    {
      "question": "Which of these is NOT a type of armor?",
      "questionType": "text",
      "answers": [
        "Leather",
        "Chainmail",
        "Copper",
        "Netherite"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "What is the name of the block that can store XP?",
      "questionType": "text",
      "answers": [
        "Experience Bottle",
        "Enchanting Table",
        "Beacon",
        "None of the above"
      ],
      "correctAnswer": "4"
    },
    {
      "question": "Which of these is NOT a type of tree that can be grown from saplings?",
      "questionType": "text",
      "answers": [
        "Oak",
        "Jungle",
        "Redwood",
        "Acacia"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "What is the name of the block that can duplicate itself when pushed by a piston?",
      "questionType": "text",
      "answers": [
        "Slime Block",
        "Honey Block",
        "Redstone Block",
        "None of the above"
      ],
      "correctAnswer": "4"
    },
    {
      "question": "Which of these is NOT a type of stone brick?",
      "questionType": "text",
      "answers": [
        "Mossy Stone Brick",
        "Cracked Stone Brick",
        "Chiseled Stone Brick",
        "Polished Stone Brick"
      ],
      "correctAnswer": "4"
    },
    {
      "question": "What is the name of the block that can teleport players when stepped on?",
      "questionType": "text",
      "answers": [
        "Nether Portal",
        "End Gateway",
        "Command Block",
        "None of the above"
      ],
      "correctAnswer": "4"
    },
    {
      "question": "Which of these is NOT a type of pressure plate?",
      "questionType": "text",
      "answers": [
        "Wooden",
        "Stone",
        "Gold",
        "Iron"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "What is the name of the block that can detect light levels?",
      "questionType": "text",
      "answers": [
        "Daylight Sensor",
        "Observer",
        "Redstone Lamp",
        "None of the above"
      ],
      "correctAnswer": "1"
    },
    {
      "question": "Which of these is NOT a type of coral in Minecraft?",
      "questionType": "text",
      "answers": [
        "Tube Coral",
        "Brain Coral",
        "Star Coral",
        "Fire Coral"
      ],
      "correctAnswer": "4"
    },
    {
      "question": "What is the name of the structure that generates in ice biomes?",
      "questionType": "text",
      "answers": [
        "Ice Palace",
        "Igloo",
        "Frost Tower",
        "Glacier"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "Which of these is NOT a type of flower in Minecraft?",
      "questionType": "text",
      "answers": [
        "Poppy",
        "Dandelion",
        "Bluebell",
        "Allium"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "What is the name of the block that can store items and be moved by pistons?",
      "questionType": "text",
      "answers": [
        "Chest",
        "Shulker Box",
        "Barrel",
        "Dispenser"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "Which of these is NOT a type of boat in Minecraft?",
      "questionType": "text",
      "answers": [
        "Oak Boat",
        "Birch Boat",
        "Jungle Boat",
        "Pine Boat"
      ],
      "correctAnswer": "4"
    },
    {
      "question": "What is the name of the block that can be used to create automatic farms?",
      "questionType": "text",
      "answers": [
        "Dispenser",
        "Dropper",
        "Observer",
        "All of the above"
      ],
      "correctAnswer": "4"
    }
  ]
};

export default quiz;

// {
//   {
//     "question": " ",
//     "questionType": "text",
//     "answers": [
//       " ",
//       " ",
//       " ",
//       " "
//     ],
//     "point": "10",
//     "correctAnswer": "2",
//   },
// }