import { cons } from '@hexlet/pairs';

import random from '../utils';
import engine from '../engine';

export default () => {
  const gameDesc = 'Answer "yes" if the number is even, otherwise answer "no".';
  const maxRounds = 3;

  const game = () => {
    // These values are for the random funcntion.
    const beginValue = 1;
    const endValue = 100;

    const question = random(beginValue, endValue); // 1 - 100
    const correctAnswer = question % 2 ? 'no' : 'yes';
    const data = cons(question, correctAnswer);

    return data;
  };

  return engine(gameDesc, maxRounds, game);
};
