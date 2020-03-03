var timerEl = document.querySelector("#timer");
var secondsLeft = 5
var quizBeginEl = document.querySelector("#quiz-begin");
var quizEl = document.querySelector("#quiz");

quizBeginEl.textContent = "Click Here to Begin";
//TIMER
//timer starts at 100
//need a setInterval to decrease the time 
//when timer reaches 0 game is over
function timer() {
    setInterval(countDown, 1000)
}

function countDown() {
    if(secondsLeft < 0){
        stopTimer()
    }else{
    timerEl.textContent = secondsLeft;
    secondsLeft--;
}
}

function stopTimer() {
    clearInterval(timer);
}
   



//QUIZ
//when a question is answered correctly a message is displayed 
//when question is answered incorrectly a message is displayed
//if a question is incorrectly answered, time is deducted from timer
//after question is answered and message is displayed
   //question and answer choices are cleared and new question is populated
//when all questions are answered game is over

var firstQuestion = "Here's the first question:";
var firstQuestionChoicesArray = {"first choice": true,"second choice":false, "third choice":false, "fourth choice":false};

quizBeginEl.addEventListener("click", function(){
    quizBeginEl.textContent = "";

    timer();
    questionAndAnswers(firstQuestion,firstQuestionChoicesArray);
})

function questionAndAnswers(question, choicesArray) {
    quizEl.textContent = question;
    for (var i = 0; i < choicesArray.length; i++) {
        var li = document.createElement("li");
        li.textContent = choicesArray[i];
        quizEl.appendChild(li);
       }
}


//SAVE INITIALS AND SCORE
//when game is over, input for initials pops up
//when game is over/ final score is shown 
//final score is set to local store
//initials set to local store
