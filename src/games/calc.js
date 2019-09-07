import getRandomNum from '../utils';

const gamesDescription = 'What is the result of the expression?\n';

const calc = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const getData = () => {
  const num1 = getRandomNum(0, 10);
  const num2 = getRandomNum(0, 10);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNum(0, operators.length - 1)];

  return {
    question: `${num1} ${operator} ${num2}`,
    correctAnswer: calc[operator](num1, num2),
  };
};

export { getData, gamesDescription };
