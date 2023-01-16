import readlineSync from 'readline-sync';
export function cli() {

    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name?: ');
    console.log(`Hello, ${name} !`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    const RandomNumber = Math.random()
    let IntegerNumber = Math.floor(RandomNumber * 100)
    console.log(`Question: ${IntegerNumber}`);
    let IsEvenNumber
 const AnswerQuestion = readlineSync.question('Your answer:');

    if (IntegerNumber % 2 === 0) {
        IsEvenNumber = true
    } else {
        IsEvenNumber = false
    }
    if (IsEvenNumber === true) { 
        if (AnswerQuestion === 'yes') {
            console.log('Correct!') 
            
        }
        if (AnswerQuestion === 'no') {
            console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.Let's try again, ${name}`);
        }
    } 
    if (IsEvenNumber === false) {
        if (AnswerQuestion === 'no') {
            console.log('Correct!');
        }
        if (AnswerQuestion === 'yes') {
            console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.Let's try again, ${name}`);
        }
     }

     IntegerNumber = Math.floor(Math.random() * 100)
    console.log(`Question: ${IntegerNumber}`);
   
   
}