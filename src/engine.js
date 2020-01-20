import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export default (msg, rounds = 3, f) => {
  console.log(`\nWelcome to the Brain Games!\n${msg}`);

  const userName = readlineSync.question('\nMay I have your name? ');
  const roundsCount = rounds;

  console.log(`Hello, ${userName}!\n`);

  const runGameLoop = (counter) => {
    if (counter === 0) {
      console.log(`Congratulations, ${userName}!\n`);
      return;
    }

    const gameData = f();
    const question = car(gameData);
    const correctAnswer = cdr(gameData);
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);

    if (userAnswer.toLowerCase() !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!\n`);
      return;
    }

    console.log('Correct!');
    runGameLoop(counter - 1);
  };

  runGameLoop(roundsCount);
};
