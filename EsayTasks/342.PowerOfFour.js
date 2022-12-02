/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
      let s = 0,
    i = 0;
  while (s < n) {
    s = Math.pow(4, i);
    i++;
  }
  if (s == n && s != 0) {
    return true;
  } else {
    return false;
  }
};
