/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        //get number of instances of nums[i]
        var numberOfInstances = 0;
        for (let j = i; j < nums.length; j++) {
            if (nums[j] === nums[i]) numberOfInstances++;
            else break;

        }
        //delete nums[i]
        if (numberOfInstances > 1)
            nums.splice(i+1, numberOfInstances - 1);

    }
    return nums.length;
};
console.log(removeDuplicates([1, 1, 2]));