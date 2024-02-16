// Assignment code here

// Enable the password length slider.
var lengthSlider = document.getElementById("password-length");
var lengthValue = document.getElementById("selected-password-length")
lengthSlider.value = 16;
lengthValue.innerHTML = lengthSlider.value;
lengthSlider.oninput = function () {
  lengthValue.innerHTML = this.value;
}

function CheckUncheck(something) {
  switch (something) {
    case "lowercase":
      console.log("lowercase");
      break;
    case "uppercase":
      console.log("UPPERCASE");
      break;
    case "numbers":
      console.log("nuMBERS");
      break;
    case "special":
      console.log("(!#*%&(*%&@#$(*&)))");
      break;
    default:
      console.log("BAD BAD BIG UH OH")
  }
}

// The final result comes outta here.
function generatePassword() {

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
