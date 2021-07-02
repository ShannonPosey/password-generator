// Assignment code here
var numericalChar = "0123456789";
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChar = "<,>.?/:;'{[}]|\+=_-)(*&^%$#@!~`";
// Create a series of prompts for password criteria
// Create a prompt for the length of the password
//  * length of at least 8 characters and no more than 128
//  * Asked for character types
//  * Confirm whether or not to include lowercase, uppercase, numeric and/or special characters ( create a if/else)


var generatePassword = function () {
  // ask for user input
  var length = window.prompt("How many characters would you like your password to be? Password must be between 8-128 characters.");
  length = parseInt(length);
  if (!length){
    window.alert("You need to enter a valid answer! Please try again.");
    return(length);
  }
  console.log(length);
    window.confirm("Would you like the password to contain numbers?");
    window.confirm("Would you like the password to contain lowercase letters?");
    window.confirm("Would you like the password to contain uppercase letters?");
    window.confirm("Would you like the password to contain special characters?");
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
