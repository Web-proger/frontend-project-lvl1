import getRandomNum from '../utils';
import startGame from '../index';

const gamesDescription = 'What is the result of the expression?';

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const getData = () => {
  const num1 = getRandomNum(0, 10);
  const num2 = getRandomNum(0, 10);
  const operators = Object.keys(operations);
  const operator = operators[getRandomNum(0, operators.length - 1)];

  return {
    question: `${num1} ${operator} ${num2}`,
    correctAnswer: operations[operator](num1, num2),
  };
};

export default () => startGame(getData, gamesDescription);
