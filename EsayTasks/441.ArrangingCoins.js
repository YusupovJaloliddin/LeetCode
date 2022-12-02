/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
      let summa = 0,
    result = 0;
  while (true) {
    summa++;
    n = n - summa;
    if (n < 0) {
      break;
    } else {
      result++;
    }
  }
  return result;
};
