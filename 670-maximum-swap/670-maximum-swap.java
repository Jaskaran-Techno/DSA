class Solution {
    public int maximumSwap(int num) {
        PriorityQueue<Integer> maxHeap = new PriorityQueue<Integer>(Collections.reverseOrder());
        
        String number = num+"";
        StringBuilder str
            = new StringBuilder(number);
        char[] arr = number.toCharArray();
        
        for(Character c : arr){
            maxHeap.add(Character.getNumericValue(c));
        }
        int index = 0; 
        for(Character c : arr){
            int newNum = maxHeap.poll();
            if(Character.getNumericValue(c)<newNum){
                str.setCharAt(index, (Character.forDigit(newNum, 10)));
                str.setCharAt(number.lastIndexOf((Character.forDigit(newNum, 10))), c);
                return Integer.parseInt(str.toString());
            }
            index++;
        }
        return num; 
    }
}