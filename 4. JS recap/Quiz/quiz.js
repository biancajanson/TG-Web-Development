const start = document.querySelector('.start-button');
const container = document.querySelector('.container');
const prev = document.querySelector('.prev-button');
const next = document.querySelector('.next-button');

const questions = [
    {
        question: "what is 24 + 42",
        options: ["45", "66", "82", "69", "68"],
        answer: 1,
    }, {
        question: "what is 5 * 4",
        options: ["9", "30", "20", "40", "1"],
        answer: 2,
    }, {
        question: "what is 25 - 11",
        options: ["14", "12", "15", "10", "13"],
        answer: 0,
    }, {
        question: "what is 25 / 5",
        options: ["5", "20", "30", "125", "10"],
        answer: 0,
    }, {
        question: "what is 1/2 of 6",
        options: ["2", "1", "9", "12", "3"],
        answer: 4
    }, {
        question: "what is 56 + 11",
        options: ["102", "37", "44", "67", "50"],
        answer: 3
    }
];

// als je op start klikt, opent er een div met math problems
start.onclick = () => {
    beginQuiz()
}

function beginQuiz() {
    const quizVragen = document.createElement('div');
    quizVragen.classList.add('container-vragen');
    container.appendChild(quizVragen);
    start.classList.add('is-hidden');

    const quizTitel = document.createElement('div');
    quizTitel.classList.add('quiz-titel');
    quizVragen.appendChild(quizTitel);
    quizTitel.innerText = 'Math Problem';
    
    const quizTellen = document.createElement('div');
    quizTellen.classList.add('quiz-tellen');
    quizVragen.appendChild(quizTellen);
    quizTellen.innerText = '1/6';
    
    const vragen = document.createElement('div');
    vragen.classList.add('quiz-vraag');
    quizVragen.appendChild(vragen);
    
    const antwoorden = document.createElement('ol');
    antwoorden.classList.add('quiz-antwoorden');
    quizVragen.appendChild(antwoorden);

    const bottomButtons = document.createElement('div');
    bottomButtons.classList.add('bottom-buttons');
    quizVragen.appendChild(bottomButtons);
    
    const prevButton = document.createElement('button');
    const nextButton = document.createElement('button');
    prevButton.classList.add('prev-button');
    nextButton.classList.add('next-button');
    bottomButtons.appendChild(prevButton);
    bottomButtons.appendChild(nextButton);
    prevButton.innerText = 'Vorige';
    nextButton.innerText = 'Volgende';
