/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
      let i = 0;
  while (num != 0) {
    if (num % 2 == 0) {
      num = Math.trunc(num / 2);
    } else {
      num -= 1;
    }
    i++;
  }
  return i;
};
