// Requirements:
// -Create a Github repository for this project. 
// -The user plays against the computer, so give them three buttons (rock, paper, scissors) to click
// -Every time the user plays/clicks a button, display the winner
// -A user can play as many times as they want  


/*
--create input fields
-- create 3 buttons
--- when user clicks on button; computer auto fills selection
-- shows result
-- displays winner
-- reset
*/
// create variables
const computerOptionDisplay =  document.getElementById('computer-option')
const userOptionDisplay =  document.getElementById('user-option')
const resultDisplay =  document.getElementById('result')

// use globally
let userOption
let computerOption
let result

//get all possible choices; grabs all buttons
const possibleChoices = document.querySelectorAll('button')

// onclick for each possible choice a even happens
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
// going to get the target id
userOption = e.target.id
userOptionDisplay.innerHTML = userOption
// call computer function
generateComputerOption()
getResult()
}))


// need to create a function for computer choice
function generateComputerOption() {
   const randomNumber =  Math.floor(Math.random() * possibleChoices.length) + 1 //or could use 3
    console.log(randomNumber)

    if (randomNumber === 1) {
        computerOption = 'rock'
    }
    if (randomNumber === 2) {
        computerOption = 'paper'
    }
    if (randomNumber === 3) {
        computerOption = 'scissors'
    }
    computerOptionDisplay.innerHTML = computerOption
}

// create function for results
function getResult() {
    if (computerOption === userOption) {
        result = 'It\'s a draw!'
    }
    if (computerOption  === 'rock'  && userOption === 'paper') {
        result = 'You Win!'
    }
    if (computerOption  === 'rock'  && userOption === 'scissors') {
        result = 'You Lose!'
    }
    if (computerOption  === 'scissors'  && userOption === 'rock') {
        result = 'You Win!'
    }
    if (computerOption  === 'scissors'  && userOption === 'paper') {
        result = 'You Lose!'
    }
    if (computerOption  === 'paper'  && userOption === 'scissors') {
        result = 'You Win!'
    }
    if (computerOption  === 'paper'  && userOption === 'rock') {
        result = 'You Lose!'
    }
    resultDisplay.innerHTML = result

}