import readlineSync from 'readline-sync';
import {
  getUserName,
  userGreeting,
  getRandomNum,
  calc,
  compareAndNotify,
} from '../index';

const gamesDescription = 'What is the result of the expression?\n';

const startGame = (userName, roundsNumber = 3) => {
  for (let i = 0; i < roundsNumber; i += 1) {
    const num1 = getRandomNum(0, 10);
    const num2 = getRandomNum(0, 10);
    const operators = ['+', '-', '*'];
    const operator = operators[getRandomNum(0, operators.length - 1)];
    const expression = `${num1} ${operator} ${num2}`;
    const expectedAnswer = calc[operator](num1, num2);

    console.log(`Question: ${expression}`);
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
