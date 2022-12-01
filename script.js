var question = document.getElementsByClassName("questionTitle")
var answers = document.getElementsByClassName("answers")
var highScore = document.getElementsByClassName("highScores")

var questionsOne = {
    number: 1,
    question: "Which command will stop an infinite loop?",
    answer: "Ctrl-C",
    answerOne: "Alt-C",
    answerTwo: "Shift-C",
    answerThree: "Esc",
    answerFour: "Ctrl-C"
}

var questionsTwo = {
    number: 2,
    question: "What keyword is used to check whether a given property is valid or not?",
    answer: "in",
    answerOne: "is in",
    answerTwo: "exists",
    answerThree: "in",
    answerFour: "lies"
}

var questionsThree = {
    number: 3,
    question: "When an operator’s value is NULL, the typeof returned by the unary operator is:",
    answer: "Object",
    answerOne: "Object",
    answerTwo: "Undefined",
    answerThree: "Integer",
    answerFour: "Boolean"
}

var questionsFour = {
    number: 4,
    question: "What does the Javascript “debugger” statement do?",
    answer: "It acts as a breakpoint in a program.",
    answerOne: "It will debug all the errors in the program at runtime.",
    answerTwo: "It will debug error in the current statement if any.",
    answerThree: "It acts as a breakpoint in a program.",
    answerFour: "All of the above."
}


// Listen for click event on "View High Scores" tab
highScore.addEventListener("click", function() {

})

function highScoreScreen() {
    
}