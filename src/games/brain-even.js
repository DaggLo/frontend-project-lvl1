import { cons } from '@hexlet/pairs';

import getRandomValue from '../utils';
import runGameEngine from '../engine';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const roundsCount = 3;

const numberMinValue = 1;
const numberMaxValue = 100;

const prepareGameData = () => {
  const question = getRandomValue(numberMinValue, numberMaxValue);
  const correctAnswer = question % 2 ? 'no' : 'yes';
  const data = cons(question, correctAnswer);

  return data;
};

export default () => runGameEngine(gameDescription, roundsCount, prepareGameData);
