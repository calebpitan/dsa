import { longestPalindromeSubstring } from "./longest_palindrome_substring";

describe("longest_palindrome_substring", () => {
  let strings = [
    "caba",
    "babad",
    "cbbd",
    "bananas",
    "ababababababa",
    "tattarrattat",
    "aaaa",
    "racecarnursesrun",
    "someracecartracknursesrunonwasitacatisawthere"
  ];

  let expected = [
    "aba",
    "bab",
    "bb",
    "anana",
    "ababababababa",
    "tattarrattat",
    "aaaa",
    "nursesrun",
    "wasitacatisaw"
  ];

  it("#longetsPalindromeSubstring - should find the longest palindrome within a string", () => {
    expect(longestPalindromeSubstring("caba")).toBe("aba");
    strings.forEach((string, i) => {
      expect(longestPalindromeSubstring(string)).toBe(expected[i])
    })
  });
});
