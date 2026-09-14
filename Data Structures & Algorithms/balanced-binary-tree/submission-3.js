/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        let isBalanced = true;

        function dfs(node) {
            if (!node) {
                return 0; // Empty nodes have a height of 0
            }

            let left = dfs(node.left);
            let right = dfs(node.right);

            // 1. Fix: Use Math.abs() because right can be bigger than left
            if (Math.abs(left - right) > 1) {
                isBalanced = false;
            }

            // 2. Fix: Return height (1 + max depth), NOT total node count
            return 1 + Math.max(left, right);
        }

        dfs(root);
        return isBalanced;
    }
}
