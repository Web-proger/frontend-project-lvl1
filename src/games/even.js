import getRandomNum from '../utils';
import playGame from '../index';

const gamesDescription = 'Answer "yes" if number even otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const getData = () => {
  const num = getRandomNum(1, 100);

  return {
    question: num,
    correctAnswer: isEven(num) ? 'yes' : 'no',
  };
};

export default () => playGame(getData, gamesDescription);
