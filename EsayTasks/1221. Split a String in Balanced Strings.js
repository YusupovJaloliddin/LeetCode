/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  return s.split(``).reduce(
    (f, c) => {
      c === "L" ? f.balance++ : f.balance--;
      f.balance === 0 && f.ans++;
      return f;
    },
    { balance: 0, ans: 0 }
  ).ans;
};
