import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export default (gameDescription, roundsCount = 3, prepareGameData) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(gameDescription);

  const userName = readlineSync.question('\nMay I have your name? ');

  console.log(`Hello, ${userName}!\n`);

  const runGameLoop = (counter) => {
    if (counter === 0) {
      console.log(`Congratulations, ${userName}!\n`);
      return;
    }

    const gameData = prepareGameData();
    const question = car(gameData);
    const correctAnswer = cdr(gameData);

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer.toLowerCase() !== correctAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!\n`);
      return;
    }

    console.log('Correct!');
    runGameLoop(counter - 1);
  };

  runGameLoop(roundsCount);
};
