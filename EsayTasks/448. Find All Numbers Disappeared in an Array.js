/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findDisappearedNumbers(nums) {
  const n = nums.length;
  const result = [];
  
  for (let i = 0; i < n; i++) {
    const idx = Math.abs(nums[i]) - 1;
    if (nums[idx] > 0) {
      nums[idx] = -nums[idx];
    }
  }
  
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      result.push(i + 1);
    }
  }
  
  return result;
}

const nums = [4,3,2,7,8,2,3,1];
console.log(findDisappearedNumbers(nums)); // [5,6]
