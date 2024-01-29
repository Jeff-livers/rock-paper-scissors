function getComputerChoice(){
    let array = ['rock', 'paper', 'scissors'];
    let computerChoice = array[Math.floor(Math.random() * array.length)];
    return computerChoice;
}
let computerResult = getComputerChoice();

function playerSelection() {
   let playerChoice = prompt("Enter your choice: ").trim().toLowerCase();

   while (playerChoice !==  'rock' && playerChoice !==  'paper' && playerChoice !== 'scissors') {
    alert('Must be a valid choice, try again');

    playerChoice = prompt("Enter your choice: ").trim().toLowerCase();
}
return playerChoice
}
let playerResult = playerSelection();

//what are the two parameters im assing in saying?
function determineWinner(playerResult, computerResult) {
    console.log("Player Result:", playerResult);
    console.log("Computer Choice:", computerResult);

    let result = 0;
    if(playerResult === 'rock' && computerResult ==='scissors'){
        result = 'Winner!';
    } else if ( playerResult === 'rock' && computerResult ==='paper'){
        result = 'Loser!';
    } else if (playerResult === 'rock' && computerResult ==='rock'){
        result = 'Tie!';
    } else if(playerResult === 'paper' && computerResult ==='scissors'){
        result = 'Loser!';
    } else if (playerResult === 'paper' && computerResult ==='paper'){
        result = 'Tie!';
    } else if (playerResult === 'paper' && computerResult === 'rock'){
        result = 'Winner!';
    } else if (playerResult === 'scissors' && computerResult === 'scissors'){
        result = 'Tie!';
    } else if (playerResult === 'scissors' && computerResult === 'paper'){
        result = 'Winner!'
    } else if(playerResult === 'scissors' && computerResult === 'rock'){
        result = 'Loser!'
    }
    console.log("Result:", result);
    return result
}
let roundResult = determineWinner(playerResult, computerResult );
console.log(roundResult)