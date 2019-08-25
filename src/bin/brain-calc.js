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
    const num1 = getRandomNum(10);
    const num2 = getRandomNum(10);
    const operator = ['+', '-', '*'][getRandomNum(2)];
    const expression = `${num1} ${operator} ${num2}`;

    console.log(`Question: ${expression}`);
    const answer = getAnswer();

    if (answer == eval(expression)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${eval(expression)}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

welcome(games['brain-calc']);
const name = familiarity();
parityCheck(name);
