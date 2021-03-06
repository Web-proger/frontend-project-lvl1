import getRandomNum from '../utils';
import playGame from '..';

const gamesDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (a) => {
  if (a <= 1) return false;
  for (let i = 2; i <= a / 2; i += 1) {
    if (a % i === 0) return false;
  }
  return true;
};

const getData = () => {
  const question = getRandomNum(1, 500);

  return {
    question,
    correctAnswer: isPrime(question) ? 'yes' : 'no',
  };
};

export default () => playGame(getData, gamesDescription);
