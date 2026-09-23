/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
   let first = 0 , last = nums.length -1
   while(first<= last){
    let m = Math.floor((first+last)/2)
    if(nums[m]===target) return m
    if(nums[first]<=nums[m]){
        if(target>=nums[first] && target<=nums[m]) last = m
        else first = m+1
    }else{
        if(target>=nums[m+1] && target<=nums[last]) first = m+1
        else last = m
    }
   }
     return -1
};