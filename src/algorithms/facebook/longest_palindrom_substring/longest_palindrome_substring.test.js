import { longestPalindromeSubstring } from "./longest_palindrome_substring";

describe("longest_palindrome_substring", () => {
  it("#longetsPalindromeSubstring - should find the longest palindrome within a string", () => {
    expect(longestPalindromeSubstring("caba")).toBe("aba");
    expect(longestPalindromeSubstring("racecarnursesrun")).toBe("nursesrun");
    expect(
      longestPalindromeSubstring(
        "someracecartracknursesrunonwasitacatisawthere"
      )
    ).toBe("wasitacatisaw");
  });
});
