const segment = {
  basic: 'Basic',
  medium: 'Medium',
  advanced: 'Advanced',
};

const quiz =  {
  "quizTitle": "JJ Country Flag 50 Quiz v1.1",
  "quizSynopsis": "Country Flag Quiz (50 countries) for Justin, Jacelyn, and Family",
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
      "question": "Which country's flag features a red circle on a white background?",
      "questionPic": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png",
      "questionType": "text",
      "answers": [
        "China",
        "Japan",
        "South Korea",
        "Vietnam"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "This European country's flag has horizontal stripes of red, white, and red:",
      "questionPic": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/1200px-Flag_of_Austria.svg.png",
      "questionType": "text",
      "answers": [
        "Switzerland",
        "Poland",
        "Austria",
        "Latvia"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "The flag with a maple leaf belongs to which nation?",
      "questionPic": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1200px-Flag_of_Canada_%28Pantone%29.svg.png",
      "questionType": "text",
      "answers": [
        "Alaska",
        "Greenland",
        "Canada",
        "Norway"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "Identify the country represented by this green, white, and orange vertical tricolor:",
      "questionPic": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Ireland.svg/1200px-Flag_of_Ireland.svg.png",
      "questionType": "text",
      "answers": [
        "Italy",
        "Ivory Coast",
        "Ireland",
        "India"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "Which African country's flag features black, yellow, and green horizontal stripes with a red triangle on the left?",
      "questionPic": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Jamaica.svg/1200px-Flag_of_Jamaica.svg.png",
      "questionType": "text",
      "answers": [
        "Jamaica",
        "Kenya",
        "South Africa",
        "Ghana"
      ],
      "correctAnswer": "1"
    },
    {
      "question": "This flag with a yellow cross on a blue background represents:",
      "questionPic": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/1200px-Flag_of_Sweden.svg.png",
      "questionType": "text",
      "answers": [
        "Finland",
        "Norway",
        "Sweden",
        "Denmark"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "Which Middle Eastern country's flag has a green pentagram on a red background?",
      "questionPic": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/1200px-Flag_of_Morocco.svg.png",
      "questionType": "text",
      "answers": [
        "Egypt",
        "Morocco",
        "Turkey",
        "Iran"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "The flag featuring a white crescent and star on a red background belongs to:",
      "questionPic": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/1200px-Flag_of_Turkey.svg.png",
      "questionType": "text",
      "answers": [
        "Pakistan",
        "Turkey",
        "Tunisia",
        "Algeria"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "Identify the country represented by this flag with five interwoven rings:",
      "questionPic": "https://cdn.britannica.com/01/23901-050-33507FA4/flag-Olympic-Games.jpg",
      "questionType": "text",
      "answers": [
        "United Nations",
        "European Union",
        "Olympic Movement",
        "NATO"
      ],
      "correctAnswer": "3",
      "explanation": "This is actually flag of the Olympic Games. Not really a country flag. The five rings on the flag represent the inhabited continents of the world.",
    },
    {
      "question": "Which South American country's flag features a sun with a face?",
      "questionPic": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1200px-Flag_of_Argentina.svg.png",
      "questionType": "text",
      "answers": [
        "Brazil",
        "Argentina",
        "Uruguay",
        "Chile"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "This flag with a dragon on it represents which country?",
      "questionPic": "https://flagcdn.com/h60/bt.png",
      "questionType": "text",
      "answers": [
        "Wales",
        "Bhutan",
        "China",
        "Malaysia"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "Which country's flag has a blue triangle next to yellow and white stripes?",
      "questionPic": "https://flagcdn.com/h60/bs.png",
      "questionType": "text",
      "answers": [
        "Barbados",
        "Jamaica",
        "Bahamas",
        "Cuba"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "The flag with a white cross dividing four blue squares represents:",
      "questionPic": "https://flagcdn.com/h60/gr.png",
      "questionType": "text",
      "answers": [
        "Switzerland",
        "Greece",
        "Iceland",
        "Norway"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "Which Asian country's flag is entirely red with five yellow stars?",
      "questionPic": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png",
      "questionType": "text",
      "answers": [
        "China",
        "Vietnam",
        "North Korea",
        "Singapore"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "This flag with a large red circle containing a star represents:",
      "questionPic": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Flag_of_North_Korea.svg/1200px-Flag_of_North_Korea.svg.png",
      "questionType": "text",
      "answers": [
        "Japan",
        "Taiwan",
        "North Korea",
        "Laos"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "Which European country's flag has a white cross on a red background?",
      "questionPic": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Flag_of_Switzerland_%28Pantone%29.svg/1200px-Flag_of_Switzerland_%28Pantone%29.svg.png",
      "questionType": "text",
      "answers": [
        "Denmark",
        "Switzerland",
        "Norway",
        "Finland"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "The flag with a yellow star on a red background represents:",
      "questionPic": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png",
      "questionType": "text",
      "answers": [
        "China",
        "Vietnam",
        "Turkey",
        "Morocco"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "Which country's flag features a green cedar tree?",
      "questionPic": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Flag_of_Lebanon.svg/1200px-Flag_of_Lebanon.svg.png",
      "questionType": "text",
      "answers": [
        "Libya",
        "Lebanon",
        "Algeria",
        "Cyprus"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "This flag with blue and white stripes and a sun in the corner represents:",
      "questionPic": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/1200px-Flag_of_Uruguay.svg.png",
      "questionType": "text",
      "answers": [
        "Argentina",
        "Paraguay",
        "Uruguay",
        "Nicaragua"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "Which country's flag has a golden harp on a blue background?",
      "questionPic": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Ireland.svg/1200px-Flag_of_Ireland.svg.png",
      "questionType": "text",
      "answers": [
        "Ireland",
        "Iceland",
        "Finland",
        "Norway"
      ],
      "correctAnswer": "1"
    },
    {
      "question": "The flag with a yellow sun and three stars represents:",
      "questionPic": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/1200px-Flag_of_the_Philippines.svg.png",
      "questionType": "text",
      "answers": [
        "Indonesia",
        "Malaysia",
        "Philippines",
        "Micronesia"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "Which African country's flag has horizontal stripes of green, yellow, and red with a star in the center?",
      "questionPic": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_Ethiopia.svg/1200px-Flag_of_Ethiopia.svg.png",
      "questionType": "text",
      "answers": [
        "Ghana",
        "Cameroon",
        "Ethiopia",
        "Senegal"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "This flag with a white cross offset to the left represents:",
      "questionPic": "https://flagcdn.com/h60/dk.png",
      "questionType": "text",
      "answers": [
        "Sweden",
        "Norway",
        "Finland",
        "Denmark"
      ],
      "correctAnswer": "4"
    },
    {
      "question": "Which country's flag has a white stripe between two red stripes with a blue triangle on the left?",
      "questionPic": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Flag_of_Cuba.svg/1200px-Flag_of_Cuba.svg.png",
      "questionType": "text",
      "answers": [
        "Puerto Rico",
        "Dominican Republic",
        "Cuba",
        "Panama"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "The flag with a red background and yellow hammer and sickle represents:",
      "questionPic": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_Soviet_Union.svg/1200px-Flag_of_the_Soviet_Union.svg.png",
      "questionType": "text",
      "answers": [
        "China",
        "Former Soviet Union",
        "Vietnam",
        "North Korea"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "Which country's flag features a white snowflake-like emblem on a blue background?",
      "questionPic": "https://flagcdn.com/h60/il.png",
      "questionType": "text",
      "answers": [
        "Israel",
        "Finland",
        "Iceland",
        "Kazakhstan"
      ],
      "correctAnswer": "1"
    },
    {
      "question": "This flag with a yellow cross and blue background represents:",
      "questionPic": "https://flagcdn.com/h60/se.png",
      "questionType": "text",
      "answers": [
        "Finland",
        "Sweden",
        "Norway",
        "Iceland"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "Which country's flag has a green field with a red vertical stripe and a white circle in the center?",
      "questionPic": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/383px-Flag_of_Bangladesh.svg.png",
      "questionType": "text",
      "answers": [
        "Pakistan",
        "Bangladesh",
        "Maldives",
        "Sri Lanka"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "The flag with a black, red, and gold horizontal tricolor represents:",
      "questionPic": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
      "questionType": "text",
      "answers": [
        "Belgium",
        "Germany",
        "Netherlands",
        "Russia"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "Which country's flag features a white star and crescent on a red background?",
      "questionPic": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/1200px-Flag_of_Turkey.svg.png",
      "questionType": "text",
      "answers": [
        "Pakistan",
        "Algeria",
        "Turkey",
        "Tunisia"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "This flag with a blue triangle and horizontal stripes of white and red represents:",
      "questionPic": "https://flagcdn.com/h60/cz.png",
      "questionType": "text",
      "answers": [
        "Slovakia",
        "Czech Republic",
        "Slovenia",
        "Croatia"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "Which country's flag has a yellow star on a red background with a yellow horizontal stripe?",
      "questionPic": "https://flagcdn.com/h60/vn.png",
      "questionType": "text",
      "answers": [
        "China",
        "Vietnam",
        "North Korea",
        "Laos"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "The flag with a red circle containing a yellow star represents:",
      "questionPic": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Flag_of_North_Korea.svg/1200px-Flag_of_North_Korea.svg.png",
      "questionType": "text",
      "answers": [
        "Japan",
        "China",
        "North Korea",
        "Taiwan"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "Which country's flag features a white cross on a blue background?",
      "questionPic": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/383px-Flag_of_Scotland.svg.png",
      "questionType": "text",
      "answers": [
        "Finland",
        "Iceland",
        "Scotland",
        "Norway"
      ],
      "correctAnswer": "3",
      "explanation": "The Saltire, a white St. Andrew's Cross. Though Scotland is part of UK now, this flag is still flown on Scottish government buildings every day."
    },
    {
      "question": "This flag with a green field and white crescent and star represents:",
      "questionPic": "https://flagcdn.com/h60/pk.png",
      "questionType": "text",
      "answers": [
        "Algeria",
        "Pakistan",
        "Turkmenistan",
        "Azerbaijan"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "Which country's flag has horizontal stripes of blue, white, and green with a red triangle on the left?",
      "questionPic": "https://flagcdn.com/h60/sl.png",
      "questionType": "text",
      "answers": [
        "Sierra Leone",
        "Liberia",
        "Ghana",
        "Cameroon"
      ],
      "correctAnswer": "1"
    },
    {
      "question": "The flag with a white cross on a red background that extends to the edges represents:",
      "questionPic": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Flag_of_Switzerland_%28Pantone%29.svg/1200px-Flag_of_Switzerland_%28Pantone%29.svg.png",
      "questionType": "text",
      "answers": [
        "Denmark",
        "Switzerland",
        "Norway",
        "Finland"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "Which country's flag features a yellow sun with 32 rays on a blue background?",
      "questionPic": "https://flagcdn.com/h60/kz.png",
      "questionType": "text",
      "answers": [
        "Uzbekistan",
        "Kazakhstan",
        "Kyrgyzstan",
        "Mongolia"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "This flag with vertical stripes of green, white, and red represents:",
      "questionPic": "https://flagcdn.com/h60/mx.png",
      "questionType": "text",
      "answers": [
        "Italy",
        "Mexico",
        "Hungary",
        "Bulgaria"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "Which country's flag has a red field with a yellow five-pointed star?",
      "questionPic": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png",
      "questionType": "text",
      "answers": [
        "China",
        "Vietnam",
        "North Korea",
        "Laos"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "The flag with a white saltire on a blue background represents:",
      "questionPic": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/1200px-Flag_of_Scotland.svg.png",
      "questionType": "text",
      "answers": [
        "Jamaica",
        "Scotland",
        "Norway",
        "Finland"
      ],
      "correctAnswer": "2",
      "explanation": "The Saltire, a white St. Andrew's Cross. Though Scotland is part of UK now, this flag is still flown on Scottish government buildings every day.",
    },
    {
      "question": "Which country's flag features a white cross on a red background that doesn't extend to the edges?",
      "questionPic": "https://flagcdn.com/h60/dk.png",
      "questionType": "text",
      "answers": [
        "Switzerland",
        "Denmark",
        "Norway",
        "Sweden"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "This flag with a red circle containing a white sun represents:",
      "questionPic": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Flag_of_the_Republic_of_China.svg/1200px-Flag_of_the_Republic_of_China.svg.png",
      "questionType": "text",
      "answers": [
        "Japan",
        "South Korea",
        "Taiwan",
        "Philippines"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "Which country's flag has horizontal stripes of black, red, and gold?",
      "questionPic": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
      "questionType": "text",
      "answers": [
        "Belgium",
        "Germany",
        "Netherlands",
        "Russia"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "The flag with a white cross on a red background that's offset to the left represents:",
      "questionPic": "https://flagcdn.com/h60/dk.png",
      "questionType": "text",
      "answers": [
        "Finland",
        "Iceland",
        "Denmark",
        "Norway"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "Which country's flag features a green cedar tree in the center?",
      "questionPic": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Flag_of_Lebanon.svg/1200px-Flag_of_Lebanon.svg.png",
      "questionType": "text",
      "answers": [
        "Libya",
        "Lebanon",
        "Algeria",
        "Cyprus"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "This flag with a blue field and yellow cross represents:",
      "questionPic": "https://flagcdn.com/h60/se.png",
      "questionType": "text",
      "answers": [
        "Finland",
        "Sweden",
        "Norway",
        "Iceland"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "Which country's flag has a white star and crescent on a green background?",
      "questionPic": "https://flagcdn.com/h60/pk.png",
      "questionType": "text",
      "answers": [
        "Algeria",
        "Pakistan",
        "Turkmenistan",
        "Azerbaijan"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "The flag with horizontal stripes of blue, yellow, and red represents:",
      "questionPic": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/1200px-Flag_of_Romania.svg.png",
      "questionType": "text",
      "answers": [
        "Chad",
        "Andorra",
        "Romania",
        "Moldova"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "Which country's flag features a yellow lion holding a sword?",
      "questionPic": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Sri_Lanka.svg/1200px-Flag_of_Sri_Lanka.svg.png",
      "questionType": "text",
      "answers": [
        "Bhutan",
        "Sri Lanka",
        "Myanmar",
        "Cambodia"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "This flag with a red field and yellow hammer and sickle represents:",
      "questionPic": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_Soviet_Union.svg/1200px-Flag_of_the_Soviet_Union.svg.png",
      "questionType": "text",
      "answers": [
        "China",
        "Former Soviet Union",
        "Vietnam",
        "North Korea"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "Which country's flag has a blue triangle next to yellow and white stripes?",
      "questionPic": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Bahamas.svg/1200px-Flag_of_Bahamas.svg.png",
      "questionType": "text",
      "answers": [
        "Barbados",
        "Jamaica",
        "Bahamas",
        "Cuba"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "The flag with a white cross dividing four blue squares represents:",
      "questionPic": "https://flagcdn.com/h60/gr.png",
      "questionType": "text",
      "answers": [
        "Switzerland",
        "Greece",
        "Iceland",
        "Norway"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "Which country's flag features a yellow sun with a face on a blue and white background?",
      "questionPic": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/1200px-Flag_of_Uruguay.svg.png",
      "questionType": "text",
      "answers": [
        "Argentina",
        "Uruguay",
        "Paraguay",
        "Nicaragua"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "This flag with a blue field and yellow stars arranged in a circle represents:",
      "questionPic": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/1200px-Flag_of_Europe.svg.png",
      "questionType": "text",
      "answers": [
        "United Nations",
        "European Union",
        "NATO",
        "African Union"
      ],
      "correctAnswer": "2"
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