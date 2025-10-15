const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
    "U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
    "t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#",
    "$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 15
// select password boxes
let passwordBox1 = document.getElementById("password-box-1")
let passwordBox2 = document.getElementById("password-box-2")
// select password button
let passwordButton = document.getElementById("generate-passwords-btn")

function getRandomCharacter() {
    // select random character from array
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generateRandomPassword() {
    let randomPassword = ""
    // loop through array
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()
    }
    return randomPassword
}

const generatedPasswordOne = generateRandomPassword()
const generatedPasswordTwo = generateRandomPassword()

// test button click
passwordButton.addEventListener("click", function() {
    passwordBox1.textContent = generateRandomPassword()
    passwordBox2.textContent = generateRandomPassword()
})








