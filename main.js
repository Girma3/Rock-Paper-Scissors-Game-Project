function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];

    //get random index from choice array
    let randomIndex = Math.floor(Math.random() * choice.length)

    //use random index to pick item from the array
    let item = choice[randomIndex];
    return item;
}
let computerSelection = getComputerChoice();
let user = prompt("choose Rock, paper, or Scissors: ");
let playerSelection = user.toLocaleLowerCase();

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        result = "It's a Draw.";
    }

    else if (playerSelection === "rock" && computerSelection === "paper") {
        result = "You Lose!,Paper beats Rock.";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        result = "You Win!,Rock beats Scissors";
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        result = "You Win!,Paper beats Rock.";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        result = "You Lose!,Scissors beats Paper.";
    }
    else if (playerSelection == "scissors" && computerSelection === "rock"){
        result = "You Lose!,Rock beats scissors.";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        result = "You Win!,Scissors beats paper.";
    }
    else {
        result = " Please, enter proper word again!";
    }

    return result;
}
console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection,computerSelection));