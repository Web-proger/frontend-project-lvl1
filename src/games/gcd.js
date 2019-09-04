import readlineSync from 'readline-sync';
import {
  getUserName,
  userGreeting,
  getRandomNum,
  compareAndNotify,
} from '../index';

const gamesDescription = 'Find the greatest common divisor of given numbers.\n';

const getGcd = (a, b) => {
  const smallNum = a < b ? a : b;
  const bigNum = a >= b ? a : b;
  for (let i = smallNum; i > 0; i -= 1) {
    if (smallNum % i === 0) {
      if (bigNum % i === 0) return i;
    }
  }
  return '0';
};

const startGame = (userName, roundsNumber = 3) => {
  for (let i = 0; i < roundsNumber; i += 1) {
    const num1 = getRandomNum(0, 50);
    const num2 = getRandomNum(0, 50);
    console.log(`Question: ${num1} ${num2}`);
    const answer = readlineSync.question('Your answer: ');
    const expectedAnswer = getGcd(num1, num2);

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
