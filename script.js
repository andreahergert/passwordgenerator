// Assignment Code
var generateBtn = document.querySelector("#generate");



// Created function for generatePassword
function generatePassword() {

  var userInput = window.prompt("How long do you want you password to be? This can be from 8-128 characters long.")

  var passwordLength = parseInt(userInput)

  // if varifies if user put in a number
  if (isNaN(passwordLength)) {
    window.alert("This is not a number!")
    return
  }

  // if verifies if user put in a number between 8-128
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length must be between 8 and 128 characters")
    return
  }

  // Asks user to confirm in prompt is they want numbers, symbols, lowercase, or uppercase letters
  var userWantsNumbers = window.confirm("Would you like to include numbers in your password?")
  var userWantsSymbols = window.confirm("Would you like to include symbols in your password?")
  var userWantsLowercase = window.confirm("Would you like to include lowercase letters in your password?")
  var userWantsUppercase = window.confirm("Would you like to include uppercase letters in your password?")

  // var arrays of numbers, symbols, lowercase, and uppercase letters
  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var symbolList = ["!", "#", "$", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  // var with if statements below creates a list of the number, symbol, and lowercase and uppercase letters
  var optionsList = []

  if (userWantsNumbers === true) {
    optionsList.push(numberList)
  }

  if (userWantsSymbols === true) {
    optionsList.push(symbolList)
  }

  if (userWantsLowercase === true) {
    optionsList.push(lowercaseList)
  }

  if (userWantsUppercase === true) {
    optionsList.push(uppercaseList)
  }

  // 
  if (optionsList.length === 0) {
    optionsList.push(symbolList)
  }

  // var with empty string for the for loop below should return the generatedPassword in return generatedPassword
  var generatedPassword = ""

  // generating random list from array of letters, numbers, and symbols with the getRandomItem options function 
  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(optionsList)
    var randomChar = getRandomItem(randomList)
    generatedPassword += randomChar
  }

  return generatedPassword
}

// specifies range of randomInt
function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min * (1 - rand) + rand * max)
}

function getRandomItem(list) {
  return list[randomInt(list.length)]
}

// Writes password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);