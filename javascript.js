
const getComputerChoice = () => {
    const computerChoice = function randomNumber() {
        return (Math.floor(Math.random() * 3)) + 1;
    }
    const number = computerChoice();
    if (number == 1) {
        console.log("rock");
        return "rock";
    } else if (number == 2) {
        console.log("paper");
        return "paper";
    } else if (number == 3) {
        console.log("scissors");
        return "scissors";
    }
}

const getHumanChoice = () => {
    const humanChoice = prompt("Enter your choice:");
    console.log(humanChoice);
    return humanChoice;
};



const playGame = () => {
    let humanScore = 0;
    let computerScore = 0;

    const playRound = (humanSelection, computerSelection) => {
        if (humanSelection == "rock" && computerSelection == "scissors") {
            return "Human win";
        } else if (humanSelection == "paper" && computerSelection == "rock") {
            return "Human win";
        } else if (humanSelection == "scissors" && computerSelection == "paper") {
            return "Human win";
        } else if (computerSelection == "rock" && humanSelection == "scissors") {
            return "Computer win";
        } else if (computerSelection == "paper" && humanSelection == "rock") {
            return "Computer win";
        } else if (computerSelection == "scissors" && humanSelection == "paper") {
            return "Computer win";
        } else {
            return "Draw";
        }
    };

    for (let i = 0; i < 5; ++i) {
        const humanSelection = getHumanChoice().toLowerCase();
        const computerSelection = getComputerChoice();
        let result = playRound(humanSelection, computerSelection);
        if (result == "Human win") {
            humanScore++;
        } else if (result == "Computer win") {
            computerScore++;
        } else {
            console.log("Draw");
        }
    }

    console.log(`Your score is ${humanScore}, computer score is ${computerScore}`);
}
