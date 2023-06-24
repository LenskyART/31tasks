/**
 * Для того чтобы выходить в Интернет, каждому компьютеру присваивается так называемый IP-адрес.
 * Он состоит из четырех целых чисел в диапазоне от 0 до 255, разделенных точками.
 * В следующих трех строках показаны три правильных IP-адреса:
 *  127.0.0.0
 *  192.168.0.01
 *  255.000.255.0255
 *
 * Напишите функцию isIpValid(address) опредяляющую является ли переданная строка правильным IP-адресом.
 *
 * Пример:
 *
 * isIpValid('127.0.0.1') === true
 * isIpValid('127.0.0.0255') === true
 * isIpValid('127.0.256.0255') === false
 * isIpValid('Hello world') === false
 *
 * @param {string} address
 * @returns {boolean}
 */
function isIpValid(address) {
    let arrNumOfAddress = address.split('.')

    if (arrNumOfAddress.length > 4) return false

    let result = true
    for (let num of arrNumOfAddress) {
        num = +num
        if (isNaN(num) || num > 255 || num < 0) result = false
    }

    console.log(result)
    return result
}

isIpValid('127.0.0.1')
isIpValid('127.0.0.0255')
isIpValid('127.0.256.0255')
isIpValid('Hello world')

module.exports = isIpValid;
