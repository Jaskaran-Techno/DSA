class Solution {
    public List<Integer> addToArrayForm(int[] num, int k) {
        List<Integer> arr = new ArrayList<>();
        int n = num.length; 
        while(--n>=0 || k>0){
            if(n>=0){
                 k += num[n];
            }
            arr.add(k%10);
            k = k/10;
        }
        Collections.reverse(arr);
        return arr;
    }
}