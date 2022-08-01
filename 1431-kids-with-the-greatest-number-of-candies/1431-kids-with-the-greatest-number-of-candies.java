class Solution {
    public List<Boolean> kidsWithCandies(int[] candies, int extraCandies) {
        int size = candies.length; 
      
      List<Boolean> result  = new ArrayList<>();
      
      int counter = Integer.MIN_VALUE; 
      int max = Arrays.stream(candies).max().getAsInt(); 
      
      for(int i=0; i<size; i++){
        counter = candies[i] + extraCandies;
        
        if(counter >= max){     
          result.add(true);     
        }
        else{                   
          result.add(false);
        }
      }
      return result;    
        
    }
}