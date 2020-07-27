// During a click, a password will be generated
var generateBtn = document.querySelector("#generate");

// const letters = (() => {
//   const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
//   return caps.concat(caps.map(letter => letter.toLowerCase()));
// })();
// array of possible password characters
var userChoices = [];
// Array of actual character possibilities
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", "/", ":", "*", "?", ".", "<", ">", "|"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


// Display password in the screenS
function generatePassword(){
// User presented with a series of prompts for password criteria to select preferred criteria
// Prompt length of password
var validInputLength = false;
while (!validInputLength) {
// Prompt user to input a letter
var inputLength = prompt("How long do you want your password to be? Type a number between 8-128"); 
var pLength = parseInt(inputLength);
// Confirm if it was between 8-128 - alert if it does not.
if (pLength > 7 && pLength < 129) {
  validInputLength = true;
} else {
alert("Please select a number between 8-128.");
}
}

var validCharacterInput = false;
// Confirm that at least one character type selected
while (!validCharacterInput) {
var userLowerCase = confirm("Do you want lower case characters in your password?");
var userUpperCase = confirm("Do you want upper case characters in your password?");
var userSpecial = confirm("Do you want special characters in your password?");
var userNumeric = confirm("Do you want numeric case characters in your password?");
// Prompt to include lowercase
// Prompt to include uppercase
// Prompt to include numeric
// Prompt to include special characters
if (userLowerCase) {
    userChoices = userChoices.concat(lowerCase);
  } 
  if (userUpperCase) {
    userChoices = userChoices.concat(upperCase);
  } 
  if (userSpecial) {
    userChoices = userChoices.concat(special);
  } 
  if (userNumeric) {
    userChoices = userChoices.concat(numeric);
  } 
  if (userChoices.length === 0) {
    // Confirm that there was a valid input (should be not equal to false) - use potential else if
    alert("You must select at least one type of character.")
  } else {
    validCharacterInput = true;
  }
}
// THEN a password is generated that matches the selected criteria

var charactersSelected = [];
  if (userLowerCase) {
    charactersSelected.push("lowerCase")
  }
  if (userLowerCase) {
    charactersSelected.push("upperCase")
  }
  if (userLowerCase) {
    charactersSelected.push("special")
  }
  if (userLowerCase) {
    charactersSelected.push("numeric")
  }
//      alert the characters selected
  alert(`The user wants the password to contain ${charactersSelected.join(", ")} characters.`);
var password = [];
  for (var i = 0; i < pLength; i++){
    var randomIndex = Math.floor(Math.random() * userChoices.length)
    password.push(userChoices[randomIndex])
  }
  return password.join("");
} 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// If possible, create an easy to read password - omit characters that are too similar
// If possible, create a password seed - for seed passwords
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);