#!/usr/bin/env node

import {
  gamesDescription,
  familiarity,
  welcome,
  getRandomNum,
  getAnswer,
  compareAndNotify,
} from '..';

const startGame = (userName) => {
  for (let i = 0; i < 3; i += 1) {
    const num = getRandomNum(50);
    console.log(`Question: ${num}`);
    const answer = getAnswer();
    const expectedAnswer = num % 2 === 0 ? 'yes' : 'no';

    const goOn = compareAndNotify(answer, expectedAnswer, userName);
    if (!goOn) return;
  }
  console.log(`Congratulations, ${userName}!`);
};

welcome(gamesDescription['brain-even']);
const name = familiarity();
startGame(name);
