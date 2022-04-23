class Solution {
    public int countDigitOne(int n) {
         int count = 0;
        for (long i = 1; i <= n; i *= 10) {
            count += (n / i + 8) / 10 * i;
            if (n / i % 10 == 1) {
                count += n % i + 1;
            }
        }
        return count;
    }
}