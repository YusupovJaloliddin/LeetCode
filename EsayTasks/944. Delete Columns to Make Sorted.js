/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (a) {
  let count = 0;
  for (let i = 0; i < a[0].length; i++) {
    let d = a.map((x) => x[i]);
    let p = [...d].sort().join("");
    if (d.join("") !== p) {
      count += 1;
    }
  }
  return count;
};
