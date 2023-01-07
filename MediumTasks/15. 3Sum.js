const threeSum = (nums) => {
  let len = nums.length;
  if (len < 3) return [];
  nums.sort(function (a, b) {
    return a - b;
  });
  if (nums[0] > 0 || nums[0] + nums[1] + nums[2] > 0) return [];
  if (len === 3) {
    if (nums[0] + nums[1] + nums[2] === 0) return [nums];
    else return [];
  }

  let result = [];
  let checker = "";

  for (let i = 0; i < len; i++) {
    var sum = -nums[i];
    for (let j = i + 1, k = len - 1; j < k; ) {
      var temp = nums[j] + nums[k];
      if (temp < sum) {
        j++;
      } else if (temp > sum) {
        k--;
      } else {
        var triplet = [nums[i], nums[j], nums[k]];
        result.push(triplet);

        while (nums[j] === nums[j + 1] && j < len) j++;
        while (nums[k] === nums[k - 1] && k > 0) k--;
        j++;
        k--;
      }
    }
    while (nums[i] === nums[i + 1] && i < len) i++;
  }

  return result;
};
