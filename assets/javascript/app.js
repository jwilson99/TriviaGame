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

//initializes the time used by the timer to 15
var time = 15;
//the variable used for the one-second time interval
var timer;
//initializes the question number to 0
var questionNumber = 0;
//initializes wrong answer count to 0
var wrongAnswers = 0;
//initializes right answer count to 0
var rightAnswers = 0;
//initialized unanswered questions to 0
var unanswered = 0;

//on window load, hide answer choice buttons, add click event
window.onload = function() {
    //answer buttons hidden
    $(".answerbtn").css("display","none");
    $(".resetbtn").css("display","none");
    //click event for start button
    $("#start").click(start);
    //click event for answer buttons
    $(".answerbtn").click(userAnswer);
    //click event for reset button
    $(".resetbtn").click(reset);
    //initializes time left to 15 seconds
    $("#timer").html(time);
    //toggle variable for right and wrong answers
    var answerCorrect;
};


//start function, clicking start button shows answer choices and hides start button
function start() {
    //answer buttons are visible
    $(".answerbtn").css("display","initial");
    //start button is hidden
    $("#start").css("display","none");
    //timer starts counting down from 15s
    runCountdown();
    //the first question is shown
    $("#question").html(questions[questionNumber].question);
    //the answer choices for the first question are shown
    $("#answer1").html(questions[questionNumber].choices[0]);
    $("#answer2").html(questions[questionNumber].choices[1]);
    $("#answer3").html(questions[questionNumber].choices[2]);
    $("#answer4").html(questions[questionNumber].choices[3]);
}

//function is run when an answer button is pressed
function userAnswer () {
    //timer is st[opped
    stop();
    //checks if the answer is true or false
    if ($(this).text() === questions[questionNumber].answer) {
        //for a correct answer, the answerCorrect variable toggle is set to true
        answerCorrect = true;
        //number of right answers increases by one
        rightAnswers += 1;
    }
    else {
        //for incorrect answer, the answerCorrect variable toggle is set to false
        answerCorrect = false;
        //number of wrong answers increases by one
        wrongAnswers += 1;
    }

    //runs function that displays if you user chose the right or wrong answer along with what the correct answer was.
    questionEnd();
    //resets timer to 15s
    time = 15;
    $("#timer").html(time);
}

//runs when an answer button is clicked
function questionEnd() {
    //hides answer buttons and timer
    $(".answerbtn").css("display","none");
    $("#timer").hide();

    //if answer is correct
    if (answerCorrect === true) {
        //screen shows use was correct
        $("#questionNumber").html("Correct");
        //screen shows the correct answer
        $("#question").html("The correct answer was " + questions[questionNumber].answer);
        //runs a function that shows the next question and restarts timer
        runNextQuestion();
    }
    else {
        //screen shows use was wrong
        $("#questionNumber").html("Wrong!");
        //screen shows the correct answer
        $("#question").html("The correct answer was " + questions[questionNumber].answer);
        //runs a function that shows the next question and restarts timer
        runNextQuestion();
    }
}

//this function is called in runNextQuestion() to set an interval
function nextQuestion() {
    //the question number is increased, prepping for the next place in the question array
    questionNumber += 1;
    if (questionNumber === questions.length) {
        $("#questionNumber").html("Quiz over!");
        //shows what the correct answer was
        $("#question").html("Correct answers: " + rightAnswers + "<br>Wrong answers: " + wrongAnswers + "<br>Unanswered: " + unanswered);
        $(".resetbtn").css("display","initial");
    }
    else {
        //shows next question
        $("#question").html(questions[questionNumber].question);
        //shows next answer choices
        $("#answer1").html(questions[questionNumber].choices[0]);
        $("#answer2").html(questions[questionNumber].choices[1]);
        $("#answer3").html(questions[questionNumber].choices[2]);
        $("#answer4").html(questions[questionNumber].choices[3]);
        //shows and starts the timer countdown
        $("#timer").show();
        time = 15;
        start();
    }
}
//adds in interval to nextQuestion()
function runNextQuestion() {
    setTimeout(nextQuestion, 5000);
}
//adds an interval to countdown()
function runCountdown() {
    timer = setInterval(countdown, 1000);
}
//decreases time by 1 until it reaches 0
function countdown() {
    time--;
    $("#timer").html(time);
    //when timer reaches 0
    if (time === 0) {
        //stop timer
        stop();
        //reset time to 15 s
        time = 15;
        $("#timer").html(time);
        //hide answer buttons and timer
        $(".answerbtn").css("display","none");
        $("#timer").hide();
        //show the user that they have run out of time
        $("#questionNumber").html("Time up!");
        //shows what the correct answer was
        $("#question").html("The correct answer was " + questions[questionNumber].answer);
        //increases unanswered question count by 1
        unanswered += 1;
        //shows the next question and restarts timer
        runNextQuestion();
    }
}
//clears the timer interval
function stop() {
    clearInterval(timer);
}

function reset() {
    //resets the time used by the timer to 15
    time = 15;
    //initializes time left to 15 seconds
    $("#timer").html(time);
    //show timer
    $("#timer").show();
    //resets the question number to 0
    questionNumber = 0;
    //resets wrong answer count to 0
    wrongAnswers = 0;
    //resets right answer count to 0
    rightAnswers = 0;
    //resets unanswered questions to 0
    unanswered = 0;
    //answer buttons and reset button hidden
    $(".answerbtn").css("display","none");
    $(".resetbtn").css("display","none");
    //display start button
    $("#start").css("display","initial");
    //reset quiz text
    $("#questionNumber").html("Quiz");
    //shows what the correct answer was
    $("#question").html("This is where the question will go.");
}