import readlineSync from 'readline-sync';

export const gamesDescription = {
  'brain-even': 'Answer "yes" if number even otherwise answer "no".\n',
  'brain-calc': 'What is the result of the expression?\n',
  'brain-gcd': 'Find the greatest common divisor of given numbers.\n',
  'brain-progression': 'What number is missing in the progression?\n',
  'brain-prime': 'Answer "yes" if given number is prime. Otherwise answer "no".\n',
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

export const isPrimeNumber = (a) => {
  for (let i = 2; i < a; i += 1) {
    if (a % i === 0) return false;
  }
  return true;
};

export const getProgression = () => {
  const start = getRandomNum(5);
  const array = [start];
  const operator = ['+', '-', '*'][getRandomNum(2)];
  for (let i = 1; i < 10; i += 1) {
    const prevNum = array[i - 1];
    array[i] = calc[operator](prevNum, start);
  }
  return array;
};

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
