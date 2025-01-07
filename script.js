let humanScore = 0;
let computerScore = 0;

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
    let choice = (prompt("Choose Rock, Paper, or Scissors!"));
    return choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    console.log(`You chose ${humanChoice}, computer chose ${computerChoice}`);
    if ((humanChoice === "Rock" && computerChoice === "Rock") || (humanChoice === "Paper"&& computerChoice === "Paper") || (humanChoice === "Scissors" && computerChoice === "Scissors")) {
        console.log(`It's a tie! You both chose ${humanChoice}`);
    } else {
        switch (humanChoice) {
            case "Rock":
                switch(computerChoice) {
                    case "Paper": 
                        console.log("You lose! Paper beats rock!");
                        computerScore++;
                        break;
                    case "Scissors":
                        console.log("You win! Rock beats scissors!");
                        humanScore++;
                        break;
                }
                break;
            case "Paper":
                switch(computerChoice) {
                    case "Rock": 
                        console.log("You win! Paper beats rock!");
                        humanScore++;
                        break;
                    case "Scissors":
                        console.log("You lose! Scissors beat paper!");
                        computerScore++;
                        break;
                }
                break;
            case "Scissors":
                switch(computerChoice) {
                    case "Rock": 
                        console.log("You lose! Rock beats scissors!");
                        computerScore++;
                        break;
                    case "Paper":
                        console.log("You win! Scissors beat paper!");
                        humanScore++;
                        break;
                }
                break;
        }
    }
}

playRound(getHumanChoice(), getComputerChoice());
console.log(`Your score: ${humanScore}, computer's score: ${computerScore}`);