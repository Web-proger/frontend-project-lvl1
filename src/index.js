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

export const calc = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

export const compareAndNotify = (answer, expectedAnswer, userName) => {
  if (answer === expectedAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
  console.log(`Let's try again, ${userName}!`);
  return false;
};

export const getRandomNum = (min, max) => Math.round(min - 0.5 + Math.random() * (max - min + 1));
