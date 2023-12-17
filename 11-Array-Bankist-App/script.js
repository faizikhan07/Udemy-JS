'use strict'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BANKIST-APP

// Data 
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2,
    pin: 1111
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444
};

const accounts = [account1, account2, account3, account4];

////////////////////////////////////////////////////////////////////////////
// ELEMENTS 
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// DOM MANIPULATION
const displayMovements = movements => {
    containerMovements.innerHTML = '';

    movements.forEach((mov, i) => {
        
        const type = mov < 0 ? 'withdrawl' : 'deposit';

        const html = `
            <div class="movements__row">
                <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
                <div class="movements__value">${mov}€</div>
            </div>
        `;

        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
};
// FUNCTION CALL
displayMovements(account1.movements);

// Display the balance on the app.
const calcDisplayBalance = acc => {
    acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
    labelBalance.textContent = `${acc.balance}€`;
};
// FUNCTION CALL
// calcDisplayBalance(account1.movements);

const calcDisplaySummary = acc => {
    const incomes = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
    console.log(incomes);
    labelSumIn.textContent = `${incomes}€`;

    const outcomes = acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);
    console.log(outcomes);
    labelSumOut.textContent = `${Math.abs(outcomes)}€`;

    const interest = acc.movements.filter(mov => mov > 0).map(deposit => (deposit * acc.interestRate)/100).filter((int, i, arr) => int >= 1).reduce((acc, int) => acc + int, 0);
    console.log(interest);
    labelSumInterest.textContent = `${Math.round(interest)}€`;
};
// FUNCTION CALL
// calcDisplaySummary(account1.movements);

// WAP to print first letter of each word in this name.
const user = 'Steven Thomas Williams';          // stw
const createUserNames = user =>
    user
        .toLowerCase()
            .split(' ')
                .map(name => name.charAt(0))
                    .join('');
// FUNCTION CALL
console.log(createUserNames(user));             // stw

// WAP to add 'username' property to each object of account array.
const createUserAccounts = accs => {

    accs.forEach(acc => {
        acc.username = acc.owner
        .toLowerCase()
            .split(' ')
                .map(name => name.charAt(0))
                    .join('');
    });
};
// FUNCTION CALL
createUserAccounts(accounts);
console.log(accounts);

const updateUI = (acc) => {
    // Display movements
    displayMovements(acc.movements);
        
    // Display balance
    calcDisplayBalance(acc);

    // Display summary
    calcDisplaySummary(acc);
};
/*
----------------
OUTPUT:
----------------
0: Object { owner: "Jonas Schmedtmann", interestRate: 1.2, pin: 1111, … }
interestRate: 1.2
movements: Array(8) [ 200, 450, -400, … ]
owner: "Jonas Schmedtmann"
pin: 1111
username: "js"
<prototype>: Object { … }
​
1: Object { owner: "Jessica Davis", interestRate: 1.5, pin: 2222, … }
interestRate: 1.5
movements: Array(8) [ 5000, 3400, -150, … ]
owner: "Jessica Davis"
pin: 2222
username: "jd"
<prototype>: Object { … }
​
2: Object { owner: "Steven Thomas Williams", interestRate: 0.7, pin: 3333, … }
interestRate: 0.7
movements: Array(8) [ 200, -200, 340, … ]
owner: "Steven Thomas Williams"
pin: 3333
username: "stw"
<prototype>: Object { … }
​
3: Object { owner: "Sarah Smith", interestRate: 1, pin: 4444, … }
interestRate: 1
movements: Array(5) [ 430, 1000, 700, … ]
owner: "Sarah Smith"
pin: 4444
username: "ss"
*/


////////////////////////////////////////////////////////////////////////////////////////////
// IMPLEMENTING LOGIN

// EVENT HANDLERs
let currentAccount;
btnLogin.addEventListener('click', event => {
    // Prevent form from submitting
    event.preventDefault();

    currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
    console.log(currentAccount);        // { owner: "Jonas Schmedtmann", movements: (8) […], interestRate: 1.2, pin: 1111, username: "js" }
    
    if (currentAccount?.pin === Number(inputLoginPin.value)) {
        // Display UI and welcome message
        labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
        containerApp.style.opacity = 100;

        // Clear input fields
        inputLoginUsername.value = inputLoginPin.value = '';
        inputLoginPin.blur();

        // Update UI
        updateUI(currentAccount);
    }
});

btnClose.addEventListener('click', (event) => {
    event.preventDefault();
    // console.log('Delete');

    if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
        
        const index = accounts.findIndex(acc => acc.username === currentAccount.username);
        console.log(index);
        // Delete account
        accounts.splice(index, 1);

        // Hide UI
        containerApp.style.opacity = 0;
    }
    inputCloseUsername.value = inputClosePin.value = '';
});

// IMPLEMENTING TRANSFERS

btnTransfer.addEventListener('click', event => {
    event.preventDefault();
    const amount = Number(inputTransferAmount.value);
    console.log(amount);
    const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
    console.log(receiverAcc);
    inputTransferAmount.value = inputTransferTo.value = '';

    if (amount > 0 && currentAccount.balance >= amount && receiverAcc?.username !== currentAccount.username && receiverAcc) {
        // Doing the transfer
        currentAccount.movements.push(-amount);
        receiverAcc.movements.push(amount);

        // Update UI
        updateUI(currentAccount);
    }
});

btnLoan.addEventListener('click', event => {
    event.preventDefault();
    console.log('Loan Amount');

    const amount = Number(inputLoanAmount.value);

    if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
        // Add movement
        currentAccount.movements.push(amount);

        // Update UI
        updateUI(currentAccount);
    }
    inputLoanAmount.value = '';
});



























//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// LECTURE CONTENT

/////////////////////////////////////////////////////////////////////////////
// Coding Challenge #1

/*
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, 
and stored the data into an array (one array for each). For now, they are just interested in knowing 
whether a dog is an adult or a puppy. A dog is an adult if it is atleast 3 years old, and it's a puppy
if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and
does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs!
So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because
it's a bad practice to mutate function parameters).
2. Create an array with both Julia's (corrected) and Kate's data.
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and
is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets.

HINT: Use tools from all lectures in this section so far 😀 

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 4, 6, 1, 4]

GOOD LUCK 😀
*/

const checkDogs = (dogsJulia, dogsKate) => {

    dogsJulia.splice(0, 1);
    dogsJulia.splice(-2);
    console.log(dogsJulia);
    const dogs = dogsJulia.concat(dogsKate);
    console.log(dogs);

//     "Dog number 1 is an adult, and
//     is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶"
    dogs.forEach((dog, i) =>{
        if (dog > 2) {
            console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
        } else {
            console.log(`Dog number ${i + 1} is still a puppy 🐶`);
        }
    });
};
// FUNCTION CALL
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 4, 6, 1, 4])

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// DATA TRANSFORMATIONS WITH MAP, FILTER AND REDUCE

/**
 * ----------------------------------
 * DATA TRANSFORMATION WITH MAP
 * ----------------------------------
 * 1. Map method does not manipulate the original array but it generates the new array after performing the specific operation on each and every element.
 * 2. We don't call the callback function inside map but map function itself calls the callback function and return the desired result.
 */
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

const movementsUSD = movements.map((mov, i) =>

    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
    // return mov * eurToUsd;
);

// Original Array
console.log(movements);                         // [ 200, 450, -400, 3000, -650, -130, 70, 1300 ]
// Array after manipulation with map method
console.log(movementsUSD);                      // [ 220.00000000000003, 495.00000000000006, -440.00000000000006, 3300.0000000000005, -715.0000000000001, -143, 77, 1430.0000000000002 ]

/**
 * --------------------------------------------------------------------------
 * DATA TRANSFORMATION WITHOUT USING MAP(WITH FOR-OF LOOP/ FOR-EACH LOOP)
 * --------------------------------------------------------------------------
 */

for (const mov of movements) {
    movementsUSD.push(mov * eurToUsd);
}
// Original Array
console.log(movements);                         // [ 200, 450, -400, 3000, -650, -130, 70, 1300 ]
// Array after manipulation
console.log(movementsUSD);                      // [ 220.00000000000003, 495.00000000000006, -440.00000000000006, 3300.0000000000005, -715.0000000000001, -143, 77, 1430.0000000000002, 220.00000000000003, 495.00000000000006, … ]

///////////////////////////////////////////////////////////////

movements.forEach(mov => {
    movementsUSD.push(mov * eurToUsd);
});
// Original Array
console.log(movements);                         // [ 200, 450, -400, 3000, -650, -130, 70, 1300 ]
// Array after manipulation
console.log(movementsUSD);                      // [ 220.00000000000003, 495.00000000000006, -440.00000000000006, 3300.0000000000005, -715.0000000000001, -143, 77, 1430.0000000000002 ]

/**
 * -----------------------------------------------------------------------------------------------------
 * WHAT IS THE BENEFIT OF USING MAP METHOD INSTEAD OF USING FOR LOOPs(both are giving the same result)
 * -----------------------------------------------------------------------------------------------------
 * In modern JS, it's a best practice to use functional programming (means functions), instead of using 
 * for loops. Functional programming reduces number of lines of code.
 */

/**
 * ------------------------------------------
 * DATA TRANSFORMATION WITH FILTER METHOD
 * ------------------------------------------
 * Functionality is same as of Map function. Only thing is different is it basically filters out the elements of array based on specific condition.
 */

const deposits = movements.filter(mov => mov > 0 );

console.log(movements);                 // [ 200, 450, -400, 3000, -650, -130, 70, 1300 ]
console.log(deposits);                  // [ 200, 450, 3000, 70, 1300 ]

const depositsFor = [];
for (const mov of movements) {
    if (mov > 0) 
        depositsFor.push(mov);
}
console.log(depositsFor);               // [ 200, 450, 3000, 70, 1300 ]

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);               // [ -400, -650, -130 ]

console.log(movements);

/**
 * ----------------------------------------------------------
 * DATA TRANSFORMATION WITH REDUCE METHOD
 * ----------------------------------------------------------
 */

// Accumulator is like the snowball
const balance = movements.reduce((accumulator, curr) => accumulator + curr, 0);
console.log(balance);               // 3840

/**
 * -----------------------------------------------------
 * SAME DATA TRANSFORMATION WITH FOR LOOP
 * -----------------------------------------------------
 */

let balance2 = 0;
for (const mov of movements) {
    balance2 += mov;
}
console.log(balance2);              // 3840

// MAXIMUM VALUE
const max = movements.reduce((acc, mov) => {
    if (acc > mov) {
        return acc;
    } else {
        return mov;
    }
}, movements[0]);
console.log(max);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
CODING CHALLENGE #2

Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dogs <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉).
4. Run the function for both test datasets.

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const calcAverageHumanAge = ages => {

    const avgAge = ages.map(dogAge => 
        dogAge <= 2 ? (2 * dogAge) : (16 + dogAge * 4)
    ).filter(humanAge => humanAge >= 18).reduce((acc, adults, i, array) => 
        (acc + adults) / array.length, 0);

    console.log(avgAge);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);            // 44
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);           // 47.333333333333336

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * -----------------------------------------------
 * MAGIC OF CHAINING METHODS
 * -----------------------------------------------
 */

const totalDepositsUSD = movements.filter(mov => mov > 0).map(mov => mov * eurToUsd)
.reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);                  // 5522.000000000001

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CODING CHALLENGE #3

/*
Rewrite the 'calcAverageHumanAge' function from previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
*/

// SOLVED ABOVE ALREADY

/**
 * ------------------------------------------------
 * FIND METHOD
 * ------------------------------------------------
 * By using find method, we can retrieve an elements from an array based on condition.
 */

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);                     // [ 200, 450, -400, 3000, -650, -130, 70, 1300 ]
console.log(firstWithdrawal);               // -400

console.log(accounts);                     
/*
   OUTPUT:
   0: Object { owner: "Jonas Schmedtmann", interestRate: 1.2, pin: 1111, … }
   1: Object { owner: "Jessica Davis", interestRate: 1.5, pin: 2222, … }
​   2: Object { owner: "Steven Thomas Williams", interestRate: 0.7, pin: 3333, … }
   3: Object { owner: "Sarah Smith", interestRate: 1, pin: 4444, … }
*/

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);               // Object { owner: "Jessica Davis", movements: (8) […], interestRate: 1.5, pin: 2222, username: "jd" }

/**
 * What is the difference between filter and find method.
 * 
 * 1. Filter returns all the elements that satisfies the condition but find method returns only the first element that satisfies the condition.
 * 2. Filter returns the new array while find returns the single element.
 * 
 */

/**
 * ----------------------------------------------------------
 * findIndex METHOD
 * ----------------------------------------------------------
 * findIndex returns the index of the first found element.
 */

/**
 * ----------------------------------------------------------
 * includes METHOD
 * ----------------------------------------------------------
 */

console.log(movements);
// EQUALITY
console.log(movements.includes(-130));          // true

/**
 * ----------------------------------------------------------
 * some METHOD
 * ----------------------------------------------------------
 */

// CONDITION
const anyDeposits = movements.some(mov => mov > 1500);
console.log(anyDeposits);               // true

