const segment = {
  basic: 'Basic',
  medium: 'Medium',
  advanced: 'Advanced',
};

const quiz =  {
  "quizTitle": "JJ Pokemon Quiz 0.1",
  "quizSynopsis": "Pokemon Quiz for Justin, Jacelyn, and Family",
  "nrOfQuestions" : "10",
  "defaultPoint": "10",
  "defaultMessageForCorrectAnswer": [
    "Pikachu-Pika! Correct!",
    "I choose you!",
    "That's right!",
  ],
  "defaultMessageForIncorrectAnswer": [
    "Incorrect, Pikachu!",
    "That's not the right path, Snorlax!",
    "That's a wrong move, Charmander!",
    "Not quite, Bulbasaur!",
    "You're off the mark, Gengar!",
  ],
  "questions": [
    {
      "question": "What was the first Pokémon ever created?",
      "questionPic": "https://preview.redd.it/can-someone-explain-to-me-all-the-terminology-like-triple-v0-1l7lt1n4mjib1.jpg?width=1080&crop=smart&auto=webp&s=8a45fbed115695c27f5d24e45c1fc6f165b77385",
      "questionType": "text",
      "answers": [
        "Pikachu",
        "Bulbasaur",
        "Rhydon",
        "Mew"
      ],
      "correctAnswer": "3",
      "explanation": "According to Ken Sugimori, the primary designer for the Pokémon games, Rhydon was the first Pokémon ever created.",
    },
    {
      "question": "Which Pokémon is known as the “Eon Pokémon”?",
      "questionPic": "https://i.imgur.com/PwZXBne.gif",
      "questionType": "text",
      "answers": [
        "Lugia",
        "Mewtwo",
        "Latios and Latias",
        "Rayquaza"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "What type is the Pokémon “Garchomp”?",
      "questionType": "text",
      "questionPic": "https://archives.bulbagarden.net/media/upload/a/a8/0445Garchomp.png",
      "answers": [
        "Dragon/Ground",
        "Dragon/Flying",
        "Ground/Rock",
        "Dragon/Steel"
      ],
      "correctAnswer": "1",
    },
    {
      "question": "In which generation was the Fairy-type introduced?",
      "questionType": "text",
      "answers": [
        "Generation IV",
        "Generation V",
        "Generation VI",
        "Generation VII"
      ],
      "correctAnswer": "3",
      "point": "10"
    },
    {
      "question": "Which of the following Pokémon is not a Legendary Pokémon?",
      "questionType": "text",
      "answers": [
        "Entei",
        "Garchomp",
        "Regirock",
        "Cresselia"
      ],
      "correctAnswer": "2",
    },
    {
      "question": "What is the name of the region in Pokémon Sun and Moon?",
      "questionPic": "https://www.pokemon.com/static-assets/content-assets/cms2/img/video-games/_tiles/pokemon-sun-moon/sun-moon-169-en.jpg",
      "questionType": "text",
      "answers": [
        "Sinnoh",
        "Hoenn",
        "Alola",
        "Unova"
      ],
      "correctAnswer": "3",
    },
    {
      "question": "Which Pokémon can evolve into multiple different forms depending on certain conditions?",
      "questionType": "text",
      "answers": [
        "Eevee",
        "Ditto",
        "Mew",
        "Pikachu"
      ],
      "correctAnswer": "1",
    },
    {
      "question": "What move does the most damage to a Ghost-type Pokémon?",
      "questionType": "text",
      "answers": [
        "Psychic",
        "Shadow Ball",
        "Hyper Beam",
        "Crunch"
      ],
      "correctAnswer": "4",
    },
    {
      "question": "Which Pokémon is known for having the signature move “Spacial Rend”?",
      "questionType": "text",
      "answers": [
        "Palkia",
        "Dialga",
        "Giratina",
        "Arceus"
      ],
      "correctAnswer": "1",
    },
    {
      "question": "Who is the current champion of the Galar region in Pokémon Sword and Shield?",
      "questionType": "text",
      "answers": [
        "Hop",
        "Leon",
        "Bea",
        "Raihan"
      ],
      "correctAnswer": "2",
    },
    {
      "question": "What is the maximum number of Pokémon that can be held in a party?",
      "questionType": "text",
      "answers": [
        "4",
        "5",
        "6",
        "7"
      ],
      "correctAnswer": "3",
    },
    {
      "question": "Which Pokémon is known as the “Guardian of the Sea”?",
      "questionPic": "https://external-preview.redd.it/34JDZ-cq264c8JUHrAj0hGI_TcIec3_tUha_JbYWqrU.jpg?width=1080&crop=smart&auto=webp&s=a093342b9d07c66e6577e9368031941ab4699593",
      "questionType": "text",
      "answers": [
        "Kyogre",
        "Lugia",
        "Manaphy",
        "Suicune"
      ],
      "correctAnswer": "2",
    },
    {
      "question": "What item is required to evolve Sneasel into Weavile?",
      "questionType": "text",
      "answers": [
        "Ice Stone",
        "Razor Claw",
        "Dawn Stone",
        "Shiny Stone"
      ],
      "correctAnswer": "2",
    },
    {
      "question": "Which Pokémon has the ability “Wonder Guard”?",
      "questionPic": "https://static.wikia.nocookie.net/pokemon/images/7/76/Colonel_Hansen_Shedinja_Wonder_Guard.png/revision/latest/scale-to-width-down/1000?cb=20240223095152",
      "questionType": "text",
      "answers": [
        "Sableye",
        "Shedinja",
        "Spiritomb",
        "Wobbuffet"
      ],
      "correctAnswer": "2",
    },
    {
      "question": "What is Ash Ketchum’s first Pokémon?",
      "questionType": "text",
      "questionPic": "https://quiiiz.com/wp-content/uploads/2024/08/DALL%C2%B7E-2024-08-18-10.42.44-An-adventurous-scene-of-a-vast-magical-landscape-inspired-by-Pokemon-but-featuring-entirely-original-creatures-and-designs.-Imagine-a-rolling-countr.jpg",
      "answers": [
        "Charmander",
        "Pikachu",
        "Bulbasaur",
        "Squirtle"
      ],
      "correctAnswer": "2",
    },
    {
      "question": "Which Pokémon is known as the “Time Travel Pokémon”?",
      "questionType": "text",
      "answers": [
        "Celebi",
        "Dialga",
        "Palkia",
        "Hoopa"
      ],
      "correctAnswer": "1",
    },
    {
      "question": "How many forms does the Pokémon Deoxys have?",
      "questionType": "text",
      "answers": [
        "2",
        "3",
        "4",
        "5"
      ],
      "correctAnswer": "3",
    },
    {
      "question": "Which Pokémon can change its form with the move “Relic Song”?",
      "questionType": "text",
      "answers": [
        "Meloetta",
        "Arceus",
        "Castform",
        "Ditto"
      ],
      "correctAnswer": "1",
    },
    {
      "question": "What is the base form of the Pokémon Zygarde called?",
      "questionType": "text",
      "answers": [
        "10% Forme",
        "50% Forme",
        "Complete Forme",
        "Core"
      ],
      "correctAnswer": "4",
    },
    {
      "question": "Which of the following Pokémon is not part of the Eeveelution family?",
      "questionType": "text",
      "answers": [
        "Flareon",
        "Leafeon",
        "Glaceon",
        "Lucario"
      ],
      "correctAnswer": "4",
    },
    {
      "question": "What color is a shiny Charizard?",
      "questionType": "text",
      "answers": [
        "Red",
        "Blue",
        "Black",
        "Silver"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "What Pokémon does the \"Old Amber\" fossil revive?",
      "questionType": "text",
      "answers": [
        "Kabuto",
        "Omanyte",
        "Aerodactyl",
        "Lileep"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "Which Pokémon is known as the \"Aura Pokémon\"?",
      "questionPic": "https://preview.redd.it/k8x4rfswh0081.png?width=1080&crop=smart&auto=webp&s=de8343194ac5be79956cc581db5568a5ff6f5610",
      "questionType": "text",
      "answers": [
        "Lucario",
        "Zoroark",
        "Riolu",
        "Gallade"
      ],
      "correctAnswer": "1"
    },
    {
      "question": "What is the first Pokémon in the National Pokédex?",
      "questionType": "text",
      "answers": [
        "Bulbasaur",
        "Charmander",
        "Squirtle",
        "Pikachu"
      ],
      "correctAnswer": "1"
    },
    {
      "question": "What is the name of the villainous team in Pokémon Ruby and Sapphire?",
      "questionType": "text",
      "answers": [
        "Team Rocket",
        "Team Magma and Team Aqua",
        "Team Galactic",
        "Team Plasma"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "Which Pokémon is known for having the ability \"Levitate\"?",
      "questionType": "text",
      "answers": [
        "Gengar",
        "Koffing",
        "Flygon",
        "All of the above"
      ],
      "correctAnswer": "4"
    },
    {
      "question": "What move does Mewtwo learn at level 100 in Pokémon Red and Blue?",
      "questionPic": "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/150.png",
      "questionType": "text",
      "answers": [
        "Psychic",
        "Psywave",
        "Amnesia",
        "Recover"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "What was the first Pokémon game released?",
      "questionPic": "https://cdn2.vox-cdn.com/thumbor/tjJIuFjxOt0tbAbICluWltkblro=/400x0/cdn3.vox-cdn.com/uploads/chorus_asset/file/6104825/1996_Pokemon_Red_and_Green__GB_.0.jpg",
      "questionType": "text",
      "answers": [
        "Pokémon Red and Blue",
        "Pokémon Green",
        "Pokémon Yellow",
        "Pokémon Gold and Silver"
      ],
      "correctAnswer": "2",
      "explanation": "Pokémon Green was first released in Japan in 1996, alongside Pokémon Red",
    },
    {
      "question": "Which Pokémon can breed with any other Pokémon regardless of gender, except for Legendaries and Ditto?",
      "questionType": "text",
      "answers": [
        "Manaphy",
        "Nidoran",
        "Mew",
        "None"
      ],
      "correctAnswer": "1",
      "explanation": "Manaphy (but only produces Phione)",
    },
    {
      "question": "Which move is known for causing the \"burn\" status condition?",
      "questionType": "text",
      "answers": [
        "Ember",
        "Flamethrower",
        "Will-O-Wisp",
        "Fire Blast"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "Which Pokémon has a signature move called \"Judgment\"?",
      "questionPic": "https://quiiiz.com/wp-content/uploads/2024/08/DALL%C2%B7E-2024-08-18-10.42.45-A-vibrant-fantasy-inspired-scene-featuring-elements-reminiscent-of-Pokemon-without-using-any-copyrighted-characters.-The-image-could-include-a-mysti.jpg",
      "questionType": "text",
      "answers": [
        "Arceus",
        "Dialga",
        "Palkia",
        "Giratina"
      ],
      "correctAnswer": "1"
    },
    {
      "question": "How many evolutionary forms does Eevee currently have?",
      "questionPic": "https://static1.thegamerimages.com/wordpress/wp-content/uploads/2022/06/Whos-that-Eeveelution-(1).jpg?q=50&fit=crop&w=1140&h=&dpr=1.5",
      "questionType": "text",
      "answers": [
        "7",
        "8",
        "9",
        "10"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "What Pokémon can change its type based on the item it holds?",
      "questionType": "text",
      "answers": [
        "Arceus",
        "Genesect",
        "Silvally",
        "All of the above"
      ],
      "correctAnswer": "4"
    },
    {
      "question": "What is the name of the legendary bird Pokémon trio?",
      "questionPic": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEidM_0OW5l9xgv8Q0j7IP4Z27ncWCWVkxYtjERExEQNrDwiamjURz3Cw_b6mO22nuW2M2i5j6gu0ASS3fny1D5QpZZfuJeFBO0vRX94_JsP_nfKLXTOgBQHPflp2yje46hCECBUtdz-qmw/s640/Bulbasaur%252C+Charmander%252C+Squirtle%252C+Starters.png",
      "questionType": "text",
      "answers": [
        "Zapdos, Articuno, Moltres",
        "Lugia, Ho-Oh, Celebi",
        "Raikou, Entei, Suicune",
        "Latios, Latias, Rayquaza"
      ],
      "correctAnswer": "1"
    },
    {
      "question": "Which Pokémon is known as the \"Sword of Justice\"?",
      "questionPic": "https://archives.bulbagarden.net/media/upload/9/92/0647Keldeo.png",
      "questionType": "text",
      "answers": [
        "Keldeo",
        "Cobalion",
        "Terrakion",
        "Virizion"
      ],
      "correctAnswer": "1"
    },
    {
      "question": "What move increases a Pokémon's Speed and Attack but lowers its Defense?",
      "questionType": "text",
      "answers": [
        "Dragon Dance",
        "Swords Dance",
        "Bulk Up",
        "Agility"
      ],
      "correctAnswer": "1"
    },
    {
      "question": "Which of the following Pokémon can have the ability \"Multiscale\"?",
      "questionType": "text",
      "answers": [
        "Dragonite",
        "Lugia",
        "Tyranitar",
        "Salamence"
      ],
      "correctAnswer": "1"
    },
    {
      "question": "What is the primary typing of the Pokémon Tapu Koko?",
      "questionType": "text",
      "answers": [
        "Electric",
        "Fairy",
        "Electric/Fairy",
        "Psychic/Fairy"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "Which Pokémon is known as the \"Deep Black Pokémon\"?",
      "questionPic": "https://archives.bulbagarden.net/media/upload/7/72/0644Zekrom.png",
      "questionType": "text",
      "answers": [
        "Zekrom",
        "Giratina",
        "Darkrai",
        "Yveltal"
      ],
      "correctAnswer": "1"
    },
    {
      "question": "What is the evolutionary form of Porygon-Z?",
      "questionType": "text",
      "answers": [
        "Porygon",
        "Porygon2",
        "None, Porygon-Z is the final form",
        "Porygon-X"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "Which Pokémon's cry is the longest in the games?",
      "questionType": "text",
      "answers": [
        "Jynx",
        "Kricketune",
        "Wailord",
        "Palkia"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "What is the signature move of the Pokémon Aegislash?",
      "questionType": "text",
      "answers": [
        "Sacred Sword",
        "King's Shield",
        "Iron Head",
        "Shadow Claw"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "What is the only Pokémon that can learn the move \"Dragon Ascent\"?",
      "questionPic": "https://img.pokemondb.net/artwork/large/rayquaza.jpg",
      "questionType": "text",
      "answers": [
        "Rayquaza",
        "Salamence",
        "Dragonite",
        "Garchomp"
      ],
      "correctAnswer": "1"
    },
    {
      "question": "What are the two types of the Pokémon Giratina in its Altered Forme?",
      "questionType": "text",
      "answers": [
        "Ghost/Dragon",
        "Dragon/Flying",
        "Ghost/Flying",
        "Ghost/Dark"
      ],
      "correctAnswer": "1"
    },
    {
      "question": "Which Pokémon has a Gigantamax form that turns into a skyscraper-like structure?",
      "questionType": "text",
      "answers": [
        "Duraludon",
        "Coalossal",
        "Copperajah",
        "Corviknight"
      ],
      "correctAnswer": "1"
    },
    {
      "question": "What is the main Legendary Pokémon in Pokémon X?",
      "questionPic": "https://archives.bulbagarden.net/media/upload/1/17/0716Xerneas.png",
      "questionType": "text",
      "answers": [
        "Yveltal",
        "Zygarde",
        "Xerneas",
        "Diancie"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "Which Pokémon can Mega Evolve into Mega Garchomp?",
      "questionType": "text",
      "answers": [
        "Gabite",
        "Gible",
        "Garchomp",
        "None, Garchomp cannot Mega Evolve"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "Which Pokémon is known as the \"Battle Bond\" form when it bonds with its Trainer?",
      "questionType": "text",
      "answers": [
        "Ash-Greninja",
        "Pikachu",
        "Lucario",
        "Charizard"
      ],
      "correctAnswer": "1"
    },
    {
      "question": "What is the effect of the move \"Spore\"?",
      "questionType": "text",
      "answers": [
        "Puts the target to sleep",
        "Paralyzes the target",
        "Poisons the target",
        "Reduces the target's Speed"
      ],
      "correctAnswer": "1"
    },
    {
      "question": "Which Pokémon has the highest base stat total of all Pokémon?",
      "questionType": "text",
      "answers": [
        "Arceus",
        "Mewtwo",
        "Eternatus",
        "Mega Rayquaza"
      ],
      "correctAnswer": "4",
      "explanation": "Mega Rayquaza (when counting Mega Evolutions, otherwise Eternatus’s Eternamax form)",
    }

  ]
};

export default quiz;

// {
//   "questions":[
//      {
//       "question": " ",
//       "questionType": "text",
//       "answers": [
//         " ",
//         " ",
//         " ",
//         " "
//       ],
//       "correctAnswer": "2",
//     },
//   ]
// }