import readlineSync from 'readline-sync';

export const welcome = () => {
  console.log('Welcome to the Brain Games!\n');
};

export const familiarity = () => {
  let userName = readlineSync.question('May I have your name? ');
  if (!userName) userName = 'anonymous';
  console.log(`Hello, ${userName}!\n`);
  return userName;
};
