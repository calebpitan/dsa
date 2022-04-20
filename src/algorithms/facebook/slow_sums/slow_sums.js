import {
  heapify,
  insert,
  remove,
} from "../../../data_structures/heap/max_heap.js";

/**
 * Calculate the highest possible penalty for repeatedly
 * removing two numbers from the array, summing it up and
 * inserting this sum back into the array while the array
 * still contains some element(s).
 *
 * The total penalties must be the highest possible penalties
 * which is the sum of penalties accumulated from each step.
 *
 * @param {number[]} arr The array of time
 * @returns {number}
 */
function getTotalTime(arr) {
  // Write your code here
  let penalties = 0;
  heapify(arr);

  if (arr.length === 1) return arr[0]

  while (arr.length > 0) {
    const penalty = remove(arr) + remove(arr);
    penalties += penalty;

    if (arr.length > 0) {
      insert(arr, penalty);
    }
  }

  return penalties;
}

export { getTotalTime };
