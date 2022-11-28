/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
if(n===1) return true
  for(let i=3; i<=n; i*=3){ if (i === n) return true }
  return false
    
};
