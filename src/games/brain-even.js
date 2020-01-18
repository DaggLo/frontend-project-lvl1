import { cons } from '@hexlet/pairs';

import random from '../utils';
import engine from '../engine';

const gameDesc = 'Answer "yes" if the number is even, otherwise answer "no".';
const maxRounds = 3;

// These values are for the random funcntion.
const beginValue = 1;
const endValue = 100;

const game = () => {
  const question = random(beginValue, endValue); // 1 - 100
  const correctAnswer = question % 2 ? 'no' : 'yes';
  const data = cons(question, correctAnswer);

  return data;
};

export default () => engine(gameDesc, maxRounds, game);
