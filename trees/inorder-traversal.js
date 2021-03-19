/*https://leetcode.com/problems/binary-tree-inorder-traversal*/

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
  if (!root) return [];
  let result = [];
  let _traverse = (root) => {
    if (root.left) _traverse(root.left);
    result.push(root.val);
    if (root.right) _traverse(root.right);
  }
  _traverse(root);
  return result;
};

//solution is faster than 92.9% and uses less memory than 89%
