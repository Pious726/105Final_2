const quizContainer = document.getElementById('quiz');
const scoreContainer = document.getElementById('score');
const submitButton = document.getElementById('submit');


function makeQuiz() {
    const output = [];
    questions.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        for (letter in currentQuestion.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} : ${currentQuestion.answers[letter]}
                </label>`
            );
        }
        output.push(
            `<div class="question">${currentQuestion.question}</div>
             <div class="answers">${answers.join('')}</div>`
        );
    });
    quizContainer.innerHTML = output.join('');
}

function checkAnswers(event) {
    if (event) {
        event.preventDefault();
    }
    let score = 0;
    questions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = quizContainer.querySelectorAll('.answers')[questionNumber];
        const userAnswer = (answerContainer.querySelector(`input[name=question${questionNumber}]:checked`) || {}).value;
        if (userAnswer === currentQuestion.correctAnswer) {
            score++;
        }
    });
    return score;
}

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    let questionsAnswered = true;
    questions.forEach((currentQuestion, questionNumber) => {
        let answerContainer = quizContainer.querySelectorAll(".answers")[questionNumber];
        let userAnswer = answerContainer.querySelector(`input[name=question${questionNumber}]:checked`);
        if (!userAnswer) {
            questionsAnswered = false;
        }
    });
    if (!questionsAnswered) {
        alert("Please answer all questions first.");
    } else {
        endQuiz();
    }
});
document.addEventListener('DOMContentLoaded', makeQuiz);

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
    question: "When did the Founders sign the declaration of independence",
    answers: {
        a:"July 2, 1776",
        b:"August 2, 1776",
        c:"July 4, 1776",
        d: "August 6, 1776",
    },
    correctAnswer: "b"
},


{
    question: "Who was called the 'Father of the Constitution' ",
    answers: {
        a:"Alexander Hamilton",
        b:"ThomasJefferson",
        c:"James Madison",
        d: "John Adams",
    },
    correctAnswer: "c"
},


];

function reloadPage() {
    location.reload();
}

function endQuiz() {
    let score = checkAnswers();
    let congratulations = document.createElement("p");
    congratulations.innerHTML = "You completed all of the questions!";
    let finalScore = document.createElement("p");
    finalScore.innerHTML = `Your final score was ${score} out of ${questions.length}.`;
    let reloadButton = document.createElement("button");
    reloadButton.innerHTML = "Reset Quiz";
    reloadButton.classList.add("reset")
    reloadButton.addEventListener('click', reloadPage);
    submitButton.remove();

    quizContainer.innerHTML = "";

    quizContainer.appendChild(congratulations);
    quizContainer.appendChild(finalScore);
    quizContainer.appendChild(reloadButton);
}