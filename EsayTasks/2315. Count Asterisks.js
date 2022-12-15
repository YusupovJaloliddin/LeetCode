/**
 * @param {string} s
 * @return {number}
 */
const countAsterisks = function (s) {
  let count = 0;
  let flag = true;
  for (let x of s) {
    if (x === "|") flag = !flag;
    if (flag && x === "*") count++;
  }
  return count;
};
