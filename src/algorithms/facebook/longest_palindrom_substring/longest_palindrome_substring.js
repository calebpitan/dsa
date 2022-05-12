/**
 * Find the longest palindrome in a given string `s`
 * @param {string} s The string to find the longest palindrome within
 * @returns {string}
 */
function longestPalindromeSubstring(s) {
  let bound = s.length - 1;
  let start = 0;
  let end = 1;

  if (bound < 2) return s.charAt(0) == s.charAt(1) ? s : s.charAt(0);

  for (let mid = 1; mid < bound; mid++) {
    let left = mid - 1;
    let right = mid + 1;
    let lchar = s.charAt(left);
    let mchar = s.charAt(mid);
    let rchar = s.charAt(right);

    while (lchar === mchar) {
      let previousLength = end - start;
      let currentLength = mid + 1 - left;
      if (currentLength > previousLength) {
        start = left;
        end = mid + 1;
      }
      if (left <= 0) break;
      lchar = s.charAt(--left);
    }

    while (mchar === rchar) {
      let previousLength = end - start;
      let currentLength = right + 1 - mid;
      if (currentLength > previousLength) {
        start = mid;
        end = right + 1;
      }
      if (right >= bound) break;
      rchar = s.charAt(++right);
    }

    while (lchar === rchar) {
      let previousLength = end - start;
      let currentLength = right + 1 - left;
      if (currentLength > previousLength) {
        start = left;
        end = right + 1;
      }

      if (left > 0 && right < bound) {
        lchar = s.charAt(--left);
        rchar = s.charAt(++right);
        continue;
      }
      break;
    }
  }

  return s.substring(start, end);
}

export { longestPalindromeSubstring };
