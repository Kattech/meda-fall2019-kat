// A sample do while Loop that will run 11x.
/* 3 parts: 
    - initialize counter variable for Loop.
    - Create variable for the condition
    -idterator, change something to modiy the condition
*/

// Initialize counter variable for Loop
var counter= 0;

// Create a variable for the condition
var continueLoop = true;

do {
    console.log("Loop number for Do While Loop: " + counter);
    // Iterator, change something to modify the condition
    counter = counter + 1;

    if (counter > 10) {
        continueLoop = false;
    }
    // Iterator End. 
   


} while (continueLoop);



// A sample *** FOR LOOP *** that will run 10x
//syntax: for (Initialization; Condition; Iteration) { Code Block}
// Runs 45x and says: "Hello" to the terminal
for (var counter = 0; counter < 10; counter =counter + 1 ) {
    console.log("Loop number for Do While Loop: " + counter);
}



//BIG DIFFERENCE BETWEEN THESE TWO LOOPS IS HOW MANY TIMES THEY WILL RUN. 
// NOTE THE FIRST EXAMPLE do while WILL RUN 0-10, AND THE for loop WILL RUN 0-9