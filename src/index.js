import readlineSync from 'readline-sync';

const roundsCount = 3;

export default (getData, description) => {
  let userName = '';

  console.log('Welcome to the Brain Games!');
  console.log(description, '\n');

  while (!userName) {
    userName = readlineSync.question('May I have your name? ');
  }
  console.log(`Hello, ${userName}!\n`);

  for (let i = 0; i < roundsCount; i += 1) {
    const { question, correctAnswer } = getData();

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
