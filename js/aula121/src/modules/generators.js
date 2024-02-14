/*
  ascii code =>  {

    numero -> 48/57
    letra Maiúscula -> 65/90
    letra Minuscula -> 97/122


  }
*/

const symbols = '{}[]!&*(@#$%)=+-_'

function rand(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

function generateRandomNumber() {
  const randomNumber = rand(48, 57)
  const randomStringNumber = String.fromCharCode(randomNumber)
  return randomStringNumber
}
function generateRandomLetterUppercase() {
  const randomNumber = rand(65, 90)
  const randomLetterUppercase = String.fromCharCode(randomNumber)
  return randomLetterUppercase
}
function generateRandomLetterLowercase() {
  const randomNumber = rand(97, 122)
  const randomLetterLowercase = String.fromCharCode(randomNumber)
  return randomLetterLowercase
}

function generateRandomSymbol() {
  const randomNumber = rand(0, symbols.length)
  const randomLetterLowercase = symbols[randomNumber]
  return randomLetterLowercase
}

export default function generateRandomPassword(
  passwordLength,
  letterUppercase,
  letterLowercase,
  numbers,
  symbols
) {
  let password = ''

  for (let i = 1; i <= passwordLength; i++) {
    letterUppercase && (password += generateRandomLetterUppercase())
    letterLowercase && (password += generateRandomLetterLowercase())
    numbers && (password += generateRandomNumber())
    symbols && (password += generateRandomSymbol())
  }
  return password.slice(0, passwordLength)
}
