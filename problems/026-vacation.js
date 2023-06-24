/**
 * Лена планирует свой двухнедельный отпуск.
 *
 * Напишите функцию vacation(date) вычисляющую день следующий за отпуском Лены
 *
 * Примечание: вместо ручного подсчета используй класс Date и его методы
 *
 * Пример:
 *
 * vacation('01.01.2020') === '15.01.2020'
 * vacation('27.01.2020') === '10.02.2020'
 *
 * @param {string} date
 * @returns {string}
 */
function vacation(date) {
    let revers = date.split('.').reverse().join('-')
    let today = new Date(revers)
    today.setDate(today.getDate() + 14)
    let vacation = ''
    if (today.getDate() < 10) {
        vacation += '0'
    }
    vacation += today.getDate() + '.'
    if (today.getMonth() < 9) {
        vacation += '0'
    }
    vacation += (today.getMonth() + 1)
    vacation += '.' + today.getFullYear()
    return vacation
}


module.exports = vacation;
