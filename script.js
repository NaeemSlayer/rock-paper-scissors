// function to get computers choice randomly
function getComputerChoice() {
    const choices = [ "Rock","Paper", "Scissors"];
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
            return 'You Win!' + playerSelection + 'beats' + computerSelection;
        } else if (playerSelection === computerSelection) {
            return 'It\'s a tie';
        } else {
            return 'You Lose!' + computerSelection + 'beats' + playerSelection;
        }
}