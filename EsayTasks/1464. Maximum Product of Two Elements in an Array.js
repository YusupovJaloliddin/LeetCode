/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  nums.sort((b, a) => a - b);
  return (nums[0] - 1) * (nums[1] - 1);
};
