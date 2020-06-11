// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword(){
var specialChars =[]

//arrays of uppercase and lowercase letters

var posibbleCharacters=[]

//Create generatePassword
//Prompt user for password length
var pwLength = prompt("How many characters in your password")
console.log(pwLength)
  //store password length in variable

//confirm whether user wants special characters
  //store in includeSpecial
var includeSpecial = confirm("Would you like to use special characters")
console.log(includeSpecial)
//confirm if the user wants numbers
  //store in includenumber
var includeNumber = confirm("Would you like to use numbers?")
  console.log(includeNumber)

//confirm whether user wants lowercase
  // store in includeLower
var includeLower = confirm("Would you like to use lowercase letters?")
  console.log(includeLower)

//confirm whether user wants uppercase
  // store in includeUpper
var includeUpper = confirm("Would you like to include uppercase letters?")
  console.log(includeUpper)
//if character Boolean is true, add that array to the possible characters array
//

//then when we have completed possibleCharacters array, build the new password array
//
//

var passwordStr=pwLength

return passwordStr
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
