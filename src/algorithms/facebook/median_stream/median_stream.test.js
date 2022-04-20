import { findMedian } from "./median_stream.js";

describe("median_stream", () => {
  const arr = [5, 15, 1, 3];
  const output = [5, 10, 5, 4];

  const arr1 = [1, 2];
  const output1 = [1, 1];

  it("#findMedian - should find the median of each subarray of `arr[0..i]` from `i = 1..n`", () => {
    expect(findMedian(arr)).toMatchObject(output);
    expect(findMedian(arr1)).toMatchObject(output1);
  });
});
