import { cons } from '@hexlet/pairs';

import getRandomValue from '../utils';
import runGameEngine from '../engine';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const roundsCount = 3;

// Actual operandMinValue wouldn't be smaller than actual gcd generated value
// because of normallization inside of the generateOperand function.
const operandMinValue = 2;
const operandMaxValue = 100;

const gcdMinValue = 2;
const gcdMaxValue = 50;

const generateGCD = (min, max) => getRandomValue(min, max);

const generateOperand = (min, max, gcd) => {
  const normallizedMin = min < gcd ? gcd : min;
  const preOperand = getRandomValue(normallizedMin, max);
  const operand = (Math.floor(preOperand / gcd)) * gcd;
  return operand;
};

const generateAnotherOperand = (min, max, gcd, existentOperand) => {
  if (existentOperand === gcd) {
    return generateOperand(gcd * 2, max, gcd);
  }

  let newOperand = generateOperand(min, max, gcd);
  while (newOperand === existentOperand) {
    newOperand = generateOperand(min, max, gcd);
  }
  return newOperand;
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

const prepareGameData = () => {
  const divisor = generateGCD(gcdMinValue, gcdMaxValue);
  const operand1 = generateOperand(operandMinValue, operandMaxValue, divisor);
  const operand2 = generateAnotherOperand(operandMinValue, operandMaxValue, divisor, operand1);

  const question = `${operand1} ${operand2}`;
  const correctAnswer = findGCD(operand1, operand2).toString();
  const data = cons(question, correctAnswer);

  return data;
};

export default () => runGameEngine(gameDescription, roundsCount, prepareGameData);
