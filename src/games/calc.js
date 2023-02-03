import playing from '../index.js';
import { getRandomIndex, getRandomNumber } from '../utilit.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const minRange = 1;
const maxRange = 100;

const calculate = (x, y, operator) => {
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:  
      throw new Error(`Unknown operator received: '${operator}'!`);
  }
};

const generateRound = () => {
  const number1 = getRandomNumber(minRange, maxRange);
  const number2 = getRandomNumber(minRange, maxRange);
  const operator = operators[getRandomIndex(operators)];
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = String(calculate(number1, number2, operator));

  return [question, correctAnswer];
};

const runCalc = () => {
  playing(description, generateRound);
};

export default runCalc;
