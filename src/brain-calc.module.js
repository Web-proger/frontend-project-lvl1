import {
  gamesDescription,
  getUserName,
  userGreeting,
  getRandomNum,
  getAnswer,
  calc,
  compareAndNotify,
} from './index';

const startGame = (userName, roundsNumber = 3) => {
  for (let i = 0; i < roundsNumber; i += 1) {
    const num1 = getRandomNum(10);
    const num2 = getRandomNum(10);
    const operators = ['+', '-', '*'];
    const operator = operators[getRandomNum(operators.length - 1)];
    const expression = `${num1} ${operator} ${num2}`;
    const expectedAnswer = calc[operator](num1, num2);

    console.log(`Question: ${expression}`);
    const answer = getAnswer();

    const goOn = compareAndNotify(answer, expectedAnswer.toString(), userName);
    if (!goOn) return;
  }
  console.log(`Congratulations, ${userName}!`);
};

userGreeting(gamesDescription['brain-calc']);
const name = getUserName();
startGame(name);
