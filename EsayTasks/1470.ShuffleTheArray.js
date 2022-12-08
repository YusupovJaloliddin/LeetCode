// 1470. Shuffle the Array

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  let res = [];
  for (let i = 0; i < n; i++) {
    res.push(nums[i], nums[i + n]);
  }
  return res;
};

console.log(shuffle([1, 2, 3, 4, 5, 6], 3));
