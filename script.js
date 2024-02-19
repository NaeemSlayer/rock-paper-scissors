// function to get computers choice randomly
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// function to play a single round of rps
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (
        (playerSelection === 'rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'paper' && computerSelection === 'Rock') ||
        (playerSelection === 'scissors' && computerSelection === 'Paper')
    ) {
        return 'You Win! ' + playerSelection + ' beats ' + computerSelection;
    } else if (playerSelection === computerSelection) {
        return 'It\'s a tie';
    } else {
        return 'You Lose! ' + computerSelection + ' beats ' + playerSelection;
    }
}

// function to play the game for five rounds
function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your choice (Rock, Paper or Scissors)");
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.includes('Win')) {
            playerScore++;
        } else if (result.includes('Lose')) {
            computerScore++;
        }
    }

    // determine the overall winner
    if (playerScore > computerScore) {
        console.log("Congratulations! You win the game...")
    } else if (playerScore < computerScore) {
        console.log("Sorry! You lost the game. Try again...")
    } else {
        console.log("It's a tie game!")
    }
}

// Start the game
playGame();
