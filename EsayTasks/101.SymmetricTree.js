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
let isSymmetric = function(root) {
  if (!root) return true;
  return helper(root.left, root.right);
};

let helper = function (p, q) {
  if ((!p && q) || (p && !q) || (p && q && p.val !== q.val)) return false;
  if (p && q) return helper(p.left, q.right) && helper(p.right, q.left);
  return true;
};
