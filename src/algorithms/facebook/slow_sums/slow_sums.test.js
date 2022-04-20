import { getTotalTime } from "./slow_sums.js";

describe("slow_sum", () => {
  const arr = [4, 2, 1, 3];
  const output = 26;
  it("#getTotalTime - should return the highest possible penalty", () => {
    expect(getTotalTime(arr)).toBe(output);
  });
});
