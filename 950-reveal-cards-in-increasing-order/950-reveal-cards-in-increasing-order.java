class Solution {
    public int[] deckRevealedIncreasing(int[] deck) {
         Arrays.sort(deck);
        Queue<Integer> queue = new LinkedList<Integer>();
        for(int i = deck.length-1;i>=0;i--){
            if(!queue.isEmpty()){
                int top = queue.remove();
                queue.add(top);
                queue.add(deck[i]);
            }else{
                queue.add(deck[i]);
            }
        }
        int i = deck.length-1;
        while(!queue.isEmpty()){
            deck[i] = queue.remove();
            i--;
        }
        return deck;
    }
}