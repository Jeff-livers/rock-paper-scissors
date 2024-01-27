function getComputerChoice(){
    let array = ['rock', 'paper', 'scissors'];
    let computerChoice = array[Math.floor(Math.random() * array.length)];
    return computerChoice;
}

console.log(getComputerChoice());

function playerSelection() {
   let playerChoice = prompt("Enter your choice: ").trim().toLowerCase();

   while (playerChoice !==  'rock' && playerChoice !==  'paper' && playerChoice !== 'scissors') {
    alert('Must be a valid choice, try again');

    playerChoice = prompt("Enter your choice: ").trim().toLowerCase();
}
return playerChoice
}

let playerResult = playerSelection();
console.log(playerResult)

function determineWinner(playerResult, computerChoice) {
    let result;
    if(playerResult === 'rock' && computerChoice ==='scissors'){
        resultesult = true;
    } else if (playerResult === 'rock' && computerChoice ==='paper'){
        result = false;
    } else if (playerResult === 'rock' && computerChoice ==='rock'){
        result = null;
    }
    return result
}
let roundResult = determineWinner();
console.log(roundResult)