var scoresDiv = document.querySelector(".scores-div");
var clearScoresButton = document.querySelector(".clear-scores-button");
var existingEntries = JSON.parse(localStorage.getItem("users"));

function getNewScore() {

    for (var i = 0; i < existingEntries.length; i++) {
        var newScoreDiv = document.createElement("div");
        var user = existingEntries[i].user;
        var score = existingEntries[i].score;
        newScoreDiv.textContent = user + " " + score;
        scoresDiv.appendChild(newScoreDiv);
    }
}

getNewScore();


clearScoresButton.addEventListener("click", function () {
    scoresDiv.textContent = "";
    localStorage.clear();
})

