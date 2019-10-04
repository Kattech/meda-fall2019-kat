// Create a string to play with, a counter (i), a condition to stop the loop (loopContinue), and a variable to hold the the number of characters of the string (lengthOfString)
var stringToTest = `In botany, a tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves in most species. In some usages, the definition of a tree may be narrower, including only woody plants with secondary growth, plants that are usable as lumber or plants above a specified height. In wider definitions, the taller palms, tree ferns, bananas, and bamboos are also trees. Trees are not a taxonomic group but include a variety of plant species that have independently evolved a trunk and branches as a way to tower above other plants to compete for sunlight. Trees tend to be long-lived, some reaching several thousand years old. Trees have been in existence for 370 million years. It is estimated that there are just over 3 trillion mature trees in the world.[1]

A tree typically has many secondary branches supported clear of the ground by the trunk. This trunk typically contains woody tissue for strength, and vascular tissue to carry materials from one part of the tree to another. For most trees it is surrounded by a layer of bark which serves as a protective barrier. Below the ground, the roots branch and spread out widely; they serve to anchor the tree and extract moisture and nutrients from the soil. Above ground, the branches divide into smaller branches and shoots. The shoots typically bear leaves, which capture light energy and convert it into sugars by photosynthesis, providing the food for the tree's growth and development.

Trees usually reproduce using seeds. Flowers and fruit may be present, but some trees, such as conifers, instead have pollen cones and seed cones. Palms, bananas, and bamboos also produce seeds, but tree ferns produce spores instead.
cd
Trees play a significant role in reducing erosion and moderating the climate. They remove carbon dioxide from the atmosphere and store large quantities of carbon in their tissues. Trees and forests provide a habitat for many species of animals and plants. Tropical rainforests are among the most biodiverse habitats in the world. Trees provide shade and shelter, timber for construction, fuel for cooking and heating, and fruit for food as well as having many other uses. In parts of the world, forests are shrinking as trees are cleared to increase the amount of land available for agriculture. Because of their longevity and usefulness, trees have always been revered, with sacred groves in various cultures, and they play a role in many of the world's mythologies.`;


var i = 0;
var count = 0;
var loopContinue = true;
var lengthOfString = stringToTest.length;


var characterToCheck = "s";


"hello".length;


Math.random();

do {

    // Pull a character based on the current loop number (i) using the charAt function.
    var character = stringToTest.charAt(i);
    // console.log("Grab character at index " + i + " and then store the letter " + stringToTest.charAt(i) + " inside of character variable");

    // Add a 1 to the counter (i).
    i = i + 1;
    // console.log("The loop counter was updated to " + i);

    // Console log the current value of character.
    //console.log(character);

    // Compare value of character to value of characterToCheck;

    if (character == characterToCheck) {
        // console.log("We found a match! for " + characterToCheck + "!");
        count = count + 1;
    }

    // Test to see if the loop is longer than the length of string, and stop the loop if it is.
    if (i >= lengthOfString) {
        loopContinue = false;
    }
    // After running the code check loopContinue to see if we should run this loop again.
} while ( loopContinue );

// Console log the length of String value.
// console.log("The string we are testing is: " + stringToTest);
console.log("The string has a total length of " + lengthOfString + " characters.");

if (count > 1) {
    console.log("We found " + count + " matches for the letter " + characterToCheck + ".");
} else if (count == 0) {
    console.log("We didn't find any matches for " + characterToCheck + ".");
} else {
    console.log("We found " + count + " match for the letter " + characterToCheck + ".");
    // console.log(`We found ${count} match for the letter ${characterToCheck}.`);
}
