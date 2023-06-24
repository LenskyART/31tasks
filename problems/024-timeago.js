/**
 * Петя опубликовал картинку X секунд назад.
 *
 * Напишите функцию timeago(seconds) возвращаю текстовое представление периода прошедшего со времени публикации.
 * Для публикаций опубликованных более четырёх недель назад возвращайте строку 'undefined', ведь их никто не увидит.
 *
 * Пример:
 *
 * timeago(0) === 'just now'
 * timeago(10) === '10 seconds ago'
 * timeago(60) === '1 minute ago'
 * timeago(3600) === '1 hour ago'
 *
 * @param {number} seconds
 * @returns {string}
 */
function timeago(seconds) {
    if (seconds < 10) return 'just now'
    if (seconds < 20) return `10 seconds ago`
    if (seconds < 50) return `20 seconds ago`
    if (seconds < 60) return `50 seconds ago`
    if (seconds < 120) return `1 minute ago`
    if (seconds < 600) return `2 minutes ago`
    if (seconds < 1500) return `10 minutes ago`
    if (seconds < 1800) return `25 minutes ago`
    if (seconds < 3600) return `30 minutes ago`
    if (seconds < 7200) return `1 hour ago`
    if (seconds < 43200) return `2 hours ago`
    if (seconds < 86400) return `12 hours ago`
    if (seconds < 172800) return `1 day ago`
    if (seconds < 604800) return `a few days ago`
    if (seconds < 1209600) return `1 week ago`
    if (seconds < 1814400) return `2 weeks ago`
    if (seconds < 2419200) return `3 weeks ago`
    return 'undefined'
}



module.exports = timeago;
