// Assignment code here

// Enable the password length slider.
var lengthSlider = document.getElementById("password-length");
var lengthValue = document.getElementById("selected-password-length")
lengthSlider.value = 16;
lengthValue.innerHTML = lengthSlider.value;
lengthSlider.oninput = function () {
  lengthValue.innerHTML = this.value;
}

// The final result comes outta here.
function generatePassword() {
  // If the options aren't visible yet, reveal!!
  document.getElementById("password-gen-options").removeAttribute("hidden");
  // Check the booleans for each checkbox
  isLowercaseChecked = document.getElementById('use-lowercase').checked;
  isUppercaseChecked = document.getElementById('use-uppercase').checked;
  isNumbersChecked = document.getElementById('use-numbers').checked;
  isSpecialCharsChecked = document.getElementById('use-special-chars').checked;

  // If there aren't any checked boxes, disable the button and reveal the warning!
  if (!isLowercaseChecked && !isUppercaseChecked && !isNumbersChecked && !isSpecialCharsChecked) {
    document.getElementById("generate").disabled = true;
    document.getElementById("hidden-warning-text").removeAttribute("hidden");
    return "";
  }
  // Ensure the generate button is enabled, and the warning is hidden
  document.getElementById("generate").disabled = false;
  document.getElementById("hidden-warning-text").setAttribute("hidden", "hidden");

  // Use the bools to create a list of valid characters.
  charactersToUse = "";
  if (isLowercaseChecked) {
    charactersToUse += "abcdefghijklmnopqrstuvwxyz";
  }
  if (isUppercaseChecked) {
    charactersToUse += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (isNumbersChecked) {
    charactersToUse += "0123456789";
  }
  if (isSpecialCharsChecked) {
    charactersToUse += "!@#%^&*-_.?";
  }

  // Loop PASSWORD_LENGTH times, randomly selecting selected characters.
  output = "";
  var passLength = document.getElementById("password-length").value;
  var i = 0;
  for (var i = 0; i < passLength; i++) {
    output += charactersToUse.charAt(Math.floor(Math.random() * charactersToUse.length));
  }

  return output;
}

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
