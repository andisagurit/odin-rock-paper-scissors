// function to get computer choice
function getComputerChoice() {
  let randNum = Math.floor(Math.random() * 3);
  let computerChoice;

  switch (randNum) {
    case 0:
      computerChoice = 'rock';
      break;
    case 1:
      computerChoice = 'paper';
      break;
    case 2:
      computerChoice = 'scissors';
      break;
  }
  console.log("Computer Choice: " + computerChoice.toUpperCase());
  return computerChoice;
}

// function to get player choice
function getPlayerChoice() {
  let playerInput = prompt("Rock, Paper or Scissors?");
  let playerChoice = playerInput.toLowerCase();

  console.log("Your Choice: " + playerChoice.toUpperCase())
  return playerChoice;
}

// game logic
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a Tie! Play again!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
      return "You lose! Paper beats Rock!";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
      return "You win! Rock beats Scissors!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
      return "You win! Paper beats Rock!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
      return "You lose! Scissors beats Paper!";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
      return "You lose! Rock beats Scissors!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
      return "You win! Scissors beats paper!";
  } else {
      return "Your input is Invalid. Please try again."
  }
}

// determine winner after five rounds
function game() {
  let computerScore = 0;
  let playerScore = 0;

  for (i = 0; i < 5; i++) {
    const result = playRound(getPlayerChoice(), getComputerChoice());
    console.log(result);

    if (result.includes("win")) {
      playerScore++;
      console.log("Computer: " + computerScore + " | " + "You: " + playerScore);
    } else if (result.includes("lose")) {
      computerScore++;
      console.log("Computer: " + computerScore + " | " + "You: " + playerScore);
    }
  }

  console.log("OVERALL SCORE ▸ Computer: " + computerScore + " | " + "You: " + playerScore);

  if (playerScore > computerScore) {
    console.log("GGs all around! You win the game!");
  } else if (playerScore < computerScore) {
      console.log("That sucks! You lose the game!");
  } else {
      console.log("Tie Round! Play again!");
  }
}
game();