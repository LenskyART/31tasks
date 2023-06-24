/**
 * Счастливым билетом называют такой билет с шестизначным номером,
 * где сумма первых трех цифр равна сумме последних трех.
 *
 * Напишите функцию checkTicket(number) которая проверяет счастливость билета.
 *
 * Пример:
 *
 * checkTicket('005212') === true
 * checkTicket('133700') === true
 * checkTicket('123032') === false
 *
 * @param {string} number
 * @returns {boolean}
 */
function checkTicket(number) {
    const threeFirstNum = number.slice(0, 3).split('').reduce((acc, el) => (acc + +el),0)
    const threeLustNum = number.slice(-3).split('').reduce((acc, el) => (acc + +el),0)

    return (threeFirstNum === threeLustNum)
}

module.exports = checkTicket;
