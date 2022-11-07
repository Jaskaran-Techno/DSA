/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
     let numString = num.toString().replace("6", "9");
    return parseInt(numString);
};