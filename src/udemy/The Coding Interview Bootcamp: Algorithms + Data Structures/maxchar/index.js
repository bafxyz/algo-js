// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    // 1. -------------------
    const chars = {}
    let max = 1
    let maxChar = str[0]

    for (const char of str) {
        chars[char] ? chars[char]++ : (chars[char] = 1)
    }

    for (const [char, value] of Object.entries(chars)) {
        if (max < value) {
            max = value
            maxChar = char
        }
    }

    return maxChar

    // 2. -------------------
    // const array = []

    // for (let char of str) {
    //     const itemIndex = array.findIndex(item => item[char])

    //     if (itemIndex !== -1) {
    //         const key = Object.keys(array[itemIndex])
    //         array[itemIndex][key] = array[itemIndex][key] + 1
    //     } else {
    //         array.push({ [char]: 1 })
    //     }
    // }

    // const sorted = array.sort((a, b) => Object.values(b)[0] - Object.values(a)[0])

    // return Object.keys(sorted[0])[0]
}

module.exports = maxChar
