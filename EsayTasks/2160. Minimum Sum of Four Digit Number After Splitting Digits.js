/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
       let arr = [],
    new1 = "",
    new2 = "";
  while (num != 0) {
    arr.push(num % 10);
    num = Math.trunc(num / 10);
  }
  arr = arr.sort();
  new1 = arr[0].toString() + arr[2];
  new2 = arr[1].toString() + arr[3];
  return Number(new1) + Number(new2);
};
