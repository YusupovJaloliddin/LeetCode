/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
  let target = [];
  for (let i = 0; i < nums.length; i++) {
    if (target[index[i]] === undefined) {
      target[index[i]] = nums[i];
    } else {
      target = target
        .slice(0, index[i])
        .concat([nums[i]])
        .concat(target.slice(index[i]));
    }
  }
  return target;
};
