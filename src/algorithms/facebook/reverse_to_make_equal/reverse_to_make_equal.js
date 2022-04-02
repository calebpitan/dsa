/**
 * Check that all numbers in the array are zero
 * @param  {...number} nums
 * @returns {boolean}
 */
const allZero = (...nums) => nums.every((num) => num === 0);

/**
 * Check if an array can be rearranged to make it equal to the other
 * @param {number[]} array_a One of two arrays
 * @param {number[]} array_b Two of two arrays
 * @returns {boolean}
 */
function areTheyEqual(array_a, array_b) {
  // Write your code here
  const hm = new Map();
  for (let i = 0; i < array_a.length; i++) {
    const [val_a, val_b] = [array_a[i], array_b[i]];

    if (hm.has(val_a)) {
      hm.set(val_a, 1 + hm.get(val_a));
    } else {
      hm.set(val_a, 1);
    }

    if (hm.has(val_b)) {
      hm.set(val_b, hm.get(val_b) - 1);
    } else {
      hm.set(val_b, -1);
    }
  }

  return allZero(...hm.values());
}

export { areTheyEqual };
