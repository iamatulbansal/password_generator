function passwordGenerator(passwordLength, isUpperCase, isLowerCase, isNumber, isSymbols) {

    let upperCaseLatter = 'ABCDEFGHIZKLMNOPQRSTUVWXYZ';
    let lowerCaseLatter = 'abcdefghizklmnopqrstuvwxyz';
    let number = 123456789;
    let symbols = "!@#$%^&*()_+";

    let character = ''
    if (isUpperCase) {
        character += upperCaseLatter;
    }
    if (isLowerCase) {
        character += lowerCaseLatter;
    }
    if (isNumber) {
        character += number;
    }
    if (isSymbols) {
        character += symbols;
    }
    if (!passwordLength) {
        alert("Please provide length of password !")
        return '';
    }
    let password = '';
    for (let i = 0; i < passwordLength; i++) {
        password += character[Math.floor(Math.random() * character.length)]
    }
    return password;

}

export { passwordGenerator };