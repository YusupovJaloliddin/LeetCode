/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    var count=0
    for(var i=0;i<=a;i++)
    {
        if(a%i==0 && b%i==0)
        {
            count++;
          
        }
    }
    return count;
    
};
