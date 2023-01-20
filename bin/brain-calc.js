import readlineSync from 'readline-sync';

function brainCalcGame() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name} !`);
  console.log('What is the result of the expression?');
}
export default brainCalcGame;
