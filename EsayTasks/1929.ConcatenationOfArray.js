// 1929. Concatenation of Array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  let newArr = [];
  for (let i = 0; i < 2 * nums.length; i++) {
    if (i < nums.length) {
      newArr.push(nums[i]);
    } else {
      newArr.push(nums[i - nums.length]);
    }
  }
  return newArr;
};
console.log(getConcatenation([1, 2, 3]));
