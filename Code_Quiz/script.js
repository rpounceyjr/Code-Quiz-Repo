var timerEl = document.querySelector("#timer");
var secondsLeft = 100
var quizBeginEl = document.querySelector("#quiz-begin");
var quizEl = document.querySelector("#quiz");
var scoreSpan = document.querySelector("#score-span");



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


//LISTENER TO BEGIN QUIZ AND POPULATE FIRST QUESTION/ANSWER
// quizBeginEl.addEventListener("click", function () {
//     quizBeginEl.textContent = "";

//     timer();
//     // questionAndAnswers(firstQuestion, firstQuestionAnswersObject);

//     questionCreator(firstQuestion);

// })

//LISTENER TO CHOOSE ANSWERS


// QUESTION/ANSWER OBJECTS
quizBeginEl.addEventListener("click", function () {
    quizBeginEl.textContent = "";

    timer();
    // questionAndAnswers(firstQuestion, firstQuestionAnswersObject);
    //for (i = 0; i < questionArray.length; i++){
    questionCreator(firstQuestion, makeFirstChoice);
   // }
})


var questionArray = [firstQuestion, secondQuestion, thirdQuestion, fourthQuestion, fifthQuestion];
var firstQuestion = {
    question: "This is the first question",
    answers: [
        {
            choice: "Here's choice one",
            correct: true
        },
        {
            choice: "Here's choice two",
            correct: false
        },
        {
            choice: "Here's choice three",
            correct: false
        },
        {
            choice: "Here's choice four",
            correct: false
        }
    ]
}


var secondQuestion = {
    question: "This is the second question",
    answers: [
        {
            choice: "Here's choice one",
            correct: false
        },
        {
            choice: "Here's choice two",
            correct: false
        },
        {
            choice: "Here's choice three",
            correct: true
        },
        {
            choice: "Here's choice four",
            correct: false
        }
    ]
}


var thirdQuestion = {
    question: "This is the first question",
    answers: [
        {
            choice: "Here's choice one",
            correct: false
        },
        {
            choice: "Here's choice two",
            correct: false
        },
        {
            choice: "Here's choice three",
            correct: false
        },
        {
            choice: "Here's choice four",
            correct: false
        }
    ]
}


var fourthQuestion = {
    question: "This is the first question",
    answers: [
        {
            choice: "Here's choice one",
            correct: false
        },
        {
            choice: "Here's choice two",
            correct: false
        },
        {
            choice: "Here's choice three",
            correct: false
        },
        {
            choice: "Here's choice four",
            correct: false
        }
    ]
}


var fifthQuestion = {
    question: "This is the first question",
    answers: [
        {
            choice: "Here's choice one",
            correct: false
        },
        {
            choice: "Here's choice two",
            correct: false
        },
        {
            choice: "Here's choice three",
            correct: false
        },
        {
            choice: "Here's choice four",
            correct: false
        }
    ]
}
//DECLARING ELEMENTS FOR DIVS THAT ARE CREATED BY FUNCTION
var firstChoiceEl;
var secondChoiceEl;
var thirdChoiceEl;
var fourthChoiceEl;



//MAKE CHOICE FUNCTIONS
function makeFirstChoice() {
    firstChoiceEl = document.querySelector(".choice-div0");
    firstChoiceEl.addEventListener("click", function () {
        correctChoice(secondQuestion, makeSecondChoice);
    })
    secondChoiceEl = document.querySelector(".choice-div1");
    secondChoiceEl.addEventListener("click", function () {
        incorrectChoice(secondQuestion, makeSecondChoice);
    })
    thirdChoiceEl = document.querySelector(".choice-div2");
    thirdChoiceEl.addEventListener("click", function () {
        incorrectChoice(secondQuestion, makeSecondChoice);
    })

    fourthChoiceEl = document.querySelector(".choice-div3");
    fourthChoiceEl.addEventListener("click", function () {
        incorrectChoice(secondQuestion, makeSecondChoice);
    })
}

function makeSecondChoice() {
    firstChoiceEl = document.querySelector(".choice-div0");
    firstChoiceEl.addEventListener("click", function () {
        incorrectChoice(secondQuestion, makeThirdChoice);
    })
    secondChoiceEl = document.querySelector(".choice-div1");
    secondChoiceEl.addEventListener("click", function () {
        incorrectChoice(secondQuestion, makeThirdChoice);
    })
    thirdChoiceEl = document.querySelector(".choice-div2");
    thirdChoiceEl.addEventListener("click", function () {
        correctChoice(secondQuestion, makeThirdChoice);
    })

    fourthChoiceEl = document.querySelector(".choice-div3");
    fourthChoiceEl.addEventListener("click", function () {
        incorrectChoice(secondQuestion, makeThirdChoice);
    })
}

function makeThirdChoice() {
    console.log("You made a third choice!");
}


//FUNCTIONS FOR CHOICES ON EVENT LISTENERS, EACH TAKES AN ARGUMENT OF A CALLBACK THAT CALLS
//  THE NEXT QUESTIONCREATOR

//FUNCTION FOR CORRECT CHOICE
//next choice has to be a function that calls questionCreator with the next question
//and 
function correctChoice(question, choices) {
    var messageDiv = document.createElement("div");
    messageDiv.textContent="Correct!";
    quizEl.appendChild(messageDiv);
    scoreSpan.textContent++;
    setTimeout(function() {
        questionCreator(question, choices);
    }, 2000, question, choices)
    
}
//FUNCTION FOR INCORRECT CHOICE
function incorrectChoice(question, choices) {
    var messageDiv = document.createElement("div");
    messageDiv.textContent="Incorrect!";
    quizEl.appendChild(messageDiv);
    secondsLeft= secondsLeft - 10;
    setTimeout(function() {
        questionCreator(question, choices);
    }, 2000, question, choices)
}


function questionCreator(question,choice) {
    quizEl.textContent = question.question;
    for (var i = 0; i < 4; i++) {
        var choiceDiv = document.createElement("div");
        choiceDiv.className = "choice-div" + [i].toString();
        choiceDiv.textContent = question.answers[i].choice;
        quizEl.appendChild(choiceDiv);
    }
    choice();
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
