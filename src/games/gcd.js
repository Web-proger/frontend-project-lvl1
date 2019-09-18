import getRandomNum from '../utils';
import playGame from '../index';

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
  const firstRandomNumber = getRandomNum(1, 50);
  const secondRandomNumber = getRandomNum(1, 50);

  return {
    question: `${firstRandomNumber} ${secondRandomNumber}`,
    correctAnswer: getGcd(firstRandomNumber, secondRandomNumber).toString(),
  };
};

export default () => playGame(getData, gamesDescription);
