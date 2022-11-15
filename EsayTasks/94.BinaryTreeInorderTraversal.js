
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    let list = [];

    return checkTree(root, list);

    function checkTree(root, list) {
        if (root === null) {
            return list
        }
        list = checkTree(root.left, list);
        list.push(root.val);
        return checkTree(root.right, list);
    }

};
