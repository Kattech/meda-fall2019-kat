            // LOOPS: repetative cyles 
// Do While Loop
// For Loop
// While Loop
// .foreach()  <--- function that does loops

// Syntax of Do While similar to:  if... else

//       do { /* code */ } while ( true ); // <--- while section decides whether it should end.
                // INFINITE LOOPS: never ends, never finished bc it stays true.
 
// CLASS EX: Create a Counter
// STEP 1: create a variable named "aVariable"
var aVariable = true;
var counter = 0;
// STEP 3: create a variable named "counter". so it increase it by 1 set it equal to 0

// STEP 2: Write out the Do While Loop 
do {
    //STEP 4: Grab the value of counter (after the =), then add a 1 to it, finally store the results back into counter (before the =).
   counter = counter + 1; // counter++


   console.log("The value of counter is: " + counter);
   if (counter > 50) { //it will stop at 51st loop. It runs in the console 51 times
    aVariable = false;
   }

} while ( aVariable );
// STEP 5: run the debug console to see the counter...

// you can change the numeric value from 50 to 1000 to 500000



//...[LUNCH BREAK]
        //CLASS EXAMPLE: Create a string to play with, a counter (i), a condition to stop the loop ( loopContinue), and a variable to hold the number of characters of the string (lengthOfString)
// STEP 1: Write DO WHILE LOOP
// STEP 2: Write a variable
// STEP 3: Add If statement
// IF If statement is outside the loop then it only runs 1x. If it is inside the loop it will ask the question as many times as the loop runs.
// IF var loopContinue is equal to true it will continue to run
//STEP 4: Add an increment i= i+1 before the If statement. (you could add it after you test it)
// STEP 5: Console.log the character pulled from the string
// STEP 6: Another If statement to see if you stopped the loop.

var stringToTest = "This has to be a really long sentence so we have a chance to count a character twice.";
var i = 0;
var loopContinue = true;
var lengthOfString = stringToTest.length;
console.log( lengthOfString);
// .length is an OBJECT PROPERTY ONLY WORKS ON STRINGS and ARRAYS

do {

    //Pull a character based on the current loop number (i) using charAt function
    //(The value of i is 1 b/c adding 1 to i on line 50, then next pass, i=2...next pass, i=3)
    var character = stringToTest.charAt(i);
    
    // Add a 1 to the counter (i).
    i = i +1;

    // Console log the current value of character.
    console.log(character);

    // Test to see if the loop is longer than the length of string, and stop the loop if it is.
    if (i >= lengthOfString) {
        loopContinue = false;
    }

    // After running the code check loopContinue to see if we should run this loop again.
} while ( loopContinue );



// OJO: ORDER DOES MATTER IN LOGIC!!! <--- move the i=i +1; AFTER var character = stringToTest.charAt(i) and BEDFORE console.log(character) the T will appear in the Debug Console.




