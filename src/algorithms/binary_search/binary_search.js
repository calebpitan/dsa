/**
 * Search through a sorted `arr` for a value `n` in `O(log (i))`
 * @param {number} n The value to search for
 * @param {number[]} arr The sorted array from which to search
 * @param {number=} start The start of the array
 * @param {number=} end The end of the array
 * @returns {number}
 */
function binary_search(n, arr, start = 0, end = arr.length - 1) {
  if (start > end) return -1;
  const mid = Math.floor((start + end) / 2);
  if (arr[mid] === n) return mid;
  if (arr[mid] > n) return binary_search(n, arr, start, mid - 1);
  return binary_search(n, arr, mid + 1, end);
}

export { binary_search };
