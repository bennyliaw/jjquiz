import React, { useEffect, useState } from 'react';
import Quiz from './lib/Quiz';
import quiz_mindcraft from './quiz_mindcraft';
import quiz_gabby from './quiz_gabby';
import quiz_pokemon from './quiz_pokemon';
import quiz_countryflag5 from './quiz_countryflag5';
import quiz_countryflag50 from './quiz_countryflag50';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from "@mui/material/Stack";
import Typography from '@mui/material/Typography';


import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import FormLabel from '@mui/material/FormLabel';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';


const generateMathQuizMult = () => {
  let quiz =  {
    "quizTitle": "Math Quiz Multiplication v1",
    "quizSynopsis": "Multiplication for numbers till 12",
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
    "questions": []
  }

  for (let i = 0; i < 50; i++) {
    // Generate random numbers between 1 and 12
    const num1 = Math.floor(Math.random() * 11) + 2;
    const num2 = Math.floor(Math.random() * 11) + 2;
    
    // Create the question and answer
    const question = `${num1} × ${num2} = ?`;
    const answer = num1 * num2;
    
    // Add to the questions array
    quiz.questions.push(
      {
        "question": question,
        "questionType": "text",
        "answers": [`${answer}`, ...
          new Set([
            `${answer + Math.floor(Math.random() * 11)}`,
            `${num1 + num2}`,
            `${answer - Math.floor(Math.random() * num1)}`,
            `${answer - (Math.random() < .5 ? num1 : num2)}`,
            `${answer + (Math.random() < .5 ? num1 : num2)}`,
            `${answer + Math.floor(Math.random() * num1 * num2)}`,
          ]).difference(new Set([`${answer}`]))
        ].slice(0,4),
      "correctAnswer": "1",
      }
    );
  }  
  return quiz;
}

const generateMathQuizDiv = () => {
  let quiz =  {
    "quizTitle": "Math Quiz Division v1",
    "quizSynopsis": "Division for numbers till 12",
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
    "questions": []
  }

  for (let i = 0; i < 50; i++) {
    // Generate random numbers between 1 and 12
    const num1 = Math.floor(Math.random() * 11) + 2;
    const num2 = Math.floor(Math.random() * 11) + 2;
    
    // Create the question and answer
    const question = `${num1 * num2} / ${num1} = ?`;
    const answer = num2;
    
    // Add to the questions array
    quiz.questions.push(
      {
        "question": question,
        "questionType": "text",
        "answers": [`${answer}`, ...
          new Set([
            `${answer + Math.floor(Math.random() * 11)}`,
            `${num1 * num2 - num1 }`,
            `${answer - Math.floor(Math.random() * (num2-1)) - 1}`,
            `${answer + (Math.random() < .5 ? num1 : -Math.floor((num1 + num2)/ 4))}`,
            `${answer + Math.floor(Math.random() * (num2-1)) + 1}`,
            `${answer + Math.floor(Math.random() * 11)}`,
          ]).difference(new Set([`${answer}`]))
        ].slice(0,4),
        "correctAnswer": "1",
      }
    );
  }  
  return quiz;
}

const generateMathQuizMultDiv = () => {
  let quiz =  {
    "quizTitle": "Math Quiz Mult and Div v1",
    "quizSynopsis": "Multiplication amd Division party",
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
    "questions": []
  }

  for (let i = 0; i < 25; i++) {
    // Generate random numbers between 1 and 12
    const num1 = Math.floor(Math.random() * 11) + 2;
    const num2 = Math.floor(Math.random() * 11) + 2;
    
    // Create the question and answer
    const question = `${num1} × ${num2} = ?`;
    const answer = num1 * num2;
    
    // Add to the questions array
    quiz.questions.push(
      {
        "question": question,
        "questionType": "text",
        "answers": [`${answer}`, ...
          new Set([
            `${answer + Math.floor(Math.random() * 11)}`,
            `${answer - Math.floor(Math.random() * num1)}`,
            `${answer - (Math.random() < .5 ? num1 : num2)}`,
            `${answer + (Math.random() < .5 ? num1 : num2)}`,
            `${answer + Math.floor(Math.random() * num1 * num2)}`,
          ]).difference(new Set([`${answer}`]))
        ].slice(0,4),
      "correctAnswer": "1",
      }
    );
  }  

  for (let i = 0; i < 25; i++) {
    // Generate random numbers between 1 and 12
    const num1 = Math.floor(Math.random() * 11) + 2;
    const num2 = Math.floor(Math.random() * 11) + 2;
    
    // Create the question and answer
    const question = `${num1 * num2} / ${num1} = ?`;
    const answer = num2;
    
    // Add to the questions array
    quiz.questions.push(
      {
        "question": question,
        "questionType": "text",
        "answers": [`${answer}`, ...
          new Set([
            `${answer + Math.floor(Math.random() * 11)}`,
            `${answer - Math.floor(Math.random() * (num2-1)) - 1}`,
            `${answer + (Math.random() < .5 ? num1 : -Math.floor((num1 + num2)/ 4))}`,
            `${answer + Math.floor(Math.random() * (num2-1)) + 1}`,
            `${answer + Math.floor(Math.random() * 11)}`,
          ]).difference(new Set([`${answer}`]))
        ].slice(0,4),
        "correctAnswer": "1",
      }
    );
  }  
  return quiz;
}

const App = () => {
  const quizList = [ 'pokemon', 'gabby', 'mindcraft', 'countryflag5', 'countryflag50', 'multiplication', 'division', 'multiplication_and_division' ];
  const [quizId, setQuizId] = useState(null);
  const [quizResult, setQuizResult] = useState();
  const [quiz, setQuiz] = useState(null);
  const [shuffle, setShuffle] = useState(true);
  const [shuffleAnswer, setShuffleAnswer] = useState(true);
  const [showInstantFeedback, setShowInstantFeedback] = useState(true);
  const [continueTillCorrect, setContinueTillCorrect] = useState(true);
  const [allowPauseTimer, setAllowPauseTimer] = useState(true);
  const [practiceMode, setPracticeMode] = useState(false);
  const [timer, setTimer] = useState(60);
  const [numberOfQuestions, setNumberOfQuestions] = useState(10);
  
  useEffect(() => {
    if (quizId === 'pokemon')
      setQuiz(quiz_pokemon)
    else if (quizId === 'gabby')
      setQuiz(quiz_gabby)
    else if (quizId === 'mindcraft')
      setQuiz(quiz_mindcraft)
    else if (quizId === 'countryflag5')
      setQuiz(quiz_countryflag5)
    else if (quizId === 'countryflag50')
      setQuiz(quiz_countryflag50)
    else if (quizId === 'multiplication')
      setQuiz(generateMathQuizMult())
    else if (quizId === 'division')
      setQuiz(generateMathQuizDiv())
    else if (quizId === 'multiplication_and_division')
      setQuiz(generateMathQuizMultDiv())
    else
      setQuiz(null)
  }, [quizId]);

  return (
    <>
      {!quizId && (
         <Container maxWidth="sm">
          <Box sx={{ p: '5px', bgcolor: '#cfe8fc', height: '95vh' }}>
          <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ width: 1, height: "95vh" }}
    >
          <Paper elevation={3} sx={{ width: '100%', height: '100%' }}> 
            <Box p={2}>
            <Stack spacing={1}>
            <Typography variant="h3" gutterBottom>
            JJ Quiz v1.0
            </Typography>
            <FormGroup>
              <Autocomplete
                disablePortal
                options={quizList}
                sx={{ mb: 3, width: 300 }}
                renderInput={(params) => <TextField {...params} label="Quiz selection" variant="standard"/>}
                onChange={(event, newValue)=>setQuizId(newValue)}
              />
              <TextField label="Number of questions" 
                sx={{ width: 300 }}
                type="number" 
                defaultValue={numberOfQuestions} 
                variant="standard"
                onChange={(ev) => setNumberOfQuestions(parseInt(ev.target.value) || 10)}/>
              <FormLabel sx={{mt:4, mb:1}} component="legend">Quiz options:</FormLabel>
              <FormControlLabel control={<Switch checked={shuffle} onChange={(ev) => setShuffle(ev.target.checked)} />} label="Shuffle Questions" />
              <FormControlLabel control={<Switch checked={shuffleAnswer} onChange={(ev) => setShuffleAnswer(ev.target.checked)}/>} label="Shuffle Answers" />
              {/* <FormControlLabel control={<Switch checked={showInstantFeedback} onChange={(ev) => setShowInstantFeedback(ev.target.checked)}/>} label="Show Instant Feedback" /> */}
              <FormControlLabel control={<Switch checked={continueTillCorrect} onChange={(ev) => setContinueTillCorrect(ev.target.checked)}/>} label="Continue Till Correct?" />
              {/* <FormControlLabel control={<Switch checked={allowPauseTimer} onChange={(ev) => setAllowPauseTimer(ev.target.checked)}/>} label="Allow Pause Timer" /> */}
            </FormGroup>
            <FormGroup>
              <FormLabel sx={{mt:4, mb:1}} component="legend">Special feature (requested by Jacelyn):</FormLabel>
              <FormControlLabel control={<Switch checked={practiceMode} onChange={(ev) => setPracticeMode(ev.target.checked)}/>} label="Practice Mode"/>
              <TextField label="Maximum quiz time" 
                type="number" 
                sx={{ mt: 2, width: 300 }}
                defaultValue={timer} 
                variant="standard"
                helperText="in seconds ( or enter 0 for no timer :D requested by Jacelyn)"
                onChange={(ev) => setTimer(parseInt(ev.target.value) || 0)}/>
            </FormGroup>
            </Stack>
            </Box>
          </Paper>
        </Stack>
        </Box>
        </Container>
      )}
      {quizId && quiz && (
      <div style={{ margin: 'auto', width: '100%', maxWidth: '480px' }}>
        <Quiz
          quiz={quiz}
          shuffle={shuffle}
          shuffleAnswer={shuffleAnswer}
          showInstantFeedback={showInstantFeedback}
          continueTillCorrect={continueTillCorrect}
          onComplete={setQuizResult}
          onQuestionSubmit={(obj) => console.log('user question results:', obj)}
          // disableSynopsis
          timer={timer > 0? timer: undefined}
          allowPauseTimer={allowPauseTimer}
          // revealAnswerOnSubmit={true}
          practiceMode={practiceMode}
          enableProgressBar
          numberOfQuestions={numberOfQuestions}
          setQuizId={setQuizId}
        />
      </div>)}
    </>
  );
}

export default App