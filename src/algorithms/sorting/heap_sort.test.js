import { heapsort } from "./heap_sort.js";

describe("heap_sort", () => {
  const arr = [5, 17, 19, 1, 25, 16, 9, 3, 4, 6, 3, 4];
  const sorted = [1, 3, 3, 4, 4, 5, 6, 9, 16, 17, 19, 25];

  it("#heapsort - should sort an array of `n` integers in `O(n log(n))`", () => {
    heapsort(arr);
    expect(arr).toMatchObject(sorted);
  });
});
