var myVariable = "One thing at a time";

myVariable = "This is a new value";

var firstDay = "Monday";
var secondDay = "Tuesday";
//...

                    // Elements of the Array starting the index at 0
//Array Syntax: [ firstValue, secondValue, thirdValue ]
var weekNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


// Call the whole array and senf it ti the console.
console.log(weekNames);


//Call the second value of the array, and send to the console.
console.log(weekNames[1] );


console.log(weekNames[4]);

// Array Methods/Functions

//TO ADD ELEMENTS (things) to the end of the array: .push();
weekNames.push("Superday"); 

console.log(weekNames);

weekNames.push("Funday");
console.log(weekNames);

//TO REMOVE AN ELEMENT AT THE START OF THE ARRAY: .shift();
//lop off the first in this array, In this case: lop off Monday
weekNames.shift();
console.log(weekNames);

//continue to .shift(); and now remove Tuesday b/c Monday was already gone
weekNames.shift();
console.log(weekNames);

//TO RESTORE AN ARRAY USING ARRAY METHODS:
//****KIM that .push() and .unshift() NEED ARGUMENTS IN THE PARENTHSIS */
//since our weeknames now starts at Wednesday, you need to .unshift(); Tuesday and then .unshift(); Monday
weekNames.unshift("Tuesday");
weekNames.unshift("Monday");
// can also do both at the same time:
//weekNames.unshift("Monday", "Tuesday");

//TO REMOVE FROM THE END:
weekNames.pop();
weekNames.pop();

console.log(weekNames);

//CLASS CHALLENGE: move "Sunday" to the beginning of the array w/o writing any strings in your code.
//NOTE: .pop will return the value it removed aka the last item
// CREATE a variable that equates weekNames.pop();
var day = weekNames.pop();

weekNames.unshift(day);

console.log(weekNames);

//TO WRITE THE SOLUTION ON ONE LINE- advanced- but don't write this way
weekNames.unshift( weekNames.pop() );

