// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

const reverse = str => str.split('').reduce((reversed, char) => char + reversed, '')

// const reverse = str => {
//     let reversed = ''

//     for (let char of str) {
//         reversed = char + reversed
//     }

//     return reversed
// }

// const reverse = str => {
//     const arr = []

//     for (let char of str) {
//         arr.push(char)
//     }

//     let result = ''

//     for (let i = 0; i < str.length; i++) {
//         result += arr.pop()
//     }

//     return result
// }

// const reverse = str => [...str].reverse().join('')
// const reverse = str => {
//     return str.split('').reverse().join('')
// }

module.exports = reverse
