// 1480. Running Sum of 1d Array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let newArr = [],
    sum = 0;
  nums.forEach((elem) => {
    sum += elem;
    newArr.push(sum);
  });
  return newArr;
};

console.log(runningSum([1, 2, 3, 4]));
