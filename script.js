const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');
const playerDisplay = document.getElementById('playerSDisplay');
const computerDisplay = document.getElementById('computerSDisplay');
const result = document.getElementById('result');
const historyList = document.getElementById('historyList');

let choices = ['rock', 'paper', 'scissors'];
let outcome = "";
let playerS = 0;
let computerS = 0;

function playGame(playerChoice) {
  result.className = 'result';

  let computerChoice = choices[Math.floor(Math.random() * choices.length)];

  if (playerChoice === computerChoice) {
    outcome = "It's a Tie!";
    result.classList.add('tie');
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    outcome = "You Win!";
    result.classList.add('win');
    playerS++;
    playerScore.innerText = `Player Score: ${playerS}`;
  } else {
    outcome = "You Lose!";
    result.classList.add('lose');
    computerS++;
    computerScore.innerText = `Computer Score: ${computerS}`;
  }

  playerDisplay.innerText = `Player: ${playerChoice}`;
  computerDisplay.innerText = `Computer: ${computerChoice}`;
  result.innerText = outcome;

  const historyItem = document.createElement('li');
  historyItem.textContent = `Player chose ${playerChoice}, Computer chose ${computerChoice} - ${outcome}`;
  historyList.prepend(historyItem);
}

function resetGame() {
  playerS = 0;
  computerS = 0;
  playerScore.innerText = 'Player Score: 0';
  computerScore.innerText = 'Computer Score: 0';
  result.innerText = '';
  playerDisplay.innerText = 'Player: -';
  computerDisplay.innerText = 'Computer: -';
  result.className = 'result';
  historyList.innerHTML = '';
}

function toggleDarkMode() {
  document.body.classList.toggle('dark');
}