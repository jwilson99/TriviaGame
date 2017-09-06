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
        "choices":["A2","B2","C2","D2"],
        "answer":"B2"
    },

    {
        "question":"This is the third question?",
        "choices":["A3","B3","C3","D3"],
        "answer":"C3"
    }
];

var time = 30;
var countdownthing;
var questionNumber = 0;

//on window load, hide answer choice buttons, add click event
window.onload = function() {
    $(".answerbtn").css("display","none");
    $("#start").click(start);
    $(".answerbtn").click(userAnswer);
    //initializes time left to 30 seconds
    $("#timer").html(time);
    var answerCorrect;
};


//start function, clicking start button shows answer choices and hides start button
function start() {
    $(".answerbtn").css("display","initial");
    $("#start").css("display","none");
    runCountdown();

    $("#question").html(questions[questionNumber].question);
    $("#answer1").html(questions[questionNumber].choices[0]);
    $("#answer2").html(questions[questionNumber].choices[1]);
    $("#answer3").html(questions[questionNumber].choices[2]);
    $("#answer4").html(questions[questionNumber].choices[3]);
}

function userAnswer () {
    stop();

    if ($(this).text() === questions[questionNumber].answer) {
        answerCorrect = true;
    }
    else {
        answerCorrect = false;
    }

    questionEnd();

    time = 30;
    $("#timer").html(time);
}

function questionEnd() {
    $(".answerbtn").css("display","none");
    if (answerCorrect === true) {
        $("#questionNumber").html("Correct");
        $("#question").html("The correct answer was " + questions[questionNumber].answer);
        runNextQuestion();
    }
    else {
        $("#questionNumber").html("Wrong!");
        $("#question").html("The correct answer was " + questions[questionNumber].answer);
        runNextQuestion();
    }
}

function nextQuestion() {
    questionNumber += 1;

    $("#question").html(questions[questionNumber].question);

    $("#answer1").html(questions[questionNumber].choices[0]);
    $("#answer2").html(questions[questionNumber].choices[1]);
    $("#answer3").html(questions[questionNumber].choices[2]);
    $("#answer4").html(questions[questionNumber].choices[3]);

    start();
}

function runNextQuestion() {
    nextQuestionCountdown = setTimeout(nextQuestion, 3000);
}

function runCountdown() {
    countdownthing = setInterval(countdown, 1000);
}

function countdown() {
    time--;
    $("#timer").html(time);
    if (time === 0) {
        stop();
        $(".answerbtn").css("display","none");
        $("#questionNumber").html("Time up!");
        $("#question").html("The correct answer was " + questions[questionNumber].answer);
        runNextQuestion();
        time = 30;
        $("#timer").html(time);
    }
}

function stop() {
    clearInterval(countdownthing);
}