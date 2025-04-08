const segment = {
  basic: 'Basic',
  medium: 'Medium',
  advanced: 'Advanced',
};

const quiz =  {
  "quizTitle": "JJ Country Flag Quiz 1",
  "quizSynopsis": "Country Flag Quiz for Justin, Jacelyn, and Family",
  "nrOfQuestions" : "10",
  "defaultPoint": "10",
  "defaultMessageForCorrectAnswer": [
    "You are a genius!",
    "Absolutely right!",
    "Spot-on!",
    "Exactly!",
    "Perfect!",
    "Splendid!",
    "You nailed it!"
    ],
  "defaultMessageForIncorrectAnswer": [
    "Incorrect, Pikachu!",
    "That's not the right path, Snorlax!",
    "Nope, not even close, Magikarp!",
    "Wrong answer, but nice try, Jigglypuff!",
    "That’s a hard 'no' from Professor Oak!",
    "Eevee would not approve of this answer!",
    "That’s more off than a Slowpoke’s reaction time!",
    "Wrong! Team Rocket could’ve done better!",
    "Not even a Poké Flute could fix that answer!",
    "That’s about as accurate as a Metapod’s Tackle!"
  ],
  "questions": [
    {
      "question": "Which country does this flag belong to?",
      "questionPic": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png",
      "questionType": "text",
      "answers": [
        "United Kingdom",
        "United States",
        "Australia",
        "Canada"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "Which country is represented by this flag?",
      "questionPic": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/1200px-Flag_of_the_People%27s_Republic_of_China.svg.png",
      "questionType": "text",
      "answers": [
        "Japan",
        "Vietnam",
        "China",
        "South Korea"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "Identify the country from its flag:",
      "questionPic": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png",
      "questionType": "text",
      "answers": [
        "Argentina",
        "Portugal",
        "Brazil",
        "Mexico"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "Which country's flag is shown here?",
      "questionPic": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
      "questionType": "text",
      "answers": [
        "Belgium",
        "Netherlands",
        "Germany",
        "France"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "To which country does this flag belong?",
      "questionPic": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png",
      "questionType": "text",
      "answers": [
        "South Korea",
        "Singapore",
        "Japan",
        "Thailand"
      ],
      "correctAnswer": "3"
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