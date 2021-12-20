
const container = document.querySelector('.container');
const start = document.createElement('button');
container.appendChild(start);
start.classList.add('start-button');
start.innerText = 'Start';

const prev = document.querySelector('.prev-button');
const next = document.querySelector('.next-button');

let questionContainer = [
    {
        question: "what is 24 + 42",
        answers: [45, 66, 82, 69, 68],
    }, {
        question: "what is 5 * 4",
        answers: [9, 30, 20, 40, 1],
    }, {
        question: "what is 25 - 11",
        answers: [14, 12, 15, 10, 13],
    }, {
        question: "what is 25 / 5",
        answers: [5, 20, 30, 125, 10],
    }, {
        question: "what is 1/2 of 6",
        answers: [2, 1, 9, 12, 3],
    }, {
        question: "what is 56 + 11",
        answers: [102, 37, 44, 67, 50],
    }
];
// als je op start klikt, opent er een div met math problems
start.onclick = () => {
    startQuiz()
}

function startQuiz() {
    const quizContainer = document.createElement('div');
    quizContainer.classList.add('container-questions');
    container.appendChild(quizContainer);
    start.classList.add('is-hidden');

    const quizTitel = document.createElement('div');
    quizTitel.classList.add('quiz-titel');
    quizContainer.appendChild(quizTitel);
    quizTitel.innerText = 'Math Problem';
    
    const quizCount = document.createElement('div');
    quizCount.classList.add('quiz-count');
    quizContainer.appendChild(quizCount);
    quizCount.innerText = '1/6';
    // functie voor tellen nog uitschrijven
    
    const questionList = document.createElement('div');
    questionList.classList.add('quiz-question');
    quizContainer.appendChild(questionList);

    for (let question of questionContainer[0].question) {
    questionList.innerText = questionContainer[0].question;
    }
    
    const answerList = document.createElement('ol');
    answerList.classList.add('quiz-answers');
    quizContainer.appendChild(answerList);
    
    for (let answer of questionContainer[0].answers) {
        const quizAnswers = document.createElement("li");
        answerList.appendChild(quizAnswers);
        quizAnswers.classList.add("quiz-answer");

        const answerNumber = document.createElement("span");
        quizAnswers.appendChild(answerNumber);
        answerNumber.classList.add("answer-number");

        quizAnswers.innerText = answer;
    }

    const bottomButtons = document.createElement('div');
    bottomButtons.classList.add('bottom-buttons');
    quizContainer.appendChild(bottomButtons);
    
    const prevButton = document.createElement('button');
    const nextButton = document.createElement('button');
    prevButton.classList.add('prev-button');
    nextButton.classList.add('next-button');
    bottomButtons.appendChild(prevButton);
    bottomButtons.appendChild(nextButton);
    prevButton.innerText = 'Vorige';
    nextButton.innerText = 'Volgende';
}

function answerQuestion() {

}