$(document).ready(function () {

console.log("3,2,1,4,2");

var correct = 0;
var incorrect = 0;
var unanswered = 0;
var timer = 10;
var timerId;

var questions = {
    question1: [
        question = "What show came out on April 19, 1997?",
        answer1 = "Rugrats",
        answer2 = "Rocko's Modern Life",
        answer3 = "Angry Beavers",
        answer4 = "Catdog"
    ]
    ,
    question2: [
        question = "In the 'Rugrats', What is Lill Devilles brothers name?" ,
        answer1 = "Lill",
        answer2 = "Phil",
        answer3 = "Jill",
        answer4 = "Bill"
    ]
    ,
    question3: [
        question = "What is the mouses' name in 'Catdog'",
        answer1 = "Winslow",
        answer2 = "Peter",
        answer3 = "Winston",
        answer4 = "T-pain"
    ]
    ,
    question4: [
        question = "What is the main characters name in 'Real monsters'?",
        answer1 = "Krumm",
        answer2 = "Zimbo",
        answer3 = "Hairyette",
        answer4 = "Ickis"
    ]
    ,
    question5: [
        question = "In Rocko's modern life, What is Rockos dogs name?",
        answer1 = "Heffer",
        answer2 = "Spunky",
        answer3 = "Filburt",
        answer4 = "Ed"
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
    timer = 10;
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
                                console.log("--question 1--");
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
                                console.log("--question 1--");
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
                                console.log("--question 1--");
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
    timer = 10;
    $("#question").removeClass('d-none');
    $("#answer1").removeClass('d-none');       
    $("#answer2").removeClass('d-none');
    $("#answer3").removeClass('d-none');
    $("#answer4").removeClass('d-none');
    $("#title").html("Question 2");
    $("#question").html(questions.question2[0]);
    $("#answer1").html(questions.question2[1]);       //display Second question
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
                                console.log("--question 2--");
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
                                console.log("--question 2--");
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
                                console.log("--question 2--");
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
    timer = 10;
    $("#question").removeClass('d-none');
    $("#answer1").removeClass('d-none');       
    $("#answer2").removeClass('d-none');
    $("#answer3").removeClass('d-none');
    $("#answer4").removeClass('d-none');
    $("#title").html("Question 3");
    $("#question").html(questions.question3[0]);
    $("#answer1").html(questions.question3[1]);       //display Third question
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
                                console.log("--question 3--");
                                console.log("correct " + correct);
                                console.log("incorrect " + incorrect);
                                console.log("unanswered " + unanswered);
                                questionFour();
                        };
                    }, 1000);
                } // end correct
                // start incorrect
                else if(this.id !== "answer1"){
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
                                console.log("--question 3--");
                                console.log("correct " + correct);
                                console.log("incorrect " + incorrect);
                                console.log("unanswered " + unanswered);
                                questionFour();
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
                                console.log("--question 3--");
                                console.log("correct " + correct);
                                console.log("incorrect " + incorrect);
                                console.log("unanswered " + unanswered);
                                questionFour();
                        };
                    }, 1000);
                }
    },1000);//end timerId
}  //end questionThree

function questionFour(){
    timer = 10;
    $("#question").removeClass('d-none');
    $("#answer1").removeClass('d-none');       
    $("#answer2").removeClass('d-none');
    $("#answer3").removeClass('d-none');
    $("#answer4").removeClass('d-none');
    $("#title").html("Question 4");
    $("#question").html(questions.question4[0]);
    $("#answer1").html(questions.question4[1]);       //display Fourth question
    $("#answer2").html(questions.question4[2]);
    $("#answer3").html(questions.question4[3]);
    $("#answer4").html(questions.question4[4]);
    $("#time").html("Time left: " + timer);

    timerId =  setInterval(function(){      //start timer
        $("#time").html("Time left: " + timer);
        timer--;

            $('#answer1, #answer2, #answer3, #answer4').click(function () { //start button click
                // correct
                if(this.id == "answer4") {
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
                                console.log("--question 4--");
                                console.log("correct " + correct);
                                console.log("incorrect " + incorrect);
                                console.log("unanswered " + unanswered);
                                questionFive();
                        };
                    }, 1000);
                } // end correct
                // start incorrect
                else if(this.id !== "answer4"){
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
                                console.log("--question 4--");
                                console.log("correct " + correct);
                                console.log("incorrect " + incorrect);
                                console.log("unanswered " + unanswered);
                                questionFive();
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
                                console.log("--question 4--");
                                console.log("correct " + correct);
                                console.log("incorrect " + incorrect);
                                console.log("unanswered " + unanswered);
                                questionFive();
                        };
                    }, 1000);
                }
    },1000);//end timerId
}  //end questionFour

function questionFive(){
    timer = 10;
    $("#question").removeClass('d-none');
    $("#answer1").removeClass('d-none');       
    $("#answer2").removeClass('d-none');
    $("#answer3").removeClass('d-none');
    $("#answer4").removeClass('d-none');
    $("#title").html("Question 5");
    $("#question").html(questions.question5[0]);
    $("#answer1").html(questions.question5[1]);       //display Fifth question
    $("#answer2").html(questions.question5[2]);
    $("#answer3").html(questions.question5[3]);
    $("#answer4").html(questions.question5[4]);
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
                                console.log("--question 5--");
                                console.log("correct " + correct);
                                console.log("incorrect " + incorrect);
                                console.log("unanswered " + unanswered);
                                endPage();
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
                                console.log("--question 5--");
                                console.log("correct " + correct);
                                console.log("incorrect " + incorrect);
                                console.log("unanswered " + unanswered);
                                endPage();
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
                                console.log("--question 5--");
                                console.log("correct " + correct);
                                console.log("incorrect " + incorrect);
                                console.log("unanswered " + unanswered);
                                endPage();
                        };
                    }, 1000);
                }
    },1000);//end timerId
}  //end questionFive

function endPage(){
    $("#question").addClass('d-none');
    $("#time").addClass('d-none');
    $("#answer1").removeClass('d-none');       
    $("#answer2").removeClass('d-none');
    $("#answer3").removeClass('d-none');
    $("#answer4").addClass('d-none');
    $("#title").html("Results");
    $("#answer1").html("correct " + correct);
    $("#answer2").html("incorrect " + incorrect);       //display Results
    $("#answer3").html("unanswered " + unanswered);
    $("#start").removeClass('d-none');
    $("#start").html("Try again?");
};









}); // end
