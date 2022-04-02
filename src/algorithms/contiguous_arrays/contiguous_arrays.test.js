import { findMaxLength } from "./contiguous_arrays.js";

describe("contiguous_arrays", () => {
  // largest subarray is from index 1 to index 13 with six 1s and six 0s
  const data = [1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1];

  it("#findMaxLength - should return the maximum number of subarrays", () => {
    const max = findMaxLength(data);

    expect(max).toBe(12);
  });
});
