import { cons } from '@hexlet/pairs';

import getRandomValue from '../utils';
import runGameEngine from '../engine';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const roundsCount = 3;

// These values are for the getRandomValue funcntion.
const beginValue = 1;
const endValue = 100;

const makeDivisor = () => {
  let result = 0;
  while (result < 2) {
    result = Math.floor(getRandomValue(beginValue, endValue) / 2); // 2 - 50
  }
  return result;
};

const makeOperand = (arg) => (
  (Math.floor(getRandomValue(beginValue, endValue) / (arg + 1)) + 1) * arg); // 2 - 100

const makeAnotherOperand = (arg1, arg2) => {
  let result = makeOperand(arg1);
  while (result === arg2) {
    result = makeOperand(arg1);
  }
  return result;
};

const findGCD = (x, y) => {
  let a = x > y ? x : y;
  let b = x < y ? x : y;

  let result = b;

  while (a % b !== 0) {
    result = a % b;
    a = b;
    b = result;
  }
  return result;
};

const runGame = () => {
  const divisor = makeDivisor();
  const operand1 = makeOperand(divisor);
  const operand2 = makeAnotherOperand(divisor, operand1);

  const question = `${operand1} ${operand2}`;
  const correctAnswer = findGCD(operand1, operand2).toString();
  const data = cons(question, correctAnswer);

  return data;
};

export default () => runGameEngine(gameDescription, roundsCount, runGame);
