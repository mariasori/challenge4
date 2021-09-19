var header = document.querySelector(".header");
var score = document.getElementById("score");

var quizHomePage = document.getElementById("quizHomePage");
var submitButton = document.getElementById("submitButton");

var quizQuestionsPage = document.getElementById("quizQuestionsPage");
var quizQuestionHeader = document.getElementById("quizQuestionHeader");
var choice1 = document.getElementById("one");
var choice2 = document.getElementById("two");
var choice3 = document.getElementById("three");
var choice4 = document.getElementById("four");
var correct = document.getElementById("correct");
var answerResponse = document.getElementById("answerResponse");

var timer = document.getElementById("timer");


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

function codeQuizChallenge() {
  quizHomePage.style.display = "block"; 
  header.style.display = "block"; 
  quizQuestionsPage.style.display = "none"; 

  var startScore = 0;
  timer.textContent = "Time: " + startScore; 
}



function startQuiz() { 
  quizHomePage.style.display = "none";  
  quizQuestionsPage.style.display = "block"; 
  
  secondsLeft = 75; 
  
  var timerInterval = setInterval(function() { 
    secondsLeft--;
    timer.textContent = "Time: " + secondsLeft;
    if (secondsLeft === 0 || quizQuestions.length === questionIndex) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

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
        return; 
  }
  questionIndex++;
  showQuestions();
}


submitButton.addEventListener("click", function() { 
  startQuiz()
  console.log("start")
})

codeQuizChallenge(); 
