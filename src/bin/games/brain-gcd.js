#!/usr/bin/env node

import {
  gamesDescription,
  familiarity,
  welcome,
  getRandomNum,
  getAnswer,
  compareAndNotify,
  getGcd,
} from '../../index';

const startGame = (userName) => {
  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomNum(50);
    const num2 = getRandomNum(50);
    console.log(`Question: ${num1} ${num2}`);
    const answer = getAnswer();
    const expectedAnswer = getGcd(num1, num2);

    const goOn = compareAndNotify(answer, expectedAnswer.toString(), userName);
    if (!goOn) return;
  }
  console.log(`Congratulations, ${userName}!`);
};

welcome(gamesDescription['brain-gcd']);
const name = familiarity();
startGame(name);