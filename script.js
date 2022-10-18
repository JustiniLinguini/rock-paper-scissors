
let score = 0;
let rounds = 1;

/* selects random number*/
function randomNumberSelector(max) {
    return Math.floor(Math.random() * max) + 1;
}

/*function that selects the computer's choice*/

function getComputerChoice(){
    let choice = randomNumberSelector(3);
    if (choice === 1){
        return "Rock";
    } else if(choice === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}


/*function that decides who wins*/

function playRound(playerSelection, computerSelection){

    const screen = document.querySelector('#screen');

    /* draw */
    if(playerSelection === computerSelection){
        screen.textContent = `It's a draw bucko! Rounds: ${rounds}`;
        console.log(playerSelection, "player selection")
        console.log(computerSelection, "computer selection")
        score = score + 0.5;
        rounds = rounds + 1;
    }
    else if(playerSelection === "Rock" && computerSelection === "Scissors"){
        score = score + 1; /*win*/
        screen.textContent = `You won! Rounds: ${rounds}`
        console.log(playerSelection, "player selection")
        console.log(computerSelection, "computer selection")
        rounds = rounds + 1;
    }
    else if(playerSelection === "Rock" && computerSelection === "Paper"){
        /*loss*/
        screen.textContent = `You lost :( Rounds: ${rounds}`;
        console.log(playerSelection, "player selection")
        console.log(computerSelection, "computer selection")
        rounds = rounds + 1;
    }
    else if(playerSelection === "Scissors" && computerSelection === "Paper"){
        score = score + 1; /*win*/
        screen.textContent = `You won! Rounds: ${rounds}`
        console.log(playerSelection, "player selection")
        console.log(computerSelection, "computer selection")
        rounds = rounds + 1;
    }
    else if(playerSelection === "Scissors" && computerSelection === "Rock"){
        /*loss*/
        screen.textContent = `You lost :( Rounds: ${rounds}`;
        console.log(playerSelection, "player selection")
        console.log(computerSelection, "computer selection")
        rounds = rounds + 1;
    }
    else if(playerSelection === "Paper" && computerSelection === "Rock"){
        score = score + 1; /*win*/
        screen.textContent = `You won! Rounds: ${rounds}`
        console.log(playerSelection, "player selection")
        console.log(computerSelection, "computer selection")
        rounds = rounds + 1;
    }
    else if(playerSelection === "Paper" && computerSelection === "Scissors"){
        /*loss*/
        screen.textContent = `You lost :( Rounds: ${rounds}`;
        console.log(playerSelection, "player selection")
        console.log(computerSelection, "computer selection")
        rounds = rounds + 1;
    }
}
    
function setHandlers(){
    const rock = document.querySelector('#rock');
    const paper = document.querySelector('#paper');
    const scissors = document.querySelector('#scissors');

    rock.addEventListener('click', ()=> {
        playRound("Rock", getComputerChoice())
        checkGameState();
    });
    scissors.addEventListener('click', ()=> {
        playRound("Scissors", getComputerChoice())
        checkGameState();
    });
    paper.addEventListener('click', ()=> {
        playRound("Paper", getComputerChoice())
        checkGameState();
    });
}

function checkGameState(){
    const screen = document.querySelector('#screen');
    const buttons = document.querySelectorAll('button')
    let gameOver = false;

    if(rounds == 6){
        if(score > 2.5){
            screen.textContent = `You won the game, nice job pal! Your score was ${score}`;
            gameOver = true;
            console.log(gameOver);
        } else if(score < 2.5){
            screen.textContent = `You lost the game, bad job pal! Your score was ${score}`;
            gameOver = true;
            console.log(gameOver);
        } else if(score == 2.5){
            screen.textContent = `It's a draw! At least ya didn't lose right? Your score was ${score}`;
            gameOver = true;
            console.log(gameOver);
        }
    }

    if(gameOver == true){
        rock.remove();
        scissors.remove();
        paper.remove();
    }
}

setHandlers();