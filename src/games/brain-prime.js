import { cons } from '@hexlet/pairs';

import random from '../utils';
import engine from '../engine';

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

export default () => {
  const gameDesc = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const maxRounds = 3;

  const game = () => {
    // These values are for the random funcntion.
    const beginValue = 1;
    const endValue = 1000;

    const num = random(beginValue, endValue);

    const question = `${num}`;
    const correctAnswer = `${isPrime(num) ? 'yes' : 'no'}`;
    const data = cons(question, correctAnswer);

    return data;
  };

  return engine(gameDesc, maxRounds, game);
};
