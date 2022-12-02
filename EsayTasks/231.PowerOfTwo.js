/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
      let s = 0,
    i = 0;
  while (s < n) {
    s = Math.pow(2, i);
    i++;
  }
  if (s == n && s != 0) {
    return true;
  } else {
    return false;
  }
};
