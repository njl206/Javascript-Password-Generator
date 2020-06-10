function generatePassword () {
    var characterLength = 0;
    while (characterLength < 8 || characterLength > 128 || isNaN(characterLength)) {
        characterLength = parseInt (
            prompt ("how long would you like your password to be?")
        )
    }
    var lowerCase = confirm (
        "would you like your password to contain lowercase characters?"
    )

    var upperCase = confirm (
        "would you like your password to contain uppercase characters?"
    )

    var numbers = confirm (
        "would you like your password to contain numbers?"
    )

    var specialCharacters = confirm (
        "would you like your password to contain special characters?"
    )
    
    var lowerCharset = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upperCharset = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var numberset = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var specialCharset = ["!", "@", "#", "$", "%", "&", "*"];
    var optionsArray = []
    var passwordArray = []


    if (lowerCase === true) {
        optionsArray.concat(lowerCharset)
        passwordArray.push(randomGenerator(lowerCharset))
    }

    if (upperCharset === true) {
        optionsArray.concat(upperCharset)
        passwordArray.push(randomGenerator(upperCharset))
    }

    if (numberset === true) {
        optionsArray.concat(numberset)
        passwordArray.push(randomGenerator(numberset))
    }

    if (specialCharset === true) {
        optionsArray.concat(specialCharset)
        passwordArray.push(randomGenerator(specialCharset))
    }
    for(var i = passwordArray.length +1; i <= characterLength; i++) {
        passwordArray.push(randomGenerator(optionsArray))
    }
    return passwordArray.join("")
} 

function randomGenerator(characterArray){
    var randomIndex = Math.floor(Math.random() * characterArray.length)
    var randomCharacter = characterArray[randomIndex]
    return randomCharacter;
}

generatePassword()