const quizContainer = document.getElementById('quiz');
const scoreContainer = document.getElementById('score');
const submitButton = document.getElementById('submit');

const questions = [
    {
        question: "Who Wrote the Declaration of Independence?",
        answers: {
            a: "Thomas Jefferson",
            b: "Alexander Hamilton",
            c: "Robert R. Livingston",
            d: "George Washington",
    
        },
        correctAnswer: "a"
    },
    {
        question: "Who was George Washington's Vice President?",
        answers: {
            a:"Alexander Hamilton",
            b:"John Hancock",
            c:"Thomas Jefferson",
            d: "John Adams",
        },
        correctAnswer: "d"
    },
    {
        question: "Which of the first four presidents never went to college?",
        answers: {
            a:"John Adams",
            b:"George Washington",
            c:"Thomas Jefferson",
            d: "James Madison",
        },
        correctAnswer: "b"
    },
    {
        question: "When did the Founders sign the Declaration of Independence?",
        answers: {
            a:"July 2, 1776",
            b:"August 2, 1776",
            c:"July 4, 1776",
            d: "August 6, 1776",
        },
        correctAnswer: "b"
    },
    {
        question: "Who was called the 'Father of the Constitution'? ",
        answers: {
            a:"Alexander Hamilton",
            b:"Thomas Jefferson",
            c:"James Madison",
            d: "John Adams",
        },
        correctAnswer: "c"
    },
    ];

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const answers = [];
    for (let letter in currentQuestion.answers) {
        answers.push(
            `<label>
                <input type="radio" name="question" value="${letter}">
                ${letter} : ${currentQuestion.answers[letter]}
            </label>`
        );
    }
    quizContainer.innerHTML =
        `<div class="question">${currentQuestion.question}</div>
        <div class="answers">${answers.join('')}</div>
    `;
}

function checkAnswer() {
    const answerContainer = quizContainer.querySelector('.answers');
    const userAnswer = (answerContainer.querySelector(`input[name=question]:checked`) || {}).value;

    if (userAnswer === questions[currentQuestionIndex].correctAnswer) {
        score++;
    }
}

submitButton.addEventListener('click', () => {
    const answerContainer = quizContainer.querySelector('.answers');
    const userAnswer = (answerContainer.querySelector(`input[name=question]:checked`) || {}).value;

    if(!userAnswer) {
        alert("Please select an answer before moving to the next question.");
        return;
    }

    checkAnswer();
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz()
    }
});

function reloadPage() {
    location.reload();
}

function endQuiz() {
    let submit = document.getElementById("submit");
    submit.style.display = "none";
    quizContainer.innerHTML = `
    <p>You completed all of the questions!</p>
    <p>Your final score was ${score} out of ${questions.length}.</p>
    <button class="reset" onclick="reloadPage()">Reset Quiz</button>
    `;
}

document.addEventListener("DOMContentLoaded", showQuestion);