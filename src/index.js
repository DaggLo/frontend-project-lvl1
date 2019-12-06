import readlineSync from 'readline-sync';

const greeting = () => {
  const userName = readlineSync.question('Hi! What is your name?: ');

  console.log(`Hello, ${userName}!`);
  return userName;
};

export default greeting;
