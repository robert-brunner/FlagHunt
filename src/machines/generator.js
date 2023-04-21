// Define the URL
var url = "https://robert-brunner.github.io/RB-Airship/";

// Convert the URL to an array of characters
var urlCharacters = url.split("");

// Generate an array of 42 <!-- --> tags, one for each character in the URL
var tags = urlCharacters.map((character) => `<!--${character}-->`);

// Log the tags to the console in a nicely formatted way
console.log(`Generated ${tags.length} tags:`);
console.log("=".repeat(30));
tags.forEach((tag, index) => {
  console.log(`Tag ${index + 1}:`);
  console.log(tag);
  console.log("-".repeat(30));
});
