/**
 *
 * @param {string} s The first string
 * @param {string} t The substring to check for in string `s`
 * @returns {number}
 */
function minLengthSubstring(s, t) {
  // Write your code here
  /** @type {Map<string, number>} */
  const matched = new Map();
  /** @type {Map<string, number>} */
  const freqs = new Map();

  const expectedCount = t.length;
  let currentCount = 0;
  let length = Infinity;

  for (let c of t) {
    const freq = freqs.get(c);
    if (freq) freqs.set(c, freq + 1);
    else freqs.set(c, 1);
  }

  let left = 0;
  let right = 0;

  while (right < s.length) {
    const c = s.charAt(right);
    const freq = freqs.get(c);

    if (freq !== undefined) {
      if (matched.has(c)) {
        let match = /** @type {number} */ (matched.get(c));
        matched.set(c, ++match);
        if (match <= freq) currentCount++;
      } else {
        matched.set(c, 1);
        currentCount++;
      }
    }

    if (currentCount <= expectedCount) {
      right++;
    }

    while (currentCount === expectedCount) {
      length = Math.min(length, right - left);
      const c = s.charAt(left++);
      const freq = freqs.get(c);

      if (freq !== undefined) {
        let match = /** @type {number} */ (matched.get(c));
        matched.set(c, --match);

        if (match < freq) currentCount--;
      }
    }
  }

  return length === Infinity ? -1 : length;
}

export { minLengthSubstring };
