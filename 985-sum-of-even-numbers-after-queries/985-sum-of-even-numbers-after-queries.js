/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(nums, queries) {
    let res = [];
    let evenSum = 0;      
       
    for (let num of nums){
        //calculate even sum
        if (num % 2 == 0) {
            evenSum += num;
        }      
    }
    
    for (let i=0; i < nums.length; i++) {       
        let val = queries[i][0], index = queries[i][1];
        let sum = val + nums[index];     
               
        if (sum % 2 == 0) {
            nums[index] % 2 == 0 ? evenSum += val : evenSum += (val + nums[index]);
        } else {
            nums[index] % 2 == 0 ? evenSum -= nums[index] : false;
        }
        nums[index] += val;
        res[i] = evenSum;        
    }
    return res;    
};