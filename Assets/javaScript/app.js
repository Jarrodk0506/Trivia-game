$(document).ready(function () {

var correct = 0;
var incorrect = 0;
var unanswered = 0;
var timer = 30;
var interval;

var questions = {
    question1: [
        question = "",
        answer1 = "",
        answer2 = "",
        answer3 = "",
        answer4 = ""
    ]
    ,
    question2: [
        question = "",
        answer1 = "",
        answer2 = "",
        answer3 = "",
        answer4 = ""
    ]
    ,
    question3: [
        question = "",
        answer1 = "",
        answer2 = "",
        answer3 = "",
        answer4 = ""
    ]
    ,
    question4: [
        question = "",
        answer1 = "",
        answer2 = "",
        answer3 = "",
        answer4 = ""
    ]
    ,
    question5: [
        question = "",
        answer1 = "",
        answer2 = "",
        answer3 = "",
        answer4 = ""
    ]
    
}





$("#time").click(function () {
    console.log("Test")
    $(".description").addClass('d-none');
    $("#question").removeClass('d-none');
    $("#answer1").removeClass('d-none');       //display first question
    $("#answer2").removeClass('d-none');
    $("#answer3").removeClass('d-none');
    $("#answer4").removeClass('d-none');
    $("#time").html("Time left: " + timer);
});












});
