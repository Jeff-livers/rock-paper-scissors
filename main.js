// New Verison og game
let playerScore = 0
let computerScore = 0

function playGame() {
  for (let round = 0; round < 5; round++) {
    function getComputerChoice() {
      let array = ['rock', 'paper', 'scissors']
      let computerChoice = array[Math.floor(Math.random() * array.length)]
      return computerChoice
    }
    let computerResult = getComputerChoice()

    function playerSelection() {
      let playerChoice = prompt('Enter your choice: ').trim().toLowerCase()

      while (
        playerChoice !== 'rock' &&
        playerChoice !== 'paper' &&
        playerChoice !== 'scissors'
      ) {
        alert('Must be a valid choice, try again')
        playerChoice = prompt('Enter your choice: ').trim().toLowerCase()
      }
      return playerChoice
    }
    let playerResult = playerSelection()

    function playRound(playerResult, computerResult) {
      //need to add counter to function to be able to determine winner after 5 rounds
      let result = 0
      if (playerResult === 'rock' && computerResult === 'scissors') {
        result = 'Winner!'
        playerScore++
      } else if (playerResult === 'rock' && computerResult === 'paper') {
        result = 'Loser!'
        computerScore++
      } else if (playerResult === 'rock' && computerResult === 'rock') {
        result = 'Tie!'
      } else if (playerResult === 'paper' && computerResult === 'scissors') {
        result = 'Loser!'
        computerScore++
      } else if (playerResult === 'paper' && computerResult === 'paper') {
        result = 'Tie!'
      } else if (playerResult === 'paper' && computerResult === 'rock') {
        result = 'Winner!'
        playerScore++
      } else if (playerResult === 'scissors' && computerResult === 'scissors') {
        result = 'Tie!'
      } else if (playerResult === 'scissors' && computerResult === 'paper') {
        result = 'Winner!'
        playerScore++
      } else if (playerResult === 'scissors' && computerResult === 'rock') {
        result = 'Loser!'
        computerScore++
      }
      console.log('Player Result:', playerResult)
      console.log('Computer Result:', computerResult)
      return result
    }
    let roundResult = playRound(playerResult, computerResult)
    console.log(
      roundResult,
      ' / Computer Score:',
      computerScore,
      ' / Player Score:',
      playerScore
    )
    //computerScore and playerScore are nested within the loop. I need to figure out a way to get them out, so I can put call them into the if statement, to determine the winner
  }
}
console.log(playGame())
let gameResults
if (computerScore > playerScore) {
  gameResults = 'Computer Wins the game!'
} else if (playerScore > computerScore) {
  gameResults = 'Player Wins the game!'
} else if (playerScore === computerScore) {
  gameResults = 'Tie! Refresh the page and try again. '
}
console.log(gameResults)
alert(gameResults)
