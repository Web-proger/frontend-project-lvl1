import getRandomNum from '../utils';

const gamesDescription = 'What number is missing in the progression?\n';

const progressionLength = 10;
const calc = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const getProgression = (length) => {
  const startNumber = getRandomNum(0, 5);
  const numbers = [startNumber];
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNum(0, operators.length - 1)];
  for (let i = 1; i < length; i += 1) {
    const prevNum = numbers[i - 1];
    numbers[i] = calc[operator](prevNum, startNumber);
  }
  return numbers;
};

const getData = () => {
  const progression = getProgression(progressionLength);
  const numOfElement = getRandomNum(0, progressionLength - 1);
  const correctAnswer = progression.splice(numOfElement, 1, '..')[0];

  return {
    correctAnswer: correctAnswer, // eslint-disable-line object-shorthand
    question: progression.join(' '),
  };
};

export { getData, gamesDescription };
