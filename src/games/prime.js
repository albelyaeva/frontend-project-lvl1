import { getRandomInt } from '../getRandomInt.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrimeNum = (num) => {
    for (let i = 2; i < num / 2; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

const getPrimeGameData = () => {
    const gameNumber = getRandomInt(0, 100);
    const correctAnswer = isPrimeNum(gameNumber) ? 'yes' : 'no';
    return [gameNumber, correctAnswer];
};

export { rule, getPrimeGameData };