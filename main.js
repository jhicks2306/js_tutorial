let Phrase = require("palindrome-detector-jhicks2306");

let string = prompt("Please enter a string for palindrome testing");
let phrase = new Phrase(string);

if (phrase.palindrome()) {
  alert('"${phrase.content}" is a palindrome!');
} else {
  alert('"${phrase.content} is not a palindrome.');
}
