import { cons } from '@hexlet/pairs';

import random from '../utils';

export default () => {
  // These values for the random funcntion.
  const beginValue = 0;
  const endValue = 100; // 0 - 99

  const operand1 = random(beginValue, endValue);
  const operand2 = random(beginValue, endValue);
  const operator = random(beginValue, endValue) / 33; // 0 - 3

  let question;
  let correctAnswer;

  // The block below provides randomization of an operator.
  // For example, if operator > 2 - the result operation will be summing.
  // And so on.
  if (operator > 2) {
    question = `${operand1} + ${operand2}`;
    correctAnswer = `${operand1 + operand2}`;
  } else if (operator > 1) {
    question = `${operand1} - ${operand2}`;
    correctAnswer = `${operand1 - operand2}`;
  } else {
    question = `${operand1} * ${operand2}`;
    correctAnswer = `${operand1 * operand2}`;
  }

  return cons(question, correctAnswer);
};
