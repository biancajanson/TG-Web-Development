const start = document.querySelector('.start-button');
const container = document.querySelector('.container');

const prevButton = document.createElement('button');
const nextButton = document.createElement('button');
const bottomButtons = document.createElement('div');

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
    vragen.classList.add('quiz-vragen');
    quizVragen.appendChild(vragen);
    vragen.innerText = 'VRAGEN (NOG INVOEREN)';
    
    bottomButtons.classList.add('bottom-buttons');
    quizVragen.appendChild(bottomButtons);
    
    prevButton.classList.add('prev-button');
    nextButton.classList.add('next-button');
    bottomButtons.appendChild(prevButton);
    bottomButtons.appendChild(nextButton);
    prevButton.innerText = 'Vorige';
    nextButton.innerText = 'Volgende';
}

// bottomButtons.onclick = () => {
//     nextQuestion()
// }

// function nextQuestion() {

// }