import { findMaxProduct } from "./largest_triple_product.js";

describe("largest_triple_product", () => {
  const arr_1 = [1, 2, 3, 4, 5];
  const expected_1 = [-1, -1, 6, 24, 60];

  const arr_2 = [2, 4, 7, 1, 5, 3];
  const expected_2 = [-1, -1, 56, 56, 140, 140];

  it("#findMaxProduct - should find the largest triple product in every subarray at ending at the `ith` index", () => {
    const result1 = findMaxProduct(arr_1);
    const result2 = findMaxProduct(arr_2);

    expect(result1).toMatchObject(expected_1);
    expect(result2).toMatchObject(expected_2);
  });
});
