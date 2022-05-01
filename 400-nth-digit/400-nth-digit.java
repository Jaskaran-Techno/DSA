class Solution {
    public int findNthDigit(int n) {
         long step = 1;
        long size = 9 * (int)Math.pow(10, step-1);
        while (n > step * size) {
            n -= step * size;
            step++;
            size = 9 * (int)Math.pow(10, step-1);
        }        
        long number = size/9 + (long)Math.ceil((n*1.0d)/step) -1;
        char ansDigit = String.valueOf(number).charAt((int)((n%step-1+step)%step));
        return (int)(ansDigit - '0');
    }
}