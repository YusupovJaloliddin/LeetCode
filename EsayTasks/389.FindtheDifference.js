/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
let findTheDifference = function (s, t) {
  for (let ch of [...s]) {
    t = t.replace(ch, "");
  }
  return t;
};
