/**
 * Сара пишет сложные клиентские приложения на ангуляре. Поэтому ей часто приходится создавать и модифицировать сервисы.
 * Сервисы могут использовать другие сервисы. Однако они не должны быть взаимозависимыми.
 *
 * Напишите функцию которая определяет есть ли цикличная зависимость между сервисами в проекте Сары.
 * Зависимости описаны объектом, ключи которого являются именами сервисов, а значения—это сервисы-зависимости.
 *
 * Пример:
 *
 * hasCircularDependency({
 *  http: [],
 *  apiClient: ['http'],
 * }) === false
 *
 * hasCircularDependency({
 *  http: ['dogsApi'],
 *  apiClient: ['http'],
 *  dogsApi: ['apiClient'],
 * }) === true
 *
 * @param {Object.<string, Array.<string>>} servicesMap
 * @returns {boolean}
 */
function hasCircularDependency(servicesMap) {

    let firstKey
    let result = false
    for (let service in servicesMap) {
        let valueArr = servicesMap[service]
        firstKey = service
        function foo(dep) {
            if (servicesMap.hasOwnProperty(dep)) {

                if (dep === firstKey) result = true
                if (result === true) return result
            }
            for (let depNext of servicesMap[dep]) {
                if (servicesMap.hasOwnProperty(depNext)) foo(depNext)
            }
        }
        for (let dependency of valueArr) {
            console.log(dependency)
            if (servicesMap.hasOwnProperty(dependency)) foo(dependency)
        }
    }

    return result

}


module.exports = hasCircularDependency;
