var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (typeof nums[i] == "number" && nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1);
      i -= 1;
    }
  }
  return nums.length;
};

console.log(removeDuplicates([-3, -1, 0, 0, 0, 3, 3]));
