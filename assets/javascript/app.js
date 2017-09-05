//initializing variables
//object variables for questions
//questions
var questions = [

    {
        "question":"This is the question?",
        "choices":["A","B","C","D"],
        "answer":"A"
    },

    {
        "question":"This is a different question?",
        "choices":["A","B","C","D"],
        "answer":"B"
    }
];

var time = 30;
var countdownthing;

//on window load, hide answer choice buttons, add click event
window.onload = function() {
    $(".answerbtn").css("display","none");
    $("#start").click(start);
    //initializes time left to 30 seconds
    $("#timer").html(time);
};


//start function, clicking start button shows answer choices and hides start button
function start() {
    $(".answerbtn").css("display","initial");
    $("#start").css("display","none");
    runCountdown();

    //I'm not sure where I want to put this for loop yet
    for (i=0, i < questions.length, i++) {
        $("#question").html(questions[i].question);
        $("#answer1").html(questions[i].choices[0]);
        $("#answer2").html(questions[i].choices[1]);
        $("#answer3").html(questions[i].choices[2]);
        $("#answer4").html(questions[i].choices[3]);
    }
}

function runCountdown() {
    countdownthing = setInterval(countdown, 1000);
}

function countdown() {
    time--;
    $("#timer").html(time);
    if (time === 0) {
        stop();
        alert("Time Up!");
    }
}

function stop() {
    clearInterval(countdownthing);
}