//dictionary to put user pick with same image
const userchoices={
    "Rock":"images/rock.jpg",
    "Paper" : "images/paper.jpg",
    "Scissors" : "images/scissors.jpg"
}
let computerSelection;
let playerSelection;
let results;
var userScore = 0;
var computerScore=0;

// get the choice by click event on images 
const userPicks=(hand)=>{
    
    const choices = document.querySelector(".choicebuttons")
    
        //after user click hide the buttons 
       
        choices.style.display="none"

        //after the user clicks show the results
        const result = document.querySelector(".showresults")
         
        result.style.display='flex'

        //after the user picks hand show what picks
       

    document.getElementById('userpicksimg').src=userchoices[hand];
    
   playerSelection=hand;
   computerSelection=getComputerChoice();

  //DOM method to show result and  score based on player and computer choice
    const playerChoice = document.getElementById('playerchoose');
         playerChoice.textContent=`you picked ${playerSelection}`;

    const compChoice = document.getElementById("compchoose"); 
           compChoice.textContent=`computer picked ${computerSelection}`; 

    const allResult = document.getElementById('currentresult');
           allResult.textContent=playRound(playerSelection,computerSelection);
        
    const playerScore = document.getElementById("playerscore");
       playerScore.textContent=`${userScore}`;

    const compScore = document.getElementById("computerscore");
       compScore.textContent=`${computerScore}`;
  
   }

    const getComputerChoice=()=> {
            let choice = ["Rock", "Paper", "Scissors"];

            //get random index from choice array
            let randomIndex =choice[Math.floor(Math.random() * 3)];

            //use random index to pick item from the array
            //let item = choice[randomIndex];
            //pick the image for computer
        
            document.getElementById("computerpickimg").src=userchoices[randomIndex];
        
            return randomIndex
    }

   
   
   
   
    function playRound(playerSelection, computerSelection) {

        

        if (playerSelection === computerSelection) {
            result = "It's a Draw.";
        }

        else if (playerSelection === "Rock" && computerSelection === "Paper") {
           
            result = "You Lose!,Paper beats Rock.";
            computerScore++;
            
        }
        else if (playerSelection === "Rock" && computerSelection === "Scissors") {
            
            result = "You Win!,Rock beats Scissors.";
            userScore++;
        }
        else if (playerSelection === "Paper" && computerSelection === "Rock") {

            result = "You Win!,Paper beats Rock.";
            userScore++;

        }
        else if (playerSelection === "Paper" && computerSelection === "Scissors") {
            result = "You Lose!,Scissors beats Paper.";
            computerScore++;
        }
        else if (playerSelection == "Scissors" && computerSelection === "Rock") {
            result = "You Lose!,Rock beats scissors.";
            computerScore++;
        }
        else if (playerSelection === "Scissors" && computerSelection === "Paper") {

            result = "You Win!,Scissors beats paper.";
            userScore++;
        }
        
       
        return result;
    }


const playAgain=()=>{
    
    const choices = document.querySelector(".choicebuttons")
    
        //after user click hide the buttons 
       console.log(choices)
        choices.style.display="flex"

        //after the user clicks show the results
        const result = document.querySelector(".showresults");
         
        result.style.display='none'

       if (userScore>=5){
        
        window.alert("Congratulations! You Won 5 rounds!");
        location.reload();
       } 
       else if(computerScore>=5){
        
        window.alert("you lost the first  5 rounds try again");
        location.reload();
       }

}



