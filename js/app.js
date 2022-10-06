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
