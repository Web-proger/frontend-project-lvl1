#!/usr/bin/env node

import {
  gamesDescription,
  getUserName,
  userGreeting,
  getRandomNum,
  getAnswer,
  compareAndNotify,
  getProgression,
} from './index';

const startGame = (userName, roundsNumber = 3) => {
  for (let i = 0; i < roundsNumber; i += 1) {
    const progression = getProgression();
    const numOfElement = getRandomNum(9);
    const expectedAnswer = progression[numOfElement];
    progression[numOfElement] = '..';
    console.log(`Question: ${progression.join(' ')}`);
    const answer = getAnswer();

    const goOn = compareAndNotify(answer, expectedAnswer.toString(), userName);
    if (!goOn) return;
  }
  console.log(`Congratulations, ${userName}!`);
};

userGreeting(gamesDescription['brain-progression']);
const name = getUserName();
startGame(name);
