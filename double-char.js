// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

// my solution
// didn't solve

// other solutions
function doubleChar(str) {
  // Your code here
  return str.split("").map( c => c + c ).join("")
}
// .split("") returns the string as an array with each letter making up the contents
// .map takes in each element('c' or each character) and returns the c + c (or the same character twice) and does that for each element in the array
// .join("") combines the elements of the array into a string