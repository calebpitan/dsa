import { heapify, siftdown, size } from "../../data_structures/heap/max_heap.js";

/**
 * Sort an array of numbers using heap sort in `O(n log(n))`
 * @param {number[]} arr The array to be sorted
 */
function heapsort(arr) {
  let end = size(arr) - 1;
  heapify(arr);

  while (end > 0) {
    [arr[end], arr[0]] = [arr[0], arr[end]];
    end--;
    siftdown(arr, 0, end);
  }
}

export { heapsort };
