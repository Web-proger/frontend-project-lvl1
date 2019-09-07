import getRandomNum from '../utils';

const gamesDescription = 'Answer "yes" if number even otherwise answer "no".\n';

const getData = () => {
  const num = getRandomNum(1, 100);

  return {
    question: num,
    correctAnswer: num % 2 === 0 ? 'yes' : 'no',
  };
};

export { getData, gamesDescription };
