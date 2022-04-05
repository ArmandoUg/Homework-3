// Assignment Code
var specialCharacters = [
"!",
"@",
"#",
"$",
"%",
"^",
"&",
"*",
"(",
")",
"_",
"+",
"-",
"?",
">",
"<",
"=",
"|",
"/",
"~",
"{",
"}",
"[",
"]",
];

var numbCharacters = {
  
}
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password === undefined) {
    return
  }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
