/**
 * @param {string} s
 * @return {number[]}
 */
/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function (S) {
  const sep = S.replace(/I/g, "").length;
  const ans = [sep];
  let p = sep - 1;
  let q = sep + 1;
  for (let i = 0; i < S.length; i++) {
    if (S[i] === "D") {
      ans.push(p);
      p--;
    } else {
      ans.push(q);
      q++;
    }
  }
  return ans;
};
