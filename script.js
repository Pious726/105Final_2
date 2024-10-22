
function reloadPage() {
    location.reload();
}

function showCompletedScore() {
    let congratulation = document.createElement("p");
    congratulation.innerHTML = "You completed all of the questions!";
    let finalScore = document.createElement("p");
    finalScore.innerHTML = `Your final score was ${score} out of 5.`;
    let reloadButton = document.createElement("button");
    reloadButton.innerHTML = "Reset Quiz";
    reloadButton.classList.add("reset")
    reloadButton.addEventListener('click', reloadPage);
}

showCompletedScore()