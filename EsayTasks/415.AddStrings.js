/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
let addStrings = function(num1, num2) {
    sum_int = BigInt(num1) + BigInt(num2)
    return sum_int.toString()
};
