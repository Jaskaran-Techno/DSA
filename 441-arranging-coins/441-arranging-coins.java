class Solution {
    public int arrangeCoins(int n) {
      long start=1;
    long sum=1;
    while( sum <= n){
        sum+= ++start;
    }
    
    return (int) start-1;  
    }
}