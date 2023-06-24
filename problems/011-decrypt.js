/**
 * Самый простой способ зашифровать строку – сдвиг букв.
 * Под сдвигом понимается замена буквы на предыдущую в алфавите.
 * Если предыдущей буквы нет, она заменяется на последнюю букву алфавита (в этой задаче мы имеем дело с английским алфавитом).
 *
 * Вам прислали секретное сообщение, зашифрованное способом, описанным выше и состоящее из строчных английских букв.
 *
 * Напишите функцию decrypt(secret) которая расшифрует и вернет его.
 *
 * Пример:
 *
 * decrypt('bnqqdbs') === 'correct'
 * decrypt('zmc vd hfmnqd rozbdr') === 'and we ignore spaces'
 *
 * @param {string} secret
 * @returns {string}
 */
function decrypt(secret) {
    function isLetter(str) {
        return str.match(/[a-z]/i);
    }

    let str = secret.toLowerCase();
    let result = '';
    let charCode = 0;

    for (let i = 0; i < str.length; i++) {
        if (isLetter(str[i])) {
            charCode = (str[i].charCodeAt()) + 1;
            if (String.fromCharCode(charCode) === '{') {
                result += 'a'
            } else {
                result += String.fromCharCode(charCode);
            }
        } else  {
            result += str[i]
        }
    }
    return result;
}


module.exports = decrypt;
