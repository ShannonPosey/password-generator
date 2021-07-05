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
// create two new variable for this prompt
var randomPassword = "";
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
var lowercaseChoice = window.confirm("Would you like the password to contain lowercase letters?");
    // create a 
    if(lowercaseChoice)
    {randomChar += lowercaseChar;}

    console.log(lowercaseChoice);

// create confirm uppercase letters in the password "yes or no"
// create a new variable for this prompt
var uppercaseChoice = window.confirm("Would you like the password to contain uppercase letters?");
    
     if(uppercaseChoice){randomChar += uppercaseChar;}

     console.log(uppercaseChoice);

    // create confirm special characters in the password "yes or no"    
    // create a new variable for the prompt
    var specialCharChoice = window.confirm("Would you like the password to contain special characters?");
    // create a 
    if(specialCharChoice){randomChar += specialChar;}

debugger;
  for (var i = 0; i < randomLength; i++) {
    randomPassword = randomChar (Math.floor(Math.random() * randomChar.length));
  } 
  
  };


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(randomPassword) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  return("");

}

console.log(writePassword);














// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
