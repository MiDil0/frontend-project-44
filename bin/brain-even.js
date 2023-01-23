import readlineSync from 'readline-sync';

export default function brainEvengame() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name} !`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 0; // цикл//
  while (i < 3) {
    const RandomNumber = Math.random(); // начало игры //
    const IntegerNumber = Math.floor(RandomNumber * 100);
    console.log(`Question: ${IntegerNumber}`);
    let EvenNumbers;
    const UserAnswer = readlineSync.question('Your answer:');

    if (IntegerNumber % 2 === 0) {
      EvenNumbers = true;
    } else {
      EvenNumbers = false;
    }
    if (EvenNumbers === true) {
      if (UserAnswer === 'yes') {
        console.log('Correct!');
      }
      if (UserAnswer === 'no') {
        console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.Let's try again, ${name}`);
        return;
      }
      if (UserAnswer !== 'yes' && UserAnswer !== 'no') {
        console.log(` Wrong answer. Let's try again, ${name}`);
        return;
      }
    }
    if (EvenNumbers === false) {
      if (UserAnswer === 'no') {
        console.log('Correct!');
      }
      if (UserAnswer === 'yes') {
        console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.Let's try again, ${name}`);
        return;
      }
      if (UserAnswer !== 'no' && UserAnswer !== 'yes') {
        console.log(` Wrong answer. Let's try again, ${name}`);
        return;
      }
    }
    
  }

  console.log(`Congratulations, ${name} ! `);
}
