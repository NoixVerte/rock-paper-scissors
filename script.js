let humanScore = 0;
let computerScore = 0;
const headerText = document.querySelector("#header-text")
const humanScoreText = document.querySelector("#humans-score");
const computerScoreText = document.querySelector("#computers-score");
const btnRock = document.querySelector("#Rock");
const btnPaper = document.querySelector("#Paper");
const btnScissors = document.querySelector("#Scissors");
const buttons = document.querySelectorAll("button");
const choices = ["Rock", "Paper", "Scissors"];
const outcomes = [[0, -1, 1], [1, 0, -1], [-1, 1, 0]];

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1;
    switch (num) {
        case 1 :
            return "Rock";
        case 2 :
            return "Paper";
        case 3 :
            return "Scissors";
    } 
}

function playRound(humanChoice, computerChoice) {
    if (humanScore == 5 || computerScore == 5) {
        humanScore =  0;
        computerScore = 0;
    }
    switch(outcomes[choices.indexOf(humanChoice)][choices.indexOf(computerChoice)])  {
        case -1:
            headerText.textContent = 
                `You chose ${humanChoice}, computer chose ${computerChoice}. You lose the round!`;
            computerScore++;
            break;
        case 0:
            headerText.textContent = 
                `You chose ${humanChoice}, computer chose ${computerChoice}. This round is a tie!`;
            break;
        case 1:
            headerText.textContent = 
                `You chose ${humanChoice}, computer chose ${computerChoice}. You win the round!`;
            humanScore++;
            break;
    }
    humanScoreText.textContent = humanScore.toString();
    computerScoreText.textContent = computerScore.toString();
    if (humanScore == 5) {
        headerText.textContent = headerText.textContent.replace("You win the round!", "");
        headerText.textContent += ` You won the game! Congratulations!`;
    }
    if (computerScore == 5) {
        headerText.textContent = headerText.textContent.replace("You lose the round!", "");
        headerText.textContent += ` You lost the game. Try again!`;
    }
}

buttons.forEach(button => {
    let humanChoice = button.id;
    button.addEventListener("click", () => {
        playRound(humanChoice, getComputerChoice());
    })
});