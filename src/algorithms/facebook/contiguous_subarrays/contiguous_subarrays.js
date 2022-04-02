/**
 * 
 * @param {number} n The number to the left or right of the subarray being the max
 * @param {number[]} arr The array to collect subarrays from
 * @param {number} start The position `i` of `n` in `arr`
 * @param {number=} pos The position further to the left or right of `n` or `arr[i]`
 * @returns {number}
 */
function countLessThan(n, arr, start, pos = start) {
  const [next, prev] = [pos + 1, pos - 1];
  if (arr[next] < n && arr[prev] < n) {
    const c = pos >= start ? countLessThan(n, arr, start, next) : 0;
    const d = pos <= start ? countLessThan(n, arr, start, prev) : 0;
    return 1 + c + d;
  } else if (pos >= start && arr[next] < n) {
    return 1 + countLessThan(n, arr, start, next);
  } else if (pos <= start && arr[prev] < n) {
    return 1 + countLessThan(n, arr, start, prev);
  }
  return 1;
}

/**
 * Count the number of subarrays that can be collected from an array while
 * adhereing to a given constraint [README](./README.md) 
 * @param {number[]} arr The array to count subarrays from
 * @returns {number[]}
 */
function countSubarrays(arr) {
  // Write your code here
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(countLessThan(arr[i], arr, i));
  }
  return result;
}

export { countSubarrays };
