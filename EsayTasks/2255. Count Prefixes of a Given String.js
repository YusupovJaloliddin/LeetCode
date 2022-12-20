var countPrefixes = function (words, s) {
  // check occurrence at the beginning using startWith, indexOf or match(regex)
  return words.reduce((acc, val) => acc + s.startsWith(val), 0);
};
