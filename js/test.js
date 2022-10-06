'use strict';
//6th quiz
let start=alert("Let's play another game!");
const randomNumber = Math.floor(Math.random() * 15) + 1;

let finalScore1=0;
let attempts = 5;
let intro = 
  alert(
    `I'm thinking of a number between 1 and 15 right now. What number am I thinking?`
  );
  
while (attempts > 0) {
  let guessNumber=prompt(
    `Pick a number. You have ${attempts} attempts left`);
  if(parseInt(guessNumber)===randomNumber){
    alert("You guessed the correct number! Congratulations! You get "+attempts+" point(s).");
    break;
  }else if(parseInt(guessNumber)!==randomNumber){
    if(parseInt(guessNumber) > randomNumber) {
      attempts--;
      alert("Your guess was too high.");
    }else if(parseInt(guessNumber)  < randomNumber) {
      attempts--;
      alert("Your guess was too low.");
    }else if(isNaN(parseInt(guessNumber))) {
      attempts--;
      alert("You can only guess a numerical value.");
    }}
}
finalScore1=+attempts;
console.log(finalScore1);

//7th quiz
let last=alert("I promise this is the last game we will play");
let mcdmenu=['BIG MAC','DOUBLE CHEESEBURGER','CHICKEN SANDWICH','MCNUGGETS','QUARTER POUNDER', 'MCFLURRY','SPICY MCCHICKEN'];
const random = Math.floor(Math.random() * 7) + 1;
let answer=mcdmenu[random];
let tries1=6;
for(let i=6; i>0; i--){
  let guess=prompt(`Guess my favorite menu from McDonalds. You have ${tries1} guesses left.
                    MENU: ${mcdmenu}`);
  let guessUp=guess.toUpperCase();
  
  if(guessUp===answer){
    alert('Yup, that\'s what I always order at McDonalds!');
    break;
  }else if(guessUp!==answer){
    for(let j=0;j<mcdmenu.length;j++){
      if(guessUp=== mcdmenu[j]){
        tries1--;
        alert('Eh, I rarely order that. Try again');
        break;
      }else if(guessUp!==mcdmenu[j]){
        tries1--;
        alert('That\'s not on the menu. Try again');
        break;
      }
    }
  }}
let finalScore2=tries1;
let total=finalScore1+finalScore2
console.log(`You got ${finalScore2} point from this quiz. Your total score is ${total}`);
alert(`You got ${finalScore2} from this quiz. Your total score is ${total}`)
