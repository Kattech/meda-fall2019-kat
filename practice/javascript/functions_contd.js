// CLASS: OCT 1, 2019
// Ex of numbers
mathify (100,200);


function mathify(firstNumber, secondNumber) {

    console.log(firstNumber + secondNumber);
    console.log(firstNumber - secondNumber);
    console.log(firstNumber / secondNumber);
    console.log(firstNumber * secondNumber);
}


// Ex: of NaN answers
mathify (100);


function mathify(firstNumber, secondNumber) {

    console.log(firstNumber + secondNumber);
    console.log(firstNumber - secondNumber);
    console.log(firstNumber / secondNumber);
    console.log(firstNumber * secondNumber);
}


// Ex: of number and a string in a function
mathify (100,"cool string");


function mathify(firstNumber, secondNumber) {

    console.log(firstNumber + secondNumber);
    console.log(firstNumber - secondNumber);
    console.log(firstNumber / secondNumber);
    console.log(firstNumber * secondNumber);


}

// Ex: of Multiple () ***KIM*** to have matched pairs which are opening and closing
mathify (22,47);



function mathify(firstNumber, secondNumber) {

    console.log("The following values were generated from " + firstNumber + " and " + secondNumber);
    console.log("The sum is " + (firstNumber - secondNumber) );
    console.log(firstNumber / secondNumber);
    console.log(firstNumber * secondNumber);
}



// Ex: using multiple arguments
mathify (22,47);
mathify (222,473);
mathify (22534,443537);
mathify (2762,447);


function mathify(firstNumber, secondNumber) {

    var description = "The following values were generated from " + firstNumber + " and " + secondNumber + ".";
    console.log(description);

    // Add firstNumber value and secondNumber value and store them in the variable sum.
    var sum = firstNumber + secondNumber;

    //Concatenate first part of sentence with value of sum and store in variable sumSentence 
    var sumSentence = " The sum is: " + sum;
    // This passes sumSentence value to console.
    console.log(sumSentence);

    console.log("The following values were generated from " + firstNumber + " and " + secondNumber);
    console.log("The sum is " + (firstNumber - secondNumber) );
    console.log(firstNumber / secondNumber);
    console.log(firstNumber * secondNumber);


// Class Example:
mathify (77,99);
mathify (222,500);
mathify (4444,443537);
mathify (2762,111);

    var description = "The following values were generated from " + firstNumber + " and " + secondNumber + ".";
    console.log(description);
    console.log("The following values were generated from " + firstNumber + " and " + secondNumber);
    console.log("The sum is " + (firstNumber - secondNumber) );


    var difference = firstNumber - secondNumber;
    var differenceSentence = " The difference is: " + difference;
    console.log(differenceSentence);

    var product = firstNumber * secondNumber;
    var productSentence = " The product is: " + product;
    console.log(productSentence);

    var quotient = firstNumber / secondNumber;
    var quotientSentence = " The quotient is: " + quotient;
    console.log(quotientSentence);

}




function mathify(firstNumber, secondNumber) {

    var description = "The following values were generated from " + firstNumber + " and " + secondNumber + ".";
    console.log(description);

    // Add firstNumber value and secondNumber value and store them in the variable sum.
    var sum = firstNumber + secondNumber;

    //Concatenate first part of sentence with value of sum and store in variable sumSentence 
    var sumSentence = " The sum is: " + sum;
    // This passes sumSentence value to console.
    console.log(sumSentence);

    var difference = firstNumber - secondNumber;
    var differenceSentence = " The difference is: " + difference;
    console.log(differenceSentence);

    var product = firstNumber * secondNumber;
    var productSentence = " The product is: " + product;
    console.log(productSentence);

    var quotient = firstNumber / secondNumber;
    var quotientSentence = " The quotient is: " + quotient;
    console.log(quotientSentence);






}