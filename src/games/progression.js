import getRandomNum from '../utils';
import playGame from '..';

const gamesDescription = 'What number is missing in the progression?';
const progressionLength = 10;

const getProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression[i] = start + step * i;
  }

  return progression;
};

const getData = () => {
  const start = getRandomNum(1, 100);
  const step = getRandomNum(1, 50);
  const progression = getProgression(start, step, progressionLength);
  const hiddenItemIndex = getRandomNum(0, progressionLength - 1);

  progression[hiddenItemIndex] = '..';

  return {
    question: progression.join(' '),
    correctAnswer: (start + step * (hiddenItemIndex)).toString(),
  };
};

export default () => playGame(getData, gamesDescription);
