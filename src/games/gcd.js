import getRandomNum from '../utils';
import playGame from '../index';

const gamesDescription = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  const min = a < b ? a : b;
  const max = a >= b ? a : b;
  for (let i = min; i > 0; i -= 1) {
    if (min % i === 0) {
      if (max % i === 0) return i;
    }
  }
  return 0;
};

const getData = () => {
  const firstRandomNumber = getRandomNum(0, 50);
  const secondRandomNumber = getRandomNum(0, 50);

  return {
    question: `${firstRandomNumber} ${secondRandomNumber}`,
    correctAnswer: getGcd(firstRandomNumber, secondRandomNumber),
  };
};

export default () => playGame(getData, gamesDescription);
