import { cons } from '@hexlet/pairs';

import random from '../utils';
import engine from '../engine';

const gameDesc = 'What is the result of the expression?';
const maxRounds = 3;

// These values are for the random funcntion.
const beginValue = 0;
const endValue = 100; // 0 - 99
const operations = '+-*';

const game = () => {
  const operand1 = random(beginValue, endValue);
  const operand2 = random(beginValue, endValue);
  const operator = operations[Math.floor(random(beginValue, endValue) / 34)]; // 0 - 2

  const question = `${operand1} ${operator} ${operand2}`;
  let correctAnswer;

  // This block below provides randomization of an operator.
  // For example, if operator > 2 - the result operation will be summing.
  // And so on.
  switch (operator) {
    case '+':
      correctAnswer = `${operand1 + operand2}`;
      break;

    case '-':
      correctAnswer = `${operand1 - operand2}`;
      break;

    case '*':
      correctAnswer = `${operand1 * operand2}`;
      break;

    default:
      break;
  }

  const data = cons(question, correctAnswer);
  return data;
};

export default () => engine(gameDesc, maxRounds, game);
