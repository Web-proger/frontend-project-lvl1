import getRandomNum from '../utils';

const gamesDescription = 'Answer "yes" if number even otherwise answer "no".\n';

const getData = () => {
  const numberForQuestion = getRandomNum(1, 100);
  const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

  return {
    question: numberForQuestion,
    correctAnswer: isEven(numberForQuestion),
  };
};

export { getData, gamesDescription };
