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

// ****[LUNCH BREAK]****

// parseInt attempts to convert a Datatype String into a Datatype number. Returns a number or a NaN 
parseInt("1000"); // Number 1000
parseInt("Hello");  // probably NaN
parseInt("100Hello"); // Number 100
parseInt("hello100"); // NaN

parseFloat(); // Decimal point only goes up to 32 bits
parseFloat("1000.303000"); // Number 1000.303000 Looks for a period and includes any number after IN A STRING
parseInt("1000.303000"); // Number 1000 String to a number. STOPS once it sees the decimal point.

var floatNumber= parseFloat("1000.303000");
parseInt("1000.303000");
console.log(floatNumber);

// KIM: you can reuse anything by holding it in a variable

// ex of complx code that generates a number between 1 and 10 and sends it directly to the console.
console.log( Math.floor( (  Math.random() * 10 ) +1 ) );

/* charAt():
 *** KIM: that the first letter is considered letter 0 and progresses accordingly **** 
 *** KIM: SPACE IS CONSIDERED A CHARACTER!!!! ****
 Ex: */
"Hello World!".charAt (4);

/* Ex:  Find the position starting at 0 and sends that character to the console.*/
"Hello World!".charAt (7);


// indexOf():
// Find the character in the string, and returns the position number and sends it to the console.
console.log( "Hello World!".indexOf("W") );

//Find the character in the string, and return the position number and send it to the console. 
console.log ("Hello World!".indexOf("h"));

// -1 means that it could not be found on the above example. It's negative because the first item will always start at 0.

