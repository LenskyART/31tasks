/**
 * Уставшие от необычно теплой зимы, жители решили узнать,
 * действительно ли это самая длинная оттепель за всю историю наблюдений за погодой.
 * Они обратились к синоптикам, а те, в свою очередь,
 * занялись исследованиями статистики за прошлые годы.
 * Их интересует, сколько дней длилась самая длинная оттепель.
 *
 * Напишите функцию getSpringMeltStreak(temperature) помогающую синоптикам вычислить самый длинный период,
 * в который среднесуточная температура ежедневно превышала 0 градусов Цельсия
 *
 * Пример:
 *
 * getSpringMeltStreak([-20, 30, -40, 50, 10, -10]) === 2
 * getSpringMeltStreak([10, 20, 30, 1, -10, 1, 2, 3]) === 4
 * getSpringMeltStreak([-10, 0, -10, 0, -10]) === 0
 *
 * @param {number[]} temperature массив чисел, где каждое – среднесуточная температура в соответствующий день
 * @returns {number}
 */
function getSpringMeltStreak(temperature) {

    let chunks = [[]]
    let i = 0

    let preTemp = 0
    for (let temp of temperature) {
        if (temp > 0) chunks[i].push(temp) //push[]
        if (temp <= 0 && preTemp > 0) {
            i++
            chunks.push([])
        }
        preTemp = temp
    }

   let lengthChunk = []
    for (let chunk of chunks) {
        lengthChunk.push(chunk.length)
    }

    return Math.max(...lengthChunk)
}

getSpringMeltStreak([-20, 30, -40, 50, 10, -10])
getSpringMeltStreak([10, 20, 30, 1, -10, 1, 2, 3])
getSpringMeltStreak([-10, 0, -10, 0, -10])

module.exports = getSpringMeltStreak;
