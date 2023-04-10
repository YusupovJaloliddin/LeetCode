/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
function kthDistinct(arr, k) {
    const countMap = new Map();
    for (let str of arr) {
        countMap.set(str, (countMap.get(str) || 0) + 1);
    }
    let distinctCount = 0;
    for (let [str, count] of countMap) {
        if (count === 1) {
            distinctCount++;
            if (distinctCount === k) {
                return str;
            }
        }
    }
    return "";
}

const arr = ["apple", "banana", "apple", "cake", "banana"];
const k = 2;
console.log(kthDistinct(arr, k)); // "cake"
