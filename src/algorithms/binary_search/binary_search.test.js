import { binary_search } from "./binary_search.js";

describe("binary_search", () => {
  const data = [1, 5, 6, 6, 7, 10, 25, 46, 92, 124, 127];
  it("#binary_search - should return the index where a value was found in a pre-sorted array", () => {
    const index = binary_search(7, data);
    const index2 = binary_search(6, data);

    expect(index).toBe(4);
    expect(index2).toBe(2);
  });

  it("#binary_search - should return the `-1` when the values isn't found in the array", () => {
    const index = binary_search(17, data);
    const index2 = binary_search(26, data);

    expect(index).toBe(-1);
    expect(index2).toBe(-1);
  });
});
