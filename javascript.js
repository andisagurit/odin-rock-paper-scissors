//get computer choice
function getComputerChoice() {
	let rock = "Rock";
  	let paper = "Paper";
  	let scissors = "Scissors";
  	let getRandomValue = Math.random();

  	if (getRandomValue <= 0.33) {
      	return rock;
  	} else if (getRandomValue <= 0.66) {
      	return paper;
  	} else {
      	return scissors;
  	}
}

//determine winner after five rounds
function game() {
	let computerScore = 0;
	let playerScore = 0;
	let gameWinner = "";
	let audio = new Audio("https://www.fesliyanstudios.com/play-mp3/779");

	const buttons = document.querySelectorAll('img');
	buttons.forEach((img) => {
		img.addEventListener('click', () => {
			playerSelection = img.className;
			const computerSelection = getComputerChoice();
			battleWinText.textContent = (playRound(playerSelection, computerSelection));
			playerWinText.textContent = "Player Scores: " + playerScore;
			computerWinText.textContent = "Computer Scores: " + computerScore;
			audio.play();
			endGame();
		})
	})

	function playRound(playerSelection, computerSelection) {
		let tie = "It's a Tie! You both selected " + playerSelection + ".";
		let paperBeatRock = "You Win! " + playerSelection + " Beats " + computerSelection + ".";
		let scissorsBeatPaperLoss = "You lose! " + playerSelection + " Beats " + computerSelection + ".";
		let paperBeatRockLoss = "You lose! " + playerSelection + " Beats " + computerSelection + ".";
		let rockBeatScissors = "You Win! " + playerSelection + " Beats " + computerSelection + ".";
		let rockBeatScissorsLoss = "You lose! " + playerSelection + " Beats " + computerSelection + ".";
		let scissorsBeatPaper = "You Win! " + playerSelection + " Beats " + computerSelection + ".";

		if (playerSelection === computerSelection) {
			return tie;
		} else if ((playerSelection === "Paper") && (computerSelection === "Rock")) {
			playerScore++;
			return paperBeatRock;
		} else if ((playerSelection === "Paper") && (computerSelection === "Scissors")) {
			computerScore++;
			return scissorsBeatPaperLoss;
		} else if ((playerSelection === "Rock") && (computerSelection === "Paper")) {
			computerScore++;
			return paperBeatRockLoss;
		} else if ((playerSelection === "Rock") && (computerSelection === "Scissors")) {
			playerScore++;
			return rockBeatScissors;
		} else if ((playerSelection === "Scissors") && (computerSelection === "Rock")) {
			computerScore++;
			return rockBeatScissorsLoss;
		} else {
			playerScore++;
			return scissorsBeatPaper;
		}
	}

  	// determine who won to five points first
  	function endGame() {
		let audioWin = new Audio("https://www.fesliyanstudios.com/play-mp3/4251");
		let audioLose = new Audio("https://www.fesliyanstudios.com/play-mp3/4257");

		if (playerScore == 5) {
            audioWin.play();
			gameWinner = "You won the game!";
		  	gameWinText.textContent = gameWinner;

		  	//disable game buttons
		  	document.getElementById("1").style.pointerEvents = "none";
		  	document.getElementById("2").style.pointerEvents = "none";
		  	document.getElementById("3").style.pointerEvents = "none";
	
		  	//create new DOM button to replay
		  	const playAgainButton = document.createElement("button");
		  	playAgainButton.textContent = "Play Again?";
		  	winnersDiv.appendChild(playAgainButton);
  
		  	//if clicked, reload page
		  	playAgainButton.addEventListener('click', () => { location.reload(); })
	  	} else if (computerScore == 5) {
            audioLose.play();
		  	gameWinner = "The Computer Wins.";
		  	gameWinText.textContent = gameWinner;

		  	//disable game buttons
		  	document.getElementById("1").style.pointerEvents = "none";
		  	document.getElementById("2").style.pointerEvents = "none";
		  	document.getElementById("3").style.pointerEvents = "none";
	
		  	//create new DOM button to replay
		  	const playAgainButton = document.createElement("button");
		  	playAgainButton.textContent = "Play Again?";
		  	winnersDiv.appendChild(playAgainButton);
	
		  	//if clicked, reload page
		  	playAgainButton.addEventListener('click', () => { location.reload() ;})
		}   
	}

  	//create div DOM for all results
  	const scoresHere = document.querySelector("#scoresDiv");
  	const resultsDiv = document.createElement("div");
  	resultsDiv.style.marginTop = "50px";
  	scoresHere.appendChild(resultsDiv);
  
  	//create player win tracking DOM 
  	const playerWinText = document.createElement("p");
  	playerWinText.textContent = "Player Scores: " + playerScore;
  	resultsDiv.appendChild(playerWinText);
  
  	//create computer win tracking DOM
  	const computerWinText = document.createElement("p");
  	computerWinText.textContent = "Computer Scores: " + computerScore;
  	resultsDiv.appendChild(computerWinText);
  
  	//create battle win text DOM
  	const winnersDiv = document.querySelector("#winnersDiv");
  	const battleWinText = document.createElement("p");
  	battleWinText.style.color = "#ffffff";
	battleWinText.style.fontSize = "18px";
  	winnersDiv.appendChild(battleWinText);
      
  	//create game win text DOM
  	const gameWinText = document.createElement("p");
  	gameWinText.style.color = "#ffa500";
	gameWinText.style.fontSize = "25px";
	gameWinText.style.marginTop = "40px";
  	gameWinText.textContent = gameWinner;
  	winnersDiv.appendChild(gameWinText);
}
game();