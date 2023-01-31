import readlineSync from 'readline-sync';

const name = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name} !`);
};
function randomNumber(min = 2, max = 100) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
export { greet, randomNumber };
