/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let indexOfS = 0;
  for (const char of t) {
    if (char === s[indexOfS]) {
      indexOfS++;
    }
  }

  return indexOfS === s.length;
};
