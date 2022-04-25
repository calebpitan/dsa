/**
 * Find the smallest subarray that sums up to `k` from array `arr`
 * @param {number[]} arr The array from which to get the smallest subarray that sums up to `k`
 * @param {number} k Target sum
 * @returns {number}
 */
function smallestSubArrayWithSumK(arr, k) {
  let runningSum = 0;
  let length = Infinity;
  let start = 0;

  for (let i = 0; i < arr.length; i++) {
    runningSum += arr[i];

    while (runningSum > k) {
      runningSum -= arr[start++];
    }

    if (runningSum == k) {
      length = Math.min(length, i - (start - 1));
    }
  }

  return length;
}

export { smallestSubArrayWithSumK };
