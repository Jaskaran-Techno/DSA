class Solution {
    public List<Integer> findDisappearedNumbers(int[] nums) {
         List<Integer> ans = new ArrayList<>();
        
        // 1st pass
        for(int i = 0; i < nums.length; i++) {
            // Map the value of num into the nums array again
            int index = Math.abs(nums[i]) - 1;
            
            if(nums[index] > 0) {
                // First time visit the element
                nums[index] = -nums[index];
            }
        }
        
        // 2nd pass
        for(int i = 0; i < nums.length; i++) {
            if(nums[i] > 0) {
                // Unvisited means no index in the original array
                ans.add(i + 1);
                
            }
        }
        
        return ans;
    }
}