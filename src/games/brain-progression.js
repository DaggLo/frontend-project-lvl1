import { cons, car, cdr } from '@hexlet/pairs';

import random from '../utils';
import init from '../init';
import engine from '../engine';

export default () => {
  const gameDesc = 'What number is missing in the progression?';
  const initData = init(gameDesc);

  const game = () => {
    // These values are for the random funcntion.
    const beginValue = 1;
    const endValue = 10;

    const startElem = random(beginValue, endValue);
    const hiddenElemPos = random(beginValue, endValue);
    const progressionLength = 10;

    const progression = (() => {
      const diff = random(beginValue, endValue);
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
    })();

    const question = car(progression);
    const correctAnswer = `${cdr(progression)}`;
    const data = cons(question, correctAnswer);

    return data;
  };

  return engine(initData, game);
};
