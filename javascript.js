const human_winner = document.querySelector('.human-icon');
const robot_winner = document.querySelector('.robot-icon');
const userChoice = document.querySelectorAll('button');
let text = document.querySelectorAll('span')[0];
let human_score = 0;
let robot_score = 0;

const rock = document.getElementsByClassName('rock-icon')[0];
const paper = document.getElementsByClassName('paper-icon')[0];
const scissors = document.getElementsByClassName('scissors-icon')[0];

rock.addEventListener('click', function() {
    playRound('rock', getComputerChoice())
});

paper.addEventListener('click', function() {
    playRound('paper', getComputerChoice())
});

scissors.addEventListener('click', function() {
    playRound('scissors', getComputerChoice())
});

function getComputerChoice() {
    let computerChoice = Math.ceil(Math.random() * 3);
    if (computerChoice == 0) {
        return "rock"
    } else if (computerChoice == 1) {
        return "scissors"
    } else {
        return "paper"
    }
}

function playRound(userChoice, compChoice) {
    getComputerChoice()
    robot_winner.style.backgroundColor = "#4a4f57";
    human_winner.style.backgroundColor = "#4a4f57";
    if ((compChoice == "rock" && userChoice == "scissors") || (compChoice === "scissors" && userChoice === "paper") || (compChoice === "paper" && userChoice == "rock")) {
        robot_score++;
        robot_winner.style.backgroundColor = "white";
        text.textContent = `Your opponnent wins! Current score is ${human_score}:${robot_score}`;
        } else if (compChoice == userChoice) {
            robot_winner.style.backgroundColor = "white";
            human_winner.style.backgroundColor = "white";
            text.textContent = `It's a tie! Current score is ${human_score}:${robot_score}`;
    } else {
        human_score++;
        human_winner.style.backgroundColor = "white";
        text.textContent = `You beat! Current score is ${human_score}:${robot_score}`;
    }

    if (robot_score == 5) {
        text.textContent = "Oops... You lost this game."
        text.style.fontSize = "40px";
        robot_score = 0;
        human_score = 0;
          setTimeout(function () {
                location.reload()
            }, 2000);
    } else if (human_score == 5) {
        text.textContent = "Yay! You won this game."
        text.style.fontSize = "40px";
        human_score = 0;
        robot_score = 0;
            setTimeout(function () {
                location.reload()
            }, 2000);
    }
}

