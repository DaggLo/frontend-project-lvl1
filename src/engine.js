import readlineSync from 'readline-sync';
import { cons, car, cdr } from '@hexlet/pairs';

const init = (msg, rounds) => {
  console.log(`\nWelcome to the Brain Games!\n${msg}`);

  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const maxRounds = rounds;

  return cons(userName, maxRounds);
};

export default (msg, rounds = 3, f) => {
  const initData = init(msg, rounds);
  const userName = car(initData);
  const maxRounds = cdr(initData);

  const gameLoop = (counter) => {
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
    gameLoop(counter - 1);
  };

  gameLoop(maxRounds);
};
