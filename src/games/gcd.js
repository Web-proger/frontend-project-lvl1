import getRandomNum from '../utils';
import playGame from '..';

const gamesDescription = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  const min = a < b ? a : b;
  const max = a >= b ? a : b;
  let gcd;
  for (let i = min; i > 0; i -= 1) {
    if (min % i === 0) {
      if (max % i === 0) {
        gcd = i;
        break;
      }
    }
  }
  return gcd;
};

const getData = () => {
  const a = getRandomNum(1, 50);
  const b = getRandomNum(1, 50);

  return {
    question: `${a} ${b}`,
    correctAnswer: getGcd(a, b).toString(),
  };
};

export default () => playGame(getData, gamesDescription);
