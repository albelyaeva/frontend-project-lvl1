import {getRandomInt} from '../getRandomInt.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRoundData = () => {
    const number = getRandomInt(0, 100);
    const question = number;
    const correctNumber = number % 2 === 0 ? 'yes' : 'no';
    return [question, correctNumber];
};

export { gameRule, getRoundData }