class Solution {
    public int maximumWealth(int[][] accounts) {
       int max = 0;
      for (int[] i : accounts) {
       int max1 = 0;

        for (int j : i) {
            max1 += j;
        }
        max = Math.max(max, max1);
    }
    return max; 
    }
}