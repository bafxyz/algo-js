// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    // 1. -------------------
    return Math.sign(n) * parseInt([...n.toString()].reverse().join(''))

    // 2. -------------------
    // const reverse = Array.from(String(Math.abs(n)))
    //     .reverse()
    //     .join('')

    // return Math.sign(n) === -1 ? -1 * Number(reverse) : Number(reverse.replace(RegExp(/^0+/gm), ''))
}

module.exports = reverseInt
