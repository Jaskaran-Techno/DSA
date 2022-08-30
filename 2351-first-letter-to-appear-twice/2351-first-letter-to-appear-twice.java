class Solution {
    public char repeatedCharacter(String s) {
         Map<Character,Integer> map = new HashMap<>();
        for(int i = 0; i<s.length();i++){
            char ch = s.charAt(i);
            map.put(ch,map.getOrDefault(ch,0)+1);
            if(map.get(ch) == 2)
                return ch;
        }
        return '0';
    }
}