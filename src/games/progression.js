import getRandomNum from '../utils';
import playGame from '../index';

const gamesDescription = 'What number is missing in the progression?';
const progressionLength = 10;

const getProgressionData = () => {
  const startProgressionNumber = getRandomNum(1, 100);
  const stepProgression = getRandomNum(1, 50);
  const hiddenItemNumber = getRandomNum(1, 10);
  const numbers = [];
  for (let i = 1; i <= progressionLength; i += 1) {
    numbers[i - 1] = startProgressionNumber + stepProgression * (i - 1);
  }
  numbers[hiddenItemNumber - 1] = '..';

  return {
    correctAnswer: startProgressionNumber + stepProgression * (hiddenItemNumber - 1),
    progression: numbers,
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
