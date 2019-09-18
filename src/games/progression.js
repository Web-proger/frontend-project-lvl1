import getRandomNum from '../utils';
import playGame from '../index';

const gamesDescription = 'What number is missing in the progression?';
const progressionLength = 10;

const getProgressionData = (start, step) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression[i] = start + step * i;
  }

  return progression;
};

const getData = () => {
  const startProgressionNumber = getRandomNum(1, 100);
  const stepProgression = getRandomNum(1, 50);
  const hiddenItemIndex = getRandomNum(1, progressionLength);
  const progression = getProgressionData(startProgressionNumber, stepProgression);
  progression[hiddenItemIndex - 1] = '..';

  return {
    question: progression.join(' '),
    correctAnswer: (startProgressionNumber + stepProgression * (hiddenItemIndex - 1)).toString(),
  };
};

export default () => playGame(getData, gamesDescription);
