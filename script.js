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
//Displaying High Scores
function displayHighScores() {

}

function startGame() {
    //Starting off with the first question
    questionNumber = 0;
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
    } else if(questionNumber === 2) {
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
        questionEl.textContent = "";
        answer1El.textContent = "";
        answer2El.textContent = "";
        answer3El.textContent = "";
        answer4El.textContent = "";
        
        gameDone = true;
    }

}
// Function starts the timer/score for the game
function timer() {
    // Start timer
    timer = setInterval(function () {
        timerCount--;
        timerEl.textContent = "Time Left: " + timerCount;


        // If time has run out
        if (timerCount === 0 || gameDone === true) {
            // Clears interval
            clearInterval(timer);
            displayHighScores();
            timerEl.textContent = "Game Over";
            playButtonEl.disabled = false;
        }
    }, 1000)

}


//Checking for Correct or incorrect answer when pressing a button
answerContainerEl.addEventListener("click", function (event) {
    var currentAnswer = event.path[0].outerText
    if (currentAnswer === questionsList[0].correctAnswer && questionNumber === 0) {
        answerCorrectness = true;
    } else {
        answerCorrectness = false;
    }
    if (answerCorrectness === true) {
        questionNumber++;
        answerFeedbackEl.textContent = "Answer Correct!"
        answerCorrectness = false;
    } else {
        questionNumber++;
        answerFeedbackEl.textContent = "Answer Incorrect!"
    }
    nextQuestion()
})

// Listen for click event on "View High Scores" tab
playButtonEl.addEventListener("click", function (event) {
    gameDone = false;
    //Setting the inital start time/score
    timerCount = 100;
    playButtonEl.disabled = true;
    startGame()
    timer()

})