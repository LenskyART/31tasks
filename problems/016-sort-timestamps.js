/**
 * Напишите функцию sortTimestamps(list) сортирующую список временных моментов.
 *
 * Пример:
 *
 * sortTimestamps(['23:02:59', '02:07:00']) === ['02:07:00', '23:02:59']
 *
 * @param {string[]} list массив временных моментов представленных в виде строк в формате 'HH:MM:SS'
 * @returns {string[]} отсортированный по возрастанию массив временных моментов
 */
function sortTimestamps(list) {

    function spliceString(string, index, add) {
        return string.slice(0, index) + add + string.slice(index, string.length)
    }

    let sortNumOfStr = list.map(el => el.split(':').join('')).sort()

    console.log( sortNumOfStr.map(el => spliceString(spliceString(el, 4, ':'), 2, ':')) )

    return sortNumOfStr.map(el => spliceString(spliceString(el, 4, ':'), 2, ':'))

}

sortTimestamps(['00:00:42', '00:00:07'])


module.exports = sortTimestamps;
