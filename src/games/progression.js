import readlineSync from 'readline-sync';
import {
  getUserName,
  userGreeting,
  getRandomNum,
  compareAndNotify,
  calc,
} from '../index';

const gamesDescription = 'What number is missing in the progression?\n';

const getProgression = (length) => {
  const start = getRandomNum(0, 5);
  const array = [start];
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNum(0, operators.length - 1)];
  for (let i = 1; i < length; i += 1) {
    const prevNum = array[i - 1];
    array[i] = calc[operator](prevNum, start);
  }
  return array;
};

const startGame = (userName, roundsNumber = 3) => {
  const progressionLength = 10;
  for (let i = 0; i < roundsNumber; i += 1) {
    const progression = getProgression(progressionLength);
    const numOfElement = getRandomNum(0, progressionLength - 1);
    const expectedAnswer = progression[numOfElement];
    progression[numOfElement] = '..';
    console.log(`Question: ${progression.join(' ')}`);
    const answer = readlineSync.question('Your answer: ');

    const goOn = compareAndNotify(answer, expectedAnswer.toString(), userName);
    if (!goOn) return;
  }
  console.log(`Congratulations, ${userName}!`);
};

export default () => {
  userGreeting(gamesDescription);
  const name = getUserName();
  startGame(name);
};
