import readlineSync from 'readline-sync';

const userAnswer = readlineSync.question('Your answer:');// Ответ игрока

export const question = (exp) => { // Вопрос
  console.log(`Question: ${exp}`);
};

export const randomNumber = () => { // Рандомное число
  const number = Math.floor(Math.random() * 100 + 1);
  return number;
};

let trueCounter = 0;// счетчик правильных ответов
const i = 3;// максимальное количество раундов

export const check = (func, name, correctAnswer) => {
  const userAns = userAnswer();
  const corAns = correctAnswer.toString();
  if (corAns === userAns) {
    console.log('Correct!');
    trueCounter += 1;
    if (trueCounter < i) {
      func();
    } else if (trueCounter === i) {
      console.log(`Congratulations, ${name}!`);
    }
  } else {
    console.log(`'${userAns}' is wrong answer ;(. Correct answer was '${corAns}'.`);
    console.log(`Let's try again, ${name}!`);
  }
};
