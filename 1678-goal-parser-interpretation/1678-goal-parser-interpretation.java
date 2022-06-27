class Solution {
    public String interpret(String command) {
         StringBuilder S = new StringBuilder(command.length());
        int i=0;
        while(i<command.length())
              {
            if(command.charAt(i)=='G')
            {
                S.append('G');
                i++;
            }else if(command.charAt(i)=='(')
            {
                if(command.charAt(i+1)=='a')
                {
                      S.append("al");
                i=i+4;
                
                }else
                {
                        S.append('o');
                i+=2; 
                }
           
            }
        }
        return S.toString();
    }
}