import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';
import brainEven from './games/brain-even';
import brainCalc from './games/brain-calc';

export default (gameType) => {
  console.log('\nWelcome to the Brain Games!');
  switch (gameType) {
    case 'even':
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      break;

    case 'calc':
      console.log('What is the result of the expression?');
      break;

    default:
  }

  const userName = readlineSync.question('\nMay I have your name? ');

  console.log(`Hello, ${userName}!\n`);

  const game = (iter, f) => {
    if (iter === 0) return iter;

    const gameData = f();
    const correctAnswer = cdr(gameData);
    const userAnswer = readlineSync.question(`Question: ${car(gameData)}\nYour answer: `);

    if (userAnswer.toLowerCase() !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!\n`);
      return iter;
    }

    console.log('Correct!');
    return game(iter - 1, f);
  };

  const maxRounds = 3;
  let result;

  switch (gameType) {
    case 'even':
      result = game(maxRounds, brainEven);
      break;

    case 'calc':
      result = game(maxRounds, brainCalc);
      break;

    default:
      result = maxRounds;
  }

  if (result === 0) {
    console.log(`Congratulations, ${userName}!\n`);
  }
};
