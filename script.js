"use strict";

const guessInput = document.querySelector('.guess');

document.querySelector('.check').addEventListener('click', (ev) => {
    const guess = +guessInput.value;

    if (!guess) {
        document.querySelector('.message').textContent = "🛑 No number";
    }
});