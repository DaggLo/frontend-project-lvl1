import { cons } from '@hexlet/pairs';

import random from '../utils';
import init from '../init';
import engine from '../engine';

const gcd = (x, y) => {
  let a = x > y ? x : y;
  let b = x < y ? x : y;

  let result = b;

  while (a % b !== 0) {
    result = a % b;
    a = b;
    b = result;
  }
  return result;
};

export default () => {
  const gameDesc = 'Find the greatest common divisor of given numbers.';
  const initData = init(gameDesc);

  const game = () => {
    // These values are for the random funcntion.
    const beginValue = 1;
    const endValue = 100;

    const divisor = (() => {
      let result = 0;
      while (result < 2) {
        result = Math.floor(random(beginValue, endValue) / 2); // 2 - 50
      }
      return result;
    })();

    const operandMaker = () => (
      Math.floor(random(beginValue, endValue) / (divisor + 1)) + 1); // 1 - 34
    const operand1 = operandMaker() * divisor; // 2 - 100
    const operand2 = ((arr) => {
      let result = arr;
      while (result === arr) {
        result = operandMaker() * divisor;
      }
      return result;
    })(operand1);

    const question = `${operand1} ${operand2}`;
    const correctAnswer = `${gcd(operand1, operand2)}`;
    const data = cons(question, correctAnswer);

    return data;
  };

  return engine(initData, game);
};
