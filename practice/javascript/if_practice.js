console.log("Hello World!");

if (true) {

    console.log("this code block ran because the condition was true");

} else {

    console.log("this code block ran because the condition was false");
}

var age = 30;

if (age >= 21) {
    console.log("you are old enough!")
} else if (age == 18) {
    console.log("you are an adolescent!");
} else {
    console.log("you are too young!");
}

// EXAMPLE OF NOT BOOLEAN
/* var age = 8;
if (age != 21) {
    console.log("you are old enough!")
} else if (age == 18) {
    console.log("you are an adolescent!");
} else {
    console.log("you are too young!");
}
*/

var age = 8;

if (age == 0) {
    console.log("Congratz on being born, life is hard, good luck!");
} else if (age >= 1) {
    console.log(" Congratz, you survived this long. You are now a toddler.");
} else if (age <= 5) {
    console.log("you are now a child!");
} else if (age <= 13) {
    console.log(" you are now a teen");
} else if (age <= 18) {
    console.log("young adult!");
} else if (age <= 26) {
    console.log("adult!");
} else if (age<= 144) {
    console.log("Elder!");
} else {
    console.log("we don't know what else");
}

// 
if () then {}
else if () then {}

if (true) then {console.log (); } 

if () then {}
else {}

if () then {}
else if () then {}
else {}


if () {}
else if () {}
// 
if () {}

if () {}
else {}

if () {}
else if () {}
else {}

// IF, ELSE IF
// if () {} else if () {}

// IF, ELSE
// if () {} else {}

// OR OPERATOR written as double pipes || ie: TO ASK MULTIPLE QUESTIONS

/* if (true || false || false || true) {
    console.log("This was true!");
} */

if ( false || false ) {
    console.log("Either was true This was true!");
}

var age2=10;

if (age2 ==5 || age2== 6) {
    console.log("you are a brat!");
}

// AND operator written as 2 && <--- BOTH SIDES MUST BE TRUE
if (true && false) {
    console.log("both of these must be true!");
}

// AND OPERATORS HAPPEN FIRST
// REVIEW TRUTH TABLES

//  && FIRST, || SECOND
if (false && true || true && true) {
    console.log("I have no clue");
}

// ****ORDER DOES MATTER!!!!** you can force order by using parathensis
if (false && (true || true) && true){
    console.log("I have no clue!");
}

var age = 8;

if (age == 0) {
    console.log("Congratz on being born, life is hard, good luck!");
} else if (age >= 0 && age < 18) {
    console.log("Kid!");
} else if (age < 17 && age <65 ) {
    console.log("Adult!");
} else if (age >64) {
    console.log("Elder!");
} else {
    console.log(" You are not born yet!");
}

// DETECTING NEGATIVE (-) OR POSITIVE NUMBER;
var numberTester = -100;

if (numberTester >= 0) {
    console.log("this number is positive");
} else if (numberTester < 0) {
    console.log("this number is a negative number!")
}


// if statements are not just for numbers, can also test letters

var testForLetterB= "h";

if (testForLetterB== "b") {
    console.log("this character is a B character!")
}

// DETECTING capital or lowercase B.
var testForLetterB= "B";

if (testForLetterB == "b" || testForLetterB == "B") {
    console.log("this character is a B character!")
}
// if you test var testForLetterB= "Bo"; it will not work

//  if ( || && ) {}
/* if you want the OR to run first wrap it in a parenthasis:
  if ((||) && ) {} */

//   TRUTHY and FALSIES
// if you don't compare values, these end up becoming BOOLEAN; TYPE COERSION


// FALSIES:
false;
0;
""; 
// "" <---is an empty string
undefined;
null;
//  null intentionally set a value to empty
NaN;
// Nan <---Not a number

// TRUTHSIES:
1;
> 0;
< 0;
// anything less that 0 is also truesie
"anything in a string";
"false" 
"0"
// ^KIM: anything in a string is true even if a "false" is in a string and even if a 0 is in a string
// see sitepoint tuthy and falsies 

var test = "0";

if (test) {
    console.log("the value of  " + test +" is truthy!");
}


var test = "- 1999999";

if (test) {
    console.log("the value of  " + test +" is truthy!");
}

var test = "0";

if (test) {
    console.log("the value of  " + test +" is truthy!");
}

var test = "null";

if (test) {
    console.log("the value of  " + test +" is truthy!");
}

// best to compare to something else
if (test) {
    console.log ("the the value of  " + test +" is truthy!");
}
console.log("My favorite Number is " + 8);
} 
// ^sting is coersed

/*
variables
datatypes
If statements, if else if else
logical operators || comparitors
AND and OR operators || && ||
Truthy and Falsey values

FUNCTIONS
CLASSES 
OBJECTS are the key for any programming 
*/
