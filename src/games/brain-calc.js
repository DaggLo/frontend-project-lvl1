import { cons } from '@hexlet/pairs';

import getRandomValue from '../utils';
import runGameEngine from '../engine';

const gameDescription = 'What is the result of the expression?';
const roundsCount = 3;

// These values are for the getRandomValue funcntion.
const operandBeginValue = 0;
const operandEndValue = 100;

const operations = '+-*';
const operatorStartIndex = 0;
const operatorEndIndex = operations.length - 1;

const runGame = () => {
  const operand1 = getRandomValue(operandBeginValue, operandEndValue);
  const operand2 = getRandomValue(operandBeginValue, operandEndValue);
  const operator = operations[getRandomValue(operatorStartIndex, operatorEndIndex)];

  const question = `${operand1} ${operator} ${operand2}`;
  let correctAnswer;

  switch (operator) {
    case '+':
      correctAnswer = (operand1 + operand2).toString();
      break;

    case '-':
      correctAnswer = (operand1 - operand2).toString();
      break;

    case '*':
      correctAnswer = (operand1 * operand2).toString();
      break;

    default:
      break;
  }

  const data = cons(question, correctAnswer);
  return data;
};

export default () => runGameEngine(gameDescription, roundsCount, runGame);
