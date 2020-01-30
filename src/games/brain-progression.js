import { cons, car, cdr } from '@hexlet/pairs';

import getRandomValue from '../utils';
import runGameEngine from '../engine';

const gameDescription = 'What number is missing in the progression?';
const roundsCount = 3;

// The min and max value of a progression element.
const minValue = 1;
const maxValue = 10;
const progressionLength = 10;

const generateProgressionData = (arg) => {
  const startElement = getRandomValue(minValue, maxValue);
  const hiddenElementPosition = getRandomValue(minValue, maxValue);
  const elementsDiff = getRandomValue(minValue, maxValue);

  let progression = hiddenElementPosition === 1 ? '..' : startElement.toString();

  let hiddenElement = startElement;
  let currentElement = startElement + elementsDiff;
  let currentElementPosition = 2;

  while (currentElementPosition <= arg) {
    if (currentElementPosition === hiddenElementPosition) {
      hiddenElement = currentElement;
      progression += ' ..';

    } else {
      progression += ` ${currentElement}`;
    }

    currentElement += elementsDiff;
    currentElementPosition += 1;
  }

  return cons(progression, hiddenElement);
};

const prepareGameData = () => {
  const progressionData = generateProgressionData(progressionLength);

  const question = car(progressionData);
  const correctAnswer = cdr(progressionData).toString();
  const data = cons(question, correctAnswer);

  return data;
};

export default () => runGameEngine(gameDescription, roundsCount, prepareGameData);
