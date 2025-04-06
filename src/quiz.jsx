const segment = {
  basic: 'Basic',
  medium: 'Medium',
  advanced: 'Advanced',
};

const quiz =  {
  "quizTitle": "JJ Pokemon Quiz 0.1",
  "quizSynopsis": "Pokemon Quiz for Justin, Jacelyn, and Family",
  "nrOfQuestions" : "10",
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
      "messageForCorrectAnswer": "That's right. It is Rhydon.",
      "messageForIncorrectAnswer": "No, not that. Wrong answer.",
      "explanation": "According to Ken Sugimori, the primary designer for the Pokémon games, Rhydon was the first Pokémon ever created.",
      "point": "10",
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
      "correctAnswer": "3",
      "messageForCorrectAnswer": "You got it!",
      "messageForIncorrectAnswer": "Wrong answer!",
      "point": "10"
    },
    {
      "question": "What type is the Pokémon “Garchomp”?",
      "answers": [
        "Dragon/Ground",
        "Dragon/Flying",
        "Ground/Rock",
        "Dragon/Steel"
      ],
      "correctAnswer": "1",
      "messageForCorrectAnswer": "That's right!",
      "messageForIncorrectAnswer": "Wrong.",
      "point": "10",
      "questionType": "text"
    },
    {
      "question": "In which generation was the Fairy-type introduced?",
      "answers": [
        "Generation IV",
        "Generation V",
        "Generation VI",
        "Generation VII"
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Correct!",
      "messageForIncorrectAnswer": "Sorry, wrong answer!",
      "questionType": "text",
      "point": "10"
    },
    {
      "question": "Which of the following Pokémon is not a Legendary Pokémon?",
      "answers": [
        "Entei",
        "Garchomp",
        "Regirock",
        "Cresselia"
      ],
      "questionType": "text",
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Yes, correct. Garchomp is not a legendary Pokemon!",
      "messageForIncorrectAnswer": "Not quite right",
      "point": "10"
    },
    {
      "question": "What is the name of the region in Pokémon Sun and Moon?",
      "questionType": "text",
      "answers": [
        "Sinnoh",
        "Hoenn",
        "Alola",
        "Unova"
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "That is correct!",
      "messageForIncorrectAnswer": "Wrong!",
      "point": "10"
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
      "messageForCorrectAnswer": "Right!",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "point": "10"
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
      "messageForCorrectAnswer": "Yes!",
      "messageForIncorrectAnswer": "Nope. Please try again",
      "point": "10"
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
      "point": "10",
      "correctAnswer": "1",
      "messageForCorrectAnswer": "You are right!",
      "messageForIncorrectAnswer": "Wrong answer"
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
      "point": "10",
      "correctAnswer": "2",
      "messageForCorrectAnswer": "You got it!",
      "messageForIncorrectAnswer": "No, not that!"
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
      "point": "10",
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Absolute right!",
      "messageForIncorrectAnswer": "Sorry, wrong answer"
    },
    {
      "question": "Which Pokémon is known as the “Guardian of the Sea”?",
      "questionType": "text",
      "answers": [
        "Kyogre",
        "Lugia",
        "Manaphy",
        "Suicune"
      ],
      "point": "10",
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Absolute right!",
      "messageForIncorrectAnswer": "Sorry, wrong answer"
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
      "point": "10",
      "correctAnswer": "2",
      "messageForCorrectAnswer": "You are right again!",
      "messageForIncorrectAnswer": "Incorrect!"
    },
    {
      "question": "Which Pokémon has the ability “Wonder Guard”?",
      "questionType": "text",
      "answers": [
        "Sableye",
        "Shedinja",
        "Spiritomb",
        "Wobbuffet"
      ],
      "point": "10",
      "correctAnswer": "2",
      "messageForCorrectAnswer": "You are so clever.",
      "messageForIncorrectAnswer": "Incorrect!"
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
      "point": "10",
      "correctAnswer": "2",
      "messageForCorrectAnswer": "You are so clever.",
      "messageForIncorrectAnswer": "Incorrect!"
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
      "point": "10",
      "correctAnswer": "1",
      "messageForCorrectAnswer": "You are so clever.",
      "messageForIncorrectAnswer": "No, that is not correct"
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
      "point": "10",
      "correctAnswer": "3",
      "messageForCorrectAnswer": "You are so clever.",
      "messageForIncorrectAnswer": "Incorrect!"
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
      "point": "10",
      "correctAnswer": "1",
      "messageForCorrectAnswer": "Yes, yes, yes.",
      "messageForIncorrectAnswer": "Incorrect!"
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
      "point": "10",
      "correctAnswer": "4",
      "messageForCorrectAnswer": "You are so right.",
      "messageForIncorrectAnswer": "Incorrect!"
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
      "point": "10",
      "correctAnswer": "4",
      "messageForCorrectAnswer": "You are so clever.",
      "messageForIncorrectAnswer": "Incorrect!"
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