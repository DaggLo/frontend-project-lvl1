import { cons } from '@hexlet/pairs';

import random from '../utils';

export default () => {
  // These values for the random funcntion.
  const beginValue = 1;
  const endValue = 100;

  const question = random(beginValue)(endValue); // 1 - 100
  const correctAnswer = question % 2 ? 'no' : 'yes';

  return cons(question, correctAnswer);
};
