function getComputerChoice(){
    let computer = Math.floor(Math.random() * 3);
    if(computer === 0){
        return 'rock';
    }
    else if(computer === 1){
        return 'paper';
    }
    else if(computer === 2){
        return 'scissors';
    }
}

function gamePlay(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() === computerSelection){
        return 'tie';
    }
    else{
        if (playerSelection.toLowerCase() === 'rock'){
            if(computerSelection === 'paper'){
                return 'computer';
            }
            else{
                return "player";
            }
        }
        else if(playerSelection.toLowerCase() === 'paper'){
                if(computerSelection === 'scissors'){
                    return "computer";
                }
                else{
                    return "player";
                }
        }
        else if(playerSelection.toLowerCase() === 'scissors'){
            if(computerSelection === 'rock'){
                return "computer";
            }
            else{
                return "player";
            }
        }
    }
}

function game(){
    let rounds = 5;
    let playerWins = 0;
    let computerWins = 0;
    while(rounds--){
        const computerSelection = getComputerChoice();
        let playerSelection = prompt("Rock, Paper, Scissors?");
        let result = gamePlay(playerSelection, computerSelection);
        if(result === 'tie'){
            rounds++;
        }
        else if(result === 'computer'){
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
            computerWins++;
        }
        else if(result === 'player'){
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            playerWins++;
        }
    }

    if(playerWins > computerWins){
        console.log('Winner: Player');
    }
    else{
        console.log('Winner: Computer');
    }
}

game();