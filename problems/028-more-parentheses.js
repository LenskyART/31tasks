/**
 * Ранее мы уже решали задачу валидации последовательности скобок в строке.
 *
 * На этот раз напишите функцию parentheses(value) валидирующую строку с несколькими типами скобок.
 *
 * Пример:
 *
 * parentheses('<>') === true
 * parentheses('<}') === false
 *
 * @param {string} value – строка из набора символов (, ), {, }, <, >.
 * @returns {boolean}
 */
function parentheses(value) {
    if (!value) return false

    let open1 = 0
    for (let letter of value) {
        if (letter === '(') open1++
        if (letter === ')') open1--
        if (open1 < 0) return false
    }

    let open2 = 0
    for (let letter of value) {
        if (letter === '{') open2++
        if (letter === '}') open2--
        if (open2 < 0) return false
    }

    let open3 = 0
    for (let letter of value) {
        if (letter === '<') open3++
        if (letter === '>') open3--
        if (open3 < 0) return false
    }


    return (!open2 && !open1 && !open3)
}

module.exports = parentheses;
