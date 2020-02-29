// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwordLength = prompt("How long would you like your password to be? (Must be between 8 and 128 characters)");
  while (parseInt(passwordLength) < 8 || parseInt(passwordLength) > 128 || isNaN(passwordLength)) {
    passwordLength = prompt("Length must be a number between 8 and 128 characters.");
  }
  var characters = [];
  while (characters.length === 0) {
    var lower = confirm("Would you like lowercase characters?");
    if (lower) {
      characters.push("lowercase");
    }
    var upper = confirm("Would you like uppercase characters?");
    if (upper) {
      characters.push("uppercase");
    }
    var num = confirm("Would you like numeric characters?");
    if (num) {
      characters.push("numeric");
    }
    var special = confirm("would you like special characters?");
    if (special) {
      characters.push("special characters");
    }
    if (characters.length === 0) {
      alert("Must choose at least one character type.");
    }
  }

  var letters = "abcdefghijklmnopqrstuvwxyz";
  var special = "!@#$%^&*()_-+=/\'?:,{}[]~.";
  var password = "";

  for (var i = 0; i <= passwordLength; i++) {
    var type = Math.floor(Math.random() * characters.length);
    var toAdd = "";
    if (characters[type] === "uppercase" || characters[type] === "lowercase") {
      toAdd = letters[Math.floor(Math.random() * letters.length)];
      if (characters[type] === "uppercase") {
        toAdd = toAdd.toUpperCase();
      }
    }
    else if (characters[type] === "numeric") {
      toAdd = Math.floor(Math.random() * 10);
    }
    else if (characters[type] === "special characters") {
      toAdd = special[Math.floor(Math.random() * special.length)];
    }
    password += toAdd;
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
