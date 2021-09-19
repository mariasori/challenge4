//variable declarations

var header = document.querySelector(".header");
var viewHighScores = document.getElementById("viewHighScores");

var quizHomePage = document.getElementById("quizHomePage");
var startButton = document.getElementById("startButton");

var quizQuestionsPage = document.getElementById("quizQuestionsPage");
var quizQuestionHeader = document.getElementById("quizQuestionHeader");
var choice1 = document.getElementById("one");
var choice2 = document.getElementById("two");
var choice3 = document.getElementById("three");
var choice4 = document.getElementById("four");
var correct = document.getElementById("correct");
var answerResponse = document.getElementById("answerResponse");

var timer = document.getElementById("timer");

var finalScorePage = document.getElementById("finalScorePage");
var allDone = document.getElementById("allDone");
var finalScoreIs = document.getElementById("finalScoreIs");
var initials = document.getElementById("initials"); 
var initialInput = document.getElementById("initialInput"); 
var saveButton = document.getElementById("saveButton"); 

var highScorePage = document.getElementById("highScorePage");
var scoreInitials = document.getElementById("scoreIntials");
var highScoreList = document.getElementById("highScoreList");

var goBackButton = document.getElementById("goBackButton");
var clearHighScore = document.getElementById("clearHighScore");

var highScoreArray = [];

var questionIndex = 0;
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
   "one" : "1. scripting tag",
   "two" : "2. javascript tag",
   "three" : "3. script tag",
   "four" : "4. js tag",
   "correct" : "3. script tag",
  },
]

/* starting code quiz page */
function codeQuizChallenge() {
  quizHomePage.style.display = "block"; 
  header.style.display = "block"; 
  quizQuestionsPage.style.display = "none"; 
  finalScorePage.style.display = "none"; 
  highScorePage.style.display = "none";

  var startScore = 0;
  timer.textContent = "Time: " + startScore;; 
}




/* start quiz function */
function startQuiz() { 
  quizHomePage.style.display = "none";  
  header.style.display = "block";
  quizQuestionsPage.style.display = "block"; 
  finalScorePage.style.display = "none";
  highScorePage.style.display = "none";
  
  /* timer interval */
  secondsLeft = 75; 

  timerInterval = setInterval(function() { 
    secondsLeft--;
    timer.textContent = "Time: " + secondsLeft;
    if (secondsLeft === 0 || quizQuestions.length === questionIndex) {
      clearInterval(timerInterval);
      showFinalScore();
    }
  }, 1000);
}

/* showing questions and checking answers */
function showQuestions() {
  var q = quizQuestions[questionIndex];

  quizQuestionHeader.innerHTML = q.quizQuestionHeader;
  choice1.innerHTML = q.one;
  choice1.setAttribute("data-answer", q.one);
  choice2.innerHTML = q.two;
  choice2.setAttribute("data-answer", q.two);
  choice3.innerHTML = q.three;
  choice3.setAttribute("data-answer", q.three);
  choice4.innerHTML = q.four;
  choice4.setAttribute("data-answer", q.four);
}
    

showQuestions();

choice1.addEventListener("click", function (event) {
  checkAnswer(event);
})
choice2.addEventListener("click", function (event) {
  checkAnswer(event);
})
choice3.addEventListener("click", function (event) {
  checkAnswer(event);
})
choice4.addEventListener("click", function (event) {
  checkAnswer(event);
})

 
function checkAnswer(event) {
  event.preventDefault();

  var answer = event.currentTarget.dataset.answer;
  var correctAnswer = null;

  if (quizQuestions[questionIndex].correct === answer) {
      correctAnswer = answer;
  }
  if (answer === correctAnswer) {
  answerResponse.textContent = "Correct!";
  } else {
  answerResponse.textContent = "Incorrect!";
      secondsLeft -= 10
      if (secondsLeft < 0) {
          secondsLeft = 0;
      }
  }
  if (quizQuestions.length === questionIndex+1) {
    showFinalScore(); 
    timer.innerText = "Time: " + secondsLeft;
    return; 
  }
  questionIndex++;
  showQuestions();
}

/* final score page */
function showFinalScore() {
  quizHomePage.style.display = "none";
  quizQuestionsPage.style.display = "none";
  finalScorePage.style.display = "block";
  finalScoreIs.style.display = "block";
  initials.style.display = "block" ;
  saveButton.style.display = "block";
  initialInput.style.display = "block" ;
  highScorePage.style.display = "none";

    finalScoreIs.textContent = "Your final score is " + secondsLeft;
    saveButton.textContent = "Save";
    initials.textContent = "Enter Your Initials: "; 

  clearInterval(timerInterval);
    
} 

/*high score page*/
function showHighScores() {
  quizHomePage.style.display = "none";
  quizQuestionsPage.style.display = "none";
  finalScorePage.style.display = "none";
  finalScoreIs.style.display = "none";
  initials.style.display = "none" ;
  saveButton.style.display = "none";
  initialInput.style.display = "none" ;
  highScorePage.style.display = "block";

  var savedInitials = document.getElementById("initialInput").value;

  var highScoreArray = JSON.parse(localStorage.getItem("highScore")) || [];
  
  var localStorageArray = { score: secondsLeft, initials: savedInitials };
  highScoreArray.push(localStorageArray)
  localStorage.setItem("highScore", JSON.stringify(highScoreArray));

  var listItemEl = document.createElement("li");
  listItemEl.innerText = savedInitials + " : " + secondsLeft; 
  listItemEl.id = "listItemEl";
  document.getElementById("highScoreList").append(listItemEl);

}

function resetVariables() {
  questionIndex = 0;
}

/* event listeners*/ 
startButton.addEventListener("click", function() { 
  startQuiz()
})

saveButton.addEventListener("click", function() {
  showHighScores();
  header.style.display = "none"; 
  quizQuestionsPage.style.display = "none";
  finalScorePage.style.display = "none";
  highScorePage.style.display = "block";
  clearInterval(timerInterval);
})

goBackButton.addEventListener("click", function() { 
  document.getElementById("initialInput").value = ("") 
  resetVariables()
  codeQuizChallenge();
})

clearHighScore.addEventListener("click", function() {
  localStorage.clear();
  resetVariables();
  highScoreList.innerHTML = "";
})

viewHighScores.addEventListener("click", function() {
  header.style.display = "none"; 
  quizHomePage.style.display = "none";
  quizQuestionsPage.style.display = "none";
  finalScorePage.style.display = "none";
  highScorePage.style.display = "block";

  showHighScores();
})



codeQuizChallenge(); 
