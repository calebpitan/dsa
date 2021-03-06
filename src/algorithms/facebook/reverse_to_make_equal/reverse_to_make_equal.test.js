import { areTheyEqual } from "./reverse_to_make_equal.js";

describe("reverse_to_make_equal", () => {
  const arr1 = [1, 2, 3, 4];
  const arr2 = [1, 4, 3, 2];

  const arr3 = [1, 5, 3, 4];
  const arr4 = [1, 9, 3, 2];

  it("#areTheyEqual - should return true when one of both arrays can be rearranged to make them equal", () => {
    const areEqual = areTheyEqual(arr1, arr2);

    expect(areEqual).toBe(true);
  });

  it("#areTheyEqual - should return false when none of both arrays can be rearranged to make them equal", () => {
    const areEqual = areTheyEqual(arr3, arr4);

    expect(areEqual).toBe(false);
  });
});
