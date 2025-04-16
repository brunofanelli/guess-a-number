'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent =
    //   '⛔ Não é um número válido!';
    displayMessage('⛔ Não é um número válido!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Acertô miseravi!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    //Highscore (MINHA IMPLEMENTAÇÃO)
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
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

  /* // Guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Muito alto!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🩻 Você perdeu!';
      document.querySelector('.score').textContent = 0;
    }

    //Guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Muito baixo!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🩻 Você perdeu!';
      document.querySelector('.score').textContent = 0;
    }
  } */
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
