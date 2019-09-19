import getRandomNum from '../utils';
import playGame from '../index';

const gamesDescription = 'What number is missing in the progression?';
const length = 10;

const getProgression = (start, step) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression[i] = start + step * i;
  }

  return progression;
};

const getData = () => {
  const start = getRandomNum(1, 100);
  const step = getRandomNum(1, 50);
  const hiddenItemIndex = getRandomNum(0, length - 1);
  const progression = getProgression(start, step);
  progression[hiddenItemIndex] = '..';

  return {
    question: progression.join(' '),
    correctAnswer: (start + step * (hiddenItemIndex)).toString(),
  };
};

export default () => playGame(getData, gamesDescription);
