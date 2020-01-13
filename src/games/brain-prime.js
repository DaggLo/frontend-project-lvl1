import { cons } from '@hexlet/pairs';

import random, { isPrime } from '../utils';

export default () => {
  // These values for the random funcntion.
  const beginValue = 1;
  const endValue = 1000;

  const num = random(beginValue, endValue);

  const question = `${num}`;
  const correctAnswer = `${isPrime(num) ? 'yes' : 'no'}`;

  return cons(question, correctAnswer);
};
