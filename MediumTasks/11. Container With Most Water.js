/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
  let i = 0, j = height.length - 1;
  let maxArea = 0;
  
  while (i < j) {
    const area = Math.min(height[i], height[j]) * (j - i);
    maxArea = Math.max(maxArea, area);
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }
  
  return maxArea;
}
