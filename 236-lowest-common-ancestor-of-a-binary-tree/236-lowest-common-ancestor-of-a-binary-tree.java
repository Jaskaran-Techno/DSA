/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        CounterNode n = helper(root, p, q);
        return n.node;
    }
 
    public CounterNode helper(TreeNode root, TreeNode p, TreeNode q){
        if(root==null){
            return new CounterNode(null, 0);
        }
 
        CounterNode left = helper(root.left, p, q);
        if(left.count==2){
            return left;
        }
 
        CounterNode right = helper(root.right, p, q);
        if(right.count==2){
            return right;
        }
 
        int c=left.count+right.count+(root==p?1:0)+(root==q?1:0);
 
        return new CounterNode(root, c);
 
    }
}
 
class CounterNode{
    public int count;
    public TreeNode node;
 
    public CounterNode(TreeNode node, int count){
        this.count=count;
        this.node=node;
    }
}