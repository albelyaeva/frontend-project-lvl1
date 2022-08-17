import { getRandomInt } from '../getRandomInt.js';

const rule = 'Find the greatest common divisor of given numbers.';

/* get gcd */
const getGCD = (num1, num2) => {
  let t = 0;
  let a = num1;
  let b = num2;
  while (b !== 0) {
    t = b;
    b = a % b;
    a = t;
  }
  return t;
};

const getQuestionAndCorrectAnswer = () => {
  const num1 = getRandomInt(1, 20);
  const num2 = getRandomInt(1, 20);
  const question = `${num1} ${num2} `;
  const correctAnswer = (getGCD(num1, num2)).toString();
  return [question, correctAnswer];
};

export { rule, getQuestionAndCorrectAnswer };
