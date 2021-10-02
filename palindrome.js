// Reverses a string.
function reverse(string) {
  return Array.from(string).reverse().join("");
}

// Returns true for a palindrome, false otherwise
function palindrome(string) {
  let processedContent = string.toLowerCase();
  return processedContent === reverse(processedContent);
}

//Returns parts of an email.
function emailParts(email) {
  let processedContent = email.toLowerCase();
  return processedContent.split(/(?=@)/g)
}
