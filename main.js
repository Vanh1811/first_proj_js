function getComputerChoice() {
    let computer = Math.floor(Math.random() * 3);
    if (computer === 0) {
        return 'rock';
    } else if (computer === 1) {
        return 'paper';
    } else if (computer === 2) {
        return 'scissors';
    }
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    if (playerSelection.toLowerCase() === computerSelection) {
        return 'tie';
    } else {
        if (playerSelection.toLowerCase() === 'rock') {
            return computerSelection === 'paper' ? 'computer' : 'player';
        } else if (playerSelection.toLowerCase() === 'paper') {
            return computerSelection === 'scissors' ? 'computer' : 'player';
        } else if (playerSelection.toLowerCase() === 'scissors') {
            return computerSelection === 'rock' ? 'computer' : 'player';
        }
    }
}

function game() {
    let playerWins = 0;
    let computerWins = 0;

    const rockBtn = document.createElement('button');
    const scissorsBtn = document.createElement('button');
    const paperBtn = document.createElement('button');

    rockBtn.textContent = "ROCK";
    scissorsBtn.textContent = "SCISSORS";
    paperBtn.textContent = "PAPER";

    const buttonStyle = 'padding: 10px 20px; margin: 5px; font-size: 16px; cursor: pointer;';
    rockBtn.setAttribute('style', buttonStyle);
    scissorsBtn.setAttribute('style', buttonStyle);
    paperBtn.setAttribute('style', buttonStyle);

    rockBtn.addEventListener('click', () => {
        updateGame('rock');
    });

    scissorsBtn.addEventListener('click', () => {
        updateGame('scissors');
    });

    paperBtn.addEventListener('click', () => {
        updateGame('paper');
    });

    const displayResult = document.createElement('div');

    const displayStyle = 'font-size: 18px; margin-top: 10px;'
    displayResult.setAttribute('style', displayStyle)
    displayResult.style.display = 'flex';
    displayResult.style.flexDirection = 'column';
    displayResult.style.alignItems = 'center';
    displayResult.style.marginTop = '10px';

    function updateGame(playerSelection) {
        let result = playRound(playerSelection);

        if (result === 'computer') {
            computerWins++;
        } else if (result === 'player') {
            playerWins++;
        }

        displayResult.textContent = `Player: ${playerWins} Computer: ${computerWins}`;

        if (playerWins === 5) {
            displayResult.textContent = 'Winner: Player';
        } else if (computerWins === 5) {
            displayResult.textContent = 'Winner: Computer';
        }
    }

    const miniContainer = document.createElement('div');
    miniContainer.appendChild(rockBtn);
    miniContainer.appendChild(scissorsBtn);
    miniContainer.appendChild(paperBtn);

    const container = document.querySelector('#game-container');
    container.appendChild(miniContainer);
    container.appendChild(displayResult);
}

document.addEventListener('DOMContentLoaded', game());
