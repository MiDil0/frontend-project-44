import { randomNumber } from '../cli.js';
import playing from '../index.js'

const userName = whatIsYourName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const evenStart = (number = randomNumber()) => {
  question(number);
  let correctAnswer = '';
  if (number % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  check(evenStart, userName, correctAnswer);
};

export default evenStart;
