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
    return Math.trunc((Math.random() * 1000) + 1);
}

score.textContent = 15;

check.addEventListener('click', (ev) => {
    guessing();
});

document.addEventListener('keypress', (ev) => {
    if (ev.key === 'Enter') {
        guessing();
    }
});

function guessing() {
    const guess = +guessInput.value;

    if (!guess) {
        displayMessage("🛑 No number");

    } else if (guess < 0 || guess > 1000) {
        displayMessage("Number must be between 1 and 1000!");

    } else if (guess > secretNumber || guess < secretNumber) {
        if (+score.textContent > 1) {
            displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
            score.textContent -= 1;
        } else {
            displayMessage("💥 You lost the game!");
            score.textContent = 0;
        }

    } else if (guess === secretNumber) {
        displayMessage("🎉 Correct number!");
        body.style.backgroundColor = "#60b347";
        number.style.width = '30rem';
        number.textContent = secretNumber;
        if (+score.textContent > highScore) {
            highScore = +score.textContent;
            document.querySelector('.highscore').textContent = highScore;
        }

    }
}

again.addEventListener('click', (ev) => {
    score.textContent = 15;
    displayMessage("Start guessing...");
    number.textContent = '?';
    number.style.width = '15rem';
    body.style.backgroundColor = "#222";
    guessInput.value = '';
    secretNumber = createSecretNumber();
});

function displayMessage(messageText) {
    message.textContent = messageText;
}