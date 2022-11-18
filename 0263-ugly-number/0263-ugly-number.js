/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
     if(n <= 0) return false;
    // Anything below 5 is ugly
    if(n <= 5) return true;
    
    // Start dividing recursively
    for(const divider of [2, 3, 5]) {
        if(n % divider === 0) {
            return isUgly(n / divider);
        }
    }
    return false;
};