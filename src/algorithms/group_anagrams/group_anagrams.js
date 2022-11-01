import { insertion_sort } from "../sorting/insertion_sort.js";

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
  const map = new Map();
  for (const str of strs) {
    const key = insertion_sort(str.split("")).join("");
    if (map.has(key)) {
      map.get(key).push(str);
      continue;
    }
    map.set(key, [str]);
  }

  return Array.from(map.values());
}

export { groupAnagrams };
