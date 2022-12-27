//1913. Maximum Product Difference Between Two Pairs
/**

@param {number[]} nums

@return {number}
*/
var maxProductDifference = function (nums) {
  const sorted = [nums[0], nums[1], nums[2], nums[3]].sort((a, b) => a - b);

  let a = sorted[3];
  let b = sorted[2];
  let c = sorted[1];
  let d = sorted[0];

  for (let i = 4; i < nums.length; i++) {
    if (nums[i] >= a) {
      b = a;
      a = nums[i];
    } else if (a > nums[i] && nums[i] > b) {
      b = nums[i];
    } else if (nums[i] <= d) {
      c = d;
      d = nums[i];
    } else if (nums[i] > d && nums[i] < c) {
      c = nums[i];
    }

    //console.log(a,b,c,d,{i})
  }

  return a * b - c * d;
};
