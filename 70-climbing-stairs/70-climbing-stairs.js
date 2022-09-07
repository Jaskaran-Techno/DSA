/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let memo={};
    function totalWays(n){
        if(n<3) return n;
        if(memo[n]) return memo[n];
        memo[n]=totalWays(n-1)+totalWays(n-2);
        return memo[n];
    }
    return totalWays(n);
};