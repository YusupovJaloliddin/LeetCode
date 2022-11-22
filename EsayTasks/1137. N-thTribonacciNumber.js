/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
         if (n < 2) return n;
        let first = 0, second = 1, third = 1;
        for (let i = 2; i < n; ++i) {
            let t = first;
            first = second;
            second = third;
            third = t + first + second;
        }
        return third;
    }
