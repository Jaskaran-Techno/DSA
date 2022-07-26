class Solution {
    public boolean checkOnesSegment(String s) {
         List<String > list =new  ArrayList<>(List.of(s.split("0"))) ;
        list.remove("");

        return list.size()==1;
    }
}