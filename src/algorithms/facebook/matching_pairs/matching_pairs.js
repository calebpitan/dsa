/**
 * Count the amount chars in string `s` for each position `i` that matches the
 * chars in string `t` for each position `i` after switching two indices `i` and `j`
 *
 * ### Solution
 *
 * 1. If `s` equals to `t` return `len(s) - 2`, the two being the compulsory two indices
 * swapping.
 *
 * 2. Create a map and fill it up with `s[i]` as key and `i` as value (`s[i]` => `i`).
 *
 * 3. Initailize a variable `swapped` to `false` to keep track of if we swapped two indices
 * already.
 *
 * 4. Initialize a variable `matching` to `0` to count how many `s[i]` matches `t[i]`
 * to make.
 *
 * 5. Get the value in the map for each `t[j]` and assign it to a variable `i`.
 * 6. If `i` equals to `j`, increment `matching`.
 *
 * 7. If `i` not equals to `j` and swapped is `false` increment `matching` by
 * `2` if `t[i] === s[j]` else `1` then set `swapped` to `true`.
 *
 * 8. Return `matching`
 * @param {string} s The first string in the pair
 * @param {string} t The second string in the pair
 */
function matchingPairs(s, t) {
  if (s === t) {
    const set = new Set();
    for (let c of s) {
      if (set.has(c)) return s.length;
      set.add(c);
    }
    return s.length - 2;
  }

  const map = new Map();
  let swapped = false;
  let matching = 0;

  for (let i = 0; i < s.length; i++) {
    map.set(s.charAt(i), i);
  }

  for (let j = 0; j < s.length; j++) {
    const i = map.get(t.charAt(j));

    if (i === undefined) {
      if (!swapped) matching--;
      continue;
    }

    if (i === j) matching++;
    if (i !== j && !swapped) {
      matching += t.charAt(i) === s.charAt(j) ? 2 : 1;
      swapped = true;
    }
  }

  return matching;
}

export { matchingPairs };
