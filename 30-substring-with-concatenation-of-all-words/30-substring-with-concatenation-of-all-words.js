function findSubstring(s, words) {
    let wordLength = words[0].length
    let wordCount = words.length
    let concatLength = wordLength * wordCount
    
    let wordMultiset = new MultiSet()
    for (let word of words) wordMultiset.add(word)
    
    function getWordAt(i) {
        if (i < 0)
            return undefined
        let word = s.substr(i, wordLength)
        if (wordMultiset.has(word))
            return word
    }
    
    let result = []
    
    // The words still needed to match in a rolling window.
    let missingWords = wordMultiset.copy()
    
    for (let offset = 0; offset < wordLength; offset++) {
        
        // We need to overshoot the end of the string so we can remove words still in the rolling window for the next pass.
        for (let i = offset; i < s.length + concatLength; i += wordLength) {
            
            let word = getWordAt(i)
            let removeWord = getWordAt(i - concatLength)
            
            if (removeWord)
                missingWords.add(removeWord)
            
            if (word) {
                missingWords.delete(word)
                if (missingWords.keycount == 0)
                    result.push(i - concatLength + wordLength)
            }
            
        }
        
    }
    
    return result
    
}

class MultiSet {
    
    constructor(parentMap) {
        this.counts = new Map(parentMap)
    }
    
    add(value, amount = 1) {
        let count = (this.counts.get(value) ?? 0) + amount
        if (count == 0)
            this.counts.delete(value)
        else
            this.counts.set(value, count)
    }
    
    delete(value) {
        this.add(value, -1)
    }
    
    has(value) {
        return this.counts.has(value)
    }
    
    copy() {
        return new MultiSet(this.counts)
    }
    
    get keycount() {
        return this.counts.size
    }
    
}