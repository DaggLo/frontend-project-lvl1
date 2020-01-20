import { cons } from '@hexlet/pairs';

import getRandomValue from '../utils';
import runGameEngine from '../engine';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const roundsCount = 3;

// These values are for the getRandomValue funcntion.
const beginValue = 1;
const endValue = 100;

const runGame = () => {
  const question = getRandomValue(beginValue, endValue); // 1 - 100
  const correctAnswer = question % 2 ? 'no' : 'yes';
  const data = cons(question, correctAnswer);

  return data;
};

export default () => runGameEngine(gameDescription, roundsCount, runGame);
