import getRandomNum from '../utils';
import playGame from '../index';

const gamesDescription = 'What number is missing in the progression?';
const progressionLength = 10;

const getProgressionData = () => {
  const startProgressionNumber = getRandomNum(1, 100);
  const stepProgression = getRandomNum(1, 50);
  const hiddenItemIndex = getRandomNum(1, progressionLength);
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression[i] = startProgressionNumber + stepProgression * (i);
  }
  progression[hiddenItemIndex - 1] = '..';

  return {
    correctAnswer: startProgressionNumber + stepProgression * (hiddenItemIndex - 1),
    progression,
  };
};

const getData = () => {
  const { correctAnswer, progression } = getProgressionData();

  return {
    correctAnswer,
    question: progression.join(' '),
  };
};

export default () => playGame(getData, gamesDescription);
