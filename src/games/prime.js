import getRandomNum from '../utils';
import playGame from '../index';

const gamesDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (a) => {
  if (a <= 1) return false;
  for (let i = 2; i <= a / 2; i += 1) {
    if (a % i === 0) return false;
  }
  return true;
};

const getData = () => {
  const randomNumber = getRandomNum(1, 500);

  return {
    question: randomNumber,
    correctAnswer: isPrime(randomNumber) ? 'yes' : 'no',
  };
};

export default () => playGame(getData, gamesDescription);
