import { cons } from '@hexlet/pairs';

export default () => {
  const random = () => Math.floor(Math.random() * 1000) + 1; // 1 - 1000

  const isPrime = (num) => {
    if (num < 2) {
      return false;
    }

    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  };

  const num = random();

  const question = `${num}`;
  const correctAnswer = `${isPrime(num) ? 'yes' : 'no'}`;

  return cons(question, correctAnswer);
};
