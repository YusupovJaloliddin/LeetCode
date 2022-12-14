//2325. Decode the Message

/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
  const map = new Map();
  for (const c of key) {
    if (c === " " || map.has(c)) {
      continue;
    }
    map.set(c, String.fromCharCode(map.size + 97));
  }
  map.set(" ", " ");

  return message
    .split("")
    .map((c) => map.get(c))
    .join("");
};
console.log(
  decodeMessage(
    "the quick brown fox jumps over the lazy dog",
    "vkbs bs t suepuv"
  )
);
