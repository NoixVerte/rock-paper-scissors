let humanScore = 0;
let computerScore = 0;
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
        default:
            console.log("Couldn't choose!");
    } 
}

function getHumanChoice() {
    let choice;
    do {
        choice = (prompt("Choose Rock, Paper, or Scissors!"));
        choice = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase()
    } while (choice != "Rock" && choice != "Paper" && choice != "Scissors");
    return choice;
}

function playRound(humanChoice, computerChoice) {
    console.log(`You chose ${humanChoice}, computer chose ${computerChoice}`);
    switch(outcomes[choices.indexOf(humanChoice)][choices.indexOf(computerChoice)])  {
        case -1:
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
            break;
        case 0:
            console.log(`It's a tie! You both chose ${humanChoice}!`);
            break;
        case 1:
            console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
            humanScore++;
            break;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        console.log(`-----Round ${i + 1}!-----`);
        playRound(getHumanChoice(), getComputerChoice());
    }
    console.log(`Final score:
    Your score: ${humanScore}
    Computer's score: ${computerScore}`);
    if (humanScore > computerScore) console.log("Congratilations! You win!");
    else if (humanScore < computerScore) console.log("Unfortunately, you lost.");
    else console.log("Anticlimactic! It's a tie.");
}

playGame();