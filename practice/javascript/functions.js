// FUNCTION SYNTAX
//  start with keyword: function
//  function myFunction
// always use () immediately after the function name with No Space
//  function myFunction() {}
// function keyword + function name + parenthesis + code block
// specific task to run when you call a function, you run a set of actions. NOT VALUES. VALUES are vars
// ex: 

var number = 10;

function myFunction() {

    console.log("This is line 1.");
    console.log("This is line 2.");
    console.log("This is line 3.");
    
}
myFunction();



// Create a fx that consolelogs 4 things: division, mutiplication, addition and subtraction and console log the value of it.

var number = 2;
// Call the fx: (spits out the math in the console)
mathFunctions()

// parameters variable specifically used in the function


// Defining the fx:
function mathFunctions() {
    console.log(2*2);
    console.log(2/2);
    console.log(2+2);
    console.log(2-2);
}

mathify(100);
mathify(1000);




function mathify( firstNumber ){
    console.log(firstNumber +1);
    console.log(firstNumber -1);
    console.log(firstNumber +1);
    console.log(firstNumber +1);


}
