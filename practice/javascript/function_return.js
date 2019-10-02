
myFunction();


function myFunction(){
    var text ="Goodbye";
    return 1000;

    console.log("results")
}

Math.random();

myFunction();
// can only return ONLY one piece of data.



// Practice: create 3 different fx ea one returns a different datatype, then console.log the results of the fx
// console log should be outside of the function

function goodbye(){
    var text= "goodbye";
    return 1000;
}


function myFunction2(){
    var text =10000;
    return text;
}

var anyName = myFunction2();
console.log(anyName);

function myFunction3(){
    var text = "hello";
    return text;
}

var word= myFunction3();
console.log(word);


// Data flow using a built-in fx.
var aNumber= 22000;
//^ no need to write out the parameter bc it is already built-in the Math.round(); function

// YOU DO NEED TO PROVIDE ARGUMENT aka provide data to the argument.
Math.round(aNumber);

// Expected result aka the answer will return a value of 22,000 
// *Don not write this in the code * Math.round() will return a value of 22000 based on line 50 and the line 50 would now look like: 22000;

            // CLASS EX: write the function and the parameters //
// *** KIM ***: arguments= given when you want to run it. assign arguments
/* For Functions:
    Returns are optional AND
            Arguments are optional too */

//STEP 1: Define the function "ourOwnRound" with a parameter of "theNumber".
function ourOwnRound(theNumber) {
    
    // STEP 2: create variable "results" with no value given to hold results, 
    var results;
    // STEP 3: using the % modulus equation, we can extra the decimal place, and stire it in decimalOfTheNumber.
    var decimalOfTheNumber = theNumber % 1;

    // STEP 4: we test the decimal value of decimalOfTheNumber and test if it is larger or smaller than .5 ...
    if (decimalOfTheNumber >= .5) {
        //... if it is larger aka TRUE, we round the original number stored in theNumber and store that in the results variable. But if it is FALSE, then we run the "else" statement
        results =Math.ceil(theNumber);
    } else {
        // ... if it is smaller, we round the original number stored in theNumber and store that in the results variable.
        results = Math.floor(theNumber);
    }

    // Return the value of results to wherever this function was called
    return results;
}

ourOwnRound (63.2938);
//^becomes 63
// OPTIONS: extra space is to show there is a fx being run in the console log
console.log (   ourOwnRound( 63.2938)   );
// OR:
var values= ourOwnRound(392.983);
console.log(values);


//Equation to figure out just the decimal value.
    //console.log( 50.39 % 1);

// when a fx doesnt return anything is gives you "UNDEFINED"

