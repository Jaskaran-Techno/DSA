class Solution {
    public int findKthLargest(int[] nums, int k) {
         PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
        int result=0;
        for(int i:nums){
            maxHeap.add(i);
        }
        
        while(k>0){
            result=maxHeap.poll();
            k--;
        }
        
        return result;
    }
}