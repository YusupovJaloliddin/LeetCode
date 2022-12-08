// 2114. Maximum Number of Words Found in Sentences

/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  let maxLen = 0;
  sentences.forEach((elem) => {
    if (maxLen < elem.split(" ").length) {
      maxLen = elem.split(" ").length;
    }
  });

  return maxLen;
};

console.log(
  mostWordsFound([
    "alice and bob love leetcode",
    "i think so too",
    "this is great thanks very much",
  ])
);
