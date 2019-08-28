import readlineSync from 'readline-sync';

export const gamesDescription = {
  'brain-even': 'Answer "yes" if number even otherwise answer "no".\n',
  'brain-calc': 'What is the result of the expression?\n',
  'brain-gcd': 'Find the greatest common divisor of given numbers.\n',
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

export const getAnswer = () => readlineSync.question('Your answer: ');

export const getRandomNum = (x = 100) => Math.round(Math.random() * x);

export const getGcd = (a, b) => {
  const smallNum = a < b ? a : b;
  const bigNum = a >= b ? a : b;
  for (let i = smallNum; i > 0; i -= 1) {
    if (smallNum % i === 0) {
      if (bigNum % i === 0) return i;
    }
  }
  return '0';
};

export const welcome = (gameDescription) => {
  console.log('Welcome to the Brain Games!');
  if (gameDescription) {
    console.log(gameDescription);
  } else {
    console.log('\n');
  }
};

export const familiarity = () => {
  let userName = readlineSync.question('May I have your name? ');
  if (!userName) userName = 'anonymous';
  console.log(`Hello, ${userName}!\n`);
  return userName;
};
