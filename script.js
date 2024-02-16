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
  // Check the booleans for each checkbox
  isLowercaseChecked = document.getElementById('use-lowercase').checked;
  isUppercaseChecked = document.getElementById('use-uppercase').checked;
  isNumbersChecked = document.getElementById('use-numbers').checked;
  isSpecialCharsChecked = document.getElementById('use-special-chars').checked;

  if (!isLowercaseChecked && !isUppercaseChecked && !isNumbersChecked && !isSpecialCharsChecked) {
    // bad! no! disable the button
    console.log("Bad! No! Choose SOMETHING!")
    document.getElementById("generate").disabled = true;
    document.getElementById("hidden-warning-text").removeAttribute("hidden");
    // Then return
    return;
  }
  // Ensure the generate button is enabled
  console.log("Good, enable things.")
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

  if (charactersToUse.length === 0) {
    console.log("Wait, how'd you manage that? This felt right to include, just in case.")
    return;
  }

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
