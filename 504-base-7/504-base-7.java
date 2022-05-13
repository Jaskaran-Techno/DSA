class Solution {
    public String convertToBase7(int num) {
        int abs = Math.abs(num);
        StringBuilder sb = new StringBuilder();
        while (abs >= 7) {
            sb.append(abs % 7);
            abs /= 7;
        }
        sb.append(abs).reverse();
        return num >= 0 ? sb.toString() : "-" + sb.toString();
    }
}