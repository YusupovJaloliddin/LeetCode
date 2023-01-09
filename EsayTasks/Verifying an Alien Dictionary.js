/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  const map = new Map();

  for (let i = 0; i < order.length; i++) {
    map.set(order[i], i);
  }

  verify: for (let i = 0; i < words.length - 1; i++) {
    let word1 = words[i];
    let word2 = words[i + 1];
    const n = Math.min(word1.length, word2.length);
    for (let j = 0; j < n; j++) {
      if (map.get(word1[j]) > map.get(word2[j])) return false;
      if (map.get(word1[j]) === map.get(word2[j])) continue;
      if (map.get(word1[j]) < map.get(word2[j])) continue verify;
    }
    if (word1.length > word2.length) return false;
  }
  return true;
};
