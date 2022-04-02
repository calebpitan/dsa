import { mergesort } from "./merge_sort.js";

describe("merge_sort", () => {
  const arr = [5, 17, 19, 1, 25, 16, 9, 3, 4, 6, 3, 4];
  const expected = [1, 3, 3, 4, 4, 5, 6, 9, 16, 17, 19, 25];

  it("#mergesort - should sort an array of `n` integers in `O(n log(n))`", () => {
    const sorted = mergesort(arr);
    expect(sorted).toMatchObject(expected);
  });
});
