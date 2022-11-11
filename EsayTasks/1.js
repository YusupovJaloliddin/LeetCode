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

