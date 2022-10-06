

let greet=alert("Let's play another game!");
const randomNumber = Math.floor(Math.random() * 1) + 1;

let finalScore=0
let attempts = 4;
let guessNumber = 
  prompt(
    "Guess a number I'm thinking right now. It's between 1 and 15, and you get 5 attempts"
  );
  
while (attempts > 0) {
  guessNumber = parseInt(
      prompt(
        `Guess again. You have ${attempts} attempt(s) remaining. You can get ${attempts} points if you get it right the next try`
      ));
  if (parseInt(guessNumber) > randomNumber) {
    attempts--;
    alert("Your guess was too high.");
    
      
  } else if (parseInt(guessNumber)  < randomNumber) {
    attempts--;
    alert("Your guess was too low.");
    
      
  } else if (isNaN(parseInt(guessNumber))) {
    attempts--;
    alert("You can only guess numerical value.");
  } else if (parseInt(guessNumber)  === randomNumber) {
    alert("You guessed the correct number! Congratulations! You get "+attempts+" point(s).");
    break;
  } 
}

if (attempts === 0) {
    alert("Sorry, you used all your guesses. Correct number is " + randomNumber+" and you get 0 points");
  let finalScore=0;
  console.log(finalScore);
}else{
console.log("Your current score is " + attempts + " points.");
  let finalScore=+attempts;
  console.log(finalScore);
}
