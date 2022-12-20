/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    let resArr = [], lastIndex = S.indexOf(C), prevIndex = 99999999999;
    
    for(let i=0; i<S.length; i++) {
        let distance = Math.min(Math.abs(lastIndex - i), Math.abs(prevIndex - i))
        if(distance === 0) {
            prevIndex = lastIndex;
            lastIndex = S.indexOf(C, lastIndex+1)
        }
        resArr.push(distance);
    }
        
    return resArr
};