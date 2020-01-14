import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export default (data, f) => {
  const userName = car(data);
  const maxRounds = cdr(data);

  const gameLoop = (counter) => {
    if (counter === 0) return counter;

    const gameData = f();
    const question = car(gameData);
    const correctAnswer = cdr(gameData);
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);

    if (userAnswer.toLowerCase() !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return counter;
    }

    console.log('Correct!');
    return gameLoop(counter - 1);
  };

  const result = gameLoop(maxRounds);

  if (result === 0) {
    console.log(`Congratulations, ${userName}!\n`);
  } else {
    console.log(`Let's try again, ${userName}!\n`);
  }
};
