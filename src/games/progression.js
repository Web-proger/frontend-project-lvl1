import getRandomNum from '../utils';
import startGame from '../index';

const gamesDescription = 'What number is missing in the progression?';
const progressionLength = 10;

const getProgressionData = () => {
  const startProgressionNumber = getRandomNum(1, 100);
  const stepProgression = getRandomNum(1, 50);
  const hiddenItemNumber = getRandomNum(0, 9);
  const numbers = [];
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === 0) {
      numbers[i] = startProgressionNumber;
    } else {
      numbers[i] = startProgressionNumber + stepProgression * i;
    }
  }
  numbers[hiddenItemNumber] = '..';

  return {
    correctAnswer: startProgressionNumber + stepProgression * hiddenItemNumber,
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

export default () => startGame(getData, gamesDescription);
