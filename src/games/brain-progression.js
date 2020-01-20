import { cons, car, cdr } from '@hexlet/pairs';

import getRandomValue from '../utils';
import runGameEngine from '../engine';

const gameDescription = 'What number is missing in the progression?';
const roundsCount = 3;

// These values are for the getRandomValue funcntion.
const beginValue = 1;
const endValue = 10;

const progression = () => {
  const startElem = getRandomValue(beginValue, endValue);
  const hiddenElemPos = getRandomValue(beginValue, endValue);
  const progressionLength = 10;
  const diff = getRandomValue(beginValue, endValue);

  let resultStr = hiddenElemPos === 1 ? '..' : `${startElem}`;
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
  const newProgr = progression(beginValue, endValue);

  const question = car(newProgr);
  const correctAnswer = `${cdr(newProgr)}`;
  const data = cons(question, correctAnswer);

  return data;
};

export default () => runGameEngine(gameDescription, roundsCount, runGame);
