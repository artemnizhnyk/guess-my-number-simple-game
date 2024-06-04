"use strict";
let secretNumber = createSecretNumber();
let highScore = 0;

const guessInput = document.querySelector('.guess'),
    check = document.querySelector('.check'),
    number = document.querySelector('.number'),
    message = document.querySelector('.message'),
    body = document.querySelector('body'),
    score = document.querySelector('.score'),
    again = document.querySelector('.again');

function createSecretNumber() {
    return Math.trunc((Math.random() * 20) + 1);
}

score.textContent = 20;

check.addEventListener('click', (ev) => {
    const guess = +guessInput.value;

    if (!guess) {
        message.textContent = "🛑 No number";

    } else if (guess < 0 || guess > 20) {
        message.textContent = "Number must be between 1 and 20!"

    } else if (guess === secretNumber) {
        message.textContent = "🎉 Correct number!";
        body.style.backgroundColor = "#60b347";
        number.style.width = '30rem';
        number.textContent = secretNumber;
        if (+score.textContent > highScore) {
            highScore = +score.textContent;
            document.querySelector('.highscore').textContent = highScore;
        }

    } else if (guess > secretNumber) {

        if (+score.textContent > 1) {
            message.textContent = "📈 Too high!";
            score.textContent -= 1;
        } else {
            message.textContent = "💥 You lost the game!";
            score.textContent = 0;
        }

    } else if (guess < secretNumber) {

        if (+score.textContent > 1) {
            message.textContent = "📉 Too low!";
            score.textContent -= 1;
        } else {
            message.textContent = "💥 You lost the game!";
            score.textContent = 0;
        }
    }
});

again.addEventListener('click', (ev) => {
    score.textContent = 20;
    message.textContent = "Start guessing...";
    number.textContent = '?';
    number.style.width = '15rem';
    body.style.backgroundColor = "#222";
    guessInput.value = '';
    secretNumber = createSecretNumber();
});
