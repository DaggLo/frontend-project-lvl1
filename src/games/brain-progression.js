import { cons } from '@hexlet/pairs';

import getRandomValue from '../utils';
import runGameEngine from '../engine';

const gameDescription = 'What number is missing in the progression?';
const roundsCount = 3;

// The min and the max value of progression values
// and also of their diff.
const minValue = 1;
const maxValue = 10;
const progressionLength = 10;

const generateProgression = (startValue, hiddenValuePosition, diff) => {
  let progression = '';

  for (let i = 0; i < progressionLength; i += 1) {
    const currentValue = startValue + diff * i;

    if (i === hiddenValuePosition) {
      progression = `${progression}.. `;
    } else {
      progression = `${progression}${currentValue} `;
    }
  }

  return progression;
};

const prepareGameData = () => {
  const startValue = getRandomValue(minValue, maxValue);
  const diff = getRandomValue(minValue, maxValue);
  const hiddenValuePosition = getRandomValue(0, progressionLength - 1);

  const question = generateProgression(startValue, hiddenValuePosition, diff);
  const correctAnswer = (startValue + diff * hiddenValuePosition).toString();
  const data = cons(question, correctAnswer);

  return data;
};

export default () => runGameEngine(gameDescription, roundsCount, prepareGameData);
