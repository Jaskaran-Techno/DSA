class Solution {
    public boolean judgeCircle(String moves) {
         int a = 0, b = 0;
        
        for (int i = 0; i < moves.length(); i++) {
            char c = moves.charAt(i);
            if (c == 'L') {
                a++;
            } else if (c == 'R') {
                a--;
            } else if (c == 'U') {
                b++;
            } else {
                b--;
            }
        }
        return a == 0 && b == 0;
    }
}