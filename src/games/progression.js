import readlineSync from 'readline-sync';
import {
  getUserName,
  userGreeting,
  getRandomNum,
  compareAnswers,
} from '../index';

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

const startGame = (userName, roundsNumber = 3) => {
  const progressionLength = 10;
  for (let i = 0; i < roundsNumber; i += 1) {
    const progression = getProgression(progressionLength);
    const numOfElement = getRandomNum(0, progressionLength - 1);
    const correctAnswer = progression[numOfElement];
    progression[numOfElement] = '..';
    console.log(`Question: ${progression.join(' ')}`);
    const answer = readlineSync.question('Your answer: ');

    const isValidAnswer = compareAnswers(answer, correctAnswer);
    if (isValidAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default () => {
  userGreeting(gamesDescription);
  const name = getUserName();
  startGame(name);
};
