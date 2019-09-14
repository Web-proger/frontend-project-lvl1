import getRandomNum from '../utils';
import startGame from '../index';

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
  const num1 = getRandomNum(0, 50);
  const num2 = getRandomNum(0, 50);

  return {
    question: `${num1} ${num2}`,
    correctAnswer: getGcd(num1, num2),
  };
};

export default () => startGame(getData, gamesDescription);
