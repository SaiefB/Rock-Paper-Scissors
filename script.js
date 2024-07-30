// Random Number Generator
let getComputerChoice = function getRandom() {
    return Math.random()*10;
}

// Assign computerChoice to be equivalent ot getComputerChoice()
let computerChoice = getComputerChoice();

// Function to assign number values to RPS values
if (computerChoice <= 3.33) {
    computerChoice = "Rock"
} else if (computerChoice > 3.33 && computerChoice < 6.66) {
    computerChoice = "Paper"
} else {
    computerChoice = "Scissors"
};


// Assigns user input to getHumanChoice()
function getHumanChoice() {
    return prompt("Rock, Paper or Scissors?")
}

// Player Score Variables
