//initializing variables
//object variables for questions
//questions
var questions = [

    {
        "question":"King of Gods",
        "choices":["Jupiter","Mars","Sol","Saturn"],
        "answer":"Jupiter",
        "number":"1/13",
        "fact":"Father of pretty much the entirety of Rome by now. (Like seriously... try to tone it down, Jupiter)",
        "image":'assets/images/jupiter.jpg'
    },

    {
        "question":"Goddess of agriculture",
        "choices":["Vervactor","Saturn","Ceres","Flora"],
        "answer":"Ceres",
        "number":"2/13",
        "fact":"Known as the mother of Persopina. Every Fall and Winter, her grieving causes the leaves to fall.",
        "image":'assets/images/ceres.jpg'
    },

    {
        "question":"God of fire, metalworking, and the forge",
        "choices":["Mars","Vulcan","Vertumnus","Ops"],
        "answer":"Vulcan",
        "number":"3/13",
        "fact":"Had his own festival, Vulcanalia, held August 23rd every year. He sure does look a lot like that Greek God, Hephaestus...",
        "image":'assets/images/vulcan.jpg'
    },

    {
        "question": "Goddess of wisdom, poetry, and medicine",
        "choices": ["Minerva", "Diana", "Apollo", "Genius"],
        "answer": "Minerva",
        "number": "4/13",
        "fact": "Turned a girl into a spider for beating her in a weaving contest. I probably would just leave Minerva alone whenever possible...",
        "image":'assets/images/minerva.jpg'
    },

    {
        "question":"Goddess of love",
        "choices":["Cupid","Diana","Juno","Venus"],
        "answer":"Venus",
        "number":"5/13",
        "fact":"Said to be born from sea foam. Wife to Vulcan and mother of both Cupid and Aeneas. Her kids are very different from one another...",
        "image":'assets/images/venus.jpg'
    },

    {
        "question":"God of war",
        "choices":["Jupiter","Vulcan","Apollo","Mars"],
        "answer":"Mars",
        "number":"6/13",
        "fact":"Also Venus's lover. Hmm... Maybe there's a reason Cupid and Aeneas are so different...",
        "image":'assets/images/mars.jpg'
    },

    {
        "question":"God of the sun, poetry, and oracles",
        "choices":["Apollo","Summanus","Salus","Neptune"],
        "answer":"Apollo",
        "number":"7/13",
        "fact":"Was said to carry the sun across the sky in a chariot. There was some debate as to whether it was Apollo or Sol carrying the sun, but Apollo is more frequently referenced.",
        "image":'assets/images/apollo.jpg'
    },

    {
        "question":"God of the sea and fresh water",
        "choices":["Hades","Neptune","Fortuna","Ops"],
        "answer":"Neptune",
        "number":"8/13",
        "fact":"Creator of horses. He had an unfortunate affair with Medusa... She's made of snakes now, so... Thanks again, Minerva. (Seriously. Don't even cross paths with Minerva.)",
        "image":'assets/images/neptune.jpg'
    },

    {
        "question":"God of the underworld",
        "choices":["Proserpina","Saturn","Mars","Pluto"],
        "answer":"Pluto",
        "number":"9/13",
        "fact":"Given the worst kingdom of the three children of Saturn. He also has a pretty neat three-headed dog though.",
        "image":'assets/images/pluto.jpg'
    },

    {
        "question":"God of wine and drunken revelry",
        "choices":["Maia","Bacchus","Uranus","Janus"],
        "answer":"Bacchus",
        "number":"10/13",
        "fact":"His mother was mortal and his father was Zeus (surprise surprise). Jupiter gave birth to him from his leg... I can see why he drinks.",
        "image":'assets/images/bacchus.jpg'
    },

    {
        "question":"Goddess and protector of women",
        "choices":["Venus","Ceres","Juno","Diana"],
        "answer":"Juno",
        "number":"11/13",
        "fact":"Sister and wife to Jupiter. History depicts her in many roles and epithets, leading to some confusion as to just where her roles and talents end.",
        "image":'assets/images/juno.jpg'
    },

    {
        "question":"Goddess of the hunt and the moon",
        "choices":["Vesta","Apollo","Mercury","Diana"],
        "answer":"Diana",
        "number":"12/13",
        "fact":"Known as a virgin goddess, alongside Vesta and Minerva. There is a branch of Wicca celebrating Diana's feminine energy.",
        "image":'assets/images/diana.jpg'
    },

    {
        "question":"God of travel/trade and messenger to the Gods",
        "choices":["Vesta","Uranus","Mercury","Fortuna"],
        "answer":"Mercury",
        "number":"13/13",
        "fact":"A guide of the souls into the underworld. He's also known as a trickster God. I'm not sure he was the best choice as escort.",
        "image":'assets/images/mercury.jpeg'
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


//variable for storing the answer return
var answerFact = "The correct answer was " + questions[questionNumber].answer + "." + "<br>" + "<img src=" + questions[questionNumber].image + ">" + "<br>" + questions[questionNumber].fact;

//on window load, hide answer choice buttons, add click event
window.onload = function() {
    //answer buttons and reset button hidden
    $(".answerbtn").css("display","none");
    $(".resetbtn").css("display","none");
    //timer hidden
    $("#timer").hide();
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
    //shows timer
    $("#timer").show();
    //timer starts counting down from 15s
    runCountdown();
    //show question number
    $("#questionNumber").html("<h1>Question " + questions[questionNumber].number + "</h1>");
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
        $("#questionNumber").html("<h1>Correct!</h1>");
        //screen shows the correct answer
        $("#question").html(answerFact);
        //runs a function that shows the next question and restarts timer
        runNextQuestion();
    }
    else {
        //screen shows use was wrong
        $("#questionNumber").html("<h1>Wrong!</h1>");
        //screen shows the correct answer
        $("#question").html(answerFact);
        //runs a function that shows the next question and restarts timer
        runNextQuestion();
    }
}

//this function is called in runNextQuestion() to set an interval
function nextQuestion() {
    //the question number is increased, prepping for the next place in the question array
    questionNumber += 1;
    if (questionNumber === questions.length) {
        $("#questionNumber").html("<h1>Quiz over!</h1>");
        //shows what the correct answer was
        $("#question").html("Correct answers: " + rightAnswers + "<br>Wrong answers: " + wrongAnswers + "<br>Unanswered: " + unanswered);
        $(".resetbtn").css("display","initial");
    }
    else {
        //update answerFact
        answerFact = "The correct answer was " + questions[questionNumber].answer +"." + "<br>" + "<img src=" + questions[questionNumber].image + ">" + "<br>" + questions[questionNumber].fact;
        //resets header
        $("#questionNumber").html("<h1>Question " + questions[questionNumber].number + "</h1>");
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
    setTimeout(nextQuestion, 7000);
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
        $("#questionNumber").html("<h1>Time up!</h1>");
        //shows what the correct answer was
        $("#question").html(answerFact);
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
    $("#questionNumber").html("<h1>Roman Gods and Goddesses Quiz</h1>");
    //shows what the correct answer was
    $("#question").html("In this quiz, tell us the name of the described Roman God or Goddess based on the given description.<br><br>Watch your time though; you have only a limited time for each question!");
}