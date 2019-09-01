import {
  gamesDescription,
  getUserName,
  userGreeting,
  getRandomNum,
  getAnswer,
  compareAndNotify,
  calc,
} from './index';

const getProgression = () => {
  const start = getRandomNum(5);
  const array = [start];
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNum(operators.length - 1)];
  for (let i = 1; i < 10; i += 1) {
    const prevNum = array[i - 1];
    array[i] = calc[operator](prevNum, start);
  }
  return array;
};

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
