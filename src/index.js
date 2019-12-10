import readlineSync from 'readline-sync';

const greeting = () => {
  const userName = readlineSync.question('\nMay I have your name? ');

  console.log(`Hello, ${userName}!\n`);
  return userName;
};

export const brainEven = () => {
  const userName = greeting();
  const quest = (iter) => {
    if (iter === 0) return iter;

    const num = Math.floor(Math.random() * 100) + 1;
    const correctAnswer = num % 2 ? 'no' : 'yes';
    const userAnswer = readlineSync.question(`Question: ${num}\nYour answer: `);

    if (userAnswer.toLowerCase() !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!\n`);
      return iter;
    }

    console.log('Correct!');
    return quest(iter - 1);
  };

  const result = quest(3);

  if (result === 0) {
    console.log(`Congratulations, ${userName}!\n`);
  }
};

export default greeting;
