/**
 * Слова-анаграммы — это слова, записанные одними и теми же буквами в разном порядке,
 * регистр букв при этом игнорируется.
 * Анаграммами, например, являются слова «Волос» и «СЛОВО».
 *
 * Напишите функцию anagram(x, y) проверяющую, являются ли x и y словами-анаграммами.
 *
 * Пример:
 *
 * anagram('Волос', 'Слово') === true
 * anagram('Живу', 'Вижу') === true
 *
 * @param {string} x
 * @param {string} y
 * @returns {boolean}
 */
function anagram(x, y) {
    if (x === '' && y === '') return false
    let arr = x.toLowerCase().split('').sort()
    let arr2 = y.toLowerCase().split('').sort()
    arr = arr.join('')
    arr2 = arr2.join('')

    return (arr === arr2)
}

module.exports = anagram;
