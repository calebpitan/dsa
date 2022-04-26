import { findMedianSortedArrays } from "./median_of_two_sorted_arrays";

describe("median_of_two_arrays", () => {
  let [nums1, nums2] = [
    [1, 2, 4, 5],
    [3, 6, 7, 8],
  ]; // 3           6.5
  let expected1 = 4.5;

  let [nums1a, nums2a] = [
    [6, 9, 11, 12, 15],
    [1, 3, 5],
  ]; // 11              3
  let expected2 = 7.5;

  let [nums1b, nums2b] = [
    [6, 9, 11, 12, 15],
    [8, 10, 13, 17],
  ]; //  11                 11.5
  let expected3 = 11;

  it("#findMedianSortedArrays", () => {
    let result1 = findMedianSortedArrays(nums1, nums2);
    let result2 = findMedianSortedArrays(nums1a, nums2a);
    let result3 = findMedianSortedArrays(nums1b, nums2b);

    expect(result1).toStrictEqual(expected1);
    expect(result2).toStrictEqual(expected2);
    expect(result3).toStrictEqual(expected3);
  });
});
