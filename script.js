let questions = [
    {}
]

const quizContainer = document.getElementById('quiz');
const scoreContainer = document.getElementById('score');
const submitButton = document.getElementById('submit');
);

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



const Questions = [
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