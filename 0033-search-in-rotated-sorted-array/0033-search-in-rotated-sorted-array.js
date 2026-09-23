/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
   let left = 0, right = nums.length - 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] == target) {
            return mid
        }
        else if (nums[left] <= nums[mid]) {//left half is sorted
            //now chk if target falls under left to mid, if yes r=mid-1 or else left=mid +1
            if (target >= nums[left] && target <= nums[mid])
                right = mid - 1
            else
                left = mid + 1
        }
        else {  //right half is sorted
            //now chk if target falls under mid to right,
            if (target >= nums[mid] && target <= nums[right])
                left = mid + 1
            else
                right = mid - 1
        }
    }
    return -1
};