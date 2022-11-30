/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
      const map = {};
  for (const num of nums) {
    if (map[num]) return true;
    map[num] = true;
  }
  return false;
};
