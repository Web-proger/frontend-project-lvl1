import readlineSync from 'readline-sync';
import {
  getUserName,
  userGreeting,
  getRandomNum,
  compareAnswers,
} from '../index';

const gamesDescription = 'Find the greatest common divisor of given numbers.\n';

const getGcd = (a, b) => {
  const min = a < b ? a : b;
  const max = a >= b ? a : b;
  for (let i = min; i > 0; i -= 1) {
    if (min % i === 0) {
      if (max % i === 0) return i;
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
    const correctAnswer = getGcd(num1, num2);

    const isValidAnswer = compareAnswers(answer, correctAnswer);
    if (isValidAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default () => {
  userGreeting(gamesDescription);
  const name = getUserName();
  startGame(name);
};
