'use strict';
"use strict";
/*
&& - is the 'logical and'
One false with an && and it will not run

|| - is the 'logical or' (double pipe)
One true and it will run
! - 'logical not' often call 'bang'
*/
//let trueValue=true;
//let falseValue=false;

//if (trueValue && falseValue){
//  console.log('it evaluated to true');
//}

//First 5 questions
function qName () {
  let username = prompt("What is your name?");
  console.log(username);
  let greet = alert("Hi " + username + ", welcome to my About Me page");
  alert("I am going to ask you 5 questions and lets see if we are alike or not.")
  let likeMarvel = prompt("Do you like Marvel movies?");
  likeMarvel = likeMarvel.toLowerCase();
  if (likeMarvel === "yes" || likeMarvel === "y") {
    //console.log('So do I! It is my favorite movie franchise');
    alert("So do I! It is my favorite movie franchise");
  } else if(likeMarvel === "no" || likeMarvel === "n") {
    //console.log(('It\'s ok, to each its own');
    alert("It's ok, to each its own");
  }else{
    alert('You need to answer with a Yes or a No');
  }
}

function qTaco () {
  let likeTacos = prompt("Do you like tacos?");
  likeTacos = likeTacos.toLowerCase();
  if (likeTacos === "yes" || likeTacos === "y") {
    //console.log('Taco is my favorite food, I can probably eat it 24/7');
    alert("Taco is my favorite food, I can probably eat it 24/7");
  } else if (likeTacos === "no" || likeTacos === "n") {
    //console.log('It was never a right or wrong question.You do you!');
    alert("It was never a right or wrong question. You do you!");
  }else {
    alert('You need to answer with a Yes or a No');
  }
}

function qAnime () {
  let likeAnime = prompt("Do you watch animes?");
  likeAnime = likeAnime.toLowerCase();
  if (likeAnime === "yes" || likeAnime === "y") {
    //console.log('Me too, my favorite one is One Piece');
    alert("Me too! my favorite anime is One Piece");
  } else if (likeAnime === "no" || likeAnime === "n") {
    //console.log('I understand. There are so many other things to watch these days!');
    alert("I understand. There are so many other things to watch these days!");
  }else {
    alert('You need to answer with a Yes or a No');
  }
}

  let likeApple = prompt("Do you have an iPhone?");
  likeApple = likeApple.toLowerCase();
  if (likeApple === "yes" || likeApple === "y") {
    //console.log('Me too, Apple ecosystem is pretty amazing');
    alert("Me too! Apple ecosystem is pretty amazing");
  } else if (likeApple === "no" || likeApple === "n") {
    //console.log('Android is ok, I guess...!');
    alert("Android is ok, I guess...!");
  }else {
    alert('You need to answer with a Yes or a No');
  }

  let likeTravel = prompt("Have you traveled anywhere in the past 6 months?");
  likeTravel = likeTravel.toLowerCase();
  if (likeTravel === "yes" || likeTravel === "y") {
    //console.log('Me too, it\s a great way to take a break and recharge mentally and physically');
    alert(
      "Me too! its a great way to recharge mentally and physically"
    );
  } else if (likeTravel === "no" || likeTravel === "n") {
    //console.log('You should plan for a travel in the near future.');
    alert("You should plan for a travel in the near future.");
  }else {
    alert('You need to answer with a Yes or a No');
  }

  alert(username + ", thank you for participating in this short survey!");


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
