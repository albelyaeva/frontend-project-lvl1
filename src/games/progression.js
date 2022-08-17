import getRandomInt from '../getRandomInt.js';

const rule = 'What number is missing in the progression?';

const generateProgression = (startProgress, progressStep, progressLength) => {
  const progression = [];
  for (let i = 0; i < progressLength; i += 1) {
    progression.push(startProgress + (progressStep * i));
  }
  return progression;
};

const getProgressionGameData = () => {
  const startProgress = getRandomInt(0, 10);
  const progressStep = getRandomInt(2, 8);
  const progressLength = getRandomInt(5, 20);
  const progression = generateProgression(startProgress, progressStep, progressLength);
  const index = getRandomInt(0, progressLength);
  const correctAnswer = progression[index].toString();
  progression[index] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

export { rule, getProgressionGameData };
