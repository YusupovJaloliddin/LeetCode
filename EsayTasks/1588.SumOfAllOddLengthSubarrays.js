/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
       let result = 0;

    for(let i = 0; i < arr.length; ++i) {
        result += parseInt(((i + 1) * (arr.length - i) + 1) / 2) * arr[i];
    }

    return result;
};
