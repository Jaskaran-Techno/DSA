class Solution {
    public String reversePrefix(String word, char ch) {
         String str = "";
         int i = 0;
        
        while(i < word.length()){
            char c = word.charAt(i);
            
            if(c == ch){
                StringBuilder s = new StringBuilder();
                s.append(word.substring(0,i+1)).reverse();
                str += s.toString() + word.substring(i+1,word.length());
                return str;
            }
            i++;   
        }
        return word;
    }
}