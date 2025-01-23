const palindromes = function (inputString) {
    let isPalindrome = true;
    const possibleCharacters = "azertyuiopqsdfghjklmwxcvbn0123456789";
    let string = inputString
        .toLowerCase()
        .split('')
        .filter(char => possibleCharacters.includes(char));

    for(let i = 1 ; i <= string.length / 2 ; i++) {
        if(string[i - 1] !== string[string.length - i]) {
            isPalindrome = false;
            break;
        }
    }
    
    return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
