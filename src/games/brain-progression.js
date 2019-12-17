import { cons, car, cdr } from '@hexlet/pairs';

export default () => {
  const random = () => Math.floor(Math.random() * 10) + 1; // 1 - 10
  const startElem = random();
  const hiddenElemPos = random();
  const progression = (() => {
    const diff = random();
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
