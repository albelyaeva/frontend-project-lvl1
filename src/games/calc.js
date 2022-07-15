import {getRandomInt} from '../getRandomInt.js';

const OPMAP = {
    '*': (n1, n2) => n1 * n2,
    '+': (n1, n2) => n1 + n2,
    '-': (n1, n2) => n1 - n2
}

const gameRule = 'What is the result of the expression?';


const getRoundData = () => {
    const numberOne = getRandomInt(50);
    const numberTwo = getRandomInt(50);
    const opindex = Math.floor(Math.random() * 3);
    const mathSymbol = Object.keys(OPMAP)[opindex]
    const correctAnswer =OPMAP[mathSymbol](numberOne, numberTwo);
    const question = `${numberOne} ${mathSymbol} ${numberTwo}`
    return [question, correctAnswer]
};

export {gameRule, getRoundData};