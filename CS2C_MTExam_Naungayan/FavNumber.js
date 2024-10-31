let favNumber = 23; 

let guess;
let guessCount = 20;

while (true) {
  guess = parseInt(prompt("Guess my favorite number:"));
  guessCount++;

  if (guess === favNumber) {
    console.log(`You guessed it in ${guessCount} tries!`);
    break;
  } else if (guess < favNumber) {
    console.log("Too low! Try again.");
  } else {
    console.log("Too high! Try again.");
  }
}