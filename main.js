function game() {//I use this function to play  rounds and track scores and to report at end.




    function getComputerChoice() {
        let choice = ["rock", "paper", "scissors"];

        //get random index from choice array
        let randomIndex = Math.floor(Math.random() * choice.length)

        //use random index to pick item from the array
        let item = choice[randomIndex];
        return item;
    }

    let computerSelection = getComputerChoice();
    
    var playerSelection = "";//we letter use this inside playRound function to recive input repetively.

    var userScore = 0;// we only add 1 when user win if its draw nothing added.

    function playRound(playerSelection, computerSelection) {

        playerSelection = prompt("choose Rock, paper, or Scissors: ").toLocaleLowerCase();

        if (playerSelection === computerSelection) {
            result = "It's a Draw.";
        }

        else if (playerSelection === "rock" && computerSelection === "paper") {
            result = "You Lose!,Paper beats Rock.";
            
        }
        else if (playerSelection === "rock" && computerSelection === "scissors") {
            
            result = "You Win!,Rock beats Scissors.";
            userScore++;
        }
        else if (playerSelection === "paper" && computerSelection === "rock") {

            result = "You Win!,Paper beats Rock.";
            userScore++;

        }
        else if (playerSelection === "paper" && computerSelection === "scissors") {
            result = "You Lose!,Scissors beats Paper.";
        }
        else if (playerSelection == "scissors" && computerSelection === "rock") {
            result = "You Lose!,Rock beats scissors.";
        }
        else if (playerSelection === "scissors" && computerSelection === "paper") {

            result = "You Win!,Scissors beats paper.";
            userScore++;
        }
        else {
            result = " Please, enter proper word again!";
        }
        console.log("you choose " + playerSelection);
        console.log("computer choose " + computerSelection);
        return result;
    }
console.log("On Round 1 " + playRound(playerSelection, computerSelection));
console.log("On Round 2 " + playRound(playerSelection, computerSelection));
console.log("On Round 3 " + playRound(playerSelection, computerSelection));
console.log(`Your total score is ${userScore}.`);
}

game(); //we call this function to play 3 rounds

