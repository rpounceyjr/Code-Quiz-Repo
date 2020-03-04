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


//===============================================================

//QUIZ//------------------------------------------------------------
//find out how to assign true/false values to answers
//randomize choice order?
//when a question is answered correctly a message is displayed 
//when question is answered incorrectly a message is displayed
//if a question is incorrectly answered, time is deducted from timer
//after question is answered and message is displayed
//question and answer choices are cleared and new question is populated
//when all questions are answered game is over

// var firstQuestion = "Here's the first question";
// var firstQuestionAnswersObject = { "first choice": true, "second choice": false, "third choice": false, "fourth choice": false };
// var firstQuestionChoicesArray = ["first choice", "second choice", "third choice", "fourth choice"];


quizBeginEl.addEventListener("click", function () {
    quizBeginEl.textContent = "";

    timer();
    // questionAndAnswers(firstQuestion, firstQuestionAnswersObject);
    questionCreator(firstQuestion);
})

var firstQuestion = {
    question : "This is the first question",
    answers : [
        {
            choice : "Here's choice one",
            correct : false
        },
        {
            choice : "Here's choice two",
            correct : false
        },
        {
            choice : "Here's choice three",
            correct : false
        },
        {
            choice : "Here's choice four",
            correct : false
        }
    ]
}

function questionCreator(question) {
    quizEl.textContent = question.question;
    for (var i = 0; i < 4; i++){
        var choiceDiv = document.createElement("div");
        choiceDiv.textContent = question.answers[i].choice;
        quizEl.appendChild(choiceDiv);
    }
}



// OLD OBJECT FUNCTION
// function questionAndAnswers(question, choicesObject) {
//     quizEl.textContent = question;
//     for (var i = 0; i < 4; i++) {
//         var li = document.createElement("li");
//         li.className = i;
//         li.textContent = Object.keys(choicesObject)[i];
//         quizEl.appendChild(li);
//     }
// }







//==============================================================

//SAVE INITIALS AND SCORE---------------------------------------
//when game is over, input for initials pops up
//when game is over/ final score is shown 
//final score is set to local store
//initials set to local store
