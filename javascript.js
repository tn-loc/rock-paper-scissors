const round = document.querySelector('.round');
const humanChoice = document.querySelector('.humanChoice');
const computerChoice = document.querySelector('.computerChoice');
const result = document.querySelector('.result');
const rBtn = document.querySelector('.rBtn');
const pBtn = document.querySelector('.pBtn');
const sBtn = document.querySelector('.sBtn');
const start = document.querySelector('.play');

let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    computerChoice.textContent = "Rock";
    return "rock";
  } else if (randomNumber === 2) {
    computerChoice.textContent = "Paper";
    return "paper";
  } else {
    computerChoice.textContent = "Scissors";
    return "scissors";
  }
};

const playRound = (human, computer) => {
  if (human === computer) return "It's a tie!";
  if (
    (human === "rock" && computer === "scissors") ||
    (human === "paper" && computer === "rock") ||
    (human === "scissors" && computer === "paper")
  ) {
    humanScore++;
    return "You win this round!";
  } else {
    computerScore++;
    return "Computer wins this round!";
  }
};

const handleClick = (choice) => {
  if (roundCount >= 5) return;

  const hChoice = choice;
  const cChoice = getComputerChoice();

  humanChoice.textContent = hChoice;
  const resultText = playRound(hChoice, cChoice);

  roundCount++;
  round.textContent = `${roundCount}`;
  result.textContent = resultText + ` (You: ${humanScore} | Computer: ${computerScore})`;

  if (roundCount === 5) {
    if (humanScore > computerScore) {
      result.textContent = `Game over! You won ${humanScore} to ${computerScore}.`;
    } else if (computerScore > humanScore) {
      result.textContent = `Game over! Computer won ${computerScore} to ${humanScore}.`;
    } else {
      result.textContent = `Game over! It's a tie ${humanScore} - ${computerScore}.`;
    }
  }
};


rBtn.addEventListener('click', () => handleClick('rock'));
pBtn.addEventListener('click', () => handleClick('paper'));
sBtn.addEventListener('click', () => handleClick('scissors'));
start.addEventListener('click', () => {
  humanScore = 0;
  computerScore = 0;
  roundCount = 0;
  result.textContent = "Game reset! Try your luck!";
  humanChoice.textContent = "You choose";
  computerChoice.textContent = "Computer choose";
  round.textContent = "";
})