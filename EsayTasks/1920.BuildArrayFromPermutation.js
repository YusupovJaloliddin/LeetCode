/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
  let newArr = [];
  for (let i = 0; i < nums.length; i++) {
    newArr.push(nums[nums[i]]);
  }
  return newArr;
};
console.log(buildArray([5, 0, 1, 2, 3, 4]));
