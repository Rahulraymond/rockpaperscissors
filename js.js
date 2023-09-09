let playerScore = 0;
let computerScore = 0;
let rounds = 5;

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playerPlay() {
    const input = prompt("Enter: ").toLowerCase();
    return input;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a draw! You both chose " + playerSelection;
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else {
        computerScore++;
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}

function game() {
    for (let i = 0; i < rounds; i++) {
        const playerSelection = playerPlay();
        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);
        console.log(result);
    }

    // After the game ends, display the final scores
    console.log("Final Scores:");
    console.log("You: " + playerScore);
    console.log("Computer: " + computerScore);
}

// Start the game
game();
