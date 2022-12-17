//2089. Find Target Indices After Sorting Array

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
  let newArr = [];
  nums = nums.sort();
  nums.forEach((val, ind) => {
    if (val == target) {
      newArr.push(ind);
    }
  });
  return newArr;
};

console.log(targetIndices([1, 2, 5, 2, 3], 2));
