// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

const reverse = str => {
    // 1. -------------------
    const reversed = [...str].reverse().join('')

    // 2. -------------------
    // const reversed = str.split('').reverse().join('')

    // 3. -------------------
    // const reversed = [...str].reduce((acc, char) => char + acc, '')

    // 4. -------------------
    // let reversed = ''

    // for (const char of str) {
    //     reversed = char + reversed
    // }

    // 5. -------------------
    // let reversed = ''

    // for (let char of str) {
    //     reversed = char + reversed
    // }

    // 6. -------------------
    // const arr = []

    // for (let char of str) {
    //     arr.push(char)
    // }

    // let reversed = ''

    // for (let i = 0; i < str.length; i++) {
    //     reversed += arr.pop()
    // }

    return reversed
}

module.exports = reverse
