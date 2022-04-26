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
 * 10. // (Too many edge cases)
 *
 * @param {number[]} nums1 One of the two sorted arrays
 * @param {number[]} nums2 The second of the two sorted arrays
 * @returns {number}
 */
function findMedianSortedArrays(nums1, nums2) {
  let m = nums1.length;
  let n = nums2.length;
  let l = 0;
  let r = m - 1;
  let total = m + n;
  let half = Math.floor(total / 2);

  if (m > n) return findMedianSortedArrays(nums2, nums1);

  if (m == 0) {
    let mid = Math.floor((n - 1) / 2);
    if (total % 2 == 1) return nums2[mid];
    return (nums2[mid] + nums2[mid + 1]) / 2;
  }

  if (n == 0) {
    let mid = Math.floor((m - 1) / 2);
    if (total % 2 == 1) return nums1[mid];
    return (nums1[mid] + nums1[mid + 1]) / 2;
  }

  while (true) {
    let mid1 = Math.floor((l + r) / 2);
    let mid2 = half - 1 - (mid1 + 1);

    let smallMid = mid1 >= 0 ? nums1[mid1] : -Infinity;
    let smallMidOffset = mid1 + 1 < m ? nums1[mid1 + 1] : Infinity;

    let largeMid = mid2 >= 0 ? nums2[mid2] : -Infinity;
    let largeMidOffset = mid2 + 1 < n ? nums2[mid2 + 1] : Infinity;

    if (smallMid <= largeMidOffset && largeMid <= smallMidOffset) {
      if (total % 2 == 1) {
        return Math.min(largeMidOffset, smallMidOffset);
      }
      return (
        (Math.max(largeMid, smallMid) +
          Math.min(largeMidOffset, smallMidOffset)) /
        2
      );
    } else if (smallMid > largeMidOffset) {
      r = mid2 - 1;
    } else if (largeMid > smallMidOffset) {
      l = mid1 + 1;
    }
  }
}

export { findMedianSortedArrays };
