import React, { useEffect } from 'react';
import Explanation from './Explanation';

const renderMessageForCorrectAnswer = (question, quiz) => {
  const defaultMessage = 'You are correct. Please click Next to continue.';
  return question.messageForCorrectAnswer || quiz.defaultMessageForCorrectAnswer || defaultMessage;
};

const renderMessageForIncorrectAnswer = (question, quiz) => {
  const defaultMessage = 'Incorrect answer. Please try again.';
  return question.messageForIncorrectAnswer || quiz.defaultMessageForIncorrectAnswer || defaultMessage;
};

function InstantFeedback({
  showInstantFeedback, incorrectAnswer, correctAnswer, question, onQuestionSubmit, userAnswer, quiz,
}) {
  useEffect(() => {
    if (onQuestionSubmit && (correctAnswer || incorrectAnswer)) {
      onQuestionSubmit({ question, userAnswer, isCorrect: correctAnswer });
    }
  }, [correctAnswer, incorrectAnswer]);

  return (
    <>
      {incorrectAnswer && showInstantFeedback
            && <div className="alert incorrect">{renderMessageForIncorrectAnswer(question, quiz)}</div>}
      {correctAnswer && showInstantFeedback
            && (
            <div className="alert correct">
              {renderMessageForCorrectAnswer(question, quiz)}
              <Explanation question={question} isResultPage={false} />
            </div>
            )}
    </>
  );
}

export default InstantFeedback;
