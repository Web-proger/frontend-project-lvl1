import readlineSync from 'readline-sync';

export const games = {
  'brain-even': 'Answer "yes" if number even otherwise answer "no".\n',
  'brain-calc': 'What is the result of the expression?\n'
};

export const getAnswer = () => readlineSync.question('Your answer: ');

export const getRandomNum = (x = 100) => Math.round(Math.random() * x);

export const welcome = (game) => {
  console.log('Welcome to the Brain Games!');
  if (game) {
    console.log(game)
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
