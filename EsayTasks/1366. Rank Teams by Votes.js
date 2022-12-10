/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let tempArr = [...nums];
  let res = [];
  tempArr = tempArr.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    res.push(tempArr.indexOf(nums[i]));
  }
  return res;
};
