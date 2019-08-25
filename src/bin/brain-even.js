#!/usr/bin/env node

import {
  games,
  familiarity,
  welcome,
  getRandomNum,
  getAnswer,
} from '..';

const parityCheck = (userName) => {
  for (let i = 0; i < 3; i += 1) {
    const num = getRandomNum(50);

    console.log(`Question: ${num}`);
    const answer = getAnswer();

    if ((num % 2 === 0 && answer === 'yes') || (num % 2 > 0 && answer === 'no')) {
      console.log('Correct!');
    } else {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

welcome(games['brain-even']);
const name = familiarity();
parityCheck(name);
