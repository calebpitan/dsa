import { maxSumOfSubarray } from "./maximum_sum_of_subarray.js";

describe("sliding_window", () => {
  describe("maximum_sum_of_subarray", () => {
    let arr = [4, 2, 1, 7, 8, 1, 2, 8, 1, 0];
    let k = 3;
    let expected = 16;

    it("#maxSumOfSubarray", () => {
      let result = maxSumOfSubarray(arr, k);
      expect(result).toBe(expected);
    });
  });
});
