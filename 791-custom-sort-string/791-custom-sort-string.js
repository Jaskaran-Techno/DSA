/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    const hash = order.split('').reduce((res, c, i) => {
        res[c] = i;
        return res;
    }, {});
    
    return s.split('').sort((a, b) => {
        const p = hash[a];
        const q = hash[b];
        
        return (p || 0) - (q || 0);
    }).join(''); 
};