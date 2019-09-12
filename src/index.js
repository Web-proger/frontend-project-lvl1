import readlineSync from 'readline-sync';

export default (getData, description) => {
  const roundsCount = 3;
  let userName = '';

  console.log('Welcome to the Brain Games!');
  if (description) console.log(description);

  while (!userName) {
    userName = readlineSync.question('\nMay I have your name? ');
  }
  console.log(`Hello, ${userName}!\n`);

  for (let i = 0; i < roundsCount; i += 1) {
    const data = getData();

    console.log(`Question: ${data.question}`);
    const answer = readlineSync.question('Your answer: ');

    const isValidAnswer = answer === data.correctAnswer.toString();
    if (isValidAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${data.correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
