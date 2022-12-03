var questionEl = document.querySelector(".questionTitle")
var answer1El = document.querySelector(".answer1")
var answer2El = document.querySelector(".answer2")
var answer3El = document.querySelector(".answer3")
var answer4El = document.querySelector(".answer4")
var highScoreEl = document.querySelector(".highScores")
var playButtonEl = document.querySelector(".playButton")
var timerEl = document.querySelector(".timeLeft")
var answerContainerEl = document.querySelector(".answerContainer")
var answerFeedbackEl = document.querySelector(".answerFeedback")
var selectedAnswer;
//initalizing variables
var questionAnswered;
var timerCount;
var gameDone;
var user = [];
var highScore = [];
var userLocal = [];
var scoreLocal = [];
var questionNumber;

//Keeping track 
var answerCorrectness;


var questionsList = [
    {
        number: 1,
        question: "Which command will stop an infinite loop?",
        correctAnswer: "Ctrl-C",
        answerOne: "Alt-C",
        answerTwo: "Shift-C",
        answerThree: "Esc",
        answerFour: "Ctrl-C"
    },
    {
        number: 2,
        question: "What keyword is used to check whether a given property is valid or not?",
        correctAnswer: "in",
        answerOne: "is in",
        answerTwo: "exists",
        answerThree: "in",
        answerFour: "lies"
    },
    {
        number: 3,
        question: "When an operator’s value is NULL, the typeof returned by the unary operator is:",
        correctAnswer: "Object",
        answerOne: "Object",
        answerTwo: "Undefined",
        answerThree: "Integer",
        answerFour: "Boolean"
    },
    {
        number: 4,
        question: "What does the Javascript “debugger” statement do?",
        correctAnswer: "It acts as a breakpoint in a program.",
        answerOne: "It will debug all the errors in the program at runtime.",
        answerTwo: "It will debug error in the current statement if any.",
        answerThree: "It acts as a breakpoint in a program.",
        answerFour: "All of the above."
    }
]
var highScoresScreen = {
    number: 0,
    question: "High Scores",
    answer: "It acts as a breakpoint in a program.",
    answerOne: "",
    answerTwo: "",
    answerThree: "",
    answerFour: ""
}

//Calling function so scores are loaded when page is first opened
initalize();
//Function to get highscores from webpage memory when the page loads
function initalize() {
    var initalUser = JSON.parse(localStorage.getItem(userLocal))
    //If variable doesn't exist yet, set to nothing
    if (initalUser === null) {
        user = []
    } else {
        user = JSON.parse(localStorage.getItem(userLocal))
    }

    var initalScore = JSON.parse(localStorage.getItem(scoreLocal))
    //If variable doesn't exist yet, set to nothing
    if (initalScore === null) {
        highScore = []
    } else {
        highScore = JSON.parse(localStorage.getItem(scoreLocal))
    }
}

function startGame() {
    //Starting off with the first question
    questionNumber = 0;
    questionAnswered = false;
     //changing the class of the answer buttons to hide them in order to show the high scores
     answer1El.setAttribute("id", "showAnswers")
     answer2El.setAttribute("id", "showAnswers")
     answer3El.setAttribute("id", "showAnswers")
     answer4El.setAttribute("id", "showAnswers")
    if (questionNumber === 0) {

        questionEl.textContent = questionsList[0].question;
        answer1El.textContent = questionsList[0].answerOne;
        answer2El.textContent = questionsList[0].answerTwo;
        answer3El.textContent = questionsList[0].answerThree;
        answer4El.textContent = questionsList[0].answerFour;
    }
}

//Go to next question after a correct or incorect answer
function nextQuestion() {
    if (questionNumber === 1) {
        questionEl.textContent = questionsList[1].question;
        answer1El.textContent = questionsList[1].answerOne;
        answer2El.textContent = questionsList[1].answerTwo;
        answer3El.textContent = questionsList[1].answerThree;
        answer4El.textContent = questionsList[1].answerFour;
    } else if (questionNumber === 2) {
        questionEl.textContent = questionsList[2].question;
        answer1El.textContent = questionsList[2].answerOne;
        answer2El.textContent = questionsList[2].answerTwo;
        answer3El.textContent = questionsList[2].answerThree;
        answer4El.textContent = questionsList[2].answerFour;
    } else if (questionNumber === 3) {
        questionEl.textContent = questionsList[3].question;
        answer1El.textContent = questionsList[3].answerOne;
        answer2El.textContent = questionsList[3].answerTwo;
        answer3El.textContent = questionsList[3].answerThree;
        answer4El.textContent = questionsList[3].answerFour;
    } else if (questionNumber === 4) {
        gameDone = true;
    }
}

//Displaying the answerfeedback for a short time
function answerCorrectFeedback() {
    if (questionAnswered === true)
        answerFeedbackEl.textContent = "Answer Correct!"
        answerFeedbackEl.setAttribute("id", "answerCorrect")
}
function answerIncorrectFeedback() {
    if (questionAnswered === true)
        answerFeedbackEl.textContent = "Answer Incorrect!"
        answerFeedbackEl.setAttribute("id", "answerIncorrect")
}

// Function starts the timer/score for the game
function timer() {
    // Start timer
    timer = setInterval(function () {
        timerCount--;
        timerEl.textContent = "Time Left: " + timerCount;

        //Subtracting from Timer count when an answer is wrong
        if (answerCorrectness === false && questionAnswered === true) {
            timerCount = timerCount - 10;
            //reseting variable so it will only subtract 10 once
            questionAnswered = false;
        } else if (answerCorrectness === true && questionAnswered === true) {
            //Reseting variable with no action because the answer was correct
            questionAnswered = false;
        }

        // If time has run out or answers are finished
        if (timerCount <= 0 || gameDone === true) {
            // Clears interval
            clearInterval(timer);
            timerEl.textContent = "Game Over: " + timerCount;
            playButtonEl.disabled = false;
            //Setting question texts to blank after game is over
            questionEl.textContent = "";
            answer1El.textContent = "";
            answer2El.textContent = "";
            answer3El.textContent = "";
            answer4El.textContent = "";
            //changing the class of the answer buttons to hide them to show that the game is finished
            answer1El.setAttribute("id", "hideAnswers")
            answer2El.setAttribute("id", "hideAnswers")
            answer3El.setAttribute("id", "hideAnswers")
            answer4El.setAttribute("id", "hideAnswers")
            //Storing timer variable temperarlly in variable to call again on high scores screen
            localStorage.setItem("scoreLocalTemp", JSON.stringify(timerCount));
            // Automatically going to high scores page after the game is over in order to store high score locally
            window.location.href = "./highScores.html"

        }
    }, 1000)

}
//Checking for Correct or incorrect answer when pressing a button
answerContainerEl.addEventListener("click", function (event) {
    // Stopping bubbling so you have to press the actual button
    event.stopPropagation();
    //Only look for another answer click once the previous one has been read. It takes a second to read it because of the timer
    if (questionAnswered === false) {
        var currentAnswer = event.path[0].outerText
        if (currentAnswer === questionsList[0].correctAnswer && questionNumber === 0) {
            questionAnswered = true;
            answerCorrectness = true;
        } else {
            questionAnswered = true;
            answerCorrectness = false;
        }
        if (answerCorrectness === true) {
            questionNumber++;
            answerCorrectFeedback()
        } else {
            questionNumber++;
            answerIncorrectFeedback()
        }
        nextQuestion()
    }
})

// Listen for click event on "Play Game" tab
playButtonEl.addEventListener("click", function (event) {
    gameDone = false;
    //Setting the inital start time/score
    timerCount = 100;
    playButtonEl.disabled = true;
    startGame()
    timer()

})