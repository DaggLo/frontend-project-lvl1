import { cons } from '@hexlet/pairs';

import getRandomValue from '../utils';
import runGameEngine from '../engine';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const roundsCount = 3;

// These values are for the getRandomValue funcntion.
const beginValue = 1;
const endValue = 100;

const divisorMaker = () => {
  let result = 0;
  while (result < 2) {
    result = Math.floor(getRandomValue(beginValue, endValue) / 2); // 2 - 50
  }
  return result;
};

const operandMaker = (div) => (
  Math.floor(getRandomValue(beginValue, endValue) / (div + 1)) + 1); // 1 - 34

const gcd = (x, y) => {
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
  const divisor = divisorMaker();
  const operand1 = operandMaker(divisor) * divisor; // 2 - 100
  const operand2 = ((arr) => {
    let result = arr;
    while (result === arr) {
      result = operandMaker(divisor) * divisor;
    }
    return result;
  })(operand1);

  const question = `${operand1} ${operand2}`;
  const correctAnswer = `${gcd(operand1, operand2)}`;
  const data = cons(question, correctAnswer);

  return data;
};

export default () => runGameEngine(gameDescription, roundsCount, runGame);
