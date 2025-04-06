import React, { useState } from 'react';
import Quiz from './lib/Quiz';
import quiz_mindcraft from './quiz_mindcraft';
import quiz_gabby from './quiz_gabby';
import quiz_pokemon from './quiz_pokemon';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';


const App = () => {
  const quizList = [ 'pokemon', 'gabby', 'mindcraft' ];
  const [quizId, setQuizId] = useState(null);
  const [quizResult, setQuizResult] = useState();

  return (
    <>
      {!quizId && (
        <Autocomplete
          disablePortal
          options={quizList}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Choose your quiz" />}
          onChange={(event, newValue)=>setQuizId(newValue)}
        />
      )}
      {quizId && (
      <div style={{ margin: 'auto', width: '100%', maxWidth: '480px' }}>
        <Quiz
          quiz={quizId === 'pokemon' ? quiz_pokemon : quizId === 'gabby' ? quiz_gabby : quiz_mindcraft}
          shuffle
          shuffleAnswer
          showInstantFeedback
          continueTillCorrect
          onComplete={setQuizResult}
          onQuestionSubmit={(obj) => console.log('user question results:', obj)}
          // disableSynopsis
          timer={120}
          allowPauseTimer
          enableProgressBar
        />
      </div>)}
    </>
  );
}

export default App