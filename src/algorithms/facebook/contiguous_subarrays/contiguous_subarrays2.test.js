import { countSubarrays } from "./contiguous_subarrays2.js";

describe("contiguous_subarrays2", () => {
  const arr = [3, 4, 1, 6, 2]
  const output = [1, 3, 1, 5, 1]

  it("#countSubarrays - should return the number of subarrays", () => {
    const result = countSubarrays(arr);

    expect(result).toMatchObject(output);
  });
});
