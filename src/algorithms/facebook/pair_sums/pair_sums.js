/**
 * Count the number of ways a sum `k` can be totaled by picking two
 * numbers from the set `arr`.
 *
 * **Note:** The number of ways for numbers in the set occuring more
 * than once yet together with another pair sums up to `k` would be
 * the number of occurence `n` combination `2`
 *
 * **Example:** arr = [1, 5, 3, 3, 3]
 * 3 in arr occurs three times (n = 3)
 * @param {number[]} arr The array to check for pair sums
 * @param {number} k The number both pairs must sum up to
 * @returns {number}
 */
function numberOfWays(arr, k) {
  // Write your code here
  /**
   * @type {Map<number, number>}
   */
  const hm = new Map();
  let ways = 0;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const count = hm.get(num);
    if (count) {
      hm.set(num, count + 1);
      continue;
    }
    hm.set(num, 1);
  }

  for (let j = 0; j < arr.length; j++) {
    const num = arr[j];
    const remainder = k - num;
    const count = hm.get(remainder);
    if (count) ways += count;
    if (remainder === num) ways--;
  }

  return ways / 2;
}

export { numberOfWays };
