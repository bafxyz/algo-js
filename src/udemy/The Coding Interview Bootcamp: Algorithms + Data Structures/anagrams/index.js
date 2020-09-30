// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const ignore = [',', "'", '!', ' ']

    const stringASimplified = stringA
        .split('')
        .filter(char => !ignore.includes(char))
        .sort()
        .join('')
        .toLowerCase()
    const stringBSimplified = stringB
        .split('')
        .filter(char => !ignore.includes(char))
        .sort()
        .join('')
        .toLowerCase()

    return stringASimplified === stringBSimplified
}

// function anagrams(stringA, stringB) {
//     const pattern = RegExp(/[^\w]/g)
//     const stringACleaned = stringA
//         .replace(pattern, '')
//         .trim()
//         .Array.from(stringA.toLowerCase())
//         .filter(char => !ignore.includes(char))
//         .sort()
//         .join('')

//     const stringBCleaned = Array.from(stringB.toLowerCase())
//         .filter(char => !ignore.includes(char))
//         .sort()
//         .join('')

//     return stringACleaned === stringBCleaned
// }

// function anagrams(stringA, stringB) {
//     const ignore = [' ', '.', ',', '!', '?']
//     const stringACleaned = Array.from(stringA.toLowerCase())
//         .filter(char => !ignore.includes(char))
//         .sort()
//         .join('')

//     const stringBCleaned = Array.from(stringB.toLowerCase())
//         .filter(char => !ignore.includes(char))
//         .sort()
//         .join('')

//     return stringACleaned === stringBCleaned
// }

anagrams('rail safety', 'fairy tales')

module.exports = anagrams
