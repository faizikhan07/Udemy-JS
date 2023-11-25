// let js='amazing';
// if (js === 'amazing')
//     alert('JavaScript is FUN!');

// console.log(40+8+23-10);

// console.log('Jonas');
// console.log(23);

// let firstName = "Jonas";
// console.log(firstName);
// console.log(firstName);

// let myFirstJob = 'Programmer';
// let myCurrentJob = 'Teacher';

// let job1 = 'programmer';
// let job2 = 'teacher';

/**
 * 7 primitive Data types
 * 
 * 1. Number: Floating point numbers(Used for decimals and integers).
 * 2. String: Sequence of Characters(Used for text)
 * 3. Boolean: Logical type that can only be true or false(Used for taking decisions).
 * 4. Undefined: Value taken by variable that is not yet defined('empty value').
 * 5. Null: Also means 'empty value'.
 * 6. Symbol(ES2015): Value that is unique and cannot be changed(Not useful for now)
 * 7. BigInt(ES2020): Larger integers than the Number type can hold
 * 
 * NOTE: JAVASCRIPT HAS DYNAMIC TYPING: We do not have to manually define the data type of the value
 * stored in a variable. Instead, data types are determined automatically.
 * 
 */


// let javascriptIsFun = true;
// console.log(javascriptIsFun);               // true

// console.log(typeof true);                   // boolean
// console.log(typeof(javascriptIsFun));       // boolean -------------+
// console.log(typeof(23));                    // number               |
// console.log(typeof 'Jonas');                // string               |
//                                //                                   |   type of the value can be changed for 'let' variable.
// javascriptIsFun = 'YES!';                                   //      |
// console.log(javascriptIsFun);               // YES!                 |
// console.log(typeof(javascriptIsFun))        // string <-------------+

// let year;
// console.log(year);
// console.log(typeof(year));

// year = 1991;

/**
 * -------------------------
 * var VS let VS const
 * -------------------------
 * Difference between 'var/let/const' based on below points:
 * 1. reassigning the value in variable of keyword 'var/let/const'
 *  NOTE: var/let type of variable can be reassigned, but const cannot be reassigned with new value.
 * 2. hosting the value in variable of keyword 'var/let/const'.
 *  NOTE: 
 * 3. assigning the variable with 'empty' variable.
 *  NOTE: const type of variable cannot be empty at the time of declaration. but let/var variable can be empty.
 */

// console.log(age);
// let age;
// age = "Faizan";

// console.log(birthYear);
// const birthYear = 1991;
// birthYear = 1990;

// console.log(xyz);
// var xyz;
// xyz = 20;

// Assignment Operators
// let x = 10+5;
// x += 10;
// x += 4
// x++;
// x--;
// x--;
// console.log(x);

// Comparison Operator
// OPERATOR PRECEDENCE

/**
 * ------------------------------------
 * STRINGS AND TEMPLATE LITERALS
 * ------------------------------------
 */

// STRING LITERALS
// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2023;

// const jonas = "I'm " + firstName + ', a ' + (year-birthYear) + ' year old ' + job + '!';
// console.log(jonas);

// TEMPLATE LITERALS
// const jonasNew = `I'm ${firstName}, a ${year-birthYear} year old ${job}!`;
// console.log(jonasNew);

// console.log('String with \n\
// multiple \n\
// lines');

// console.log(`String with
// multiple 
// line`);

// const age = 15;
// const isOldEnough = age>=18;

// if (isOldEnough) {
//     console.log(`Sarah can start driving license🚗`)
// } else {
//     const yearsLeft = 18-age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// let variable is only accessible only inside the block if we declare the variable inside any block.
// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);

/**
 * -----------------------------------
 * TYPE CONVERSION & COERCION
 * -----------------------------------
 */

// TYPE CONVERSION

// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));       // NaN
// console.log(typeof(NaN));           // Invalid number

// console.log(String(23), 23);

// // TYPE COERCION
// console.log('I am ' + 23 + ' years old');       // I am 23 years old
// /**
//  * '+' operator converts a number to string automatically and concatenates that number to string.
//  */

// console.log('23' - '10' - 3);                   // 13
// /**
//  * Here, '-' operator converts strings to numbers
//  */

// console.log('23' + '10' + 3);                   // 23103
/**
 * Except '+' operator, all other operators converts string to number and calculate the expression.
 * Because '+' operator concatenates the string to the number
 */
// console.log('23' * '2');                        // 46

// console.log('23' / '2');                        // 11.5

// // Expect the answer
// let n = '1' + 1;
// n = n - 1;
// console.log(n);                                      // 10

// // Expect the answer
// console.log(2 + 3 + 4 + '5');                       // 95

// // Expect the answer
// console.log('10' - '4' - '3' - 2 + '5')             // 15

/**
 * --------------------------------
 * TRUTHY AND FALSY VALUES
 * --------------------------------
 * 5 falsy values: 0, '', undefined, null, NaN
 * 
 */
// console.log(Boolean(0));                    // false
// console.log(Boolean(''));                   // false
// console.log(Boolean(undefined));            // false
// console.log(Boolean(null));                 // false
// console.log(Boolean(NaN));                  // false
// console.log(Boolean('Jonas'));              // true

// const money = 0;
// if (money) {
//     console.log("Don't spend it all :)");
// } else {
//     console.log("You should get a job!");           // this else block will be executed.
// }

// let height;                                     // it is assigned with UNDEFINED Value
// if (height) {
//     console.log("YAY! Height is defined");
// } else {
//     console.log("Height is UNDEFINED");         // Height is UNDEFINED
// }

/**
 * ---------------------------------
 * EQUALITY OPERATORS: == VS ===
 * ---------------------------------
 * === (Strict Equality Operator): means it does not perform type coercion.
 * == (it checks equality after type coercion).
 */

// const age = 18;
// Loosely Equality Operator
// if (age == '18') {                  // Evaluated as true because of doing type coercion
//     console.log("You just became an adult :)");
// }

// Strict Equality Operator
// if (age === '18') {                 // Evaluated as false because of not doing type coercion
//     console.log("You just became an adult")
// }

/**
 * -----------------------------
 * SWITCH STATEMENT
 * -----------------------------
 */

const day = 'thursday';
// switch(day) {
//     case 'monday':      // day === 'monday'     (Strict Equality operator)
//         console.log("Plan course structure");
//         console.log("Go to coding meetup");
//         break;
//     case 'tuesday':     // day === 'tuesday'
//         console.log("Prepare theory vidoes");
//         break;
//     case 'wednesday':   // 
//     case 'thursday':
//         console.log("Write Code examples");
//         break;
//     case 'friday':
//         console.log("Record videos");
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log("Enjoy the weekend : D");
//         break;
//     default:
//         console.log("Not a valid day");
// }

// Same Above Question with if-else statement

// if (day === 'monday') {
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
// } else if (day === 'tuesday') {
//     console.log("Prepare theory videos");
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log("Write code examples");
// } else if (day === 'friday') {
//     console.log("Record videos");
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log("Enjoy the weekend : D");
// } else {
//     console.log("Not a valid day");
// }

/**
 * -----------------------------------
 * THE CONDITIONAL (TERNARY) OPERATOR
 * -----------------------------------
 * 
 * SYNTAX:
 * condition ? true : false
 */

const age = 23;
age >= 18 ? console.log('I like to drink tea 🍵') : console.log('I like to drink water 💧');

/**
 * ----------------------------
 * ADVANTAGES OF JAVASCRIPT
 * ----------------------------
 * Backwards Compatibility
 * 
 * -------------------------------------
 * HOW TO USE MODERN JAVASCRIPT TODAY
 * -------------------------------------
 * During development: Simply use the latest Google Chrome!
 * During production: Use Babel to transpile and polyfill your code (converting back to ES5 to ensure browswer compatibility for all users).
 * 
 */

