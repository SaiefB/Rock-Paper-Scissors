// Random Number Generator
let getComputerChoice = function() {
    return Math.random() * 10;
}



// Assign computerChoice to be equivalent to getComputerChoice()
let computerChoice = getComputerChoice();



// Function to assign number values to RPS values
if (computerChoice <= 3.33) {
    computerChoice = "Rock";
} else if (computerChoice > 3.33 && computerChoice < 6.66) {
    computerChoice = "Paper";
} else {
    computerChoice = "Scissors";
}

console.log("Computer picked: " + computerChoice);



// Assigns user input to getHumanChoice()
function getHumanChoice() {
    return prompt("Rock, Paper or Scissors?").toLowerCase();
}



// Get human choice once
const humanSelection = getHumanChoice();
console.log("Player picked: " + humanSelection.charAt(0).toUpperCase() + humanSelection.slice(1));



// Player Score Variables
let humanScore = 0;
let computerScore = 0;



// Play a single round
function playRound(humanChoice, cpuChoice) {
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);

    if (humanChoice === cpuChoice) {
        console.log("It's a tie!");
    } else if ((humanChoice === "Rock" && cpuChoice === "Paper") ||
               (humanChoice === "Paper" && cpuChoice === "Scissors") ||
               (humanChoice === "Scissors" && cpuChoice === "Rock")) {
        console.log("You Lose!");
        computerScore++;
    } else {
        console.log("You win!");
        humanScore++;
    }
    
    console.log(`Scores - Human: ${humanScore}, Computer: ${computerScore}`);
}

playRound(humanSelection, computerChoice);
