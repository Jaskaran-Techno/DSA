class Solution {
    public int[] findErrorNums(int[] nums) {
        int n = 0, repeatingNum = 0 ;
        int[] result = new int [2] ;
        
        for (int i = 0; i < nums.length; i++) {
            n = Math.abs(nums[i]) ; 
            
            if (nums[n-1] < 0) {
                repeatingNum = n ;
                result[0] = repeatingNum ;
                break ;
            }
            else {
                nums[n-1] = -nums[n-1] ;
            }
        }
        
        n = 0 ;
        
        for (int i = 0; i < nums.length; i++) {
            n += Math.abs(nums[i]) ;
        }
        
        int sum = ((nums.length) * (nums.length+1)) / 2 ;
        sum -= n ;
        
        result[1] = sum + repeatingNum ;
        
        return result ;
    }
}