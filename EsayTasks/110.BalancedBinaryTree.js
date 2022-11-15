/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
let isBalanced = function (root) {
  return helper(root, 0) >= 0;
};

let helper = function (root, depth) {
  if (!root) return depth;
  let left = helper(root.left, depth + 1);
  let right = helper(root.right, depth + 1);
  if (left === -1 || right === -1 || Math.abs(left - right) > 1) return -1;
  return Math.max(left, right);
};

//   Complexity:

// Time complexity : O(n).
// Space complexity : O(n).
