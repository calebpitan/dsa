import { minLengthSubstring } from "./minimum_length_substring.js";

describe("minimum_length_substring", () => {
  const s1 = "dcbefebce";
  const t1 = "fd";
  const expected1 = 5;

  const s2 = "bfbeadbcbcbfeaaeefcddcccbbbfaaafdbebedddf";
  const t2 = "cbccfafebccdccebdd";
  const expected2 = -1;

  const s3 = "dcbefed"; //dcbefde //fdb
  const t3 = "fd";
  const expected3 = 3;

  it("#minLengthSubstring", () => {
    expect(minLengthSubstring(s1, t1)).toBe(expected1);
    expect(minLengthSubstring(s2, t2)).toBe(expected2);
    expect(minLengthSubstring(s3, t3)).toBe(expected3);
  });
});
