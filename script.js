let questions = [
    {question: "Blah", answer: "Blah"},
    {question: "Blah", answer: "Blah"},
    {question: "Blah", answer: "Blah"},
    {question: "Blah", answer: "Blah"},
    {question: "Blah", answer: "Blah"},
    {question: "Blah", answer: "Blah"},
    {question: "Blah", answer: "Blah"},
    {question: "Blah", answer: "Blah"},
    {question: "Blah", answer: "Blah"},
    {question: "Blah", answer: "Blah"}
]
let score = 0;
let scoreElement = document.getElementsById("score");


function makeQuestion() {

}

function showCompletedScore() {
    let congratulation = document.createElement("p");
    congratulation.innerHTML = "You completed all of the questions!";
    let finalScore = document.createElement("p");
    finalScore.innerHTML = `Your final score was ${score} out of 10.`;
}