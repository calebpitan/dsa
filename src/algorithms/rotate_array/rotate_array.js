/**
 * Reverse an array from `start` to `end`
 * @param {number[]} arr The array to reverse
 * @param {number} start Where to start reversing from
 * @param {number} end Where to stop reversing
 * @returns {void} Reverses array in place
 */
function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

/**
 * Rotate an array to the right by `k` rotations
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const end = nums.length - 1;

  if (k === 0) return;

  k %= nums.length;

  reverse(nums, 0, end);
  reverse(nums, 0, k - 1);
  reverse(nums, k, end);
};

export { rotate };
