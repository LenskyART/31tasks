/**
 * Напишите функцию flatten(array) которая делает вложенный массив плоским
 *
 * Пример:
 *
 * flatten([1, [2, 3]]) === [1, 2, 3]
 * flatten([1, [2, [3, 4]]]) === [1, 2, 3, 4]
 *
 * @param {Array.<number|[]>} array
 * @returns {number[]}
 */
function flatten(array) {

    let result = []
    function flat(arr) {
        if (typeof array === 'number') return [arr]
        for (let el of arr) {
            if (el.constructor === Array) {
                flat(el)
            } else {
                result.push(el)
            }
        }
    }
    flat(array)

    return result
}

flatten([1, [2, [3, 4]]]) //=== [1, 2, 3, 4]

module.exports = flatten;
