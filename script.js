let getComputerChoice = function getRandom() {
    return Math.random()*10;
}

let computerChoice = getComputerChoice();

if (computerChoice <= 3.33) {
    computerChoice = "Rock"
} else if (computerChoice > 3.33 && computerChoice < 6.66) {
    computerChoice = "Paper"
} else {
    computerChoice = "Scissors"
}

function getHumanChoice() {
    
}

HumanChoice = prompt("Rock, Paper or Scissors?")