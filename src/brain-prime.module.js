import readlineSync from 'readline-sync';
import {
  gamesDescription,
  getUserName,
  userGreeting,
  getRandomNum,
  compareAndNotify,
} from './index';

const isPrimeNumber = (a) => {
  for (let i = 2; i < a; i += 1) {
    if (a % i === 0) return false;
  }
  return true;
};

const startGame = (userName, roundsNumber = 3) => {
  for (let i = 0; i < roundsNumber; i += 1) {
    const num = getRandomNum(2, 500);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    const expectedAnswer = isPrimeNumber(num) ? 'yes' : 'no';

    const goOn = compareAndNotify(answer, expectedAnswer, userName);
    if (!goOn) return;
  }
  console.log(`Congratulations, ${userName}!`);
};

export default () => {
  userGreeting(gamesDescription['brain-prime']);
  const name = getUserName();
  startGame(name);
};
