import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const game = (iter, f) => {
  if (iter === 0) return iter;

  const gameData = f();
  const correctAnswer = cdr(gameData);
  const userAnswer = readlineSync.question(`Question: ${car(gameData)}\nYour answer: `);

  if (userAnswer.toLowerCase() !== correctAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    return iter;
  }

  console.log('Correct!');
  return game(iter - 1, f);
};

export default game;
