/**
 * Напишите функцию getTimeDelta(x, y) определяющую,
 * сколько секунд прошло между двумя моментами времени x и y.
 *
 * Время передается в формате 'HH:MM:SS'. Минимальное значение – '00:00:00', максимальное – '23:59:59'.
 *
 * По условию x всегда меньше y.
 *
 * Пример:
 *
 * getTimeDelta('00:00:00', '00:00:01') === 1
 * getTimeDelta('01:01:01', '02:02:02') === 3661
 * getTimeDelta('01:19:30', '01:20:20') === 50
 *
 * @param {string} x
 * @param {string} y
 * @returns {number} разница между x и y в секундах
 */
function getTimeDelta(x, y) {
    let arrX = x.split(':').map(el => +el)
    let arrY = y.split(':').map(el => +el)

    let timeX = new Date()
    let timeY = new Date(timeX)

    timeX.setHours(...arrX, 0)
    timeY.setHours(...arrY, 0)

    let ms = timeY - timeX

    return ms/1000
}

module.exports = getTimeDelta;
