import React, { useState } from 'react';
import Quiz from './lib/Quiz';
import quiz from './quiz_mindcraft';

const App = () => {
  const [quizId, setQuizId] = useState('quiz');
  const [quizResult, setQuizResult] = useState();

  return (
    <div style={{ margin: 'auto', width: '100%', maxWidth: '480px' }}>
      <Quiz
        quiz={quiz}
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
    </div>
  );
}

export default App