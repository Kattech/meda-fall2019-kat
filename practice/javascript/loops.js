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

// STEP 2: Write out the Do while loop 
do {
    //STEP 4: Grab the value of counter (after the =), then add a 1 to it, finally store the results back into counter (before the =).
   counter = counter + 1; // counter++


   console.log("The value of counter is: " + counter);
   if (counter > 50) { //it will stop at 51st loop. It runs in the console 51 times
    aVariable = false;
   }

} while ( aVariable );
// STEP 5: run the debug console to see the counter...


// 


