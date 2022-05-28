class Solution {
    public int minIncrementForUnique(int[] nums) {
        int maxVal = 0;
        for (int x : nums) {
            maxVal = Math.max(maxVal, x);
        }
        int[] freq = new int[maxVal + nums.length];
        for(int num : nums) {
            freq[num] += 1;
        }
        int moves = 0;
       
        for(int i=0; i<freq.length; i++) {
            if(freq[i] <= 1) continue;
            int remain = freq[i] - 1;
            moves += remain;
            freq[i+1] += remain;
        }
        return moves;
    }
}