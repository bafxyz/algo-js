// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Downside of this solution what we are comparing the elements 2 times after the middle element.
function palindrome(str) {
    // 1. -------------------
    return [...str].every((char, index) => str[str.length - index - 1] === char)

    // 2. -------------------
    // const reversed = [...str].reduce((acc, curr) => curr + acc)
    // return str === reversed
}

module.exports = palindrome
