import { isBalanced } from "./balance_bracket.js";

describe("balance_bracket", () => {
  let [s1, expected1] = ["{[(])}", false];
  let [s2, expected2] = ["{{[[(())]]}}", true];
  let [s3, expected3] = [")", false];
  let [s4, expected4] = ["{}()", true];
  let [s5, expected5] = ["{(})", false];

  it("#isBalanced - should return false if the brackets in a string are unbalanced otherwise true", () => {
    let result1 = isBalanced(s1);
    let result2 = isBalanced(s2);
    let result3 = isBalanced(s3);
    let result4 = isBalanced(s4);
    let result5 = isBalanced(s5);

    expect(result1).toBe(expected1);
    expect(result2).toBe(expected2);
    expect(result3).toBe(expected3);
    expect(result4).toBe(expected4);
    expect(result5).toBe(expected5);
  });
});
