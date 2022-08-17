import readlineSync from 'readline-sync';

export const getUserName = () => {
    return readlineSync.question('May I have your name? ');
}

const roundCounter = 3;

export const game = (gameRule, roundData) => {
    console.log('Welcome to the Brain Games!');
    const userName = getUserName();
    console.log(`Hello, ${userName}!`);
    console.log(gameRule);
    console.log()
    for (let i = 0; i < roundCounter; i += 1) {
        const [questionNum, correctAnswer] = roundData();
        const answerUser = readlineSync.question(`Question: ${questionNum} `);

        if (
            String(answerUser) === String(correctAnswer)
        ) {
            console.log('Correct!');
        }
        else {
            const errorMessage =`'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n Let's try again, ${userName}!`;
            console.log(errorMessage);
            return;
        }
    }

    console.log(`Congratulations, ${userName}!`);
};