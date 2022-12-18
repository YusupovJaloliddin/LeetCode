// 1313. Decompress Run-Length Encoded List

/**
 * @param {number[]} nums
 * @return {number[]}
 */

function myFunction(a, b, ansArr) {
  for (let i = 0; i < a; i++) {
    ansArr.push(b);
  }
  return ansArr;
}

let decompressRLElist = function (nums) {
  ansArr = [];
  while (nums.length != 0) {
    ansArr = myFunction(nums[0], nums[1], ansArr);
    nums.shift();
    nums.shift();
  }
  return ansArr;
};

console.log(decompressRLElist([3, 5, 1, 2, 2, 4]));
