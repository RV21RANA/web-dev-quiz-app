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

// TODO: The score/question counters and the question move around the screen as elements are added and deleted. Make them static.

function renderQuestions () {
    // Clear the main element
    $('main').html('');

    // Generate our content sections in the main element
    $('main').append(`<section class="counters"></section>
                        <section class="question"></section>
                        <section class="answers"></section>`);
    
    let counters = `<span>Question: ${STORE.currentQuestion + 1}/${questions.length}</span>
                    <span>Score: ${STORE.score}/${questions.length}</span>`
    $('.counters').append(`${counters}`)

    // Use question object to set question text
    // Assign questions[currentIndex] to a variable to access our current question data
    let currentQuestion = questions[STORE.currentQuestion];
    $('.question').append(`<p>${currentQuestion.question}</p>`);
    // Using question object, append answers to <ol>, assigning variables in an HTML string
    $('.answers').html(`<form><ol>
        <li class="check"><button type="submit" class="${currentQuestion.answers[0].correct}">${currentQuestion.answers[0].text}</button></li>
        <li class="check"><button type="submit" class="${currentQuestion.answers[1].correct}">${currentQuestion.answers[1].text}</button></li>
        <li class="check"><button type="submit" class="${currentQuestion.answers[2].correct}">${currentQuestion.answers[2].text}</button></li></ol></form>`);
}

function renderFeedback (feedback, answer) {

    let counters = `<span>Question: ${STORE.currentQuestion + 1}/${questions.length}</span>
    <span>Score: ${STORE.score}/${questions.length}</span>`
    $('.counters').html(`${counters}`)

    $('.answers').html(`${feedback}${answer || ''}<button class="next">Next Question</button>`)
}

function renderFinal () {
    $('main').html(`
            <p>Your final score is...</p>
            <h3>${STORE.score}/${questions.length}</h3>
            <button class="start">Play Again?</button>`)
}

/* -------------------------------------------------------------------------- */
/*                                 CONTROLLER                                 */
/* -------------------------------------------------------------------------- */

function checkAnswer (event) {
    // Disable default submit behavior
    event.preventDefault();
    // If correct, add 1 to score and render positive feedback
    if ($(event.target).hasClass('true')) {
        STORE.score++;
        let feedback = `<p>Correct!</p>`;
        renderFeedback(feedback);
    } else {
        let feedback = `<p>Nope! The answer was:</p>`;
        let answer = `<p><span class="green-text">${$('.true').text()}</span></p>`;
        renderFeedback(feedback, answer)
    }
}

function getNextQuestion () {
    // currentQuestion++
    STORE.currentQuestion++;

    if (STORE.currentQuestion >= questions.length) {
        renderFinal();
    } else {
        renderQuestions();
    }
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