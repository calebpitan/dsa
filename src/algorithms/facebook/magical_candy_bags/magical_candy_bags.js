import { PriorityQueue } from "../../../data_structures/priority_queue/priority_queue.js";

/**
 * Count the maximum amount of candy that can be eaten from `n` bags of candies.
 * Each candy refills with half it original number, floored.
 *
 * @param {number[]} arr The array of the amount of candy in each bag of candies
 * @param {number} k The time in minutes we have to eat as much candies
 * @returns {number}
 */
function maxCandies(arr, k) {
  // O(max(k, n) * log(n))
  // Write your code here
  const pq = new PriorityQueue();
  let output = 0;

  // O(n)
  for (let i = 0; i < arr.length; i++) {
    pq.enqueue(arr[i]); // O(log n)
  }

  // O(k)
  while (k > 0) {
    const candy = pq.dequeue(); // O(log n)
    pq.enqueue(Math.floor(candy / 2)); // O(log n)
    output += candy;
    k--;
  }

  return output;
}

export { maxCandies };
