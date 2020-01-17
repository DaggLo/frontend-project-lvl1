import { cons } from '@hexlet/pairs';

import random from '../utils';
import engine from '../engine';

const gameDesc = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const maxRounds = 3;

// These values are for the random funcntion.
const beginValue = 1;
const endValue = 1000;

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

const game = () => {
  const num = random(beginValue, endValue);

  const question = `${num}`;
  const correctAnswer = `${isPrime(num) ? 'yes' : 'no'}`;
  const data = cons(question, correctAnswer);

  return data;
};

export default () => engine(gameDesc, maxRounds, game);
