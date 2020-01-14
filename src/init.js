import readlineSync from 'readline-sync';
import { cons } from '@hexlet/pairs';

export default (msg, rounds = 3) => {
  console.log(`\nWelcome to the Brain Games!\n${msg}`);

  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const maxRounds = rounds;

  return cons(userName, maxRounds);
};
