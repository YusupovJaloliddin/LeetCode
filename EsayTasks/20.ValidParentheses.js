/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(string, rrrrr = /\(\)|\[\]|\{\}/g) {
    while (string.match(rrrrr)) string = string.replace(rrrrr, '')
    return !string
}
