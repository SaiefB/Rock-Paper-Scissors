// Variables
let humanScore = 0;
let computerScore = 0;
const winningScore = 5;

const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");
const scissorsBtn = document.querySelector(".scissorsBtn");
const resultsContainer = document.querySelector(".results");
const finalScoresContainer = document.querySelector(".finalScores");

// Random Number Generator
function getComputerChoice() {
    return Math.random() * 10;
}

// Function to assign number values to RPS values for computer
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

rockBtn.addEventListener("click", () => {
    const humanSelection = "Rock";
    const computerChoice = computerChoiceSelector();
    playRound(humanSelection, computerChoice);
    updateResults(humanSelection, computerChoice);
    checkGameEnd();
});

paperBtn.addEventListener("click", () => {
    const humanSelection = "Paper";
    const computerChoice = computerChoiceSelector();
    playRound(humanSelection, computerChoice);
    updateResults(humanSelection, computerChoice);
    checkGameEnd();
});

scissorsBtn.addEventListener("click", () => {
    const humanSelection = "Scissors";
    const computerChoice = computerChoiceSelector();
    playRound(humanSelection, computerChoice);
    updateResults(humanSelection, computerChoice);
    checkGameEnd();
});

// Single game mechanic
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

function updateResults(humanSelection, computerChoice) {
    resultsContainer.textContent = `Player picked: ${humanSelection} and Computer picked: ${computerChoice}`;
}

function checkGameEnd() {
    if (humanScore >= winningScore || computerScore >= winningScore) {
        displayFinalScores();
        resetGame();
    }
}

// Function to display the final scores
function displayFinalScores() {
    finalScoresContainer.textContent = `Final Scores - Human: ${humanScore}, Computer: ${computerScore}`;

    if (humanScore > computerScore) {
        finalScoresContainer.textContent += ' You are the overall winner!';
    } else if (computerScore > humanScore) {
        finalScoresContainer.textContent += ' The computer is the overall winner!';
    } else {
        finalScoresContainer.textContent += ' The game is a tie overall!';
    }
}

// Function to reset the game
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    resultsContainer.textContent = '';
    setTimeout(() => finalScoresContainer.textContent = '', 5000); // Clear final scores after 5 seconds
}

document.addEventListener("DOMContentLoaded", () => {
    if (!rockBtn || !paperBtn || !scissorsBtn || !resultsContainer || !finalScoresContainer) {
        console.error("Some buttons or results container not found in the DOM.");
        return;
    }
});