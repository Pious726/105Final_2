let questions = [
    {
        question: "Blah", 
        answer: [
            {text: "A",}
        ]
    },
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
let questionNumber = 0;
let scoreElement = document.getElementsById("score");
let questionElement = document.getElementById("question");


function startQuiz() {
    let question = questions[currentQuestion];
    questionElement.textContent = question.question;
}

function reloadPage() {
    location.reload();
}

function showCompletedScore() {
    let congratulation = document.createElement("p");
    congratulation.innerHTML = "You completed all of the questions!";
    let finalScore = document.createElement("p");
    finalScore.innerHTML = `Your final score was ${score} out of 5.`;
}

startQuiz()