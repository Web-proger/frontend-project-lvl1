#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { familiarity, welcome } from '..';

const getRandomNum = (x = 100) => Math.round(Math.random() * x);

const parityCheck = (userName) => {
  for (let i = 0; i < 3; i += 1) {
    const num = getRandomNum(50);

    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');

    if ((num % 2 === 0 && answer === 'yes') || (num % 2 > 0 && answer === 'no')) {
      console.log('Correct!');
    } else {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

welcome();
console.log('Answer "yes" if number even otherwise answer "no".');
const name = familiarity();
parityCheck(name);
