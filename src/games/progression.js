import getRandomNum from '../utils';

const gamesDescription = 'What number is missing in the progression?\n';

const calc = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const getProgression = (length) => {
  const start = getRandomNum(0, 5);
  const array = [start];
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNum(0, operators.length - 1)];
  for (let i = 1; i < length; i += 1) {
    const prevNum = array[i - 1];
    array[i] = calc[operator](prevNum, start);
  }
  return array;
};

const getData = () => {
  const progressionLength = 10;
  const progression = getProgression(progressionLength);
  const numOfElement = getRandomNum(0, progressionLength - 1);
  const correctAnswer = progression.splice(numOfElement, 1, '..')[0];

  return {
    correctAnswer: correctAnswer, // eslint-disable-line object-shorthand
    question: progression.join(' '),
  };
};

export { getData, gamesDescription };
