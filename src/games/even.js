import readlineSync from 'readline-sync';
import {
  getUserName,
  userGreeting,
  getRandomNum,
  compareAndNotify,
} from '../index';

const gamesDescription = 'Answer "yes" if number even otherwise answer "no".\n';

const startGame = (userName, roundsNumber = 3) => {
  for (let i = 0; i < roundsNumber; i += 1) {
    const num = getRandomNum(1, 100);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    const expectedAnswer = num % 2 === 0 ? 'yes' : 'no';

    const goOn = compareAndNotify(answer, expectedAnswer, userName);
    if (!goOn) return;
  }
  console.log(`Congratulations, ${userName}!`);
};

export default () => {
  userGreeting(gamesDescription);
  const name = getUserName();
  startGame(name);
};
