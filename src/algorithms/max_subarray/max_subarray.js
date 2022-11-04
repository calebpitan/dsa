/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
  let i = 0;
  let runningSum = 0;
  let maxSum = -Infinity;

  while (i < nums.length) {
    runningSum += nums[i++];
    maxSum = Math.max(maxSum, runningSum);

    if (Math.sign(runningSum) === -1) {
      runningSum = 0;
    }
  }

  return maxSum;
}

export { maxSubArray };
