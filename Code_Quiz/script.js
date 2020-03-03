var timerEl = document.querySelector("#timer");
var secondsLeft = 5
var quizBeginEl = document.querySelector("#quiz-begin");
var quizEl = document.querySelector("#quiz");
var li;


quizBeginEl.textContent = "Click Here to Begin";
//TIMER
//timer starts at 100
//need a setInterval to decrease the time 
//when timer reaches 0 game is over
function timer() {
    setInterval(countDown, 1000)
}

function countDown() {
    if (secondsLeft < 0) {
        stopTimer()
        // timerEl.textContent = "Time's Up!";
    } else {
        timerEl.textContent = secondsLeft;
        secondsLeft--;
    }
}

function stopTimer() {
    clearInterval(timer);
}




//QUIZ
//find out how to assign true/false values to answers
//randomize choice order?
//when a question is answered correctly a message is displayed 
//when question is answered incorrectly a message is displayed
//if a question is incorrectly answered, time is deducted from timer
//after question is answered and message is displayed
//question and answer choices are cleared and new question is populated
//when all questions are answered game is over

var firstQuestion = "Here's the first question";
var firstQuestionAnswersObject = { "first choice": true, "second choice": false, "third choice": false, "fourth choice": false };
// var firstQuestionChoicesArray = ["first choice", "second choice", "third choice", "fourth choice"];

quizBeginEl.addEventListener("click", function () {
    quizBeginEl.textContent = "";

    timer();
    questionAndAnswers(firstQuestion, firstQuestionAnswersObject);
})

function questionAndAnswers(question, choicesObject) {
    quizEl.textContent = question;
    for (var key in choicesObject) {
        var li = document.createElement("li");
        li.textContent = key;
        quizEl.appendChild(li);
    }
}

// li.addEventListener("click", function() {
//     if (Object.keys(li) === true) {
//         var message = document.createElement("div");
//         message.textContent = "Correct!"
//         quizEl.appendChild(message);
//     }
// })






//SAVE INITIALS AND SCORE
//when game is over, input for initials pops up
//when game is over/ final score is shown 
//final score is set to local store
//initials set to local store
