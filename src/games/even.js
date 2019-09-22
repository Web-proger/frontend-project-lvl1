import getRandomNum from '../utils';
import playGame from '..';

const gamesDescription = 'Answer "yes" if number even otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const getData = () => {
  const question = getRandomNum(1, 100);

  return {
    question,
    correctAnswer: isEven(question) ? 'yes' : 'no',
  };
};

export default () => playGame(getData, gamesDescription);
