/* -------------------------------------------------------------------------- */
/*                                    MODEL                                   */
/* -------------------------------------------------------------------------- */

// Application State
const STORE = {
    score: 0,
    currentQuestion: 0,
    currentQuiz: ''
}

/* -------------------------------------------------------------------------- */
/*                                    VIEW                                   */
/* -------------------------------------------------------------------------- */

// TODO: The score/question counters and the question move around the screen as elements are added and deleted. Make them static.

function renderQuestions () {

    // Clear the main element
    $('main').html('');

    // Generate our content sections in the main element
    $('main').append(`<section class="counters"></section>
                        <form>
                            <div class="question"></div>
                            <fieldset class="answers"></fieldset>
                        </form>`);
    
    renderCounters();

    // Assign questions[currentIndex] to a variable to access our current question data
    let currentQuestion = STORE.currentQuiz[STORE.currentQuestion];
    // Use question object to set question text
    $('.question').append(`<p>${currentQuestion.question}</p>`);
    // Using the question object, insert answers data into a list

    
                        
    function generateAnswerList () {
        if (STORE.answers.length < 3) {
            return undefined;
        }

        let answers = [currentQuestion.answer]

        while (answers.length < 3) {
            let newAnswer = STORE.answers[Math.floor(Math.random() * STORE.answers.length)];
            if (!answers.includes(newAnswer)) {
                answers.push(newAnswer);
            }
        }

        // Plug the answers into an array containing the html markup
        let answerLis = [`<li class="check"><button type="submit" class="true">${answers[0]}</button></li>`,
                            `<li class="check"><button type="submit">${answers[1]}</button></li>`,
                            `<li class="check"><button type="submit">${answers[2]}</button></li>`]
        
        // Randomize that array 

        return answerLis.sort(() => Math.random() - 0.5);
    }


    
    let answersArray = generateAnswerList();

    // $('.answers').html(`<form><ol>
    //     <li class="check"><button type="submit" class="true">${currentQuestion.answer}</button></li>
    //     <li class="check"><button type="submit">${STORE.answers[Math.floor(Math.random() * STORE.answers.length)]}</button></li>
    //     <li class="check"><button type="submit">${STORE.answers[Math.floor(Math.random() * STORE.answers.length)]}</button></li></ol></form>`);

    $('.answers').html(`<form><ol>
        ${answersArray[0]}${answersArray[1]}${answersArray[2]}</ol></form>`);
}

function renderCounters () {
    let counters = `<span>Question: ${STORE.currentQuestion + 1}/${STORE.currentQuiz.length}</span>
                    <span>Score: ${STORE.score}/${STORE.currentQuiz.length}</span>`
    $('.counters').html(`${counters}`)
}

function renderFeedback (feedback, answer) {
    renderCounters();
    $('.answers').html(`${feedback}${answer || ''}`);
    $('main').append(`<button class="next">Next Question</button>`);
}

function renderFinal () {
    $('main').html(`
            <div class="final-score">
                <p>Your final score is...</p>
                <h3>${STORE.score}/${STORE.currentQuiz.length}</h3>
                <button class="play-again">Play Again?</button>
            </div>`)
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
        let feedback = `<p class="correct-answer">Correct!</p>`;
        renderFeedback(feedback);
    } else {
        let feedback = `<p>Nope! The answer was:</p>`;
        let answer = `<p class="correct-answer">${$('.true').text()}</p>`;
        renderFeedback(feedback, answer)
    }
}

function getNextQuestion () {
    // currentQuestion++
    STORE.currentQuestion++;

    if (STORE.currentQuestion >= STORE.currentQuiz.length) {
        renderFinal();
    } else {
        renderQuestions();
    }
}

function startQuiz (library) {
    // Set score to 0
    STORE.score = 0;
    // Set currentQuestion to 0
    STORE.currentQuestion = 0;
    // Set quiz library
    STORE.currentQuiz = library.sort(() => Math.random() - 0.5);
    // Generate false answers array
    STORE.answers = library.map(each => each.answer);

    renderQuestions();
}

function init () {
    // Add event handlers on 'main' for each button class
    $('main').on('click', '.start-html', ()=>{startQuiz(htmlQuestions)});
    $('main').on('click', '.start-js', ()=>{startQuiz(jsQuestions)});
    $('main').on('click', '.start-dev', ()=>{startQuiz(devEnvQuestions)});
    $('main').on('click', '.start-design', ()=>{startQuiz(designQuestions)});
    $('main').on('click', '.start-node', ()=>{startQuiz(nodeQuestions)});
    $('main').on('click', '.play-again', ()=>{window.location.reload()});
    $('main').on('click', '.check', checkAnswer);
    $('main').on('click', '.next', getNextQuestion);
        // .next, .check, .start
}

init();