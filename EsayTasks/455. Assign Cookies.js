/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
function findContentChildren(g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  
  let i = 0;
  let j = 0;
  let contentChildren = 0;
  
  while (i < g.length && j < s.length) {
    if (s[j] >= g[i]) {
      contentChildren++;
      i++;
      j++;
    } else {
      j++;
    }
  }
  
  return contentChildren;
}

const g = [1,2,3];
const s = [1,1];
console.log(findContentChildren(g, s)); // 1
