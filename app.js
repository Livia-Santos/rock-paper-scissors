// Cache the DOM
let userScore = 0;
let computerScore = 0;

// DOM variables
const userScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");
const scoreBoardEl = document.querySelector(".score-board");
const scoreBoardUserEl = document.querySelector(".score__board__badge-left")
const resultEl = document.querySelector(".result__copy");
const rockEl = document.getElementById("r");
const paperEl = document.getElementById("p");
const scissorsEl = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === 'r') return "Rock";
    if (letter === 'p') return "Paper";
    return "Scissors"
}

function win(user, computer) {
    userScore++;
    userScoreEl.innerHTML = userScore;
    computerScoreEl.innerHTML = computerScore;
    // scoreBoardUserEl.style.backgroundColor = "green";
    resultEl.innerHTML = `${convertToWord(user)} ${("(user)").fontsize(4)} beats ${convertToWord(computer)}${("(comp)").fontsize(4)} You win!\u{1F525}`
}

function lose(user, computer) {
    computerScore++;
    userScoreEl.innerHTML = userScore;
    computerScoreEl.innerHTML = computerScore;
    // scoreBoardUserEl.style.backgroundColor = "green";
    resultEl.innerHTML = `${convertToWord(user)} ${("(user)").fontsize(4)} loses to ${convertToWord(computer)}${("(comp)").fontsize(4)} You lost!\u{1F4A9}`
}

function draw(user, computer) {
    userScoreEl.innerHTML = userScore;
    computerScoreEl.innerHTML = computerScore;
    // scoreBoardUserEl.style.backgroundColor = "green";
    resultEl.innerHTML = `${convertToWord(user)} ${("(user)").fontsize(4)} equals ${convertToWord(computer)}${("(comp)").fontsize(4)} It's a draw!\u{1F610}`
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice);
            break
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, computerChoice);
            break
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, computerChoice)
            break
    }
}

function main() {
    rockEl.addEventListener('click', function () {
        game("r");
    });

    paperEl.addEventListener('click', function () {
        game("p");
    });

    scissorsEl.addEventListener('click', function () {
        game("s");
    });
}

main();
