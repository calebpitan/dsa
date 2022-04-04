import { maxCandies } from "./magical_candy_bags";

describe("magical_candy_bags", () => {
  let k_1 = 3;
  let arr_1 = [2, 1, 7, 4, 2];
  let expected_1 = 14;

  let k_2 = 3;
  let arr_2 = [19, 78, 76, 72, 48, 8, 24, 74, 29];
  let expected_2 = 228;

  it("#maxCandies - should return the maximum amount of candies that can be eaten in k minutes", () => {
    expect(maxCandies(arr_1, k_1)).toBe(expected_1);
    expect(maxCandies(arr_2, k_2)).toBe(expected_2);
  });
});
