// Assignment code here
var numericalChar = "0123456789";
var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChar = "<,>.?/:;'{[}]|\+=_-)(*&^%$#@!~`";
// Create a series of prompts for password criteria
// Create a prompt for the length of the password
//  * length of at least 8 characters and no more than 128
//  * Asked for character types
//  * Confirm whether or not to include lowercase, uppercase, numeric and/or special characters ( create a if/else)


var generatePassword = function () {
// create two new variable for this prompt
var passPharse = "";
var randomChar = "";
  // create prompt asking user to choice password length
  var  randomLength = window.prompt("How many characters would you like your password to be? Password must be between 8-128 characters.");
  randomLength = parseInt(randomLength);

  // if password length is less than 8 characters alert user to choose again
  if ( randomLength < 8) {
    window.alert("Password length must be more than 8 characters. Please try again!");
    return generatePassword();
  }
  
  // if password length is more than 128 characters alert user to choose again 

  if ( randomLength > 128) {
    window.alert("Password length must be less than 128 characters. Please try again!");
    return generatePassword ();
  }

  if(!randomLength) {window.alert("Please enter a valid response!");
return generatePassword();
}

  console.log(randomLength);

// create confirm numbers in the password "yes or no"
// create a new variable for this prompt
var numberChoice = window.confirm("Would you like the password to contain numbers?");
if(numberChoice)
  { randomChar += numericalChar;
  }
console.log(numberChoice);

// create confirm lowercase letters in the password "yes or no"
// create a new variable for this prompt
var lowerCaseChoice = window.confirm("Would you like the password to contain lowercase letters?");
    // create a 
    if(lowerCaseChoice)
    {randomChar += lowerCaseChar;}

    console.log(lowerCaseChoice);

// create confirm uppercase letters in the password "yes or no"
// create a new variable for this prompt
var upperCaseChoice = window.confirm("Would you like the password to contain uppercase letters?");
    
     if(upperCaseChoice){randomChar += upperCaseChar;}

     console.log(upperCaseChoice);

    // create confirm special characters in the password "yes or no"    
    // create a new variable for the prompt
    var specialCharChoice = window.confirm("Would you like the password to contain special characters?");
    // create a 
    if(specialCharChoice){randomChar += specialChar;}


  for (var i = 0; i < randomLength; i++) {
    passPharse = randomChar [Math.floor(Math.random() * randomChar.length)];
    // this is where the problem is. Can't get the variable to display the password. It just displays the number of characters
} 
  
  debugger;

  };


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
console.log(writePassword);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
