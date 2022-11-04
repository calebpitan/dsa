import { maxSubArray } from "./max_subarray.js";

describe("max_subarray", () => {
  let nums1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  let nums2 = [1];
  let nums3 = [5, 4, -1, 7, 8];
  let nums4 = [-1];

  let expected1 = 6;
  let expected2 = 1;
  let expected3 = 23;
  let expected4 = -1;

  it("#maxSubArray", () => {
    expect(maxSubArray(nums1)).toBe(expected1);
    expect(maxSubArray(nums2)).toBe(expected2);
    expect(maxSubArray(nums3)).toBe(expected3);
    expect(maxSubArray(nums4)).toBe(expected4);
  });
});
