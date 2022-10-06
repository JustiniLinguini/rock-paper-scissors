
let score = 0;

/*gameState rules: win state = 1,loss state = 2, draw state = 3 */
let gameState;

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

    if(playerSelection === computerSelection){
        gameState = 3;
    }
    else if(playerSelection === "Rock" && computerSelection === "Scissors"){
        gameState = 1;
    }
    else if(playerSelection === "Rock" && computerSelection === "Paper"){
        gameState = 2;
    }
    else if(playerSelection === "Scissors" && computerSelection === "Paper"){
        gameState = 1;
    }
    else if(playerSelection === "Scissors" && computerSelection === "Rock"){
        gameState = 2;
    }
    else if(playerSelection === "Paper" && computerSelection === "Rock"){
        gameState = 1;
    }
    else if(playerSelection === "Paper" && computerSelection === "Scissors"){
        gameState = 2;
    }
}

function game() {
    for(let i = 1; i <= 5; i++){
        let playerSelection = "Rock";
        let computerSelection = getComputerChoice();

        playRound(playerSelection, computerSelection);

        if(gameState == 3){
            console.log(`It's a draw! You have played ${i} times!`);
            score = score + 0.5;
        } else if(gameState == 2){
            console.log(`Sorry Pal. You have played ${i} times!`);
        } else if(gameState == 1){
            console.log(`You Won! You have played ${i} times!`);
            score = score + 1;
        }

        if(i == 5) {
            if(score > 2.5){
                alert(`You won! Thanks for playing. Your score was: ${score}`);
            } else if(score == 2.5){
                alert(`It's a draw. Thanks for playing. Your score was: ${score}`)
            } else{
                alert(`Sorry pal, you lost. Thanks for playing. Your score was: ${score}`);
            }
        }

    }
}

game();