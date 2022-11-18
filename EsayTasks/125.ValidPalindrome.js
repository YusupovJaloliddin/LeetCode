/**
 * @param {string} s
 * @return {boolean}
 */
let isPalindrome = function(s) {
  let i = 0;
  let j = s.length - 1;
  let m = '';
  let n = '';
  while (i < j) {
    m = s[i].toLowerCase();
    n = s[j].toLowerCase();
    if (!isLetterOrDigit(m)) i++;
    else if (!isLetterOrDigit(n)) j--;
    else if (m === n) { i++; j--; }
    else return false;
  }
  return true;
};

let isLetterOrDigit = function (c) {
  return (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9');
};
