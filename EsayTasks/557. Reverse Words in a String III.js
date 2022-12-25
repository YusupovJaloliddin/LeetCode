/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let a = [];
  for (let i = 0; i < s.split(" ").length; i++) {
    a.push(s.split(" ")[i].split("").reverse().join(""));
  }
  return a.join(" ");
};

console.log(reverseWords("Let's take LeetCode contest"));
// console.log("salom".split("").reverse().join(""));
