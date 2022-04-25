/**
 * Find the max sum of subarray of size `k` from array `arr`
 * @param {number[]} arr The array to find subarray of size `k` from with max sum
 * @param {number} k Target subarray size
 */
function maxSumOfSubarray(arr, k) {
  let max = -Infinity;
  let runningSum = 0;
  let start = 0;
  for (let i = 0; i < arr.length - k; i++) {
    runningSum += arr[i];

    if (i >= k - 1) {
      max = Math.max(max, runningSum);
      runningSum -= arr[start++];
    }
  }
  return max;
}

export { maxSumOfSubarray };
