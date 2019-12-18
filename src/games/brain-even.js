import { cons } from '@hexlet/pairs';

export default () => {
  const question = Math.floor(Math.random() * 100) + 1; // 1 - 100
  const correctAnswer = question % 2 ? 'no' : 'yes';

  return cons(question, correctAnswer);
};
