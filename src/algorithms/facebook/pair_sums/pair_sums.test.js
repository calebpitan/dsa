import { numberOfWays } from "./pair_sums.js";

describe("pair_sums", () => {
  const arr = [1, 2, 3, 4, 3];
  const arr2 = [1, 5, 3, 3, 3];
  const k = 6;

  it("#numberOfWays - should return the number of pairs `(a, b)` in `arr` that sum up to `k`", () => {
    const ways = numberOfWays(arr, k);
    const ways2 = numberOfWays(arr2, k);

    expect(ways).toBe(2);
    expect(ways2).toBe(4);
  });
});
