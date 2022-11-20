//  * @param {string[]} words
//  * @return {string[]}
//  */
let findWords = function (words) {
  let rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
  let sol = [];
  for (let row of rows) {
    for (let word of words) {
      let flag = true;
      for (let ch of [...word]) {
        if (!row.includes(ch.toLowerCase())) {
          flag = false;
          break;
        }
      }
      if (flag) sol.push(word);
    }
  }
  return sol;
};
