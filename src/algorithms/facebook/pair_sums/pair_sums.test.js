import { numberOfWays } from "./pair_sums.js";

describe("pair_sums", () => {
  const arr = [1, 2, 3, 4, 3];
  const arr2 = [1, 5, 3, 3, 3];
  const arr3 = [-1, 5, 0, 4, 2, 5];
  const k = 6;
  const k3 = 4

  it("#numberOfWays - should return the number of pairs `(a, b)` in `arr` that sum up to `k`", () => {
    const ways = numberOfWays(arr, k);
    const ways2 = numberOfWays(arr2, k);
    const ways3 = numberOfWays(arr3, k3);

    expect(ways).toBe(2);
    expect(ways2).toBe(4);
    expect(ways3).toBe(3);
  });
});
