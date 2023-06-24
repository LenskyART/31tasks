/**
 * Строка со скобками считается валидной, если на каждую закрывающую скобку имеется ранее открытая
 * и на каждую ранее открытую имеется закрывающая.
 *
 * Напишите функцию parentheses(value) проверяющую строку со скобками на валидность.
 *
 * Пример:
 *
 * parentheses('') === false
 * parentheses('()()') === true
 * parentheses('(()())') === true
 * parentheses('(()') === false
 * parentheses(')') === false
 *
 * @param {string} value
 * @returns {boolean}
 */
function parentheses(value) {
    if (!value) return false

    let open = 0
    for (let letter of value) {
        if (letter === '(') open++
        if (letter === ')') open--
        if (open < 0) return false
    }

    console.log(open)
    return (!open)
}

parentheses('())(')

module.exports = parentheses;
