class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
    Set<Integer> set = new HashSet<>(nums1.length);
    for(int num : nums1){
        set.add(num);
    }
    int temp[] = new int[nums1.length];
    int i=0;
    for(int num:nums2){
        if(set.contains(num)){
            temp[i]=num;
            i++;
            set.remove(num);
        }
    }
    
    int ans[] = new int[i];
    i=0;
    for(int x=0;x<temp.length;x++){
        if(temp[x]!=0){
            ans[x] = temp[x];
            i++;
        }
    }
    
    return ans;

}
}