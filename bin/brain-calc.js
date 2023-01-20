import readlineSync from 'readline-sync';

function brainCalcGame() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name} !`);
  console.log('What is the result of the expression?');
  let i = 0;

  function trueAnswer(f1, operator, f2) {
    let result = 0;
    // eslint-disable-next-line default-case
    switch (operator) {
      case '+':
        result = Number(f1) + Number(f2);
        break;
      case '-':
        result = Number(f1) - Number(f2);
        break;
      case '*':
        result = Number(f1) * Number(f2);
        break;
    }
    return result;
  }
  function rn() {
    return Math.floor(Math.random() * 100 - 1);
  }
  while (i < 3) {
    rn();
    const RandomNumber = [rn(), rn()];
    const operator = ['+', '-', '*'];
    const randomIndex = Math.floor(Math.random() * 3);
    const randomEx = (`${RandomNumber[0]} ${operator[randomIndex]} ${RandomNumber[1]}`);
    const question = (`Question: ${randomEx}`);
    console.log(question);
    const answerEx = readlineSync.question('Your answer: ');
    if (Number(answerEx) === trueAnswer(RandomNumber[0], operator[randomIndex], RandomNumber[1])) {
      console.log('Correct!');
      i += 1;
      if (i === 3) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`'${Number(answerEx)}' is wrong answer ;(. Correct answer was ${trueAnswer(RandomNumber[0], operator[randomIndex], RandomNumber[1])}.\nLet's try again, ${name}`);
      break;
    }
  }
}

export default brainCalcGame;
