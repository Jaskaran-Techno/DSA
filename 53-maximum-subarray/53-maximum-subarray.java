class Solution {
    public int maxSubArray(int[] nums) { 
        int max = Integer.MIN_VALUE, cur = 0;
        
        for (int a: nums){ 
            cur = a + (cur > 0 ? cur: 0); 
            max = Math.max(max, cur);           
        }                
        return max;     
    }
}