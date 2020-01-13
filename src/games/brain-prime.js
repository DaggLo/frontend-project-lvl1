import { cons } from '@hexlet/pairs';

import random from '../utils';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

export default () => {
  // These values for the random funcntion.
  const beginValue = 1;
  const endValue = 1000;

  const num = random(beginValue, endValue);

  const question = `${num}`;
  const correctAnswer = `${isPrime(num) ? 'yes' : 'no'}`;

  return cons(question, correctAnswer);
};
