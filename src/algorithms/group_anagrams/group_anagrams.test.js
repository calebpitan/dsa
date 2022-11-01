import { groupAnagrams } from "./group_anagrams.js";

describe("group_anagrams", () => {
  let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
  let expected = [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]
    .map((r) => r.sort())
    .sort();

  let strs2 = [""];
  let expected2 = [[""]];

  let strs3 = ["a"];
  let expected3 = [["a"]];

  it("#groupAnagrams - should group anagrams together and retun resulting array", () => {
    const result = groupAnagrams(strs);
    const transformedResult = result.map((r) => r.sort()).sort();

    expect(transformedResult).toMatchObject(expected);
  });

  it("#groupAnagrams - should be able to group a signly empty string (edge case)", () => {
    const result = groupAnagrams(strs2);
    const transformedResult = result.map((r) => r.sort()).sort();

    expect(transformedResult).toMatchObject(expected2);
  });

  it("#groupAnagrams - should be able to group a signle string (edge case)", () => {
    const result = groupAnagrams(strs3);
    const transformedResult = result.map((r) => r.sort()).sort();

    expect(transformedResult).toMatchObject(expected3);
  });
});
