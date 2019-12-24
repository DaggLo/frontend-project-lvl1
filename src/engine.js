import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

import brainEven from './games/brain-even';
import brainCalc from './games/brain-calc';
import brainGcd from './games/brain-gcd';
import brainProgr from './games/brain-progression';
import brainPrime from './games/brain-prime';

export default (gameType) => {
  console.log('\nWelcome to the Brain Games!');

  switch (gameType) {
    case 'even':
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      break;

    case 'calc':
      console.log('What is the result of the expression?');
      break;

    case 'gcd':
      console.log('Find the greatest common divisor of given numbers.');
      break;

    case 'progression':
      console.log('What number is missing in the progression?');
      break;

    case 'prime':
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
      break;

    default:
  }

  const userName = readlineSync.question('\nMay I have your name? ');
  const maxRounds = 3;
  let result;

  console.log(`Hello, ${userName}!\n`);

  const gameLoop = (counter, f) => {
    if (counter === 0) return counter;

    const gameData = f();
    const correctAnswer = cdr(gameData);
    const userAnswer = readlineSync.question(`Question: ${car(gameData)}\nYour answer: `);

    if (userAnswer.toLowerCase() !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return counter;
    }

    console.log('Correct!');
    return gameLoop(counter - 1, f);
  };

  switch (gameType) {
    case 'even':
      result = gameLoop(maxRounds, brainEven);
      break;

    case 'calc':
      result = gameLoop(maxRounds, brainCalc);
      break;

    case 'gcd':
      result = gameLoop(maxRounds, brainGcd);
      break;

    case 'progression':
      result = gameLoop(maxRounds, brainProgr);
      break;

    case 'prime':
      result = gameLoop(maxRounds, brainPrime);
      break;

    default:
      result = maxRounds;
  }

  if (result === 0) {
    console.log(`Congratulations, ${userName}!\n`);
  } else if (gameType) {
    console.log(`Let's try again, ${userName}!\n`);
  }
};
