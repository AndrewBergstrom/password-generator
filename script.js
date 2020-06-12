// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword(){

  var alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var caps =['A','B','C','D','E','F','G','H','I','J','K','L','M','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var numeric =['0','1','2','3','4','5','6','7','8','9'];
  var specialChars = ["!" , "@" , "#" , "$" , "%" , "^" , "&" , "*" , "(" , ")" , "_" , "+"];
  
  var options = [alpha, caps, numeric, specialChars]
  

//Create generatePassword
//Prompt user for password length
var pwLength = prompt("How many characters in your password")
console.log(pwLength)
  //store password length in variable

  while(pwLength <= 7 || pwLength >= 129) {
    alert("Password length must be between 8-128 characters Try again");
    var pwLength = (prompt("How many characters would you like your password to contain?"));
    } 

      alert(`Your password will have ${pwLength} characters`);

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
  while (includeSpecial === false && includeNumber === false && includeLower === false && includeUpper === false){
  alert("You must choose at least one parameter");

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
  }

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
