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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function(root, val, depth) {
    if (!root) {
    return [];
  }
  
  if (depth == 1) {
    return new TreeNode(val, root, null);
  }
  
  let bfsQueue = [];
  bfsQueue.push(root);
  let currentDepth = 1;
  let levelNodes = [];
  while (currentDepth < depth - 1) {
	// Current level's nodes
    levelNodes = [...bfsQueue];
    bfsQueue = [];
    while(levelNodes.length > 0) {
      const node = levelNodes.shift();
      if (!node) {
        continue;
      }
      bfsQueue.push(node.left);
      bfsQueue.push(node.right);
    }
    ++currentDepth;
  }
  

  while (bfsQueue.length > 0) {
    const node = bfsQueue.shift();
    if (node == null) {
      continue;
    }
    const auxLeft = node.left;
    const auxRight = node.right;
    node.left = new TreeNode(val, auxLeft, null);
    node.right = new TreeNode(val, null, auxRight);
  }
  
  return root;
};