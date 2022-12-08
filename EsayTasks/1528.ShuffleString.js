// 1528. Shuffle String

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  let newArr = [],
    result = "";
  for (let i = 0; i < indices.length; i++) {
    newArr.push({
      s: s[i],
      index: indices[i],
    });
  }
  newArr.sort((a, b) => a.index - b.index);

  newArr.forEach((Elem) => {
    result += Elem.s;
  });
  return result;
};

console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));
