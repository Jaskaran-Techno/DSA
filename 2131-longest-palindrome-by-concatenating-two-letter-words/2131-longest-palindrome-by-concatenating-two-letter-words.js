/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function(words) {
    const hashmap = new Map();
    const hashmapDouble = new Map();
    let output = 0;

    for (let i = 0 ; i < words.length; i++) {
        const word = words[i];
        if (word[0] === word[1]) {
            hashmapDouble.set(word, 1);

            if (hashmap.has(word) && hashmap.get(word)%2) {
                output+=4;
                hashmapDouble.delete(word);
            }
        } else {
            const reverseWord = word.split('').reverse().join('');
            if (hashmap.has(reverseWord) && (!hashmap.has(word) || hashmap.get(reverseWord) > hashmap.get(word))) {
                output+=4;
            }
        } 
        if (hashmap.has(word)) {
            hashmap.set(word, hashmap.get(word) + 1);
        } else {
            hashmap.set(word, 1);
        }
    }
    
    return output + (hashmapDouble.size ? 2 : 0);
};