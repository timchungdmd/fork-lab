//7th quiz
alert("I promise this is the last game we will play");
let mcdmenu=['BIG MAC','DOUBLE CHEESEBURGER','CHICKEN SANDWICH','MCNUGGETS','QUARTER POUNDER', 'MCFLURRY','SPICY MCCHICKEN']
const random = Math.floor(Math.random() * 7) + 1;
let answer=mcdmenu[random]
let tries1=6;
for(i=6; i>0; i--){
  let guess=prompt(`Guess my favorite menu from McDonalds. You have ${tries1} guesses.`)
  if(guess.toUpperCase()===answer){
    alert('Yup, that\'s what I always order at McDonalds!');
    break;
  }else if(guess.toUpperCase()!==answer){
    for(j=0;j<mcdmenu.length;j++){
      if(guess.toUpperCase() !== mcdmenu[j]){
        tries--;
        alert('That\'s not on the menu. Try again');
        break;
      }else if(guess.toUpperCase()===mcdmenu[j]){
        tries--;
        alert('Eh, I rarely order that. Try again');
        break;
      }
    }
  }}
let finalScore2=tries1;
let total=finalScore1+finalScore2
console.log(`You got ${finalScore2} from this quiz. Your total score is ${total}`);
