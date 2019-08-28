#!/usr/bin/env node

import {
  gamesDescription,
  familiarity,
  welcome,
  getRandomNum,
  getAnswer,
  calc,
  compareAndNotify,
} from '..';

const startGame = (userName) => {
  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomNum(10);
    const num2 = getRandomNum(10);
    const operator = ['+', '-', '*'][getRandomNum(2)];
    const expression = `${num1} ${operator} ${num2}`;
    const expectedAnswer = calc[operator](num1, num2);

    console.log(`Question: ${expression}`);
    const answer = getAnswer();

    const goOn = compareAndNotify(answer, expectedAnswer.toString(), userName);
    if (!goOn) return;
  }
  console.log(`Congratulations, ${userName}!`);
};

welcome(gamesDescription['brain-calc']);
const name = familiarity();
startGame(name);
