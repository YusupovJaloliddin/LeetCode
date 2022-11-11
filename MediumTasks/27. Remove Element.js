var removeElement = function (nums, val) {
  let k = 0,
    n = nums.length;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == val) {
      nums.splice(i, 1);
      i -= 1;
      k++;
    }
  }
  return k - n;
};
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
