let choiceArray = ["rock", "paper", "scissors"];



//selection variables
let playerSelection;
let computerSelection;
let result
const computerChoice = document.getElementById("comp-choice");

// get computer selection
function getComputerChoice() {
    const random = choiceArray[Math.floor(Math.random() * choiceArray.length)]; 
    computerSelection = random;

    computerChoice.innerHTML = computerSelection;
}


//event listeners 
const buttonRock = document.getElementById("rock");
const buttonPaper = document.getElementById("paper");
const buttonScissors = document.getElementById("scissors"); 
const playerChoice = document.getElementById("player-choice");
const gameResults = document.getElementById("result");
  

buttonRock.addEventListener("click", function(e) {
   
    playerSelection = e.target.id;
    playerChoice.innerHTML = playerSelection;
    getComputerChoice();
    getResult();
 });
buttonPaper.addEventListener("click", function(e) {
    
    playerSelection  = e.target.id;
    playerChoice.innerHTML = playerSelection;
    getComputerChoice();
    getResult();

});
buttonScissors.addEventListener("click", function(e) {
    playerSelection = e.target.id;
    playerChoice.innerHTML = playerSelection;
    getComputerChoice();
    getResult();
});



  
function getResult() {
   
 if(playerSelection === computerSelection) {
       tieScore++;
       result = `Its a Tie! you both picked ${playerSelection}`;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        result = "You Win! rock beats scissors";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        result = "You Win! paper beats rock";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        result = "You Win! scissors beats paper";
    } else {
        computerScore++;
        result = `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
     gameResults.innerHTML = result

}
console.log(playerSelection)
console.log(computerSelection)
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;



function game() {
    
for (let i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice().toLowerCase();
    const playerSelection = prompt("Choose Rock, Paper or Scissors!").toLowerCase();
 
    playRound(playerSelection, computerSelection);


console.log("you choose " + playerSelection);
console.log("The computer choose " + computerSelection);

    
    
    if(playerSelection === computerSelection) {
        console.log("It's a tie this round");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You win this round! rock beats scissors");
    } else if  (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You win this round! paper beats rock");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You win this round! scissors beats paper");
    } else {
        console.log(`You lose this round! ${computerSelection} beats ${playerSelection}`); 
    }

    
console.log("Your score is " + playerScore);
console.log("Opponent's score is " + computerScore);
 
}

if (playerScore > computerScore) {
     return "You Win this game.";
} else if (playerScore === computerScore) {
       return "This game is a tie.";
} else{
     return "You Lose this game.";
}

}



    
   















// console.log(playerSelection);
// console.log(computerSelection);





