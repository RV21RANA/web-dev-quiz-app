/* -------------------------------------------------------------------------- */
/*                                    MODEL                                   */
/* -------------------------------------------------------------------------- */

// Application State
const STORE = {
    score: 0,
    currentQuestion: 0
}

// Questions Library
    // stored in questions.js and linked in html

/* -------------------------------------------------------------------------- */
/*                                    VIEW                                   */
/* -------------------------------------------------------------------------- */

function renderQuestions () {
    // Clear the main element
    $('main').html('');
    // If currentQuestion is larger than questions.length, render final screen
    if (STORE.currentQuestion >= questions.length) {
        $('main').html('')
    } else {
        // Else, assign questions[currentIndex] to a variable
        let currentQuestion = questions[STORE.currentQuestion];
        let questionCounter = `<span>${STORE.currentQuestion + 1}/${questions.length}</span>`
        // Use question object to set question text 
        $('main').append(`${questionCounter}<p class="question">${currentQuestion.question}</p><ol></ol>`)
        // Using a loop, append answers to <ol>, assigning variables in an HTML string
        $('ol').append(`
            <li class="check">${currentQuestion.answers[0].text}</li>
            <li class="check">${currentQuestion.answers[1].text}</li>
            <li class="check">${currentQuestion.answers[2].text}</li>`)
    }
}

/* -------------------------------------------------------------------------- */
/*                                 CONTROLLER                                 */
/* -------------------------------------------------------------------------- */

function checkAnswer () {
    // If correct, add 1 to score
    // Append span with feedback and 'next' button
    getNextQuestion();
}

function getNextQuestion () {
    // currentQuestion++
    STORE.currentQuestion++;
    // call renderQuestions
    renderQuestions();
}

function startQuiz () {
    // Set score to 0
    STORE.score = 0;
    // Set currentQuestion to 0
    STORE.currentQuestion = 0;

    renderQuestions();
}

function init () {
    // Add event handlers on 'main' for each button class
    $('main').on('click', '.start', startQuiz);
    $('main').on('click', '.check', checkAnswer);
    $('main').on('click', '.next', getNextQuestion);
        // .next, .check, .start
}

init();