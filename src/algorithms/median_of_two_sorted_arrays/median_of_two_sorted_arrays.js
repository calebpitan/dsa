/**
 * Find the median from of two sorted arrays assuming they are merged as one
 *
 * ## Solution
 *
 * 1. If `m` and `n` are sizes of the array respectively, make sure `m <= n`
 * 2. Initialize two pointers for the smaller of the arrays
 * 3. Get the half of the sum of the sizes of both arrays
 * 4. Loop infinitely...
 * 5. Initialize a pointer to the middle of the smaller array
 * 6. Initialize a pointer to another point (x) in the larger array, making
 * sure the size of the elements from the `0` pointer to the `mid` of the smaller array
 * plus the size of the elements from the `0` pointer to the point `x` of the larger
 * array is not greater than half of their total size.
 * 7. For both arrays...
 * 8. While the index of the mid pointer isn't out of bounds pick the element at that
 * position in the array else assign a negative infinity
 * 9. While the index of the offset mid pointer isn't out of bounds pick the element at
 * that position in the array else assign infinity
 * 10. 
 *
 * @param {number[]} nums1 One of the two sorted arrays
 * @param {number[]} nums2 The second of the two sorted arrays
 * @returns {number}
 */
function findMedianSortedArrays(nums1, nums2) {
  let m = nums1.length;
  let n = nums2.length;
  let total = m + n;
  let half = Math.floor(total / 2);

  let l = 0;
  let r = m;
  let median = 0;

  if (n < m) return findMedianSortedArrays(nums2, nums1);

  while (l <= r) {
    let mid1 = Math.floor((l + r) / 2);
    let mid2 = half - mid1;

    let left1 = mid1 > 0 ? nums1[mid1 - 1] : -Infinity;
    let left2 = mid2 > 0 ? nums2[mid2 - 1] : -Infinity;
    let right1 = mid1 < m ? nums1[mid1] : Infinity;
    let right2 = mid2 < n ? nums2[mid2] : Infinity;

    if (left1 <= right2 && left2 <= right1) {
      if (total % 2 == 1) return Math.min(right1, right2);
      return (Math.max(left1, left2) + Math.min(right1, right2)) / 2;
    } else if (left1 > right2) {
      r = mid1 - 1;
    } else if (left2 > right1) {
      l = mid1 + 1;
    }
  }
  return median;
}

export { findMedianSortedArrays };
