import { cons, car, cdr } from '@hexlet/pairs';

import getRandomValue from '../utils';
import runGameEngine from '../engine';

const gameDescription = 'What number is missing in the progression?';
const roundsCount = 3;

// These values are for the getRandomValue funcntion.
const beginValue = 1;
const endValue = 10;

const progressionLength = 10;

const makeProgression = () => {
  const startElem = getRandomValue(beginValue, endValue);
  const hiddenElemPos = getRandomValue(beginValue, endValue);
  const diff = getRandomValue(beginValue, endValue);

  let resultStr = hiddenElemPos === 1 ? '..' : startElem.toString();
  let resultElem = startElem;
  let acc = startElem;
  let i = 2;

  while (i <= progressionLength) {
    acc += diff;
    resultStr += i === hiddenElemPos ? ' ..' : ` ${acc}`;
    if (i === hiddenElemPos) {
      resultElem = acc;
    }
    i += 1;
  }

  return cons(resultStr, resultElem);
};

const runGame = () => {
  const newProgression = makeProgression(beginValue, endValue);

  const question = car(newProgression);
  const correctAnswer = cdr(newProgression).toString();
  const data = cons(question, correctAnswer);

  return data;
};

export default () => runGameEngine(gameDescription, roundsCount, runGame);
