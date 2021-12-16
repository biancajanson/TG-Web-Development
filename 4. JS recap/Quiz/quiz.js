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

    // const antwoord1 = document.createElement('p');
    // antwoord1.classList.add('quiz-antwoord1');
    // antwoorden.appendChild(antwoord1);
    // antwoord1.innerText = '1';

    // const antwoord2 = document.createElement('p');
    // antwoord2.classList.add('quiz-antwoord2');
    // antwoorden.appendChild(antwoord2);
    // antwoord2.innerText = '2';

    // const antwoord3 = document.createElement('p');
    // antwoord3.classList.add('quiz-antwoord3');
    // antwoorden.appendChild(antwoord3);
    // antwoord3.innerText = '3';

    // const antwoord4 = document.createElement('p');
    // antwoord4.classList.add('quiz-antwoord4');
    // antwoorden.appendChild(antwoord4);
    // antwoord4.innerText = '4';

    // const antwoord5 = document.createElement('p');
    // antwoord5.classList.add('quiz-antwoord5');
    // antwoorden.appendChild(antwoord5);
    // antwoord5.innerText = '5';

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
}
// let pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, chE, correct = 0;
// // vragen en antwoorden
// const questions = [
//     {
//         question: "what is 24 + 42",
//         options: ["45", "66", "82", "69", "68"],
//         answer: 1,
//     }, {
//         question: "what is 5 * 4",
//         options: ["9", "30", "20", "40", "1"],
//         answer: 2,
//     }, {
//         question: "what is 25 - 11",
//         options: ["14", "12", "15", "10", "13"],
//         answer: 0,
//     }, {
//         question: "what is 25 / 5",
//         options: ["5", "20", "30", "125", "10"],
//         answer: 0,
//     }, {
//         question: "what is 1/2 of 6",
//         options: ["2", "1", "9", "12", "3"],
//         answer: 4
//     }, {
//         question: "what is 56 + 11",
//         options: ["102", "37", "44", "67", "50"],
//         answer: 3
//     }
// ];

// function get(x){
//     return document.getElementByClassName(x);
// }

// function renderQuestion(){
//     container = get("container");
//     if(pos >= questions.length){
//         quizTellen.innerHTML = "Gefeliciteerd. Je hebt "+correct+" van de "+questions.length+" vragen goed."
//         pos = 0;
//         correct = 0;
//         return false;
//     }
//     get("quiz-tellen").innerHTML = (pos+1)+"/"+questions.length;

//     question = questions[pos].question;
//     chA = questions[pos].a;
//     chB = questions[pos].b;
//     chC = questions[pos].c;
//     chD = questions[pos].d;
//     chE = questions[pos].e;
//     vragen.innerHTML = question;

    
//     quiz-antwoord1.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+"</label>";
//     quiz-antwoord2.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label>";
//     quiz-antwoord3.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label>";
//     quiz-antwoord4.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chD+"</label>";
//     quiz-antwoord5.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chE+"</label>";
//     test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
// }