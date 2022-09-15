/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function(changed) {
    const result = [];
    const map = new Map();
    
    changed.sort((a, b) => a - b);
    
    for (let i = 0; i < changed.length; i++) {
        const currentValue = changed[i];

        if (map.has(currentValue)) {
            const currentValueFrequencyAtMoment = map.get(currentValue);
            
            if (currentValueFrequencyAtMoment === 1) {
                map.delete(currentValue)
            } else {
                map.set(currentValue, currentValueFrequencyAtMoment - 1);
            }
        } else {
            const doubledValue = currentValue * 2;

            if (map.has(doubledValue)) {
                map.set(doubledValue, map.get(doubledValue) + 1);
            } else {
                map.set(doubledValue, 1);
            }

            result.push(currentValue);
        }
    }
    
    return map.size > 0 ? [] : result;
};