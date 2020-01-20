import { cons } from '@hexlet/pairs';

import getRandomValue from '../utils';
import runGameEngine from '../engine';

const gameDescription = 'What is the result of the expression?';
const roundsCount = 3;

// These values are for the getRandomValue funcntion.
const beginValue = 0;
const endValue = 100; // 0 - 99
const operations = '+-*';

const runGame = () => {
  const operand1 = getRandomValue(beginValue, endValue);
  const operand2 = getRandomValue(beginValue, endValue);
  const operator = operations[Math.floor(getRandomValue(beginValue, endValue) / 34)]; // 0 - 2

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

export default () => runGameEngine(gameDescription, roundsCount, runGame);
