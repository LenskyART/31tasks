/**
 * Пароль называется криптостойким,
 * если он включает в себя хотя бы одну строчную английскую букву,
 * хотя бы одну заглавную английскую букву и хотя бы одну цифру,
 * при этом его длина должна быть не менее 7 символов.
 *
 * Напишите функцию validatePassword(password) определяющую,
 * является ли переданный пароль криптостойким.
 *
 * Пример:
 *
 * validatePassword('abc4DEFG') === true
 * validatePassword('abcdefg') === false
 * validatePassword('abcdefG') === false
 * validatePassword('abcdef7') === false
 *
 * @param {string} password
 * @returns {boolean}
 */
function validatePassword(password) {
    let testEng = false
    let testUpper = false
    let testNum = false
    let testLength = false

    if (password.length >= 7) testLength = true

    for (let i = 0; i < password.length; i++) {
        let charCode = password[i].charCodeAt()
        if (charCode >= 65 && charCode <= 90) testEng = true
        if (charCode >= 48 && charCode <= 57) testNum = true
        if (password[i] === password[i].toUpperCase()) testUpper = true
    }

    return (testUpper && testLength && testNum && testEng)
}

module.exports = validatePassword;
