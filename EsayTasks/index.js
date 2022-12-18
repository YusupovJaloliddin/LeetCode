// 2367. Number of Arithmetic Triplets

/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function (nums, diff) {
  let sum = 0;
  nums.forEach((elem) => {
    if (nums.includes(elem + diff) && nums.includes(elem + 2 * diff)) sum++;
  });
  return sum;
};

console.log(arithmeticTriplets([0, 1, 4, 6, 7, 10], 3));
