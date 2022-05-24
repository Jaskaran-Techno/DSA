function largestPerimeter(nums: number[]): number {
 let l = nums.length-2;
    nums.sort((x, y)=>y-x);
    
    for(let i=0; i<l ;i++){
        if(nums[i]< nums[i+1] + nums[i+2]){
            return nums[i]+nums[i+1]+nums[i+2];
          }
    }return 0;
};