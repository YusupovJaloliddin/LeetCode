/**
 * @param {string} s
 * @return {number}
 */
var appealSum = function(s) {
  let natija = 0, n = s.length;
  let last_index = Array(26).fill(-1);
  for (let i = 0; i < n; i++) {
    let charcode = s.charCodeAt(i) - 97;
    let lastIdx = last_index[charcode];
    natija += (n - i) * (i - lastIdx);
    last_index[charcode] = i;
  }  
  return natija;
};
