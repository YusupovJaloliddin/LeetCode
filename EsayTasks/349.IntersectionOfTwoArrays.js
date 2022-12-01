/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
      let arrMax = [],
    arrMin = [],
    arrNew = [];
  if (nums1.length >= nums2.length) {
    arrMax = nums1;
    arrMin = nums2;
  } else {
    arrMax = nums2;
    arrMin = nums1;
  }
  for (let i = 0; i < arrMin.length; i++) {
    if (arrMax.includes(arrMin[i])) {
      if (!arrNew.includes(arrMin[i])) {
        arrNew.push(arrMin[i]);
      }
    }
  }
  return arrNew;
};
