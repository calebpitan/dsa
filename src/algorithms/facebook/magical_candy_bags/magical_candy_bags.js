import { heapify, insert, remove } from "../../../data_structures/heap/max_heap.js";

/**
 * Count the maximum amount of candy that can be eaten from `n` bags of candies
 * in `k` minutes.
 * Each candy refills with half it original number, floored.
 *
 * ### Solution
 *
 * 1. Max-heapify the array `arr` in `O(n)` time
 * 2. While `k` minutes is not zero, pick a bag, in `O(log n)`, that has the largest
 * amount of candy in it, consume all the candies in the bag in one minute and
 * increase the counter, `output`, by the number of candies in that bag.
 * 3. Refill the bag with the floored value of half the number of candies that
 * was previously inside it, in `(log n)` time.
 * 3. Recuce `k` by the one minute it took to consume one bag of candies.
 * 4. Go to step (2)
 * 5. A resultant loop with time complexity `O(k log n)`
 * 6. A resultant solution with time complexity `O(n + k log n)` and space `O(1)`
 *
 * @param {number[]} arr The array of the amount of candy in each bag of candies
 * @param {number} k The time in minutes we have to eat as much candies
 * @returns {number}
 */
function maxCandies(arr, k) {
  // Write your code here
  let output = 0;

  heapify(arr)

  while (k > 0) {
    const candy = remove(arr)
    output += candy;
    insert(arr, Math.floor(candy / 2))
    k--;
  }

  return output;
}

export { maxCandies };
