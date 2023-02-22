import { getRandomNumber } from '../utilit.js';
import playing from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const minRange = 1;
const maxRange = 100;

const getGCD = (x, y) => {
  if (y === 0) return x;
  if (x < y) return getGCD(y, x);
  return getGCD(y, x % y);
};

const generateRound = () => {
  const number1 = getRandomNumber(minRange, maxRange);
  const number2 = getRandomNumber(minRange, maxRange);
  const question = `${number1} ${number2}`;
  const correctAnswer = String(getGCD(number1, number2));

  return [correctAnswer, question];
};

const runGCD = () => {
  playing(description, generateRound);
};

export default runGCD;
