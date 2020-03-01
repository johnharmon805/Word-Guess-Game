// 2. Youre going to make a game just like the one in the video. Essentially, the app randomly picks a letter, and the user has to guess which letter the app chose. Put the following text on your page:

//3. Guess what letter Im thinking of

//4. Wins: (# of times the user has guessed the letter correctly)

//5. Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)

//6. Guesses Left: (# of guesses left. This will update)

//7. Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)

//8. When the player wins, increase the Wins counter and start the game over again (without refreshing the page).

//9. When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).


alert = confirm("Choose Wisely, Not Poorly");

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guesses = 9;
var computerGuess = letters[Math.floor(Math.random() * letters.length)];
var userGuessSoFar = [];
var winPoints;
var guessLeft;
var losses;


document.onkeyup = function(event) {
    var userGuess = event.key;
    document.getElementById("guess-so-far").textContent = userGuess;
    console.log(computerGuess);
    console.log(userGuess);
    if (userGuess == computerGuess) {
        wins++;

    } else {
        guesses--;
        userGuessSoFar.push(userGuess);
        document.getElementById("guess-so-far").textContent = userGuessSoFar;
    }
    updateWins();
    updateGuesses();
    updateLosses();

    if (userGuessSoFar.length > 8) {
        losses++;
        userGuessSoFar = [];
        guesses = 9;
        updateLosses();
    }
}


function updateWins() {
    winPoints = document.getElementById("wins").textContent;
    document.getElementById("wins").textContent = wins;
}

function updateGuesses() {
    guessesLeft = document.getElementById("guess-Left").textContent;
    document.getElementById("guess-Left").textContent = guesses;
}

function updateLosses() {
    losePoints = document.getElementById("losses").textContent;
    document.getElementById("losses").textContent = losses;
}