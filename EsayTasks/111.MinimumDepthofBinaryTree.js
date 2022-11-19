/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */

let minDepth = (root) => {
  if (!root) return 0;
  let depth = 0;
  let queue = [root];
  let current;
  while (queue.length) {
    let queueLen = queue.length;
    for (let i = 0; i < queueLen; i++) {
      current = queue.shift();
      if (!current.left && !current.right) {
        depth++;
        return depth;
      }
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    depth++;
  }

  return depth;
};
