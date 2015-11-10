/**
 * Project: TreeHouse.
 * By: Ronny Rosabal
 * Date: 10/10/15
 * Time: 10:15 PM
 * Content:
 */

/**************************************
Table of Content
***************************************/

/*
* #GLOBAL VARIABLES
*
*
*
* #FUNCTIONS
*
*
*
* #OBJECTS
*
*
*
* #FUNCTION CALLS
*/



/**************************************
#GLOBAL VARIABLES
***************************************/

var totalQuestions = 0;
var rightQuestions = 0;
var question1 = prompt("10 + 10 = ?");
var question2 = prompt("10 * 10 = ?");
var question3 = prompt("9 / 3 = ?");
var question4 = prompt("25 / 5 = ?");
var question5 = prompt("100 / 20 = ?");
var body = document.getElementsByTagName("body");



/**************************************
#FUNCTIONS
***************************************/

if( parseInt(question1) === 20){

  body[0].innerHTML += "<p>Well done. You answered question one correctly.</p>";
  rightQuestions++;
  totalQuestions++;

}else{

  body[0].innerHTML += "<p>Sorry, you got the wrong answer for question 1. The right answer is 10.</p>";
  totalQuestions++;


}

if( parseInt(question2) === 100){

  body[0].innerHTML += "<p>Well done. You answered question two correctly.</p>";
  rightQuestions++;
  totalQuestions++;

}else{

  body[0].innerHTML += "<p>Sorry, you got the wrong answer for question 2. The right answer is 100.</p>";
  totalQuestions++

}

if( parseInt(question3) === 3){

  body[0].innerHTML += "<p>Well done. You answered question three correctly.</p>";
  rightQuestions++;
  totalQuestions++;

}else{

  body[0].innerHTML += "<p>Sorry, you got the wrong answer for question 3. The right answer is 3.</p>";
  totalQuestions++

}

if( parseInt(question4) === 5){

  body[0].innerHTML += "<p>Well done. You answered question four correctly.</p>";
  rightQuestions++;
  totalQuestions++;

}else{

  body[0].innerHTML += "<p>Sorry, you got the wrong answer for question 4. The right answer is 5.</p>";
  totalQuestions++

}

if( parseInt(question5) === 5){

  body[0].innerHTML += "<p>Well done. You answered question five correctly.</p>";
  rightQuestions++;
  totalQuestions++;

}else{

  body[0].innerHTML += "<p>Sorry, you got the wrong answer for question 5. The right answer is 5.</p>";
  totalQuestions++

}

if( (rightQuestions / totalQuestions) * 100 === 100){

  body[0].innerHTML += "<p>Congratulations you got a perfect score. You win the Golden Crown.</p>";

}else if( (rightQuestions / totalQuestions) * 100 >= 80 ){

  body[0].innerHTML += "<p>You got " + rightQuestions + " out of " + totalQuestions + " questions rihgt. You win the Silver Crown.</p>";

}else if( (rightQuestions / totalQuestions) * 100 >= 60 ){

  body[0].innerHTML += "<p>You got " + rightQuestions + " out of " + totalQuestions + " questions rihgt. You win the Bronze Crown.</p>";

}else{

  body[0].innerHTML += "<p>You got " + rightQuestions + " out of " + totalQuestions + " questions rihgt. You are a loser</p>";

}



/**************************************
#OBJECTS
***************************************/



/**************************************
#FUNCTION CALLS
***************************************/