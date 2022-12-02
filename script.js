var questionEl = document.querySelector(".questionTitle")
var answersEl = document.querySelector(".answers")
var highScoreEl = document.querySelector(".highScores")
var playButtonEl = document.querySelector(".playButton")
var timerEl = document.querySelector(".timeLeft")
//initalizing variables
var timerCount;
var gameDone;
var user = [];
var highScore = [];
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
    user = localStorage.getItem(userLocal)
    highScore = localStorage.getItem(highScoreLocal)
}
//Displaying High Scores
function displayHighScores() {
    
}

// Listen for click event on "View High Scores" tab
playButtonEl.addEventListener("click", function (event) {
    gameDone = false;
    //Setting the inital start time/score
    timerCount = 100;
    playButtonEl.disabled = true;
    timer()
})

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
        }
    }, 1000)

}