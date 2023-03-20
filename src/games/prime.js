import playing from "../index.js";
import { getRandomInt, isPrime } from '../utilit.js';

const explanation = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQA = () => {
  const question = getRandomInt(100);
  const correct = (isPrime(question)) ? 'yes' : 'no';
  return [correct, question];
};

export default () => playing(explanation, getQA);