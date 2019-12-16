import { cons } from '@hexlet/pairs';

export default () => {
  const random = () => Math.floor(Math.random() * 100) + 1; // 1 - 100
  const divisor = (() => {
    let result = 0;
    while (result < 2) {
      result = Math.floor(random() / 2); // 2 - 50
    }
    return result;
  })();

  const operandMaker = () => Math.floor(random() / (divisor + 1)) + 1; // 1 - 34
  const operand1 = operandMaker() * divisor; // 2 - 100
  const operand2 = ((arr) => {
    let result = arr;
    while (result === arr) {
      result = operandMaker() * divisor;
    }
    return result;
  })(operand1);

  const question = `${operand1} ${operand2}`;
  const correctAnswer = `${((x, y) => {
    let a = x > y ? x : y;
    let b = x < y ? x : y;

    let result = b;

    while (a % b !== 0) {
      result = a % b;
      a = b;
      b = result;
    }
    return result;
  })(operand1, operand2)}`;

  return cons(question, correctAnswer);
};
