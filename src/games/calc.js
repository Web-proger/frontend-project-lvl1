import getRandomNum from '../utils';
import playGame from '../index';

const gamesDescription = 'What is the result of the expression?';

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};
const operators = Object.keys(operations);

const getData = () => {
  const a = getRandomNum(0, 10);
  const b = getRandomNum(0, 10);
  const operator = operators[getRandomNum(0, operators.length - 1)];

  return {
    question: `${a} ${operator} ${b}`,
    correctAnswer: operations[operator](a, b).toString(),
  };
};

export default () => playGame(getData, gamesDescription);
