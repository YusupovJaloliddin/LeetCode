/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let newArr1 = [],
    newArr2 = [],
    a = 0,
    b = 0;
  nums.forEach((val, ind) => {
    if (val % 2 == 0) {
      newArr1.push({
        value1: val,
        index: a,
      });
      a++;
    } else {
      newArr2.push({
        value1: val,
        index: b,
      });
      b++;
    }
  });
  nums = [
    ...newArr1.sort((a, b) => a.index - b.index),
    ...newArr2.sort((a, b) => a.index - b.index),
  ];
  console.log(nums[0]);
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i].value1;
  }
  return nums;
};

console.log(sortArrayByParity([3, 1, 2, 4]));
