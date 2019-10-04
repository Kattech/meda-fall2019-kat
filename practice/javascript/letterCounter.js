        // LETTER COUNTER cont'd

//CLASS EXAMPLE: Create a string to play with, a counter (i), a condition to stop the loop ( loopContinue), and a variable to hold the number of characters of the string (lengthOfString)
// How many times a letter appears in a string

var stringToTest = "This has to be a really long sentence so we have a chance to count a character twice.";
var i = 0;
var loopContinue = true;
var lengthOfString = stringToTest.length;
console.log( lengthOfString);
// .length is an OBJECT PROPERTY ONLY WORKS ON STRINGS and ARRAYS

// To check for the letter "s":
var characterToCheck = "s";



do {
    var count = 0;
    //Pull a character based on the current loop number (i) using charAt function
    //(The value of i is 1 b/c adding 1 to i on line 50, then next pass, i=2...next pass, i=3)
    var character = stringToTest.charAt(i);
    
    // Add a 1 to the counter (i).
    i = i +1;

    // Console log the current value of character.
    console.log(character);

    
    // Compare value of character to value of characterToCheck;
    if (character == characterToCheck) {
        console.log ("We found a match! for " + characterToCheck + "!");
    }else {
        console.log("No match for " + characterToCheck + "!");
    }

    // Test to see if the loop is longer than the length of string, and stop the loop if it is.
    if (i >= lengthOfString) {
        loopContinue = false;
    }

    // After running the code check loopContinue to see if we should run this loop again.
} while ( loopContinue );



// OJO: ORDER DOES MATTER IN LOGIC!!! <--- move the i=i +1; AFTER var character = stringToTest.charAt(i) and BEDFORE console.log(character) the T will appear in the Debug Console.




