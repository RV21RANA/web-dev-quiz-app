/* -------------------------------------------------------------------------- */
/*                                    MODEL                                   */
/* -------------------------------------------------------------------------- */

// Application State
const STORE = {
    score: 0,
    currentQuestion: 0
}

// Questions Library
const questions = [
    {
        question: '',
        answers: [
            {
                text: '',
                correct: false;
            }
            {
                text: '',
                correct: false;
            }
            {
                text: '',
                correct: false;
            }
        ]
    }
]

/* -------------------------------------------------------------------------- */
/*                                    VIEW                                   */
/* -------------------------------------------------------------------------- */

function renderQuestions () {
    // If currentQuestion is larger than questions.length, render final screen
    //
    // Else, assign questions[currentIndex] to a variable
    // Use question object to set question text 
    // Using a loop, append answers to <ol>, assigning variables in an HTML string
}

/* -------------------------------------------------------------------------- */
/*                                 CONTROLLER                                 */
/* -------------------------------------------------------------------------- */

function checkAnswer () {
    // If correct, add 1 to score
    // Append span with feedback and 'next' button
}

function getNextQuestion () {
    // currentQuestion++
    // call renderQuestions
}

function init () {
    // Clear current 'main'
    // Set score to 0
    // Set currentQuestion to 0
    // Add event listeners on 'main' for each button class
        // .next, .check, .init
    // Call render
}

init();