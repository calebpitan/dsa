import {
  heapify,
  insert,
  remove,
} from "../../../data_structures/heap/max_heap.js";

/**
 * Find the largest triple products of each subarray of array `arr` that
 * can be generated from `arr[0]` to `arr[i]`.
 *
 * Triple products for subarrays with length less than `3` is `-1`
 * (See [Readme](./README.md))
 *
 * ### Solution
 *
 * 1. We can pre-empt the product for the first three subarrays by knowing that
 * product for first two subarrays (`arr[0], arr[0, 1]`) with length less than
 * `3` is `-1` and for the third subarray with length equals `3` is the product
 * of all elements in that subarray.
 *
 * 2. Further after that, we slice the first three elements which composed the
 * third subarray (for the first subarray `arr[0]`, second subarray `arr[0, 1]`,
 * third subarray `arr[0, 1, 2]`).
 *
 * 3. We initialize three variables `max1, max2, max3` which would contain the
 * values removed from the root of our max-heap data structure, making them the
 * three maximum values in the subarray, `arr[0..i]` at that index `i`.
 *
 * 4. We heapify the subarray we sliced from (2) in `O(n)` time. In overall
 * complexity of the solution this would only contribute a `O(1)` complexity
 * because `n` would always have a constant value of `3` for every `size(arr)`.
 *
 * 5. We loop from `i = 3` through to `i = n - 1`. This makes sure the first
 * three slices aren't looped over since we've computed their product and they
 * already exist inside our max-heap.
 *
 * 6. If our `max` variables `(max1, max2, max3)` have a value that isn't undefined
 * they represent the values removed from the heap in our previous iteration `i - 1`.
 * We want them inserted back into the heap because they are part of the subarray of
 * the current iteration `i`. This now makes our heap a heap of subarray `arr[0..i -1]`.
 * This is done in `O(log n)` or `O(h)` time.
 *
 * 7. We go ahead and add the current element at `i` to the heap, completely making it
 * a heap of the current subarray `arr[0..i]`.
 *
 * 8. We remove the three maximum values again and assign them to our `max` variables
 * so they can be added back in the next iteration if any.
 *
 * 9. Compute `output[i]` as the product of the three max elements of subarray `arr[0..i]`
 *
 * 10. Return the output.
 *
 * @param {number[]} arr The array to find largest triple products from
 * @returns {number[]}
 */
function findMaxProduct(arr) {
  // Write your code here
  const output = [-1, -1, arr[0] * arr[1] * arr[2]];
  const heap = arr.slice(0, 3);
  let max1, max2, max3;

  // O(n) equivalent to O(1) because `n = 3` irrespective of `size(arr)`
  heapify(heap);

  for (let i = 3; i < arr.length; i++) {
    if (max1 && max2 && max3) {
      insert(heap, max1);
      insert(heap, max2);
      insert(heap, max3);
    }

    insert(heap, arr[i]); // O(log n)

    [max1, max2, max3] = [remove(heap, 0), remove(heap, 0), remove(heap, 0)]; // O(log n)

    output[i] = max1 * max2 * max3;
  }
  return output;
}

export { findMaxProduct };
