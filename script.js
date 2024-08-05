// Random Number Generator
function getComputerChoice() {
    return Math.random() * 10;
}

// Function to assign number values to RPS values
function computerChoiceSelector() {
    let computerChoice = getComputerChoice();
    if (computerChoice <= 3.33) {
        return "Rock";
    } else if (computerChoice > 3.33 && computerChoice < 6.66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

// Assigns user input to getHumanChoice()
/* function getHumanChoice() {
    return prompt("Rock, Paper or Scissors?").toLowerCase();
} */

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

// Function to play the game for 5 rounds
function playGame() {
    /* for (let i = 0; i < 5; i++) {
        const computerChoice = computerChoiceSelector();
        console.log("Computer picked: " + computerChoice);
        
        const humanSelection = getHumanChoice();
        console.log("Player picked: " + humanSelection.charAt(0).toUpperCase() + humanSelection.slice(1));

        playRound(humanSelection, computerChoice);
    } */

    // Display final scores
    console.log('Final Scores:');
    console.log(`Human: ${humanScore}`);
    console.log(`Computer: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log('You are the overall winner!');
    } else if (computerScore > humanScore) {
        console.log('The computer is the overall winner!');
    } else {
        console.log('The game is a tie overall!');
    }
}


const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");
const scissorsBtn = document.querySelector(".scissorsBtn");
const resultsContainer = document.querySelector(".results");

rockBtn.addEventListener("click", () => {
    const humanSelection = "Rock";
    const computerChoice = computerChoiceSelector();
    playRound(humanSelection, computerChoice);
    resultsContainer.textContent = `Player picked: ${humanSelection} and Computer picked: ${computerChoice}`;
    console.log(`Player picked: ${humanSelection}`);
    console.log(`Computer picked: ${computerChoice}`);
});

paperBtn.addEventListener("click", () => {
    const humanSelection = "Paper";
    const computerChoice = computerChoiceSelector();
    playRound(humanSelection, computerChoice);
    resultsContainer.textContent = `Player picked: ${humanSelection} and Computer picked: ${computerChoice}`;
    console.log(`Player picked: ${humanSelection}`);
    console.log(`Computer picked: ${computerChoice}`);
});

scissorsBtn.addEventListener("click", () => {
    const humanSelection = "Scissors";
    const computerChoice = computerChoiceSelector();
    playRound(humanSelection, computerChoice);
    resultsContainer.textContent = `Player picked: ${humanSelection} and Computer picked: ${computerChoice}`;
    console.log(`Player picked: ${humanSelection}`);
    console.log(`Computer picked: ${computerChoice}`);
});





// Start the game
playGame();
