import engine from './engine';

const brainGame = () => engine();
const brainEven = () => engine('even');
const brainCalc = () => engine('calc');
const brainGcd = () => engine('gcd');
const brainProgr = () => engine('progression');
const brainPrime = () => engine('prime');

export {
  brainGame as default,
  brainEven,
  brainCalc,
  brainGcd,
  brainProgr,
  brainPrime,
};
