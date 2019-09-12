import getRandomNum from '../utils';

const gamesDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

const isPrime = (a) => {
  if (a === 1) return false;
  for (let i = 2; i < a; i += 1) {
    if (a % i === 0) return false;
  }
  return true;
};

const getData = () => {
  const num = getRandomNum(1, 500);

  return {
    question: num,
    correctAnswer: isPrime(num) ? 'yes' : 'no',
  };
};

export { getData, gamesDescription };
