var header = document.querySelector(".header");
var score = document.getElementById("score");
var submitButton = document.getElementById("submitButton");

var quizQuestions = [
  {
  "quizQuestionHeader" : "What does HTML stand for?", 
  "one" : "1. Hyper Training Marking Language",
  "two" : "2. Hyper Text Marketing Language",
  "three" : "3. Hyper Text Markup Language",
  "four" : "4. Hyper Text Markup Leveler",
  "correct" : "3. Hyper Text Markup Language",
  },{
  "quizQuestionHeader" : "Commonly used data types do NOT include:",
  "one" : "1. booleans",
  "two" : "2. numbers",
  "three" : "3. strings",
  "four" : "4. divs",
  "correct" : "4. divs",
  },{
  "quizQuestionHeader" : "Finding and fixing problems in code is known as...",
  "one" : "1. coding",
  "two" : "2. debugging",
  "three" : "3. automating",
  "four" : "4. programming",
  "correct" : "2. debugging",
  },{
   "quizQuestionHeader" : "You can adjust how your application appears on smaller screens using: ",
   "one" : "1. media queries",
   "two" : "2. html",
   "three" : "3. for loops",
   "four" : "4. if/then statements",
   "correct" : "1. media queries",
  },{
   "quizQuestionHeader" : "Inside what element do we put JavaScript?",
   "one" : "1. <scripting>",
   "two" : "2. <javascript>",
   "three" : "3. <script>",
   "four" : "4. <js>",
   "correct" : "3. <script>",
  },
]

submitButton.addEventListener("click", function() { 
  startQuiz()
})

function startQuiz() { 
  quizHomePage.style.display = "none"; // Hide Rules 
  quizQuestionsPage.style.display = "block"; // Show Quiz Questions Page
  
  secondsLeft = 75; // seconds in Timer 
  
    var timerInterval = setInterval(function() { 
      secondsLeft--;
      timer.textContent = "Time: " + secondsLeft;
      if (secondsLeft === 0 || quizQuestions.length === questionIndex) {
        clearInterval(timerInterval);
        showFinalScore();
      }
    }, 1000);

    




}