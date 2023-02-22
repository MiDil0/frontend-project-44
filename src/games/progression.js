import playing from '../index.js';
import { getRandomNumber, getRandomIndex } from '../utilit.js';

const explanation = 'What number is missing in the progression?';

const getQA = () => {
  const length = 10;
  const a = getRandomNumber(50);
  const d = getRandomNumber(10) + 1;
  const start = getRandomNumber(10);
  const missed = getRandomNumber(length);
  const progression = getRandomIndex((n) => a + ((n - 1) * d), start, length);

  const correct = progression.splice(missed, 1, ['..']);
  const question = progression.join(' ');

  return [question, correct.toString()];
};

export default () => playing(explanation, getQA);
