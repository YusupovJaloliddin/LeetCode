/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function (number, digit) {
  let index = -1;
  for (let i = 0; i < number.length - 1; i++) {
    if (number[i] == digit && number[i] - "0" < number[i + 1] - "0") {
      index = i;
      break;
    }
  }
  if (index == -1) {
    for (let i = number.length - 1; i >= 0; i--) {
      if (number[i] == digit) {
        index = i;

        break;
      }
    }
  }
  let ans = "";
  for (let i = 0; i < number.length; i++) {
    if (i != index) ans = ans + number[i];
  }
  return ans;
};
