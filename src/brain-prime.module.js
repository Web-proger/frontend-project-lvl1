import {
  gamesDescription,
  getUserName,
  userGreeting,
  getRandomNum,
  getAnswer,
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
    const num = getRandomNum(500) + 2;
    console.log(`Question: ${num}`);
    const answer = getAnswer();
    const expectedAnswer = isPrimeNumber(num) ? 'yes' : 'no';

    const goOn = compareAndNotify(answer, expectedAnswer, userName);
    if (!goOn) return;
  }
  console.log(`Congratulations, ${userName}!`);
};

userGreeting(gamesDescription['brain-prime']);
const name = getUserName();
startGame(name);
