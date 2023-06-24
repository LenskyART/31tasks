/**
 * С числами Фибоначчи мы уже познакомились в прошлой задаче.
 *
 * Напишите функцию isFibonacci(value) которая определяет, является ли value числом Фибоначчи.
 *
 * Пример:
 *
 * isFibonacci(1) === 1
 * isFibonacci(2) === 3
 * isFibonacci(55) === 10
 * isFibonacci(52) === undefined
 *
 * @param {number} value
 * @returns {undefined|number}
 */
function isFibonacci(value) {
    if (value === 0) return value
    let index = 0
    let currentValue = 0
    let nextValue = 1

    function goFibonacci() {
        let a = nextValue
        nextValue += currentValue
        currentValue = a
        if (currentValue > value) {
            index = undefined
            return
        }
        index++
        if (currentValue < value) goFibonacci()
    }
    goFibonacci()

    return index
}

module.exports = isFibonacci;
