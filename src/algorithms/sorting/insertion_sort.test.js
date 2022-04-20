import { insertion_sort } from "./insertion_sort.js";

describe("insertion_sort", () => {
  const arr = [5, 17, 19, 1, 25, 16, 9, 3, 4, 6, 3, 4];
  const expected = [1, 3, 3, 4, 4, 5, 6, 9, 16, 17, 19, 25];

  it("#insertion_sort - should sort an array of `n` integers in `O(n)` best case `O(n^2)` worst case", () => {
    const sorted = insertion_sort(arr);
    expect(sorted).toMatchObject(expected);
  });
});
