function findMedianSortedArrays(nums1, nums2) {
  // nums1 va nums2 massivlarining uzunliklarini hisoblaymiz
  const m = nums1.length; // 1-uzunlik
  const n = nums2.length; // 2-uzunlik

  // qisqa vaqtlik funksiya orqali mediana topishga harakat qilamiz
  // 
  const findMedian = (arr) => {
    const len = arr.length;
    const mid = Math.floor(len / 2);
    if (len % 2 === 0) {
      return (arr[mid - 1] + arr[mid]) / 2;
    } else {
      return arr[mid];
    }
  }

  // nums1 va nums2 bo'sh bo'lmasa, ularni birlashtiramiz va saralab to'g'ridan-to'g'ri mediana topamiz
  if (m === 0) {
    return findMedian(nums2);
  }
  if (n === 0) {
    return findMedian(nums1);
  }
  const merged = [...nums1, ...nums2].sort((a, b) => a - b);
  const len = m + n;
  const mid = Math.floor(len / 2);
  if (len % 2 === 0) {
    return (merged[mid - 1] + merged[mid]) / 2;
  } else {
    return merged[mid];
  }
}
