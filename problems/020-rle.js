/**
 * Напишите функцию rle(value) реализующую алгоритм сжатия строки.
 *
 * Пример:
 *
 * rle('AAABC') === '3ABC'
 * rle('AAAaaB') === '3A2aB'
 *
 * @param {string} value
 * @returns {string}
 */
function rle(value) {
    let arr = []
    for (let letter of value) {
        arr.push(letter)
    }
    arr.push(' ')

    let index = 0
    let preLetter = ''
    let result = ''
    for (let i = 0; i < arr.length; i++) {
        if (preLetter === arr[i]) {
            index++
        } else if (index !== 0) {
            result += (index + 1).toString() + preLetter
            index = 0
        } else {
            result += preLetter
        }
        preLetter = arr[i]
    }

    return result
}

rle('AAABC')
// rle('AAAaaB')

module.exports = rle;
