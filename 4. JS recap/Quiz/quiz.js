const start = document.querySelector('.start-button');
const container = document.querySelector('.container');

// als je op start klikt, opent er een div met math problems
start.onclick = () => {
    beginQuiz()
}

function beginQuiz() {
    const quizVragen = document.createElement('div');
    quizVragen.classList.add('vragen');
    container.appendChild(quizVragen);
    start.classList.add('is-hidden');
    const quizTitel = document.createElement('p');
    quizTitel.classList.add('quiz-titel');
    quizVragen.appendChild(quizTitel);
    quizTitel.innerText = 'Math Problem';
}
