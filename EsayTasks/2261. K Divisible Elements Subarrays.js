/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} p
 * @return {number}
 */
var countDistinct = function(nums, k, p) {
      let n = nums.length,
    result = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      // subarray from i to j inclusive
      let t = 0;
      for (let k = i; k <= j; k++) {
        if (nums[k] % p === 0) t++;
      }
      if (t <= k) result.add(nums.slice(i, j + 1).join(","));
    }
  }
  return result.size;
};
