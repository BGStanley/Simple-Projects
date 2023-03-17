'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct number!'; // with DOM, JS transforms html elements and styles

document.querySelector('.number').textContent = 27;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 17;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let scoreValue = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); //however this returns back "string" and later we would like to compare the guessed number with randomly generated one, so we have to convert the guess type

  if (!guess) {
    //document.querySelector('.message').textContent = '🚫 Empty guess!';
    displayMessage('🚫 Empty guess!');
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    //document.querySelector('.message').textContent = 'Correct Number!';
    displayMessage('Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (scoreValue > highScore) {
      highScore = scoreValue;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (scoreValue > 1) {
      // document.querySelector('.message').textContent =
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      scoreValue--;
      document.querySelector('.score').textContent = scoreValue;
    } else {
      // document.querySelector('.message').textContent =
      displayMessage('You ran out of chances!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#FF0000';
    }
  }

  // } else if (guess > secretNumber) {
  //   if (scoreValue > 1) {
  //     document.querySelector('.message').textContent = 'Too high!';
  //     scoreValue--;
  //     document.querySelector('.score').textContent = scoreValue;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       'You ran out of chances!';
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('body').style.backgroundColor = '#FF0000';
  //   }
  // } else if (guess < secretNumber) {
  //   if (scoreValue > 1) {
  //     document.querySelector('.message').textContent = 'Too low!';
  //     scoreValue--;
  //     document.querySelector('.score').textContent = scoreValue;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       'You ran out of chances!';
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('body').style.backgroundColor = '#FF0000';
  //   }
  // }
});
document.querySelector('.again').addEventListener('click', function () {
  scoreValue = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = scoreValue;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#220';
  document.querySelector('.number').style.width = '15rem';
});
