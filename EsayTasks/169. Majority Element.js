/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (n) {
  if (n - 1 < 26) {
    return String.fromCharCode(65 + ((n - 1) % 26));
  }

  var result = "";

  while (n > 0) {
    var codeNum = (n - 1) % 26;
    var c = String.fromCharCode(codeNum + 65);
    result = c + result;

    n = parseInt((n - 1) / 26);
  }
  return result;
};

console.log(convertToTitle(2));
