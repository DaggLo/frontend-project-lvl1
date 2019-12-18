import readlineSync from 'readline-sync';

import game from './engine';
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

  switch (gameType) {
    case 'even':
      result = game(maxRounds, brainEven);
      break;

    case 'calc':
      result = game(maxRounds, brainCalc);
      break;

    case 'gcd':
      result = game(maxRounds, brainGcd);
      break;

    case 'progression':
      result = game(maxRounds, brainProgr);
      break;

    case 'prime':
      result = game(maxRounds, brainPrime);
      break;

    default:
      result = maxRounds;
  }

  if (result === 0) {
    console.log(`Congratulations, ${userName}!\n`);
  } else console.log(`Let's try again, ${userName}!\n`);
};
