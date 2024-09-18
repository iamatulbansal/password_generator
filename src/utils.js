function passwordGenerator(
    passwordLength,
    includeUpperCase,
    includeLowerCase,
    includeNumber,
    includeSymbol
  ) {
    const numbers = '123456789';
    const symbols = '!@#$%^&*()_+';
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  
    let characters = '';
  
    if (includeUpperCase) {
      characters += upperCaseLetters;
    }
    if (includeLowerCase) {
      characters += lowerCaseLetters;
    }
    if (includeNumber) {
      characters += numbers;
    }
    if (includeSymbol) {
      characters += symbols;
    }
  
    if (!passwordLength || passwordLength <= 0) {
      console.log('Please enter a valid password length.');
      return '';
    }
  
    let password = '';
    for (let i = 0; i < passwordLength; i++) {
      password += characters[Math.floor(Math.random() * characters.length)];
    }
  
    return password;
  }
  
  export { passwordGenerator };
  