#!/usr/bin/env node

import {
  gamesDescription,
  familiarity,
  welcome,
  getRandomNum,
  getAnswer,
  compareAndNotify,
  getProgression,
} from '../../index';

const startGame = (userName) => {
  for (let i = 0; i < 3; i += 1) {
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

welcome(gamesDescription['brain-progression']);
const name = familiarity();
startGame(name);
