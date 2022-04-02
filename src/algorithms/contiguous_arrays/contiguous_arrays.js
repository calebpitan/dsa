/**
 * Compute the maximum length of a subarray or contiguous array that
 * can be obtained from the array of binary integers `nums`
 *
 * ### Logic
 *
 * We keep track of a `count` which gets incremented when we encounter
 * a `1` and decremented when we encounter a `0`.
 *
 * We have an hashmap with the `count` as key and the `index` of the
 * current element of the array as value.
 * `Map { count => index }`
 *
 * We initialize a `max_length` variable with value `0` which we'd
 * always update with the result of index of previous occurence of
 * `count` in the hashmap subtracted from index of current occurence of
 * `count`.
 *
 * If the current computed `count` already exists as a key in the map,
 * it only tells us that somewhere in between the prior occurence
 * `map.get(count)` and the current index there exists a subarray or
 * contiguous array and the new `max_length` will be the index of
 * of previous occurence subtracted from index of current occurence
 *
 * If it doesn't yet exist in the map we set it
 * `map.set(count, index)`.
 *
 * We subtract the index of previous occurence from the index of
 * current occurence of the same `count` and update the value of
 * `max_length` with the greater between the former value and the
 * newly computed one.
 * `max_length = Math.max(max_length, index - map.get(count))`
 *
 * @param {number[]} nums
 * The array of binary integers to compute length of contiguous array
 * from
 * @returns {number}
 */
function findMaxLength(nums) {
  /**
   * @type {Map<number, number>}
   */
  const hashmap = new Map([[0, -1]]);
  let [count, max_length] = [0, 0];

  for (let i = 0; i < nums.length; i++) {
    count += nums[i] === 0 ? -1 : 1;
    if (hashmap.has(count)) {
      const prior_index = hashmap.get(count); // @ts-ignore
      max_length = Math.max(max_length, i - prior_index);
      continue;
    }
    hashmap.set(count, i);
  }

  return max_length;
}

export { findMaxLength };
