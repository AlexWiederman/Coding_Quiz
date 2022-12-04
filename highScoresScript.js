
var scoreEl = document.querySelector(".score")
var submitEl = document.querySelector(".submit")

var scoreLocalT =JSON.parse(localStorage.getItem("scoreLocalTemp"))

scoreEl.textContent = "Your Score is: " + scoreLocalT

submitEl.addEventListener("click", function(event){
   
    // Getting entered text in text box
    var nameEl = document.querySelector(".name").value
  
    localStorage.setItem("scoreLocal", JSON.stringify(scoreLocalT));
    localStorage.setItem("userLocal", JSON.stringify(nameEl));

}) 
