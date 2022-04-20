import { heapsort } from "../../sorting/heap_sort.js";

/**
 * Find the median stream of every subarray of array `arr` sliced from `0..i` as `i` progresses
 * from `1..n` where `n` is the length of the array `arr`.
 * @param {number[]} arr The array from whose subarrays from `0..i` to find median stream for
 * @returns {number[]}
 */
function findMedian(arr) {
  // Write your code here
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    const slice = arr.slice(0, i + 1);
    heapsort(slice);

    if (slice.length % 2 === 0) {
      const mid1 = slice.length / 2;
      const mid2 = mid1 - 1;
      output[i] = Math.floor((slice[mid1] + slice[mid2]) / 2);
      continue;
    }
    output[i] = slice[Math.floor(slice.length / 2)];
  }
  return output;
}

export { findMedian };
