'use strict';
/**
 * ------------------------
 * USAGE OF 'strict' mode
 * ------------------------
 * 'strict' mode makes it easier for developer to avoid accidental errors.
 * So basically it avoids to introduce bugs to our code.
 * and that's because of two reasons :
 * 1. strict mode for bit to do certain things 
 * 2. It will create a visible errors for us in certain situations in which
 * without strict mode, JS would fail silently without letting us know that 
 * we did a mistake.
 * 
 */

/**
 * -----------------------------------------------------------
 * DEMONSTRATION OF USING STRICT MODE
 * -----------------------------------------------------------
 */

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) {
//     hasDriverLicense = true;        // It gives an error on browser console because we are using strict mode. But without 'strict' mode, it doesn't give an error on browser console.
// }
// if (hasDriversLicense) {
//     console.log('I can drive :D')
// }

/**
 * --------------------------------------------------
 * FUNCTION DECLARATION AND FUNCTION CALL
 * --------------------------------------------------
 * SYNTAX: FUNCTION DECLARATION AND FUNCTION CALL
 * 
 * function function_name() {}
 * 
 */

// EXAMPLE 1: FUNCTION DECLARATION
/*
function logger() {
    console.log('My name is Jonas');
}
// calling / running / invoking function
logger();


// EXAMPLE 2: FUNCTION DECLARATION
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

// FUNCTION CALL / INVOKING FUNCTION
console.log(fruitProcessor(5, 0));

// EXAMPLE 3: FUNCTION DECLARATION
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
// FUNCTION CALL
console.log(age1);  
*/
/**
 * -----------------------------------------------------
 * FUNCTION EXPRESSION AND FUNCTION CALL
 * -----------------------------------------------------
 * SYNTAX: FUNCTION EXPRESSION
 * 
 * const function_name = function (param1, param2, ..) {}
 */

// EXAMPLE 1: FUNCTION EXPRESSION
/*
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
console.log(calcAge2(1991));
*/
/**
 * ---------------------------------------------------------------
 * DIFFERENCE BETWEEN FUNCTION DECLARATION & FUNCTION EXPRESSION
 * ---------------------------------------------------------------
 * We can call function even before function declaration or definiton.
 * means function declaration is hoisted.
 * We cannot call function before function expression because function
 * expression is not hoisted.
 */

/**
 * ------------------------------------------------
 * FAT-ARROW FUNCTION
 * ------------------------------------------------
 * const function_name = (param1, param2) => {}
 * 
 */
// EXAMPLE 1:
/*
const calcAge3 = birthYear => 2038 - birthYear;

console.log(calcAge3(1991));
*/
// EXAMPLE 2: Arrow function with one parameter
/*
const yearsUntilRetirement = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement;
};

console.log(yearsUntilRetirement(1991));
*/
// EXAMPLE 3: Arrow function with two parameter needs brackets 
/*
const yearsUntilRetirementForPerson = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirementForPerson(1991, 'Jonas'));
*/
/**
 * ----------------------------------------------------
 * FUNCTIONS CALLING OTHER FUNCTIONS
 * ----------------------------------------------------
 * 
 */

// EXAMPLE 1:
/*
const cutPieces = function (fruit) {
    return fruit * 4;
};

const fruitProcess = (apples, oranges) => {
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges is ready.`
    return juice;
};

console.log(fruitProcess(2, 3));
/*
/**
 * -----------------------------------------------
 * INTRODUCTION TO ARRAYS
 * -----------------------------------------------
 */
/*
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037-1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);
*/
/**
 * --------------------------------------------
 * BASIC ARRAY OPERATIONS(METHOD)
 * --------------------------------------------
 */
/*
const friend = ['Michael', 'Steven', 'Peter']
// Add element at the end of array
friend.push('Jay');     // push method adds an element at the end of the array.
console.log(friend);

// Add element at the beginning of array
friend.unshift('John');
console.log(friend);

// Remove element from last
console.log(friend.pop());
console.log(friend);                            

// Give index of given element
console.log(friend.indexOf('Steven'));          // 2
*/
/**
 * --------------------------------------------------
 * INTRODUCTION TO OBJECTS
 * --------------------------------------------------
 * NOTE: Objects in JS is also a DS.
 */

// ARRAY DS
// (1. In array, we can store only values as below)
// (2. In arrays, orders of elements matters when we want to retrieve them)
/*
EXAMPLE: 
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];
*/
// OBJECT DS
// (1. In Object, we can store both key and value as below)
// (2. In Object, orders of elements doesnot matter when we want to retrieve them)
/*
const jonasObj = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037-1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

/**
 * ---------------------------------------------------
 * DOT VS BRACKET NOTATION
 * ---------------------------------------------------
 */
/*
console.log(jonasObj);

console.log(jonasObj.lastName);     // retrieving data from object using dot notation
console.log(jonasObj['lastName']);  // retrieving data from object using bracket notation

const nameKey = 'Name';
console.log(jonasObj['first' + nameKey]);      // first + Name = firstName(checks what is the value for the key firstName: gives op: jonas)

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');
console.log(jonasObj[interestedIn]);    // bracket notation gives a value because interestedIn will be replaced by its value i.e. whatever we will write on prompt.
console.log(jonasObj.interestedIn)      // dot notation gives an undefined value because no property in jonasObj is there with the name interestedIn.

// Using bracket and dot notation to add the value in object
jonasObj.location = 'Portugal';
jonasObj['twitter'] = '@jonasschmedtman';
console.log(jonasObj);

console.log(`${jonasObj.firstName} has ${jonasObj.friends.length} friends, and his best friend is called ${jonasObj.friends[0]}`);
*/
/**
 * ------------------------------------
 * OBJECT METHODS
 * ------------------------------------
 * 
 */
/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    calcAge: (birthYear) => {           // this birthYear parameter will be taken from function call.
        return 2037 - birthYear;
    }
};

console.log(jonas.calcAge(1992));       
console.log(jonas['calcAge'](1991));
*/

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    calcAge: function () {
        console.log(this);
        return 2037 - this.birthYear;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-years old teacher, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
    }
};

console.log(jonas.calcAge());

// Challenge
// WAP and print: "Jonas is a 46-years old teacher, and he has a driver's license"
// Added getSummary function in object

console.log(jonas.getSummary());

/**
 * -----------------------------------------------
 * ITERATION: THE FOR LOOP
 * -----------------------------------------------
 */

// For loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

/**
 * -----------------------------------------
 * LOOPING ARRAYS, BREAKING AND CONTINUING
 * -----------------------------------------
 */

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
]

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
    types[i] = typeof jonasArray[i];
    console.log(jonasArray[i], types[i]);
}

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);

/**
 * -------------------------
 * CONTINUE
 * -------------------------
 * Continue is to exit the current iteration of the loop and continue to the next one.
 * 
 * -------------------------
 * BREAK
 * -------------------------
 * Break is used to completely terminate the whole loop.
 * 
 */
console.log('----------- CONTINUE WITH OTHERS(ONLY STRINGS ACCEPT)-------------')
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'string') {
        continue;
    }
    console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log('---------- BREAK WITH NUMBERS -----------')
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === 'number') {
        break;
    }
    console.log(jonasArray[i], typeof jonasArray[i]);
}
