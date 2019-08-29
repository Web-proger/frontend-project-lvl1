#!/usr/bin/env node

import {
  gamesDescription,
  familiarity,
  welcome,
  getRandomNum,
  getAnswer,
  compareAndNotify,
  isPrimeNumber,
} from '../../index';

const startGame = (userName) => {
  for (let i = 0; i < 3; i += 1) {
    const num = getRandomNum(500) + 2;
    console.log(`Question: ${num}`);
    const answer = getAnswer();
    const expectedAnswer = isPrimeNumber(num) ? 'yes' : 'no';

    const goOn = compareAndNotify(answer, expectedAnswer, userName);
    if (!goOn) return;
  }
  console.log(`Congratulations, ${userName}!`);
};

welcome(gamesDescription['brain-prime']);
const name = familiarity();
startGame(name);
