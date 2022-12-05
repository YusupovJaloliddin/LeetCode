/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (num) {
  let i = 0,
    sum = 0,
    kop = 1,
    a;
  while (num != 0) {
    a = num % 10;
    sum += a;
    kop *= a;
    num = Math.trunc(num / 10);
    i++;
  }
  return kop - sum;
};
