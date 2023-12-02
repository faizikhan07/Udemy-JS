'use strict'

/**
 * ---------------------------------
 * VARIABLE SCOPING
 * ---------------------------------
 */

function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        let output = `You are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            // Creating new variables with same as outer scope's variable
            var millenial = true;
            const firstName = 'Steven';

            // Reassigning outer scope's variable
            output = 'NEW OUTPUT!';

            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }
        }
        // console.log(str);
        console.log(millenial);
        // console.log(add(2, 3));
    }
    printAge();
    console.log(firstName);
    return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();


// VARIABLE ENVIRONMENT: HOISTING AND THE TDZ
/**
 * HOISTING: Makes some types of variables accessible/usable in the code before they are actually declared. "Variables lifted to the top of this scope".
 *                                              |
 *                                              |
 *                                              V
 * Before execution, code is scanned for variable declarations, and for eah variable, a new property is created in the variable environment object.
 * 
 * |                                    |           HOISTED         |       INITIAL VALUE       |       SCOPE       |
 * |------------------------------------+---------------------------+---------------------------+-------------------+------------------------------------------            
 * |  function declarations             |           YES             |       ACTUAL FUNCTION     |       BLOCK       |
 * |                                    |                           |                           |                   |
 * |  var variables                     |           YES             |       UNDEFINED           |       FUNCTION    |
 * |                                    |                           |                           |                   |
 * |  let and const variables           |           NO              |   <uninitialized>, TDZ    |       BLOCK       |
 * |                                    |                           |    (Temporal Dead Zone)   |                   |
 * |  function expressions and arrows   |                           |                           |                   |
 * |                                    |                           |
 * 
 */

// HOISTING WITH VARIABLES
// -------------------------------------------------
console.log(me);            // undefined
// console.log(job);           // error(can't access lexical declaration 'year' before initialization)
// console.log(year);       // error(can't access lexical declaration 'year' before initialization)

var me = 'Jonas';
let job = 'teacher';
const year = 1991;
// -------------------------------------------------

// HOISTING WITH FUNCTIONS(USING OF FUNCTIONS EVEN BEFORE ITs DECLARATION OR DEFINITION)
// -----------------------------------------------------
console.log(addDecl(2, 3));         // 5
// console.log(addExpr(2, 3));         // error(can't access lexical declaration 'addExpr' before initialization).
// console.log(addArrow(2, 3));        // error(can't access lexical declaration 'addExpr' before initialization).
// GEtting error because both these variable is assigned to const variable and const does not hoist.
// If we assign the function to var variable, then we will get undefined as result. 
function addDecl(a, b) {
    return a+b;
}

const addExpr = function (a, b) {
    return a+b;
}

const addArrow = (a, b) => a+b;

/**
 * ----------------------
 * 'this' KEYWORD
 * ----------------------
 * Special variable that is created for every execution context (every function).
 * Takes the value of (points to) the "owner" of the function in which the 'this' keyword is used.
 * 
 * 
 */

