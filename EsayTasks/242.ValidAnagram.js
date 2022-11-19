/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  var lens = s.length,
    lent = t.length;
  if (lens !== lent) return false;
  if (typeof s !== "string" || typeof t !== "string") return false;
  if (lens === 0 && lent === 0) return true;

  var newArr = {};
  for (let i = 0; i < lens; i++) {
    newArr[s[i]] = newArr[s[i]] ? newArr[s[i]] + 1 : 1;
  }
  for (let j = 0; j < lent; j++) {
    if (newArr[t[j]]) newArr[t[j]]--;
    else return false;
  }

  var sum = Object.values(newArr).reduce(function (accumulator, element) {
    return accumulator + element;
  });

  if (sum === 0) return true;
  return false;
};
console.log(isAnagram("ssalomm", "salsmom"));
