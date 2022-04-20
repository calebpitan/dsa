import { PriorityQueue } from "../../../data_structures/priority_queue/priority_queue.js";

/**
 * Find the median stream of every subarray of array `arr` sliced from `0..i` as `i` progresses
 * from `1..n` where `n` is the length of the array `arr`.
 * @param {number[]} arr The array from whose subarrays from `0..i` to find median stream for
 * @returns {number[]}
 */
 function findMedian(arr) {
  // Write your code here
  /** @type {PriorityQueue<undefined>} */
  const large = new PriorityQueue(PriorityQueue.MAX)

  /** @type {PriorityQueue<undefined>} */
  const small = new PriorityQueue(PriorityQueue.MIN)

  const output = [];

  for (let i = 0; i < arr.length; i++) {
    if ((i + 1) % 2 === 0) {
      large.enqueue(arr[i])
      small.enqueue(large.dequeue())
      output[i] = Math.floor((small.peek() + large.peek()) / 2)
      continue;
    }
    small.enqueue(arr[i])
    large.enqueue(small.dequeue())
    output[i] = large.peek();
  }
  return output;
}

export { findMedian };

// Large        Small       Output
// []           [5]         []
// [5]          []          [5]
// [5, 15]      []          [5]
// [5]          [15]        [5, 10]
// [5]          [1, 15]     [5, 10]
// [1, 5]       [15]        [5, 10, 5]
// [1, 3, 5]    [15]        [5, 10, 5]
// [1, 3]       [5, 15]     [5, 10, 5, 8]

