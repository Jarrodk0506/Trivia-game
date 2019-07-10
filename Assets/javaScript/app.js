$(document).ready(function () {

console.log("3,2,1,4,2");

var correct = 0;
var incorrect = 0;
var unanswered = 0;
var timer = 5;
var timerId;

var questions = {
    question1: [
        question = "This is the first question",
        answer1 = "1",
        answer2 = "2",
        answer3 = "3",
        answer4 = "4"
    ]
    ,
    question2: [
        question = "This is the Second Question",
        answer1 = "1",
        answer2 = "2",
        answer3 = "3",
        answer4 = "4"
    ]
    ,
    question3: [
        question = "This is the Third Question",
        answer1 = "1",
        answer2 = "2",
        answer3 = "3",
        answer4 = "4"
    ]
    ,
    question4: [
        question = "This is the Fourth question",
        answer1 = "1",
        answer2 = "2",
        answer3 = "3",
        answer4 = "4"
    ]
    ,
    question5: [
        question = "This is the Fifth question",
        answer1 = "1",
        answer2 = "2",
        answer3 = "3",
        answer4 = "4"
    ]
    
}


function stop(){
    clearInterval(timerId);
}






//Start button
$("#start").click(function () {       
    $("#start").addClass('d-none');
    $("#question").removeClass('d-none');
    $("#answer1").removeClass('d-none');       //display first question when you hit the start button
    $("#answer2").removeClass('d-none');
    $("#answer3").removeClass('d-none');
    $("#answer4").removeClass('d-none');
    $("#time").removeClass('d-none');
    questionOne();
});


function questionOne(){
    timer = 4
    $("#title").html("Question 1");
    $("#question").html(questions.question1[0]);
    $("#answer1").html(questions.question1[1]);       //display First question
    $("#answer2").html(questions.question1[2]);
    $("#answer3").html(questions.question1[3]);
    $("#answer4").html(questions.question1[4]);
    $("#time").html("Time left: " + timer);

    timerId =  setInterval(function(){      //start timer
        $("#time").html("Time left: " + timer);
        timer--;

            $('#answer1, #answer2, #answer3, #answer4').click(function () { //start button click
                // correct
                if(this.id == "answer3") {
                stop();
                timer = 3;
                $("#title").html("Correct!");
                $("#question").addClass('d-none');
                $("#answer1").addClass('d-none');       
                $("#answer2").addClass('d-none');
                $("#answer3").addClass('d-none');
                $("#answer4").addClass('d-none');
                $("#time").html("Time left: " + timer);
                    timerId =  setInterval(function(){
                        $("#time").html("Time left: " + timer);
                            timer--;
                            if(timer == -1){
                                stop();
                                correct++; 
                                console.log("correct " + correct);
                                console.log("incorrect " + incorrect);
                                console.log("unanswered " + unanswered);
                                questionTwo();
                        };
                    }, 1000);
                } // end correct
                // start incorrect
                else if(this.id !== "answer3"){
                    stop();
                    timer = 3;
                $("#title").html("Incorrect!");
                $("#time").html("Time left: " + timer);
                $("#question").addClass('d-none');
                $("#answer1").addClass('d-none');       
                $("#answer2").addClass('d-none');
                $("#answer3").addClass('d-none');
                $("#answer4").addClass('d-none');
                    timerId =  setInterval(function(){
                        $("#time").html("Time left: " + timer);
                            timer--;
                            if(timer == -1){
                                stop();
                                incorrect++;
                                console.log("correct " + correct);
                                console.log("incorrect " + incorrect);
                                console.log("unanswered " + unanswered);
                                questionTwo();
                        };
                    }, 1000);
                }//end incorrect
            }); //end button click
                if(timer == -1){
                    stop();
                    timer = 3;
                $("#title").html("No answer?");
                $("#time").html("Time left: " + timer);
                $("#question").addClass('d-none');
                $("#answer1").addClass('d-none');
                $("#answer2").addClass('d-none');        
                $("#answer3").addClass('d-none');
                $("#answer4").addClass('d-none');
                    timerId =  setInterval(function(){
                        $("#time").html("Time left: " + timer);
                            timer--;
                            if(timer == -1){
                                stop();
                                unanswered++;
                                console.log("correct " + correct);
                                console.log("incorrect " + incorrect);
                                console.log("unanswered " + unanswered);
                                questionTwo();
                        };
                    }, 1000);
                }
    },1000);//end timerId
}  //end questionOne

//question2
function questionTwo(){
    timer = 4
    $("#question").removeClass('d-none');
    $("#answer1").removeClass('d-none');       
    $("#answer2").removeClass('d-none');
    $("#answer3").removeClass('d-none');
    $("#answer4").removeClass('d-none');
    $("#title").html("Question 2");
    $("#question").html(questions.question2[0]);
    $("#answer1").html(questions.question2[1]);       //display First question
    $("#answer2").html(questions.question2[2]);
    $("#answer3").html(questions.question2[3]);
    $("#answer4").html(questions.question2[4]);
    $("#time").html("Time left: " + timer);

    timerId =  setInterval(function(){      //start timer
        $("#time").html("Time left: " + timer);
        timer--;

            $('#answer1, #answer2, #answer3, #answer4').click(function () { //start button click
                // correct
                if(this.id == "answer2") {
                stop();
                timer = 3;
                $("#title").html("Correct!");
                $("#question").addClass('d-none');
                $("#answer1").addClass('d-none');
                $("#answer2").addClass('d-none');     
                $("#answer3").addClass('d-none');
                $("#answer4").addClass('d-none');
                $("#time").html("Time left: " + timer);
                    timerId =  setInterval(function(){
                        $("#time").html("Time left: " + timer);
                            timer--;
                            if(timer == -1){
                                stop();
                                correct++; 
                                console.log("correct " + correct);
                                console.log("incorrect " + incorrect);
                                console.log("unanswered " + unanswered);
                                questionThree();
                        };
                    }, 1000);
                } // end correct
                // start incorrect
                else if(this.id !== "answer2"){
                    stop();
                    timer = 3;
                $("#title").html("Incorrect!");
                $("#time").html("Time left: " + timer);
                $("#question").addClass('d-none');
                $("#answer1").addClass('d-none');
                $("#answer2").addClass('d-none');       
                $("#answer3").addClass('d-none');
                $("#answer4").addClass('d-none');
                    timerId =  setInterval(function(){
                        $("#time").html("Time left: " + timer);
                            timer--;
                            if(timer == -1){
                                stop();
                                incorrect++;
                                console.log("correct " + correct);
                                console.log("incorrect " + incorrect);
                                console.log("unanswered " + unanswered);
                                questionThree();
                        };
                    }, 1000);
                }//end incorrect
            }); //end button click
                if(timer == -1){
                    stop();
                    timer = 3;
                $("#title").html("No answer?");
                $("#time").html("Time left: " + timer);
                $("#question").addClass('d-none');
                $("#answer1").addClass('d-none');  
                $("#answer2").addClass('d-none');    
                $("#answer3").addClass('d-none');
                $("#answer4").addClass('d-none');
                    timerId =  setInterval(function(){
                        $("#time").html("Time left: " + timer);
                            timer--;
                            if(timer == -1){
                                stop();
                                unanswered++;
                                console.log("correct " + correct);
                                console.log("incorrect " + incorrect);
                                console.log("unanswered " + unanswered);
                                questionThree();
                        };
                    }, 1000);
                }
    },1000);//end timerId
}  //end questionTwo

function questionThree(){
    timer = 4
    $("#question").removeClass('d-none');
    $("#answer1").removeClass('d-none');       
    $("#answer2").removeClass('d-none');
    $("#answer3").removeClass('d-none');
    $("#answer4").removeClass('d-none');
    $("#title").html("Question 3");
    $("#question").html(questions.question3[0]);
    $("#answer1").html(questions.question3[1]);       //display First question
    $("#answer2").html(questions.question3[2]);
    $("#answer3").html(questions.question3[3]);
    $("#answer4").html(questions.question3[4]);
    $("#time").html("Time left: " + timer);

    timerId =  setInterval(function(){      //start timer
        $("#time").html("Time left: " + timer);
        timer--;

            $('#answer1, #answer2, #answer3, #answer4').click(function () { //start button click
                // correct
                if(this.id == "answer1") {
                stop();
                timer = 3;
                $("#title").html("Correct!");
                $("#question").addClass('d-none');
                $("#answer1").addClass('d-none'); 
                $("#answer2").addClass('d-none');       
                $("#answer3").addClass('d-none');
                $("#answer4").addClass('d-none');
                $("#time").html("Time left: " + timer);
                    timerId =  setInterval(function(){
                        $("#time").html("Time left: " + timer);
                            timer--;
                            if(timer == -1){
                                stop();
                                correct++; 
                                console.log("correct " + correct);
                                console.log("incorrect " + incorrect);
                                console.log("unanswered " + unanswered);
                        };
                    }, 1000);
                } // end correct
                // start incorrect
                else if(this.id !== "answer2"){
                    stop();
                    timer = 3;
                $("#title").html("Incorrect!");
                $("#time").html("Time left: " + timer);
                $("#question").addClass('d-none');
                $("#answer1").addClass('d-none'); 
                $("#answer2").addClass('d-none');       
                $("#answer3").addClass('d-none');
                $("#answer4").addClass('d-none');
                    timerId =  setInterval(function(){
                        $("#time").html("Time left: " + timer);
                            timer--;
                            if(timer == -1){
                                stop();
                                incorrect++;
                                console.log("correct " + correct);
                                console.log("incorrect " + incorrect);
                                console.log("unanswered " + unanswered);
                        };
                    }, 1000);
                }//end incorrect
            }); //end button click
                if(timer == -1){
                    stop();
                    timer = 3;
                $("#title").html("No answer?");
                $("#time").html("Time left: " + timer);
                $("#question").addClass('d-none');
                $("#answer1").addClass('d-none');
                $("#answer2").addClass('d-none');       
                $("#answer3").addClass('d-none');
                $("#answer4").addClass('d-none');
                    timerId =  setInterval(function(){
                        $("#time").html("Time left: " + timer);
                            timer--;
                            if(timer == -1){
                                stop();
                                unanswered++;
                                console.log("correct " + correct);
                                console.log("incorrect " + incorrect);
                                console.log("unanswered " + unanswered);
                        };
                    }, 1000);
                }
    },1000);//end timerId
}  //end questionThree












}); // end
