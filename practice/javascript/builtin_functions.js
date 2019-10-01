// BUILT-IN FUNCTIONS

// Classes are distinguished bc they are CAPITALIZED
// Ex: of a Class. Has everything bundled with in it
// Math.function();

// TO ROUND TO THE NEAREST INTEGER
var someNumber = 50.30403;

var results = Math.round(someNumber);

var sentence = "The Number " + someNumber + " rounded is " + results + "!";
console.log(sentence);

// TO ROUND UP: CEIL
console.log( Math.ceil(45.2));
// Also expressed as:
var ceiling = Math.ceil(45.2);
console.log( ceiling );

// TO ROUND DOWN: FLOOR
console.log( Math.floor(45.8) );

// POWER first number is the base and the following number is the exponent
Math.pow(10, 2);

// Argument 1 power to argument 2.
console.log(Math.pow(10,2));

// SQUARE ROOT of argument 1
console.log(Math.sqrt(100));

// Create a RANDOM number between 0 and .99999999 
var random = Math.random();
console.log(random);

// Negative Random: take random number and muliply by -1. Negative variable will hold negative version of random
var random = Math.random();
var negative = random * -1;
console.log(negative);

// RANDOM BY 10: take random number and multiply by 10, range will hold product
var range = random *10;
console.log(range);

// Take range value and round up, then store number in wholeNumber variable.
var wholeNumber = Math.ceil(range);

// Send wholeNumber value to console.
console.log(wholeNumber);