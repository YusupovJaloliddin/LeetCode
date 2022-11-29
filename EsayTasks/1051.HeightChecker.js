/**
 * @param {number[]} heights
 * @return {number}
 */
let heightChecker = function(heights) {
  let expected = [];
  let tempHeights = [...heights];
  expected = heights.sort((a, b) => a - b);
  let t = 0;
  for (let i = 0; i < heights.length; i++) {
    if (expected[i] != tempHeights[i]) {
      t++;
    }
  }
  return t;
};
