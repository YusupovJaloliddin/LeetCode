/**
 * @param {string[]} words
 * @return {number}
 */
const uniqueMorseRepresentations = (words) => {
  const result = [];
  const codes = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];

  words.forEach((word) => {
    let str = "";
    for (let i = 0; i < word.length; i++) {
      const code = word[i].charCodeAt(0) - 97;
      str += codes[code];
    }

    if (!result.find((v) => v === str)) {
      result.push(str);
    }
  });

  return result.length;
};
