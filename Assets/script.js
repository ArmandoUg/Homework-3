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

var numbCharacters = [
"0",
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",  
];

var lowerCaseCharacters = [
"a",
"b",
"c",
"d",
"e",
"f",
"g",
"h",
"i",
"j",
"k",
"l",
"m",
"n",
"o",
"p",
"q",
"r",
"s",
"t",
"u",
"v",
"w",
"x",
"y",
"z",  
];

var upperCaseCharacters = [
"A",
"B",
"C",
"D",
"E",
"F",
"G",
"H",
"I",
"J",
"K",
"L",
"M",
"N",
"O",
"P",
"Q",
"R",
"S",
"T",
"U",
"V",
"W",
"X",
"Y",
"Z",  
];

let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  if (password === undefined) {
    return
  }

  passwordText.value = password;

}

function generatePassword () {
  let selectedOptions = getuserSelections()
  if (selectedOptions === undefined) {
    return
  }
  
  let { length, lowercase, uppercase, numbers, specialChars } = selectedOptions
  let possibleCharacters = [];
  let generatedPassword = "";
  
  if (lowercase) {
    possibleCharacters = possibleCharacters.concat(lowerCaseCharacters)
  }
  if (uppercase) {
    possibleCharacters = possibleCharacters.concat(upperCaseCharacters)
  }
  if (numbers) {
    possibleCharacters = possibleCharacters.concat(numbCharacters)
  }
  if (specialChars) {
    possibleCharacters = possibleCharacters.concat(specialCharacters)
  }
  
  for (i = 0; i < length + 1; i++) {
    let randomCharIndex = Math.floor(Math.random() * possibleCharacters.length)
    generatedPassword += possibleCharacters[randomCharIndex]
  }
  return generatedPassword
}


function getuserSelections() {
  let numberofChars = parseInt(prompt("How many characters would you like your password to be? Please select a number between between 9-128."))

  if (Number.isNaN(numberofChars)) {
    alert("You must enter a number.")
    return
  }
  if (numberofChars < 9) {
    alert("You must include at least 9 characters.")
    return
  } else if (numberofChars > 128) {
    alert("You may not select more than 128 characters.")
    return
  }

  let useLowerCase = confirm("Would you like this password to include lowercase letters?")
  let useUpperCase = confirm("Would you like this password to include special letters?")
  let useNumbers = confirm("Would you like this password to include numeric characters?")
  let useSpecialChars = confirm("Would you like this password to include special characters?")

  if (!useLowerCase && !useUpperCase && !useSpecialChars && !useNumbers) {
    alert("You need to select a minium of one charcter type.")
    return
  }

  let optionObj = {
    length: numberofChars,
    lowercase: useLowerCase,
    uppercase: useUpperCase,
    numbers: useNumbers,
    specialChars: useSpecialChars
  }
  return optionObj
  return useLowerCase
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
