let playerScore = 0
let computerScore = 0
// let rounds = 5;
let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissors = document.getElementById("scissors")
let btn = document.querySelectorAll('.btn')
let playBtnContainer = document.getElementsByClassName("play-btns")
let container = document.querySelector(".container")
let restartBlock = document.getElementById("restart-block")
let restartBtn = document.getElementById("restart")
let computerScores =  document.getElementById("computerScore")
let playerScores = document.getElementById("playerScore")
// let playerTurn = btn.forEach((button)=>button.addEventListener("click",()=>{ let buttonId = button.id
//     console.log(buttonId)}))

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// function playerPlay() {
//     const input = prompt("Enter: ").toLowerCase();
//     return input;
// }
let div = document.createElement("div")
div.classList.add("results")
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        div.innerText="It's a draw! You both chose " + playerSelection
        // container.appendChild(div)
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ) {
        // document.getElementById("playerScore").innerText = playerScore++
        div.innerText= "You win! " + playerSelection + " beats " + computerSelection
        // container.appendChild(div)

        playerScores.innerText = playerScore++
    } else {
       computerScores.innerText =  computerScore++
        div.innerText=  "You lose! " + computerSelection + " beats " + playerSelection
        // container.appendChild(div)

    }
    container.appendChild(div)
}
// document.getElementById("playerScore").innerText = playerScore++
restartBlock.style.display = "none";
btn.forEach((button)=>button.addEventListener("click",()=>{
    if(playerScore ==2){
        div.textContent = `You WIN with ${playerScore}, Computer Looses with ${computerScore}`
        restartBlock.style.display = "flex";
    }
    else if (computerScore ==2){
        div.textContent = `You Loose with ${playerScore}, Computer WINS with ${computerScore}`
        restartBlock.style.display = "flex";
    }else{
        let buttonId = button.id
    playRound(buttonId.toString(), computerPlay())
    }

    div.appendChild(div)


    }))
let restart = () =>{
    playerScore = 0
    computerScore = 0
    playerScores.innerText = 0
    computerScores.innerText = 0
    restartBlock.style.display = "none";
    div.innerText = ""
    // restartBlock.classList.add("restart-block")
    // restartBlock.classList.remove("restart-hide")
}

restartBtn.addEventListener("click",restart)









// function playerPlay(player1){
//     let playerChoice = player1
//     let computerChoice = computerPlay()
//     let result = playRound(playerChoice, computerChoice)
//     console.log(result)

// }
// console.log(playerPlay())
// const playerSelection = playerPlay();
// const computerSelection = computerPlay();
// const result = playRound(playerSelection, computerSelection);
// btn.addEventListener("click",()=>console.log(playRound))
// function game() {
//     for (let i = 0; i < rounds; i++) {
//         const playerSelection = playerPlay();
//         const computerSelection = computerPlay();
//         const result = playRound(playerSelection, computerSelection);
//         console.log(result);
//     }

//     // After the game ends, display the final scores
//     console.log("Final Scores:");
//     console.log("You: " + playerScore);
//     console.log("Computer: " + computerScore);
// }

// Start the game
// game();
