#!/usr/bin/env node

import {
  gamesDescription,
  getUserName,
  userGreeting,
  getRandomNum,
  getAnswer,
  compareAndNotify,
  getGcd,
} from './index';

const startGame = (userName, roundsNumber = 3) => {
  for (let i = 0; i < roundsNumber; i += 1) {
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

userGreeting(gamesDescription['brain-gcd']);
const name = getUserName();
startGame(name);
