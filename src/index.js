import readlineSync from 'readline-sync';

export const userGreeting = (gameDescription) => {
  console.log('Welcome to the Brain Games!');
  if (gameDescription) {
    console.log(gameDescription);
  } else {
    console.log('\n');
  }
};

export const getUserName = () => {
  let userName = readlineSync.question('May I have your name? ');
  if (!userName) userName = 'anonymous';
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

export const compareAnswers = (answer, correctAnswer) => answer === correctAnswer.toString();

export const getRandomNum = (min, max) => Math.round(min - 0.5 + Math.random() * (max - min + 1));
