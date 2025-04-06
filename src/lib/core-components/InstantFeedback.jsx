import React, { useEffect, useState } from 'react';
import Explanation from './Explanation';
import { randomOrSelf } from './helpers';

function InstantFeedback({
  showInstantFeedback, incorrectAnswer, correctAnswer, question, onQuestionSubmit, userAnswer, quiz, buttons
}) {
  const [messageForCorrectAnswer, setMessageForCorrectAnswer] = useState("");
  const [messageForIncorrectAnswer, setMessageForIncorrectAnswer] = useState("");

  useEffect(() => {
    const defaultMessageForCorrect = 'You are correct. Please click Next to continue.';
    const defaultMessageForIncorrect = 'Incorrect answer. Please try again.';

    setMessageForCorrectAnswer(question.messageForCorrectAnswer || randomOrSelf(quiz.defaultMessageForCorrectAnswer, defaultMessageForCorrect));
    setMessageForIncorrectAnswer(question.messageForIncorrectAnswer || randomOrSelf(quiz.defaultMessageForIncorrectAnswer, defaultMessageForIncorrect));


  }, [question, correctAnswer, incorrectAnswer, buttons]);
  
  useEffect(() => {
    if (onQuestionSubmit && (correctAnswer || incorrectAnswer)) {
      onQuestionSubmit({ question, userAnswer, isCorrect: correctAnswer });
    }
  }, [correctAnswer, incorrectAnswer]);

  return (
    <>
      {incorrectAnswer && showInstantFeedback
            && <div className="alert incorrect">{messageForIncorrectAnswer}</div>}
      {correctAnswer && showInstantFeedback
            && (
            <div className="alert correct">
              {messageForCorrectAnswer}
              <Explanation question={question} isResultPage={false} />
            </div>
            )}
    </>
  );
}

export default InstantFeedback;
