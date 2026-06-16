function playGame(playMove){
    const computerGuess = pickComputerMove();
    console.log(computerGuess);
    let result = '';
    if(playMove === 'rock'){
        if (computerGuess === 'rock'){
            result = 'Tie';
        }else if (computerGuess === 'paper'){
        result = 'You lose';
        }else if (computerGuess === 'scissors'){
            result = 'You win';
        }
    } else if(playMove === 'paper'){
        if (computerGuess === 'rock'){
            result = 'You win';
        }else if (computerGuess === 'paper'){
            result = 'Tie';
        }else if (computerGuess === 'scissors'){
            result = 'You lose';
        }
    } else if(playMove === 'scissors'){
        if (computerGuess === 'rock'){
            result = 'You lose';
        }else if (computerGuess === 'paper'){
            result = 'You win';
        }else if (computerGuess === 'scissors'){
            result = 'Tie';
        }
    }
    alert(`You picked ${playMove}. Computer picked ${computerGuess}. ${result}`);
}

function pickComputerMove(){
    const randomNumber = Math.random();
    let computerGuess = '';
    if (randomNumber >= 0 && randomNumber < 1/3){
    computerGuess = 'rock';
    }
    else if (randomNumber >= 1/3 && randomNumber < 2/3){
        computerGuess = 'paper';
    }
    else if (randomNumber >= 2/3 && randomNumber < 1){
        computerGuess = 'scissors';
    }
    return computerGuess;
}