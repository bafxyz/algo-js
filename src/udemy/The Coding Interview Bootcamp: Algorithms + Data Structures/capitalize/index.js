// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let capitalised = [...str]
        .map((char, i) => (i === 0 ? char.toUpperCase() : str[i - 1] === ' ' ? str[i].toUpperCase() : char))
        .join('')
    return capitalised
}

// function capitalize(str) {
//     return [...str].reduce(
//         (acc, curr, i) => ((acc += str.charAt(i - 1) === ' ' || i === 0 ? curr.toUpperCase() : curr), acc),
//         ''
//     )
// }

// function capitalize(str) {
//     return str
//         .split(' ')
//         .map(word => word.replace(/^[a-z]/, word[0].toUpperCase()))
//         .join(' ')
// }

capitalize('look, it is working!')

module.exports = capitalize
