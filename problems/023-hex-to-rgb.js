/**
 * Hex и RGB - текстовые форматы для представления цвета в коде.
 *
 * Напишите функцию hexToRgb(color) конвертирующую цвет закодированный в формате HEX
 * в RGB кодированную строку.
 *
 * Пример:
 *
 * hexToRgb('#000000') === 'rgb(0, 0, 0)'
 * hexToRgb('#fff') === 'rgb(255, 255, 255)'
 * hexToRgb('#800080') === 'rgb(128, 0, 128)'
 *
 * @param {string} color
 * @returns {string}
 */
function hexToRgb(color) {
    function spliceString(string, index, add) {
        return string.slice(0, index) + add + string.slice(index)
    }

    let withOutHash = color.slice(1)

    let arr = []
    if (withOutHash.length === 3) {
        for (let i = 0; i < withOutHash.length; i++) {
            arr.push(`${withOutHash[i]}${withOutHash[i]}`)
        }
    } else {
        arr.push(withOutHash.slice(0, 2))
        arr.push(withOutHash.slice(2, 4))
        arr.push(withOutHash.slice(4))
    }

    let rgb = []
    for (let one of arr) {
        rgb.push(parseInt(one, 16))
    }

    console.log( `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})` )

    return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
}


hexToRgb('#fff') // === 'rgb(255, 255, 255)'
hexToRgb('#800080') // === 'rgb(128, 0, 128)'

module.exports = hexToRgb;
