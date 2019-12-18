import { cons } from '@hexlet/pairs';

export default () => {
  const random = () => Math.floor(Math.random() * 100); // 0 - 99
  const operand1 = random();
  const operand2 = random();
  const operator = random() / 33; // 0 - 3

  let question;
  let correctAnswer;

  if (operator > 2) {
    question = `${operand1} + ${operand2}`;
    correctAnswer = `${operand1 + operand2}`;
  } else if (operator > 1) {
    question = `${operand1} - ${operand2}`;
    correctAnswer = `${operand1 - operand2}`;
  } else {
    question = `${operand1} * ${operand2}`;
    correctAnswer = `${operand1 * operand2}`;
  }

  return cons(question, correctAnswer);
};
