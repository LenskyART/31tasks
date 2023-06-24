/**
 * Известны результаты каждой из 4х четвертей баскетбольной встречи.
 * Нужно определить победителя матча. Побеждает команда,
 * набравшая больше очков в течение всего матча.
 *
 * Напишите функцию getWinner(points) возвращающую номер победившей команды,
 * либо undefined в случае ничьей.
 *
 * Пример:

 * getWinner(['23-26', '24-30', '30-27', '35-31']) === 2
 * getWinner(['36-32', '32-24', '20-28', '30-26']) === 1
 * getWinner(['36-18', '22-31', '27-21', '19-34']) === undefined
 *
 * @param {string[]} points
 * @returns {(number|undefined)}
 */
function getWinner(points) {
    let pointsArr = points.map(el => el.split('-'))
    let numPointsArr = pointsArr.map(part => part.map(team => +team))

    console.log(numPointsArr)

    let counter = 0
    for (let part of numPointsArr) {
        if (part[0] > part[1]) counter++
        if (part[0] < part[1]) counter--
    }

    console.log(counter)
    return (counter === 0) ? undefined :
        (counter < 0) ? 2 :
        (counter > 0) ? 1 : 'error'
}

module.exports = getWinner;
