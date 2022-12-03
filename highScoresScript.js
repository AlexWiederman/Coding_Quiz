
var scoreEl = document.querySelector(".score")
var submitEl = document.querySelector(".submit")
var scoreLocalT =JSON.parse(localStorage.getItem("scoreLocalTemp"))

scoreEl.textContent = "Your Score is: " + scoreLocalT

submitEl.addEventListener("click", function(event){
    var name = 
    localStorage.setItem("scoreLocalTemp", JSON.stringify(timerCount));

}) 