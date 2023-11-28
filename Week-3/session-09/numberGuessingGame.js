let matchingNumber = 55
let guessLimit = 10
let guessSoFar = 0

function playGuessingGame(numToGuess,totalGuesses){
  let previouslyEntered = 'Enter a number between 1 and 100.'
  for(let i = 0; i < totalGuesses; i++){
    let num = prompt(previouslyEntered)
    if (num === null) {
      return null; // Cancel button clicked
    }
		while (isNaN(num)) {
      num = prompt("Please enter a number.")
    }
    guessSoFar += 1
    if(num > numToGuess){
      previouslyEntered = "X is too large. Guess a smaller number."
    }else if(num < numToGuess){
			previouslyEntered = "X is too small. Guess a larger number."
    }else{
			return guessSoFar
    }
  }
  return 0
}

playGuessingGame(matchingNumber,guessLimit)
