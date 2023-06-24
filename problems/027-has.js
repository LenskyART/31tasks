/**
 * Напишите функцию has(path, object) возвращающую true, если в объекте есть свойство
 * описанное массивом path, иначе false
 *
 * Пример:
 *
 * has(['a'], { a: 1 }) === true
 * has(['b'], { a: 1 }) === false
 * has(['o', 'a'], { o: { a: 2 } }) === true
 *
 * @param {string[]} path
 * @param {object} object
 * @returns {boolean}
 */
function has(path, object) {

    let keys = []
    function allKeys(obj) {
        for (let key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                keys.push(key)
                if (typeof obj[key] === 'object') allKeys(obj[key])
            }
        }
    }
    allKeys(object)


    for (let simb of path) {
        console.log(keys.includes(simb))
        if (!keys.includes(simb)) return false
    }

    return true

}
function Foo() {}
Foo.prototype.a = 1;

// has(['a'], new Foo())

const testObject = {
    a: 1,
    o: {
        a: 2
    },
    n: null,
    'a.b.c': undefined
}
has(['a.b.c'], testObject) //true

module.exports = has;
