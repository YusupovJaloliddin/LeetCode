/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let arr = [];
    let startVal = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + 1 !== nums[i + 1] && nums[i] - 1 !== nums[i - 1]) {
            arr.push("" + nums[i]);
        } else if (nums[i] + 1 !== nums[i + 1] && nums[i] - 1 === nums[i - 1]) {
            arr.push("" + startVal + "->" + nums[i])
        } else if (nums[i] + 1 === nums[i + 1] && nums[i] - 1 !== nums[i - 1]) {
            startVal = nums[i]
        }

    }
    return arr;
};
