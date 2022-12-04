
var scoreEl = document.querySelector(".score")
var submitEl = document.querySelector(".submit")
var displayScoresEl = document.querySelector(".displayScores")
var clearAllEl = document.querySelector(".clearAll")
var lineBreakEl = document.querySelector(".lineBreak")

var scoreNew = JSON.parse(localStorage.getItem("scoreLocalTemp"))

if (scoreNew == null) {
    window.location.href = "./index.html"
}
// submitEl.disabled = false;



scoreEl.textContent = "Your Score is: " + scoreNew

displayHighScores()

submitEl.addEventListener("click", function (event) {
    // submitEl.disabled = true;
    var scoreLocalFunction = JSON.parse(localStorage.getItem("scoreLocal"))
    var userLocalFunction = JSON.parse(localStorage.getItem("userLocal"))
// Getting entered text in text box
    var userNew = document.querySelector(".name").value
    // Check if any data is returned and if not then skip everything
    if (scoreLocalFunction && userLocalFunction !== null) {
        
        
        // Checking if variable is an array to avoid error when pushing element to array
        var scoreArray = Array.isArray(scoreLocalFunction);
        var userArray = Array.isArray(userLocalFunction);
       
            // adding new score to the end of the array
            scoreLocalFunction.push(scoreNew)
            // adding new user to the end of the array
            userLocalFunction.push(userNew)
           
        
    } else {
        scoreLocalFunction = [scoreNew];
        userLocalFunction = [userNew];
    }

    localStorage.setItem("scoreLocal", JSON.stringify(scoreLocalFunction));
    localStorage.setItem("userLocal", JSON.stringify(userLocalFunction));
    displayHighScores()

})

function displayHighScores() {

    var score = JSON.parse(localStorage.getItem("scoreLocal"));
    var user = JSON.parse(localStorage.getItem("userLocal"));

    if (score && user !== null) {
        for (i = 0; i < score.length; i++) {
                displayScoresEl.textContent = '\n' + user[i] + " ----" + score[i];
        }
    } else {
        displayScoresEl.textContent = "";
    }
}

clearAllEl.addEventListener("click", function (event) {
    localStorage.clear();
    displayHighScores();
})