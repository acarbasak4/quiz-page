function check(){
var question1 = document.quiz.answer1.value;
var question2 = document.quiz.answer2.value;
var question3 = document.quiz.answer3.value;
var correct = 0;

if(question1 == "Ankara"){
    correct++;
}
if(question2 == "Roma") {
    correct++;
}
if(question3 == "Kopenhag"){
    correct++;
}

var messages =["Good Job!", "That's just okay", "You need to do better."];
var gifs = ["success.gif", "meh.gif", "fail.gif"];
var range;

if(correct < 1){
    range = 2;
}

if(correct === 1){
    range = 2;
}
if(correct ===2){
    range = 1;
}
if(correct ===3){
    range = 0;
}

   
document.getElementById("after_button").style.visibility = "visible";
document.getElementById("message").innerHTML = messages[range];
document.getElementById("number_correct").innerHTML = "You have " + correct + " correct.";
document.getElementById("gifs").src = gifs[range];




}