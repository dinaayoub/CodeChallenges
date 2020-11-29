/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    var leftIndex = 0;
    var rightIndex = nums.length;

    //if (nums.length === 0 || nums[0] > target) return 0;
    //if (nums[nums.length-1] < target) return nums.length;

    while (leftIndex < rightIndex) {
        var mid = Math.floor((leftIndex + rightIndex) / 2);
        if (target === nums[mid]) return mid;
        else if (target > nums[mid]) {
            leftIndex = mid + 1;
        }
        else if (target < nums[mid]) {
            rightIndex = mid ;
        }
    }
    return leftIndex;
    
    /* Brute force way - for some bizarre reason this is registering as slower on leetcode, but for a large n it shouldn't be?
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) return i;
    }
    return nums.length;*/
};

console.log(searchInsert([1, 3, 5, 6, 7,8,9,11,12,13,41,51,61,71,81,91,550,999,1200,4234,5345,5665,6655,8990], 4));