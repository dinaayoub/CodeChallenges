/**
* @param {number[]} nums
* @return {number}
*/
var maxSubArray = function (nums) {
  if (!nums) return null;
  let maxSum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    // console.log(`i = ${i}, and nums[i] = ${nums[i]}`);
    if (nums[i] > 0) {
      let currentSum = 0;
      for (let j = i; j < nums.length; j++) {
        // console.log(`\tj = ${j}, and nums[j] = ${nums[j]}`);
        currentSum += nums[j];
        if (currentSum > maxSum) maxSum = currentSum;
      }
    } else if (nums[i] > maxSum) maxSum = nums[i];
  }
  return maxSum;
};

// console.log(maxSubArray([-2, -1]));