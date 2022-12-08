// 1672. Richest Customer Wealth

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let newArr = [],
    n,
    m;
  n = accounts.length;
  m = accounts[0].length;
  for (let i = 0; i < n; i++) {
    newArr[i] = 0;
    for (let j = 0; j < m; j++) {
      newArr[i] += accounts[i][j];
    }
  }
  newArr.sort((a, b) => -a + b);

  return newArr[0];
};

console.log(
  maximumWealth([
    [1, 5],
    [7, 3],
    [3, 5],
  ])
);
