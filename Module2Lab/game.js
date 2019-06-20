// program data:
var number = Math.floor(Math.random() * 10);
var guess;
var limit = 5;
var won = false;
var guesses = [];

// if correct: let the user know they won
for(var i = 0; i <= limit; i++){
    // prompt user for their guess 
    guess = parseInt(prompt("Guess a number, bud."));
    // making sure the guess is a number
    if(isNaN(guess)){
        guess = parseInt(prompt("Guess a number, bud.")); 
    }

    if(guess === number){
        document.write("Correct! You win!");
        won = true;
        break;
    }// if incorrect: let the user know how many tries they have remaining
    else{
        guesses[i] = guess;
        alert("Wrong! Try again! \nYou've already guessed " + guesses.toString() + "\nTries remaining: " + (limit - i));
    }
}
//if the user ran out of tries, let them know the game is over
if(!won){
    document.write("You ran out of tries. Game over. The correct number was " + number);
}

function isPreviousGuess(){
    for(var i = 0; i < guesses.length; i++){
        if(guesses[i] = guess){
            return true;
        }
    }
    return false;
}
