'use strict';

/**
 * JS interact with the web page for the very first time. and the technical term for that is doing DOM manipulation
 * 
 * WHAT IS DOM?
 * 1. Stands for Document Object Model
 * 2. It is basically structured representation of HTML Documents.
 * 3. JS is allowed to access/interact HTML elements and styles to manipulate them.
 * 4. DOM is automatically created by the browser as soon as the HTML page loads and it 
 * stored in a tree like structure.
 * 5. In the below tree, each HTML element is one Object.
 * 
 * EXAMPLE: HTML Code with different elements/tag
 * 
 * <html>
 *  <head>
 *      <title>A Simple Page</title>
 *  </head>
 *  <body>
 *      <section>
 *          <p>A paragraph with a <a> link</a> </p>
 *          <p>A second paragraph</p>
 *      </section>
 *      <section>
 *          <img src="dom.png" alt="The DOM" />
 *      </section>
 *  </body>
 * </html>
 * 
 * DOM(Document Object Model) for the above HTML code.
 *                                  +----------+
 *                                  | Document |
 *                                  +----------+
 *                                       |
 *                                  +----------+
 *                                  |  Element |
 *                                  |  <html>  |
 *                                  +----------+ 
 *                                       |
 *                   +-------------------+-------------------+
 *                   |                                       |
 *              +---------+                             +---------+
 *              | Element |                             | Element |
 *              | <head>  |                             | <body>  |
 *              +---------+                             +---------+
 *                   |                                       |
 *              +---------+                     +-------------------------------------+
 *              | Element |                     |                                     |
 *              | <title> |               +---------+                            +---------+
 *              +---------+               | Element |                            | Element |
 *                  |                     |<section>|                            |<section>|
 *            +-----------+               +---------+                            +---------+
 *            |   TEXT    |                    |                                      |
 *            | "A Simple |         +-------------------------+                 +-----------+
 *            |   Page"   |         |                         |                 |  Element  |
 *            +-----------+         |                         |                 |   <img>   |
 *                          +---------------+           +----------------+      +-----------+
 *                          |    Element    |           |    Element     |
 *                          |      <p>      |           |      <p>       |
 *                          +---------------+           +----------------+
 *                                  |                             |
 *                    +-------------------------+           +----------------+
 *                    |                         |           |  Text          |
 *              +-----------+           +---------------+   |"A second para_"|
 *              |  Element  |           |     Text      |   +----------------+
 *              |   <p>     |           |"A paragraph _"|
 *              +-----------+           +---------------+
 * 
 * --------------------------------------------------------------------------------------------------------------------------------
 * 
 * Summary:
 * Many people believes that the DOM and all the methods and properties that we can use to manipulate the DOM such as document and querySelector
 * and lots of other stuffs are actually part of JS. However, this is not the case. Remember that JS is actually just the dialect of the ECMAscript
 * specification and all this DOM related stuffs is simply not in there. So up until this point, we have used JS language itself but starting in 
 * this section , we will also use JS in the browser. I mean, sure we have used google chrome to run our code in the developer tools console but 
 * that's not what i mean here. what i mean here is to manipulate web pages that are actually this plate and rendered in the browser just like any
 * normal website that you know. Now you might ask if the DOM is not the part of JS language then how this all work? Well, DOM and DOM Methods are
 * actually part of something called the "Web API's". So the web API's are like the libraries that browser implements and that we can access from our
 * JS code. For now, what you need to know is that web apis are basically libraries that are also written in JS and that are automatically available
 * for us to use. So all this happens behind the scenes, we don't have to import or do anything.
 * 
 */
/*
// Interaction of DOM element using JS.
console.log(document.querySelector('.message').textContent)

// Here we manipulated the text content of one of the DOM element.
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 21;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value=23
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


document.querySelector('.check').addEventListener
('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // when there is no input
    if (!guess) {
        document.querySelector('.message').textContent = 'No number!';
    } 
    // when player wins
    else if (guess === secretNumber) {
        // show message when guess and secretNumber are equal
        document.querySelector('.message').textContent = 'Correct Number!';
        
        // change the background color when guess and secretNumber are equal
        document.querySelector('body').style.backgroundColor = '#60b347';

        // Increase the fond size of number
        document.querySelector('.number').style.width = '30rem';

        document.querySelector('.number').textContent = secretNumber;

        // Implementing 'highscore' functionality
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } 
    // when guess is wrong
    else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = guess > secretNumber ? 'Too high!' : 'Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💥You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
    // -------------------------------------------------
    // REFACTORED THE BELOW CODE FROM ABOVE
    // -------------------------------------------------
    // when guess is too low
    // else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too low!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '💥You lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // } 
    // when guess is too high
    // else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too high!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '💥You lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
});

/**
 * Coding Challenge #1: Implementing 'Again!' button functionality
 * 
 * Implement a game rest functionality, So that the player can make a new guess! Here is how:
 * 1. Select the element with the 'again' class and attach a click event handler.
 * 2. In the handler function, restore initial values of the score and number variables.
 * 3. Restore the initial conditions of the message, number, score and guess input field.
 * 4. Also restore the original background color(#222) and number width(15rem).
 * 
 * GOOD LUCK 🤞😊
 */

document.querySelector('.again').addEventListener
('click', function () {
    document.querySelector('.score').textContent = 5;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});

// REFACTORING THE CODE : DRY Principle(Don't Repeat Yourself)

// # PROJECT 2: MODAL WINDOW
