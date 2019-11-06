# Front-End Quiz App

GitHub Pages: https://pmnord.github.io/front-end-quiz-app/

## About this project

This project was developed entirely by myself as part of Thinkful's full stack program. My goal was to create a mobile-first front-end application with a clean UI that can be used with multiple question libraries and is scalable to any question size.

### Requirements

#### User experience requirements
The following requirements cover what the app must do, from the user's perspective.

- The starting screen should have a button that users can click to start the quiz. 
- Users should be prompted through a series of at least 5 multiple choice questions that they can answer. 
    - Users should be asked questions 1 after the other. 
    - Users should only be prompted with 1 question at a time. 
- Users should not be able to skip questions. 
- Users should also be able to see which question they're on (for instance, "7 out of 10") and their current score ("5 correct, 2 incorrect"). 
- Upon submitting an answer, users should:
    - receive textual feedback about their answer. If they were incorrect, they should be told the correct answer. 
    - be moved onto the next question (or interact with an element to move on). 
- Users should be shown their overall score at the end of the quiz. In other words, how many questions they got right out of the total questions asked. 
- Users should be able to start a new quiz. 

#### Technical requirements
Your quiz app must:

- Render answer choices in a `<form>`. 
- Use semantic HTML, along with CSS and jQuery. 
- Follow a11y best practices.
    - Refer back to the checkpoints on accessibility and forms for help.
- Use responsive design. 
- Be fully usable by keyboard (which will be easy enough if you start with a form). 

#### Process requirements
Before you dive into the app, you'll need to:

- gather content for your app. That means typing up the questions you'll ask and gathering any images or icons you'll need.
- think about the user experiences outlined above and how your design must make them possible.
- design your app using HTML wireframes, which are HTML- (and minimal CSS-) only versions of the different screens in your app.

### My approach

- Mobile first design
    - Kept the layout simple for mobile usage
    - Used media queries to resize the page for desktops
- No page re-renders
    - No lengthy page reload times
    - I opted to keep as many elements on the page as static as possible to reduce visual confusion

### Future Features
- Randomized question order
- Randomized answer order (so that you don't just remember the position of the answer)
- 'Learn more' link provided on wrong answers
- Additional quiz libraries for study, with a way to switch between them in the interface