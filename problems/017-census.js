/**
 * В доме решили провести перепись всех жильцов и составили список,
 * в котором указали возраст и пол каждого жильца.
 *
 * Напишите функцию census(list) возвращающую номер в списке самого старшего жителя мужского пола.
 *
 * Пример:
 *
 * census([{ age: 12, gender: 'Male' }, { age: 40, gender: 'Male' }]) === 2
 * census([{ age: 40, gender: 'Female' }]) === undefined
 *
 * @param {{age: number, gender: string}[]} list
 * @returns {undefined|number}
 */
function census(list) {
    let result = {age: -1, gender: ''}
    for (let human of list) {
        if (human.gender === 'Male' && human.age > result.age) result = human
    }
    if (result.age === -1) return undefined

    return list.indexOf(result) + 1
}

census([{ age: 12, gender: 'Male' }, { age: 40, gender: 'Male' }])
census([{ age: 40, gender: 'Female' }])

module.exports = census;
