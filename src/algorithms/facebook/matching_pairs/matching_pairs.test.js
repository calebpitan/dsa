import { matchingPairs } from "./matching_pairs.js";

describe("matching_pairs", () => {
  const [s1, t1] = ["abcde", "adcbe"];
  const [s2, t2] = ["abcd", "abcd"];
  const [s3, t3] = ["abcde", "adcfe"];
  const [s4, t4] = ['abcd', 'abce']
  const [s5, t5] = ['aabcd', 'aabcd']
  const [expected1, expected2, expected3, expected4, expected5] = [5, 2, 4, 2, 5];

  it("#matchingPairs - should count the matching pairs in two strings s and t after swapping two indices of one of the pair", () => {
    expect(matchingPairs(s1, t1)).toBe(expected1);
    expect(matchingPairs(s2, t2)).toBe(expected2);
    expect(matchingPairs(s3, t3)).toBe(expected3);
    expect(matchingPairs(s4, t4)).toBe(expected4);
    expect(matchingPairs(s5, t5)).toBe(expected5);
  });
});
