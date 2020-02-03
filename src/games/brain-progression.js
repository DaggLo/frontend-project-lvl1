import { cons } from '@hexlet/pairs';

import getRandomValue from '../utils';
import runGameEngine from '../engine';

const gameDescription = 'What number is missing in the progression?';
const roundsCount = 3;

// The min and the max value of progression elements
// and also of their diff.
const minValue = 1;
const maxValue = 10;
const progressionLength = 10;

const generateProgression = (startElement, hiddenElementPosition, diff) => {
  let progression = '';

  for (let i = 0; i < progressionLength; i += 1) {
    const currentElement = startElement + diff * i;

    if (i === hiddenElementPosition) {
      progression = `${progression}.. `;
    } else {
      progression = `${progression}${currentElement} `;
    }
  }

  return progression;
};

const prepareGameData = () => {
  const startElement = getRandomValue(minValue, maxValue);
  const hiddenElementPosition = getRandomValue(minValue, maxValue);
  const diff = getRandomValue(minValue, maxValue);

  const question = generateProgression(startElement, hiddenElementPosition, diff);
  const correctAnswer = (startElement + diff * hiddenElementPosition).toString();
  const data = cons(question, correctAnswer);

  return data;
};

export default () => runGameEngine(gameDescription, roundsCount, prepareGameData);
