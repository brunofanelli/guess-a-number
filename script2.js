'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//Functions
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const setBodyBGColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

// Implementação da lógica
const checkGuess = function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('⛔ Não é um número válido!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Acertô miseravi!');
    setBodyBGColor('#60b347');
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    //Highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (guess > 20) {
      displayMessage('Só é permitido números entre 1 e 20, tente novamente...');
    } else if (score > 1) {
      displayMessage(
        guess > secretNumber ? '📈 Muito alto!' : '📉 Muito baixo!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🩻 Você perdeu!');
      document.querySelector('.score').textContent = 0;
    }
  }
};

// Botão Chutar
document.querySelector('.check').addEventListener('click', checkGuess);
document.querySelector('.guess').addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    checkGuess();
  }
});

//Again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  displayMessage('Tente acertar...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
