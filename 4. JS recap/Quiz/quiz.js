const container = document.querySelector(".container");
const quizContainer = document.createElement('div');
container.appendChild(quizContainer);
quizContainer.classList.add('quiz-container');
quizContainer.classList.add('is-hidden');
let currentQuestionIndex;
let quizQuestion;
let quizAnswers;
let pageCounter = 0;
let numberOfCorrectAnswers = 0;

// add start button
const startButton = document.createElement('button');
container.appendChild(startButton);
startButton.classList.add('start-button');
startButton.innerText = 'Start';

// starting the quiz
startButton.addEventListener("click", startQuiz)


function startQuiz() {
    startButton.classList.add('is-hidden');
    quizContainer.classList.remove("is-hidden");
    currentQuestionIndex = 0;
    addQuizPage();
}

// add title and pagecounter
const quizTitle = document.createElement('div');
quizTitle.classList.add('quiz-titel');
quizContainer.appendChild(quizTitle);
quizTitle.innerText = 'Math Problem';
let quizCount = document.createElement('div');
quizCount.classList.add('quiz-count');
quizContainer.appendChild(quizCount);

// create six quiz pages with a question and answers
let quizPages = [
    {
        question: "what is 24 + 42",
        answers: [45, 66, 83, 69, 68],
        correctAnswer: 66,
    }, {
        question: "what is 5 * 4",
        answers: [9, 30, 20, 40, 1],
        correctAnswer: 20,
    }, {
        question: "what is 25 - 11",
        answers: [14, 12, 15, 10, 13],
        correctAnswer: 14,
    }, {
        question: "what is 25 / 5",
        answers: [5, 20, 30, 125, 10],
        correctAnswer: 5,
    }, {
        question: "what is 1/2 of 6",
        answers: [2, 1, 9, 12, 3],
        correctAnswer: 3,
    }, {
        question: "what is 56 + 11",
        answers: [102, 37, 44, 67, 50],
        correctAnswer: 67,
    }
];
// console.log(quizPages)

quizCount.innerText = `${pageCounter+1}/${quizPages.length}`


function addQuizPage() {
    // add elements for the quiz pages
    quizQuestion = document.createElement("div");
    quizQuestion.classList.add('quiz-question');
    quizContainer.appendChild(quizQuestion);

    const answerList = document.createElement('ol');
    answerList.classList.add('quiz-answers');
    quizContainer.appendChild(answerList);

    // add the questions
    quizQuestion.innerText = quizPages[currentQuestionIndex].question;

    // create a loop to add all the answer elements
    for (let answer of quizPages[currentQuestionIndex].answers) {
        quizAnswers = document.createElement("li");
        answerList.appendChild(quizAnswers);
        quizAnswers.classList.add("quiz-answer");
        quizAnswers.innerText = answer;
        quizAnswers.addEventListener("click", selectAnswer);
    }
}

// add prev and next button
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
const submitButton = document.createElement('button');
submitButton.classList.add('submit-button');
submitButton.classList.add('is-hidden');
bottomButtons.appendChild(submitButton);
submitButton.innerText = 'Uitslag';


// add resultcontainer
const results = document.createElement('div');
results.classList.add('results');
quizContainer.appendChild(results);
// results.innerText = 'test';

// good or wrong answer
function selectAnswer(e) {
    const selectedAnswer = e.target.innerText;
    console.log(selectedAnswer); 
    const correctAnswer = quizPages[currentQuestionIndex].correctAnswer;
    if (selectedAnswer == correctAnswer) {
        console.log('CORRECT');
        numberOfCorrectAnswers++;
        console.log(numberOfCorrectAnswers);
        selectedAnswer.style.backgroundColor = 'green';
       
    } else {
        console.log("WRONG");
        selectedAnswer.classList.add('wrong');
        correctAnswer.classList.add('correct');
    }
}


// go to other page
nextButton.addEventListener("click", nextQuizPage);
prevButton.addEventListener("click", prevQuizPage);
// submitButton.addEventListener("click", showResults);

function nextQuizPage(e) {
    currentQuestionIndex++;
    // console.log('QUESTIONINDEX', currentQuestionIndex); 

    quizQuestion.innerText = quizPages[currentQuestionIndex].question;
    // console.log('QUIZQUESTION', quizQuestion);
    const quizPossibleAnswers = quizPages[currentQuestionIndex].answers;
    // console.log(quizPossibleAnswers);

    const answersList = document.querySelector('.quiz-answers');
    const answersListChildNodes = [...answersList.childNodes];

    for (let i = 0; i < quizPossibleAnswers.length; i++) {
        answersListChildNodes[i].innerText = quizPossibleAnswers[i];
    }

    if (quizPages.length > pageCounter){
        pageCounter++}

    if (pageCounter === quizPages.length-1) {
        nextButton.classList.add('is-hidden');
        submitButton.classList.remove('is-hidden');
    }
    
    quizCount.innerText = `${pageCounter+1}/${quizPages.length}`
}

function prevQuizPage(e) {
    currentQuestionIndex--;
    // console.log('QUESTIONINDEX', currentQuestionIndex);

    quizQuestion.innerText = quizPages[currentQuestionIndex].question;
    // console.log('QUIZQUESTION', quizQuestion);
    const quizPossibleAnswers = quizPages[currentQuestionIndex].answers;
    // console.log(quizPossibleAnswers);

    const answersList = document.querySelector('.quiz-answers');
    const answersListChildNodes = [...answersList.childNodes];

    for (let i = quizPossibleAnswers.length - 1 ; i >= 0; i--) {
        answersListChildNodes[i].innerText = quizPossibleAnswers[i];
    }
    if (quizPages.length > pageCounter) {
        pageCounter--;
        nextButton.classList.remove('is-hidden');
        submitButton.classList.add('is-hidden');
        
    }

    if (pageCounter < 0 ) {
        pageCounter = 0;
    }
    quizCount.innerText = `${pageCounter+1}/${quizPages.length}`
    
}
    