import { cons, car, cdr } from '@hexlet/pairs';

import random from '../utils';

export default () => {
  // These values for the random funcntion.
  const beginValue = 1;
  const endValue = 10;

  const startElem = random(beginValue)(endValue);
  const hiddenElemPos = random(beginValue)(endValue);
  const progression = (() => {
    const diff = random(beginValue)(endValue);
    let resultStr = hiddenElemPos === 1 ? '..' : `${startElem}`;
    let resultElem = startElem;
    let acc = startElem;
    let i = 2;

    while (i <= 10) {
      acc += diff;
      resultStr += i === hiddenElemPos ? ' ..' : ` ${acc}`;
      if (i === hiddenElemPos) {
        resultElem = acc;
      }
      i += 1;
    }
    return cons(resultStr, resultElem);
  })();

  const question = `${car(progression)}`;
  const correctAnswer = `${cdr(progression)}`;

  return cons(question, correctAnswer);
};
