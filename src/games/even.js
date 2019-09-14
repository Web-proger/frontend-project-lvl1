import getRandomNum from '../utils';
import startGame from '../index';

const gamesDescription = 'Answer "yes" if number even otherwise answer "no".';

const getData = () => {
  const numberForQuestion = getRandomNum(1, 100);
  const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

  return {
    question: numberForQuestion,
    correctAnswer: isEven(numberForQuestion),
  };
};

export default () => startGame(getData, gamesDescription);
