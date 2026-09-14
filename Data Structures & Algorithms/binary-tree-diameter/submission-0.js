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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        
        let res = 0;
        function dfs(node){
            if(!node) {
                return 0;
            }

            let left = dfs(node.left)
            // console.log(node.val)
            let right = dfs(node.right)
            // console.log(res, left, right)
            res = Math.max(res, left + right)
            // console.log(res)
            return 1 + Math.max(left, right);
        }

        dfs(root);

        return res;
    }
}
