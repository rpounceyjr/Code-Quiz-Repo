var timerEl = document.querySelector("#timer");
var timerDiv = document.querySelector(".timer-div");
var secondsLeft = 3;
var quizBeginEl = document.querySelector("#quiz-begin");
var quizEl = document.querySelector("#quiz");
var scoreSpan = document.querySelector("#score-span");
var highScoreEl = document.querySelector(".high-score");



quizBeginEl.textContent = "Click Here to Begin";
//TIMER
//timer starts at 100
//need a setInterval to decrease the time 
//when timer reaches 0 game is over
var timer;

function countDown() {

    if (secondsLeft < 1) {
        timerDiv.textContent = "Time's Up!";
        clearInterval(timer);
        endOfQuiz();
    } else {
        timerEl.textContent = secondsLeft;
        secondsLeft--;
    }
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
    timer = setInterval(countDown, 1000);
    countDown();
    // timer();
    // questionAndAnswers(firstQuestion, firstQuestionAnswersObject);
    //for (i = 0; i < questionArray.length; i++){
    questionCreator(firstQuestion, makeFirstChoice);
    // }
})



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
    question: "This is the third question",
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
            correct: true
        }
    ]
}


var fourthQuestion = {
    question: "This is the fourth question",
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


var fifthQuestion = {
    question: "This is the fifth question",
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
//DECLARING ELEMENTS FOR DIVS THAT ARE CREATED BY FUNCTION
var firstChoiceEl;
var secondChoiceEl;
var thirdChoiceEl;
var fourthChoiceEl;

//LISTENER FUNCTIONS:
// IN ORDER TO REMOVE THE LISTENERS AFTER ONE IS CLICKED, I HAD TO NAME THE ANONYMOUS FUNCTION
// IN THE LISTENER
var correctFirstChoiceListenerFunction = function () {
    correctChoice(secondQuestion, makeSecondChoice);
}

var correctSecondChoiceListenerFunction = function () {
    correctChoice(thirdQuestion, makeThirdChoice);
}
var correctThirdChoiceListenerFunction = function () {
    correctChoice(fourthQuestion, makeFourthChoice);
}
var correctFourthChoiceListenerFunction = function () {
    correctChoice(fifthQuestion, makeFifthChoice);
}

var correctFifthChoiceListenerFunction = function () {
    finalCorrectChoice();
}
//LISTENER FUNCTIONS FOR INCORRECT RESPONSES
var incorrectFirstChoiceListenerFunction = function () {
    incorrectChoice(secondQuestion, makeSecondChoice);
}

var incorrectSecondChoiceListenerFunction = function () {
    incorrectChoice(thirdQuestion, makeThirdChoice);
}
var incorrectThirdChoiceListenerFunction = function () {
    incorrectChoice(fourthQuestion, makeFourthChoice);
}
var incorrectFourthChoiceListenerFunction = function () {
    incorrectChoice(fifthQuestion, makeFifthChoice);
}

var incorrectFifthChoiceListenerFunction = function () {
    finalIncorrectChoice();
}
//MAKE CHOICE FUNCTIONS
function makeFirstChoice() {
    firstChoiceEl = document.querySelector(".choice-div0");
    firstChoiceEl.addEventListener("click", correctFirstChoiceListenerFunction)

    secondChoiceEl = document.querySelector(".choice-div1");
    secondChoiceEl.addEventListener("click", incorrectFirstChoiceListenerFunction)

    thirdChoiceEl = document.querySelector(".choice-div2");
    thirdChoiceEl.addEventListener("click", incorrectFirstChoiceListenerFunction)

    fourthChoiceEl = document.querySelector(".choice-div3");
    fourthChoiceEl.addEventListener("click", incorrectFirstChoiceListenerFunction)
}

function makeSecondChoice() {
    firstChoiceEl = document.querySelector(".choice-div0");
    firstChoiceEl.addEventListener("click", incorrectSecondChoiceListenerFunction);

    secondChoiceEl = document.querySelector(".choice-div1");
    secondChoiceEl.addEventListener("click", incorrectSecondChoiceListenerFunction);

    thirdChoiceEl = document.querySelector(".choice-div2");
    thirdChoiceEl.addEventListener("click", correctSecondChoiceListenerFunction);

    fourthChoiceEl = document.querySelector(".choice-div3");
    fourthChoiceEl.addEventListener("click", incorrectSecondChoiceListenerFunction);
}

function makeThirdChoice() {
    firstChoiceEl = document.querySelector(".choice-div0");
    firstChoiceEl.addEventListener("click", incorrectThirdChoiceListenerFunction);

    secondChoiceEl = document.querySelector(".choice-div1");
    secondChoiceEl.addEventListener("click", incorrectThirdChoiceListenerFunction);

    thirdChoiceEl = document.querySelector(".choice-div2");
    thirdChoiceEl.addEventListener("click", incorrectThirdChoiceListenerFunction);

    fourthChoiceEl = document.querySelector(".choice-div3");
    fourthChoiceEl.addEventListener("click", correctThirdChoiceListenerFunction);
}

function makeFourthChoice() {
    firstChoiceEl = document.querySelector(".choice-div0");
    firstChoiceEl.addEventListener("click", correctFourthChoiceListenerFunction);

    secondChoiceEl = document.querySelector(".choice-div1");
    secondChoiceEl.addEventListener("click", incorrectFourthChoiceListenerFunction);

    thirdChoiceEl = document.querySelector(".choice-div2");
    thirdChoiceEl.addEventListener("click", incorrectFourthChoiceListenerFunction);

    fourthChoiceEl = document.querySelector(".choice-div3");
    fourthChoiceEl.addEventListener("click", incorrectFourthChoiceListenerFunction);
}

function makeFifthChoice() {
    firstChoiceEl = document.querySelector(".choice-div0");
    firstChoiceEl.addEventListener("click", incorrectFifthChoiceListenerFunction);

    secondChoiceEl = document.querySelector(".choice-div1");
    secondChoiceEl.addEventListener("click", incorrectFifthChoiceListenerFunction);

    thirdChoiceEl = document.querySelector(".choice-div2");
    thirdChoiceEl.addEventListener("click", correctFifthChoiceListenerFunction);


    fourthChoiceEl = document.querySelector(".choice-div3");
    fourthChoiceEl.addEventListener("click", incorrectFifthChoiceListenerFunction);
}






//FUNCTIONS FOR CHOICES ON EVENT LISTENERS, EACH TAKES AN ARGUMENT OF A CALLBACK THAT CALLS
//  THE NEXT QUESTIONCREATOR

//FUNCTION FOR CORRECT CHOICE
//next choice has to be a function that calls questionCreator with the next question
//and 
function correctChoice(question, choices) {
    var messageDiv = document.createElement("div");
    //REMOVE LISTENERS AFTER ONE IS CLICKED  
    firstChoiceEl.removeEventListener("click", correctFirstChoiceListenerFunction);
    firstChoiceEl.removeEventListener("click", correctSecondChoiceListenerFunction);
    firstChoiceEl.removeEventListener("click", correctThirdChoiceListenerFunction);
    firstChoiceEl.removeEventListener("click", correctFourthChoiceListenerFunction);

    secondChoiceEl.removeEventListener("click", correctFirstChoiceListenerFunction);
    secondChoiceEl.removeEventListener("click", correctSecondChoiceListenerFunction);
    secondChoiceEl.removeEventListener("click", correctThirdChoiceListenerFunction);
    secondChoiceEl.removeEventListener("click", correctFourthChoiceListenerFunction);

    thirdChoiceEl.removeEventListener("click", correctFirstChoiceListenerFunction);
    thirdChoiceEl.removeEventListener("click", correctSecondChoiceListenerFunction);
    thirdChoiceEl.removeEventListener("click", correctThirdChoiceListenerFunction);
    thirdChoiceEl.removeEventListener("click", correctFourthChoiceListenerFunction);

    fourthChoiceEl.removeEventListener("click", correctFirstChoiceListenerFunction);
    fourthChoiceEl.removeEventListener("click", correctSecondChoiceListenerFunction);
    fourthChoiceEl.removeEventListener("click", correctThirdChoiceListenerFunction);
    fourthChoiceEl.removeEventListener("click", correctFourthChoiceListenerFunction);

    firstChoiceEl.removeEventListener("click", incorrectFirstChoiceListenerFunction);
    firstChoiceEl.removeEventListener("click", incorrectSecondChoiceListenerFunction);
    firstChoiceEl.removeEventListener("click", incorrectThirdChoiceListenerFunction);
    firstChoiceEl.removeEventListener("click", incorrectFourthChoiceListenerFunction);

    secondChoiceEl.removeEventListener("click", incorrectFirstChoiceListenerFunction);
    secondChoiceEl.removeEventListener("click", incorrectSecondChoiceListenerFunction);
    secondChoiceEl.removeEventListener("click", incorrectThirdChoiceListenerFunction);
    secondChoiceEl.removeEventListener("click", incorrectFourthChoiceListenerFunction);

    thirdChoiceEl.removeEventListener("click", incorrectFirstChoiceListenerFunction);
    thirdChoiceEl.removeEventListener("click", incorrectSecondChoiceListenerFunction);
    thirdChoiceEl.removeEventListener("click", incorrectThirdChoiceListenerFunction);
    thirdChoiceEl.removeEventListener("click", incorrectFourthChoiceListenerFunction);

    fourthChoiceEl.removeEventListener("click", incorrectFirstChoiceListenerFunction);
    fourthChoiceEl.removeEventListener("click", incorrectSecondChoiceListenerFunction);
    fourthChoiceEl.removeEventListener("click", incorrectThirdChoiceListenerFunction);
    fourthChoiceEl.removeEventListener("click", incorrectFourthChoiceListenerFunction);

    messageDiv.textContent = "Correct!";
    quizEl.appendChild(messageDiv);
    scoreSpan.textContent++;
    if(secondsLeft < 2){
        setTimeout(function () {
            endOfQuiz();
        }, 1000)
    }else{
    setTimeout(function () {
        questionCreator(question, choices);
    }, 2000, question, choices)
    }
}
//FUNCTION FOR INCORRECT CHOICE
function incorrectChoice(question, choices) {
    var messageDiv = document.createElement("div");
    //REMOVES EVENT LISTENERS AFTER ONE IS CLICK
    firstChoiceEl.removeEventListener("click", incorrectFirstChoiceListenerFunction);
    firstChoiceEl.removeEventListener("click", incorrectSecondChoiceListenerFunction);
    firstChoiceEl.removeEventListener("click", incorrectThirdChoiceListenerFunction);
    firstChoiceEl.removeEventListener("click", incorrectFourthChoiceListenerFunction);

    secondChoiceEl.removeEventListener("click", incorrectFirstChoiceListenerFunction);
    secondChoiceEl.removeEventListener("click", incorrectSecondChoiceListenerFunction);
    secondChoiceEl.removeEventListener("click", incorrectThirdChoiceListenerFunction);
    secondChoiceEl.removeEventListener("click", incorrectFourthChoiceListenerFunction);

    thirdChoiceEl.removeEventListener("click", incorrectFirstChoiceListenerFunction);
    thirdChoiceEl.removeEventListener("click", incorrectSecondChoiceListenerFunction);
    thirdChoiceEl.removeEventListener("click", incorrectThirdChoiceListenerFunction);
    thirdChoiceEl.removeEventListener("click", incorrectFourthChoiceListenerFunction);

    fourthChoiceEl.removeEventListener("click", incorrectFirstChoiceListenerFunction);
    fourthChoiceEl.removeEventListener("click", incorrectSecondChoiceListenerFunction);
    fourthChoiceEl.removeEventListener("click", incorrectThirdChoiceListenerFunction);
    fourthChoiceEl.removeEventListener("click", incorrectFourthChoiceListenerFunction);

    firstChoiceEl.removeEventListener("click", correctFirstChoiceListenerFunction);
    firstChoiceEl.removeEventListener("click", correctSecondChoiceListenerFunction);
    firstChoiceEl.removeEventListener("click", correctThirdChoiceListenerFunction);
    firstChoiceEl.removeEventListener("click", correctFourthChoiceListenerFunction);

    secondChoiceEl.removeEventListener("click", correctFirstChoiceListenerFunction);
    secondChoiceEl.removeEventListener("click", correctSecondChoiceListenerFunction);
    secondChoiceEl.removeEventListener("click", correctThirdChoiceListenerFunction);
    secondChoiceEl.removeEventListener("click", correctFourthChoiceListenerFunction);

    thirdChoiceEl.removeEventListener("click", correctFirstChoiceListenerFunction);
    thirdChoiceEl.removeEventListener("click", correctSecondChoiceListenerFunction);
    thirdChoiceEl.removeEventListener("click", correctThirdChoiceListenerFunction);
    thirdChoiceEl.removeEventListener("click", correctFourthChoiceListenerFunction);

    fourthChoiceEl.removeEventListener("click", correctFirstChoiceListenerFunction);
    fourthChoiceEl.removeEventListener("click", correctSecondChoiceListenerFunction);
    fourthChoiceEl.removeEventListener("click", correctThirdChoiceListenerFunction);
    fourthChoiceEl.removeEventListener("click", correctFourthChoiceListenerFunction);

    messageDiv.textContent = "Incorrect!";
    quizEl.appendChild(messageDiv);
    secondsLeft = secondsLeft - 10;
    if (secondsLeft < 1) {
        endOfQuiz();
    } else {
        setTimeout(function () {
            questionCreator(question, choices);
        }, 2000, question, choices)
    }
}
//FUNCTION FOR FINAL CORRECT CHOICE
function finalCorrectChoice() {
    var messageDiv = document.createElement("div");

    firstChoiceEl.removeEventListener("click", incorrectFifthChoiceListenerFunction);
    secondChoiceEl.removeEventListener("click", incorrectFifthChoiceListenerFunction);
    thirdChoiceEl.removeEventListener("click", incorrectFifthChoiceListenerFunction);
    fourthChoiceEl.removeEventListener("click", incorrectFifthChoiceListenerFunction);

    firstChoiceEl.removeEventListener("click", correctFifthChoiceListenerFunction);
    secondChoiceEl.removeEventListener("click", correctFifthChoiceListenerFunction);
    thirdChoiceEl.removeEventListener("click", correctFifthChoiceListenerFunction);
    fourthChoiceEl.removeEventListener("click", correctFifthChoiceListenerFunction);

    messageDiv.textContent = "Correct!";
    quizEl.appendChild(messageDiv);
    scoreSpan.textContent++;
    setTimeout(endOfQuiz(), 2000);

}

//FUNCTION FOR FINAL INCORRECT CHOICE
function finalIncorrectChoice() {
    var messageDiv = document.createElement("div");

    firstChoiceEl.removeEventListener("click", incorrectFifthChoiceListenerFunction);
    secondChoiceEl.removeEventListener("click", incorrectFifthChoiceListenerFunction);
    thirdChoiceEl.removeEventListener("click", incorrectFifthChoiceListenerFunction);
    fourthChoiceEl.removeEventListener("click", incorrectFifthChoiceListenerFunction);

    firstChoiceEl.removeEventListener("click", correctFifthChoiceListenerFunction);
    secondChoiceEl.removeEventListener("click", correctFifthChoiceListenerFunction);
    thirdChoiceEl.removeEventListener("click", correctFifthChoiceListenerFunction);
    fourthChoiceEl.removeEventListener("click", correctFifthChoiceListenerFunction);

    messageDiv.textContent = "Incorrect!";
    quizEl.appendChild(messageDiv);
    secondsLeft = secondsLeft - 10;
    setTimeout(endOfQuiz(), 2000);
}
//FUNCTION THAT CREATES QUESTIONS AND CALLS A FUNCTION THAT CREATES LISTENERS FOR THE CHOICES
function questionCreator(question, choice) {
    quizEl.textContent = question.question;
    for (var i = 0; i < 4; i++) {
        var choiceDiv = document.createElement("div");
        choiceDiv.className = "choice-div" + [i].toString();
        choiceDiv.textContent = question.answers[i].choice;
        quizEl.appendChild(choiceDiv);
    }
    choice();
}
//==============================================================

//SAVE INITIALS AND SCORE---------------------------------------
//when game is over, input for initials pops up
//when game is over/ final score is shown 
//final score is set to local store
//initials set to local store
var initialsInput;
var userObject;
var submitButton = document.createElement("button");
submitButton.textContent = "Submit";
var userArray = [];
//FUNCTION THAT ENDS THE QUIZ
function endOfQuiz() {
    quizBeginEl.remove();
    quizEl.innerHTML = "<h2>GAME OVER</h2>";
    firstChoiceEl.remove();
    secondChoiceEl.remove();
    thirdChoiceEl.remove();
    fourthChoiceEl.remove();

    var finalScoreMessage = document.createElement("div");
    finalScoreMessage.textContent = `Your final score is ${scoreSpan.textContent} points`;
    quizEl.appendChild(finalScoreMessage);

    var initialsPrompt = document.createElement("div");
    initialsPrompt.textContent = "Enter Your Initials: ";
    quizEl.appendChild(initialsPrompt);

    initialsInput = document.createElement("input");
    initialsPrompt.appendChild(initialsInput);

    initialsPrompt.appendChild(submitButton);

 
}
submitButton.addEventListener("click", function () {
    event.preventDefault();
    var existingEntries = JSON.parse(localStorage.getItem("users"));
    if(existingEntries === null) existingEntries = [];
    var userInitials = document.querySelector("input").value;
    var userObject = {
        user : userInitials,
        score :scoreSpan.textContent
    }
    existingEntries.push(userObject);
    window.localStorage.setItem("users", JSON.stringify(existingEntries));
    window.location.href = "scores.html";   
})

//function addEntry() {
    // Parse any JSON previously stored in allEntries
//     var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
//     if(existingEntries == null) existingEntries = [];
//     var entryTitle = document.getElementById("entryTitle").value;
//     var entryText = document.getElementById("entryText").value;
//     var entry = {
//         "title": entryTitle,
//         "text": entryText
//     };
//     localStorage.setItem("entry", JSON.stringify(entry));
//     // Save allEntries back to local storage
//     existingEntries.push(entry);
//     localStorage.setItem("allEntries", JSON.stringify(existingEntries));
// };