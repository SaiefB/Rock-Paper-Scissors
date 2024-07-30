let getComputerChoice = function getRandom() {
    return Math.random()*10;
}

let computerChoice = getComputerChoice();

if (computerChoice <= 3.33) {
    computerChoice = "rock"
} else if (computerChoice > 3.33 && computerChoice < 6.66) {
    computerChoice = "paper"
} else {
    computerChoice = "scissors"
}

console.log(computerChoice)