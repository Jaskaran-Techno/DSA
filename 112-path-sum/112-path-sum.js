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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    var sum  = 0;
    var result = false;
    
    const traverse = (node) => {
        // Break condition
        // If node is null, we return
        // If result has been found, just abort
        if (!node || result) return null;
        
        // Add node val to sum
        sum += node.val;

        // Recursive step
        // We want to go as deep left as possible, then start going right
        traverse(node.left);
        traverse(node.right);
        
        // A leaf
        // If sum is target, we change result to "true"
        if (!node.left && !node.right && sum === targetSum) {
            result = true;
        }
    
        // We are done with node val, so remove from sum
        sum -= node.val;
    }
    
    // Kicking off function
    traverse(root)
    
    return result;
};