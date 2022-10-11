/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
     if (nums.length < 3) return false;
    let temp1 = Number.MAX_VALUE;
    let temp2 = Number.MAX_VALUE;
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] <= temp1) {
            temp1 = nums[i]
        } else if (nums[i] <= temp2) {
            temp2 = nums[i]
        } else {
            return true;
        }
    }
    return false;
};