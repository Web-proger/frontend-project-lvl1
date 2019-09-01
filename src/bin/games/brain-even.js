#!/usr/bin/env node

import {
  gamesDescription,
  familiarity,
  welcome,
  getRandomNum,
  getAnswer,
  compareAndNotify,
} from '../../index';

const startGame = (userName, roundsNumber = 3) => {
  for (let i = 0; i < roundsNumber; i += 1) {
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
