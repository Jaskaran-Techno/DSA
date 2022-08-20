/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
        let arr = nums1.concat(nums2)
    arr.sort((x,y)=>x-y)
   
    let size = arr.length
    if(size%2==0){
     let med = size/2
     let ian = med-1
     let res = (arr[med] + arr[ian])/2
    
     return res;
    }
    
   let median = Math.floor(size/2);
    let res = arr[median]
  
    return res ;
    

};