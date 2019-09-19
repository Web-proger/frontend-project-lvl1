import getRandomNum from '../utils';
import playGame from '../index';

const gamesDescription = 'Answer "yes" if number even otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const getData = () => {
  const a = getRandomNum(1, 100);

  return {
    question: a,
    correctAnswer: isEven(a) ? 'yes' : 'no',
  };
};

export default () => playGame(getData, gamesDescription);
