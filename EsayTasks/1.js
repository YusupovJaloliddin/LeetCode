//26. Remove Duplicates from Sorted Array

// var removeDuplicates = function(nums) {
//     for(let i=0;i<nums.length;i++){
//         if(typeof(nums[i]) == "number" && nums[i] === nums[i+1]){
//             nums.splice(i+1,1);
//             i -=1;
//         }
//     }
//     return nums.length;
// };

// console.log(removeDuplicates([-3,-1,0,0,0,3,3]))

// 27. Remove Element
// var removeElement = function(nums, val) {
//     let k=0,n=nums.length;
//     for(let i=0;i<nums.length;i++){
//                 if(nums[i] == val){
//                     nums.splice(i,1);
//                     i -=1;
//                     k++;
//                 }
//             }
//             return k-n;
//         }
// console.log(removeElement([0,1,2,2,3,0,4,2],2));


//100.Same Tree

// var isSameTree = function(p, q) {
//     if(p===null&&q===null){return true}
//     if((p===null&&q!==null) || (p!==null && q===null) || (p.val !== q.val)){return false}
//     return isSameTree(p.left,q.left) && isSameTree(p.right,q.right)
// };


//21. Merge Two Sorted Lists

// let mergeTwoLists = function (l1, l2) {
//     // If either list is empty, return the other list's node
//     if (l1 == null) return l2;
//     if (l2 == null) return l1;

//     // If l1 is lower
//     if (l1.val < l2.val) {
//         l1.next = mergeTwoLists(l1.next, l2);
//         return l1;
//     }
//     // If l2 is lower
//     else {
//         l2.next = mergeTwoLists(l1, l2.next);
//         return l2;
//     }
// };

//35. Search Insert Position

// var solution = function(isBadVersion) {
//     /**
//      * @param {integer} n Total versions
//      * @return {integer} The first bad version
//      */
//     return function(n) {
        
//     };
// };

// 58. Length of Last Word

// let lengthOfLastWord = function (s) {
//   const words = s.trim().split(" ");
//   return words.length > 0 ? words[words.length - 1].length : 0;
// };

//66. Plus One

// let plusOne = function(digits) {
//     for(let i=digits.length-1;i>=0;i--){
//         digits[i]++;
//         if(digits[i]>9){
//             digits[i]=0;
//         }
//         else{
//             return digits;
//         }
//     }
//     digits.unshift(1);
//     return digits;
// };

//67. Add Binary

// let addBinary = function (a, b) {
//     // Resultant string
//     let result = "";
//     // Indices for a and b
//     let i = a.length - 1;
//     let j = b.length - 1;
//     // Carry
//     let carry = 0;
//     while (i >= 0 || j >= 0) {
//         // Sum of two bits
//         let sum = carry;
//         if (i >= 0) {
//             sum += a[i--] - '0';
//         }
//         if (j >= 0) {
//             sum += b[j--] - '0';
//         }
//         // Add the bit to the result
//         result = sum % 2 + result;
//         // Modify carry
//         carry = parseInt(sum / 2);
//     }
//     // Final check if carry exists
//     if (carry > 0) {
//         result = 1 + result;
//     }
//     return result;
// };

//69-Sqrt(x)
// Binary search approach
let mySqrt = function(x) {
    let left = 1;
    let right = x;
    // The square root of 0 or 1 is itself
    if(x < 2) return x;

    // Use binary search to find the square root or the whole number closest to the square root
    while(left < right) {
        // Find the mid point between left and right
        const mid = Math.floor((left + right) / 2)
        // Return the mid point if this is the square root
        if(mid*mid === x) return mid
        // If mid squared is greater than x then the answer must be on the left half of mid
        else if(mid*mid >x) right = mid
        // If mid squred is less than x then the answer must be on the right half of mid
        else left = mid+1
    }
    return left - 1
};
