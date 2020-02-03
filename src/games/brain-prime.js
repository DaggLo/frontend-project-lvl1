import { cons } from '@hexlet/pairs';

import getRandomValue from '../utils';
import runGameEngine from '../engine';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const roundsCount = 3;

// The min and max values to limit the generated nunber that we checkout.
const minValue = 1;
const maxValue = 1000;

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  const halfOfNum = num / 2;
  for (let i = 2; i <= halfOfNum; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const prepareGameData = () => {
  const question = getRandomValue(minValue, maxValue);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  const data = cons(question.toString(), correctAnswer);

  return data;
};

export default () => runGameEngine(gameDescription, roundsCount, prepareGameData);
