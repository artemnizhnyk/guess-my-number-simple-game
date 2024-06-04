"use strict";
const secretNumber = Math.trunc((Math.random() * 20) + 1);
document.querySelector('.number').textContent = secretNumber;

const guessInput = document.querySelector('.guess'),
    message = document.querySelector('.message');

let score = document.querySelector('.score');

score.textContent = 20;

document.querySelector('.check').addEventListener('click', (ev) => {
    const guess = +guessInput.value;

    if (!guess) {
        message.textContent = "🛑 No number";
    } else if (guess < 0 || guess > 20) {
        message.textContent = "Number must be between 1 and 20!"
    } else if (guess === secretNumber) {
        message.textContent = "🎉 Correct number!"
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
