import { smallestSubArrayWithSumK } from "./smallest_subarray_with_sum_k.js";

describe("sliding_window", () => {
  describe("smallest_subarray_with_sum_k", () => {
    let arr = [4, 2, 1, 7, 8, 1, 2, 8, 1, 0];
    let k = 16;
    let expected = 3;

    let arr2 = [2, 3, 1, 2, 4, 3];
    let k2 = 7;
    let expected2 = 2;

    let arr3 = [2, 3, 1, 7, 2, 4, 3];
    let k3 = 7;
    let expected3 = 1;

    it("#smallestSubArrayWithSumK", () => {
      let result = smallestSubArrayWithSumK(arr, k);
      let result2 = smallestSubArrayWithSumK(arr2, k2);
      let result3 = smallestSubArrayWithSumK(arr3, k3);

      expect(result).toBe(expected);
      expect(result2).toBe(expected2);
      expect(result3).toBe(expected3);
    });
  });
});
