'use strict'

// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const openingHours = {
//     [weekdays[3]]: {
//         open: 12,
//         close: 22
//     }, 
//     [weekdays[4]]: {
//         open: 11,
//         close: 23
//     },
//     [weekdays[5]]: {
//         open: 0,
//         close: 24
//     }
// };

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    // ES6 enhanced object literals
    openingHours: {
        thu: {
            open: 12,
            close: 22
        }, 
        fri: {
            open: 11,
            close: 23
        },
        sat: {
            open: 0,    // open 24 hours
            close: 24
        }
    }, 
    orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
        // console.log(obj);
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    }, 
    orderPizza: function (mainIngredients, ...otherIngredients) {
        console.log(mainIngredients);
        console.log(otherIngredients);
    },
};

// This is the traditional way to storing array elements in variables
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// This is Array Destructuring introduced in ES6
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

// first element is storing in variable 'first' and second element is storing in variable 'second' and rest of the elements is storing in rest operator variable.
const [first, second, ...rest] = restaurant.categories;
console.log(first, second);
console.log(...rest);

// let say we have to take first and third element of array 'categories' of object 'restaurant'.
const [fir, , third] = restaurant.categories;
// Here second element is skipped of restaurant object's array categories.
console.log(fir, third);

console.log(restaurant.order(2, 0));

// Receive 2 return values from a function.
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);

// NESTED ARRAY
const nested = [2, 4, [5, 6]];
// DESTRUCTURING ASSIGNMENT
const [i, , j] = nested;
console.log(i, j);

// 1. Skipping Element
// 2. Nested Array
// 3. Destructuring Array Assignment
// 4. Destructuring Array with Rest Operator

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
// NOTE: Here the default values of p and q i.e., 1 is replaced by 8 and 9 and r will take default value.
// NOTE: Destructuring takes an advantage over default values.

/**
 * --------------------------------------------------------------------------------------------------------------------
 * DESTRUCTURING OBJECTS
 * --------------------------------------------------------------------------------------------------------------------
 */

// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);

// const {
//     name: restaurantName, 
//     openingHours: hours, 
//     categories: tags
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = []} = 
// restaurant;
// console.log(menu, starters);

// Mutating Variables
// let d = 111;
// let e = 999;
// const obj = {d: 23, e: 7, f: 14};

// ({d, e} = obj); 
// console.log(d, e);

// Nested objects
const {
    fri: {open: o, close: cl},
} = restaurant.openingHours;
console.log(o, cl);

restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2
});

restaurant.orderDelivery({
    address: 'Via del Sole, 21',
    starterIndex: 0
})

/**
 * ---------------------------
 * SPREAD OPERATOR(...)
 * ---------------------------
 * WE CAN USE SPREAD OPERATOR TO BASICALLY EXPANDS AN ARRAY INTO ALL ITS ELEMENTS. SO BASICALLY UNPACKING ALL THE ARRAY ELEMENTS IN ONE.
 */

const array = [7, 8, 9];
const badNewArr = [1, 2, array[0], array[1], array[2]];
console.log(badNewArr);         // OUTPUT: [1, 2, 7, 8, 9]         

const newArr = [1, 2, ...array];
console.log(newArr);            // O/P: [1, 2, 7, 8, 9]
console.log(...newArr);         // O/P: 1 2 7 8 9
// const 

// 
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);           // O/P: [ "Pizza", "Pasta", "Risotto", "Gnocci" ]

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);              // O/P: [ "Pizza", "Pasta", "Risotto", "Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad" ]

// ITERABLES: arrays, strings, maps, sets, NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];        // Here the string 'Jonas' will be spread into individual characters
console.log(letters);           // O/P: ["J", "o", "n", "a", "s", " ", "S."]
console.log(...str);            // O/P: J o n a s
// console.log(`${...str} Schmedtmann`);            // Error

// Real-world example
// const ingredients = [prompt(`Let's make pasta! Ingredient 1?`), prompt("Ingredient 2?"), prompt("Ingredient 3?")];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// restaurant.orderPasta(...ingredients);

// Objects
// const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Guiseppe'};
// console.log(newRestaurant);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

/**
 * ---------------------------------
 * REST PATTERN AND PARAMETER
 * ---------------------------------
 * Rest Operator collect multiple elements and condensed them into an array.
 * It is opposite to Spread Operator(Spread Operator unpacks the array element, while Rest operator packs the array element).
 * REST Operator variable Must be the last element in array.
 * 
 */

// SPREAD, Because on Rigth side of = 
const array1 = [1, 2, ...[3, 4]];
console.log(array1);                // O/P: [1, 2, 3, 4]

// REST, because on LEFT side of =
const [g, h, ...others] = [1, 2, 3, 4, 5];
console.log(g, h, others);       // O/P: 1 2 3 4 5

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);

// 1) Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
    // console.log(numbers);
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(sum);
}

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const xy = [23, 5, 7];
add(...xy);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

restaurant.orderPizza('mushrooms');

/**
 * --------------------------------------------
 * SHORT CIRCUITING (&& AND ||)
 * --------------------------------------------
 * There are six falsy values in Javascript
 * 1. 0
 * 2. false
 * 3. ""(empty string)
 * 4. null
 * 5. undefined
 * 6. NaN
 */

console.log('---------------- OR -----------------');

// Logical Operator can use any data type, return any data type and they do something called as short-circuiting.
console.log(3 || 'Jonas');                  // O/P: 3
console.log('' || 'Jonas');                 // O/P: Jonas
console.log(true || 0);                     // O/P: true
console.log(undefined || null);             // O/P: null

console.log(undefined || 0 || '' || 'Hello' || 23 || null);     // O/P: Hello
// NOTE: because Hello is first truthy value in this OR chain, so it returns 'Hello'.
// NOTE: 'OR' operator returns the first truthy value in this OR chain.

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);               // O/P: 23

const guests2 = restaurant.numGuests || 10;
console.log(guests2);               // O/P: 23

console.log('---------------- AND ----------------');
console.log(0 && 'Jonas');          // O/P: 0
// Here 0 is a falsy value and Hence as 'AND' operator encounters falsy value, it returns it.
// NOTE: 'AND' operator returns the first falsy value in the AND chain, if no falsy value is present in OR chain then it simply return the last truthy value.
console.log(7 && 'Jonas');          // O/P: Jonas

console.log('Hello' && 23 && null && 'jonas');      // O/P: null
// NOTE: because null is the first falsy value in this chain.

// Practical Example
if (restaurant.orderPizza) {
    restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

/**
 * --------------------------------------------
 * NULLISH COALESCING OPERATOR(??)
 * --------------------------------------------
 */
// restaurant.numGuest = 1;
const guests3 = restaurant.numGuest || 10;
console.log(guests3);           // O/P: 10

// NULLISH: it recognizes only null and undefined value (does not consider 0 or '' empty string).
const guestCorrect = restaurant.numGuest ?? 10;
console.log(guestCorrect);
// NOTE: If the first value is null or undefined then only control will go to check second value otherwise it returns the first value.

/**
 * --------------------------------
 * LOGICAL ASSIGNMENT OPERATOR
 * --------------------------------
 */

const rest1 = {
    name: 'Capri',
    numGuests: 20
};

const rest2 = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi'
};

// OR assignment operator
rest1.numGuests = rest1.numGuests || 10;            // O/P: 20  
rest2.numGuests = rest2.numGuests || 10;            // O/P: 10              
console.log(rest1.numGuests, rest2.numGuests);

// Modern Logical OR assignment operator
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

// NOTE: Line No: 322 and Line No: 327, both are same

// NULLISH ASSIGNMENT OPERATOR (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

rest2.owner = rest2.owner && '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

// AND ASSIGNMENT OPERATOR
rest1.numGuests &&= '<ANONYMOUS>';
rest2.numGuests &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);


///////////////////////////////////////////////////////////////
// CODING CHALLENGE #1

/**
 * We're building a football batting app (soccer for my American friends😀)!
 * 
 * Suppose we get data from a web service about a certain game (below). In this
 * challenge we're gonna work with the data. So here are your tasks:
 * 
 * 1. Create one player array for each team (variables 'player1' and 'player2').
 * 2. The first player in any player array is the goalkeeper and the others are field players.
 * For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, 
 * and one array ('fieldPlayers') with all the remaining 10 field players.
 * 3. Create an array 'allPlayers' containing all players of both teams (22 players)
 * 4. During the game, Bayern Munich (team 1) used 3 substitute players. so create a new
 * array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho'
 * and 'Peristic'.
 * 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw'
 * and 'team2').
 * 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) 
 * and prints each of them to the console, along with the number of goals who were scored
 * (number of player names passed in).
 * 7. The team with the lower odd is more likely to win. Print to the console which team is more
 * likely to win, without using an if/else statement or the ternary operator.
 * 
 * TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the
 * function again with players from game.scored.
 * 
 * GOOD LUCK😉
 */

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Never',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski'
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze'
        ]
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5
    }
};

const [player1, player2] = game.players;
console.log("Player1 = ",player1, "Player2 = ", player2);

const [gk, ...fieldPlayers] = player1;
console.log("GoalKeeper Name = ", gk, "Field Players Name = ", fieldPlayers);
// const fieldPlayers = [];

const allPlayers = [...player1, ...player2];
console.log("All Player's Name ", allPlayers);

const players1Final = [...player1, 'Thiago', 'Coutinho', 'Peristic'];
console.log(players1Final);

const {
    odds: { 
        team1, 
        x: draw, 
        team2 
    }
} = game;
console.log(team1, draw, team2);

const printGoals = function (...players) {
    console.log(players);
    console.log(`${players.length} goals were scored`);
};

printGoals(...game.scored);

//7.
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

/**
 * ------------------------------------------------------------
 * LOOPING ARRAYS: THE FOR-OF LOOP(INTRODuCED IN ES6)
 * ------------------------------------------------------------
 */

const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu1);

// 'for-of' loop is used to iterate over the element of array
for (const item of menu1) {
    console.log(item);
}
/**
 * Focaccia
 * Bruschetta
 * Garlic Bread
 * Caprese Salad
 * Pizza
 * Pasta
 * Risotto
 */

for (const [index, element] of menu1.entries()) {
    console.log(`${index + 1}: ${element}`);
}
/**
 * OUTPUT:
 * 1: Focaccia
 * 2: Bruschetta
 * 3: Garlic Bread
 * 4: Caprese Salad
 * 5: Pizza
 * 6: Pasta
 * 7: Risotto
 */

/**
 * --------------------------------------------
 * ENHANCED OBJECT LITERALS
 * --------------------------------------------
 */

/**
 * --------------------------------------------
 * OPTIONAL CHAINING (.?)
 * --------------------------------------------
 */

/**
 * ---------------------------------------------------
 * LOOPING OBJECTS: OBJECT KEYS, VALUES AND ENTRIES
 * ---------------------------------------------------
 */

// Property Names
const properties = Object.keys(restaurant.openingHours);
console.log(properties);            // O/P: ["thu", "fri", "sat"]

let openStr = `We are open on ${properties.length} days:`;

for (const day of properties) {
    openStr += `${day}, `;
}
console.log(openStr);

// Property Values
const values = Object.values(restaurant.openingHours);
console.log(values);

// Entire object
const entries = Object.entries(restaurant.openingHours);
console.log(entries);
/**
 * O/P:
 * 0: Array [ "thu", { open: 12, close: 22 } ]
 * 1: Array [ "fri", { open: 11, close: 23 } ]
 * 2: Array [ "sat", { open: 0, close: 24 } ]
 */

// Destructuring of Object in for-of loop
for (const [key, {open, close}] of entries) {
    console.log(`On ${key} we open at ${open} and close at ${close}`);
}
/**
 * O/P:
 * On thu we open at 12 and close at 22
 * On fri we open at 11 and close at 23
 * On sat we open at 0 and close at 24
 */

//////////////////////////////////////////////////////////////////
// Coding Challenge #1

/**
Let's continue with our football betting app!

    1. Loop over the game. scored array and print each player name to the console, along with the goal
    number (Example: "Goal 1: Lewandowski")
    2. Use a loop to calculate the average add and log it to the console (we already studied how to 
    calculate averages, you can go check if you don't remember)
    3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
            Odd of victory Bayern Munich: 1.33
            Odd of draw: 3.25
            Odd of victory Borrussia Dortmund: 6.5
    Get the team names directly from the game object, don't hardcore them (except for "draw").
    HINT: Note how the odds and the game objects have the same property names.

    BONUS: Create an object called 'scorers' which contains the names of the players who scored as
    properties, and the number of goals as the value. In this game, it will look like this:

            {
                Gnarby: 1
                Hummels: 1,
                Lewandowski: 2
            }

    GOOD LUCK 😉
 */

const games = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Never',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski'
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze'
        ]
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5
    }
};
/**
 * 1. Loop over the game. scored array and print each player name to the console, along with the goal
    number (Example: "Goal 1: Lewandowski")
 */
for (const [goalNumber, playerName] of games.scored.entries()) {
    console.log(`Goal ${goalNumber+1}: ${playerName}`);
}

/**
 * 2. Use a loop to calculate the average odd and log it to the console (we already studied how to 
    calculate averages, you can go check if you don't remember)
 */
const val = Object.values(games.odds);
console.log(val);
let sum = 0;
for (const value of val) {
    sum += value;
}
console.log(sum/val.length);

/**
 * 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
            Odd of victory Bayern Munich: 1.33
            Odd of draw: 3.25
            Odd of victory Borrussia Dortmund: 6.5
 */
for (const [team, odd] of Object.entries(games.odds)) {
    const teamStr = team === 'x' ? 'draw' : `victory ${games[team]}`;
    console.log(`Odd of ${teamStr}: ${odd}`);
}

/**
 * BONUS: Create an object called 'scorers' which contains the names of the players who scored as
    properties, and the number of goals as the value. In this game, it will look like this:

            {
                Gnarby: 1
                Hummels: 1,
                Lewandowski: 2
            }
 */
const scorers = {

}

/**
 * -----------------------------------------------------
 * SETS
 * -----------------------------------------------------
 * Set is a collection of unique values(no duplicate vaulues is allowed).
 * It can store any type of data.
 * In set, there is no indexes.
 */

const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
console.log(orderSet);                      // ["Pasta", "Pizza", "Risotto"]

console.log(new Set('Jonas'));              // ["J", "o", "n", "a", "s"]

console.log(orderSet.size);                 // 3

console.log(orderSet.has('Pizza'));         // true
console.log(orderSet.has('Bread'));         // false

orderSet.add('Garlic Bread');               // 'Garlic Bread' Added
orderSet.add('Garlic Bread');               // 'Garlic Bread' Added
orderSet.delete('Risotto');                 // 'Risotto' deleted
console.log(orderSet)                       // ["Pasta", "Pizza", "Garlic Bread"]

// orderSet.clear();                           // clear method will delete all the methods
// console.log(orderSet);                      // []

// ITERATE OVER SET
for (const order of orderSet) console.log(order);
/**
 * OUTPUT: 
 * Pasta 
 * Pizza
 * Garlic Bread
 */

// EXAMPLE:
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);               // ["Waiter", "Chef", "Manager"]

/**
 * -----------------------------------------------------
 * MAPS: FUNDAMENTALS
 * -----------------------------------------------------
 */

const resting = new Map();
resting.set('name', 'Classico Italiano');
resting.set(1, 'Firenze, Italy');
console.log(resting.set(2, 'Lisbon, Portugal'));

resting.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('open', 11).set('close', 23).set(true, 'We are open: D').set(false, 'We are closed :(');
// get method of Map takes key and returns the corresponding value.
console.log(resting.get('name'));           // Classico, Italiano
console.log(resting.get(true));             // We are open: D
console.log(resting.get(1));                // Firenze, Italy
console.log(resting);                       
/**
 * OUTPUT:
 * {name -> "Classico Italiano", 1 -> "Firenze, Italy", 2 -> "Lisbon, Portugal", categories -> ["Italian", "Pizzeria", "Vegetarian", "Organic"]}
 */

const time = 21;
console.log(resting.get(time > resting.get('open') && time < resting.get('close')));            // We are open: D

console.log(resting.has('categories'));     // true
resting.delete(2);
console.log(resting);
/**
 * OUTPUT:
 * { name -> "Classico Italiano", 1 -> "Firenze, Italy", categories -> ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'], open -> 11, close -> 23, true -> "We are open: D", false -> "We are closed :(" }
 */

console.log(resting.size);                  // 7

// resting.clear();
// console.log(resting);                       // 0

resting.set([1, 2], 'Test');
console.log(resting);
/**
 * OUTPUT:  key -> value
 * {
 *      name -> "Classico Italiano"
 *      1 -> "Firenze, Italy"
 *      categories -> ["Italian", "Pizzeria", "Vegetarian", "Organic"]
 *      open -> 11
 *      close -> 23
 *      true -> "We are open: D"
 *      false -> "We are closed :("
 *      [1, 2] -> "Test"
 * }
 */
console.log(resting.size);                      // 8

// console.log(resting.get([1, 2]));               // undefined (because [1, 2] object in heap memory is not same)

const arra = [1, 2];
resting.set(arra, 'Test');
console.log(resting.get(arra));                 // Test
resting.set(document.querySelector('h1'), 'Heading');
console.log(resting);

/**
 * ----------------------------------------------
 * MAPS ITERATION
 * ----------------------------------------------
 * 
 */

// ANOTHER WAY TO SET THE VALUE IN MAP WITHOUT USING SET METHOD
const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct 🎉'],
    [false, 'Try again!']
]);
console.log(question);

