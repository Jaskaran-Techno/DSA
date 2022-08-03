class Solution {
    public int[] sortArrayByParity(int[] nums) {
         int ans[] = new int[nums.length];
    int i = 0;
    int j = 0;
    while(i < nums.length){
        if(nums[i]%2 == 0){
            ans[j] = nums[i];
            j++;
        }
        i++;
    }
    i = 0;
    while(i < nums.length || j < ans.length){
        if(nums[i]%2 != 0){
            ans[j] = nums[i];
            j++;
        }
        i++;
    }
    return ans;
    }
}