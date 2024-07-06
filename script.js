'use strict';

// Elements:
// Game control:
const checkElement = document.querySelector('.check');
const againElement = document.querySelector('.again');

// User input and display:
const guessElement = document.querySelector('.guess');
const scoreElement = document.querySelector('.score');
const highscoreElement = document.querySelector('.highscore');

// Feedback and result display:
const messageElement = document.querySelector('.message');
const numberElement = document.querySelector('.number');

// Initialize game variables
let score = 20;
let highscore = 0;
let secretNumber = Math.floor(Math.random() * 20) + 1;

// Function to change background color
const changeBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
}

// EventListeners for buttons:
// Check btn
checkElement.addEventListener('click', function () {
  const guessValue = Number(guessElement.value);

  // Check if the guess input is valid 
  if (!guessValue || guessValue < 1 || guessValue > 20) {
    messageElement.textContent = "⛔️ Enter a number between 1 and 20!";
  } else {
    // If the player's guess is incorrect: 
    if (guessValue !== secretNumber) {
      if (score > 0) {
        messageElement.textContent = guessValue > secretNumber ? "📈 Too high!" : "📉 Too low!";
        score--;
        scoreElement.textContent = score;
      } else {
        messageElement.textContent = "💥 You lost the game!";
        scoreElement.textContent = 0;
      }
    } else {
      // If the player's guess is correct (When the player wins):
      messageElement.textContent = "🎉 Correct number!";
      numberElement.textContent = secretNumber;
      changeBackgroundColor("#f7cac9");

      // Check if the current score is the best until now:
      if (score > highscore) {
        highscore = score;
        highscoreElement.textContent = highscore;
      }
    }
  }
});

// Again btn
againElement.addEventListener('click', function () {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;

  scoreElement.textContent = score;
  messageElement.textContent = "Start guessing...";
  numberElement.textContent = '?';
  guessElement.value = '';
  changeBackgroundColor("#222");
});
