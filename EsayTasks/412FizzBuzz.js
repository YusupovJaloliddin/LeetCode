/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var fizzBuzz = function(n) {
    let result = []
    for(let i = 1; i<= n; i ++){
        if(i%15==0){
            result.push("FizzBuzz")
        }else{
            if(i%3==0){
                result.push("Fizz")
            }else if(i%5==0){
                result.push("Buzz")
            }else{
                result.push(i.toString())
            }
        }   
        
    }
    return result;
};
