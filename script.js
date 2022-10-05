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
let hasWon = true;
let draw = false;

function playRound(playerSelection, computerSelection){
     hasWon = false;
     draw = false;

    if(playerSelection === "Rock" && computerSelection === "Rock"){
        draw = true;
        hasWon = false;
    }
    else if(playerSelection === "Rock" && computerSelection === "Paper"){
        hasWon = false;
        draw = false;
    }
    else if(playerSelection === "Rock" && computerSelection === "Scissors"){
        hasWon = true;
        draw = false;
    }
}

let score = 0;

function game() {
    for(let i = 1; i <= 5; i++){
        let playerSelection = "Rock";
        let computerSelection = getComputerChoice();

        playRound(playerSelection, computerSelection);

        if(draw === true && hasWon === false){
            console.log(`It's a draw! You have played ${i} times!`);
            score = score + 0.5;
        } else if(draw === false && hasWon === true){
            console.log(`You Won! You have played ${i} times!`);
            score = score + 1;
        } else if(draw === false && hasWon === false){
            console.log(`Sorry Pal. You have played ${i} times!`);
        }
        
        if(i == 5) {
            if(score > 2.5){
                alert(`You won! Thanks for playing`);
            } else if(score == 2.5){
                alert(`It's a draw. Thanks for playing`)
            } else{
                alert(`Sorry pal, you lost. Thanks for playing`);
            }
        }

    }
}

game();