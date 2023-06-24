/**
 * Со словами-анаграммами мы познакомились в прошлой задаче.
 *
 * Напишите функцию searchAnagrams(value) возвращающую слова-анаграммы из предложения,
 * сохраняя их порядок и регистр букв
 *
 * Пример:
 *
 * searchAnagrams('Вижу апельсин значит живу. Спаниель') === 'Вижу апельсин живу Спаниель'
 *
 * @param {string} value
 * @returns {string}
 */
function searchAnagrams(value) {
    function isLetter(str) {
        return str.length === 1 && str.match(/[a-z]/i) || str.match(/[а-я]/i);
    }

    let i = 0
    let arrWithOutPoint = [[]]
    for (let letter of value) {
        if (letter === ' ') {
            i ++
            arrWithOutPoint.push([])
        }
        if (isLetter(letter)) arrWithOutPoint[i].push(letter)
    }
    let resultArr = arrWithOutPoint.map(el => el.join(''))
    let lowerCase = arrWithOutPoint.map(el => el.map(el => el.toLowerCase()))
    let arrayWithWord = lowerCase.map(el => el.sort().join(''))

    let index = []
    let word = []
    for (let i = 0; i < arrayWithWord.length; i++) {
        if (word.includes(arrayWithWord[i])) {
            index.push(word.indexOf(arrayWithWord[i]))
            index.push(i)
        }
        word.push(arrayWithWord[i])
    }
    index.sort((a, b) => a - b)

    let result = ''
    for (let num of index) {
        result += resultArr[num] + ' '
    }

    return result.slice(0, -1)
}

searchAnagrams('Вижу апельсин значит живу. Спаниель')

module.exports = searchAnagrams;
