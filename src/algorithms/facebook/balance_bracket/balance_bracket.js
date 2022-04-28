const brackets = { "{": 1, "[": 2, "(": 3, ")": -3, "]": -2, "}": -1 };

/** @type {(stack: number[]) => number | undefined} */
const peek = (stack) => stack[stack.length - 1];

/** @type {(stack: number[]) => boolean} */
const empty = (stack) => stack.length === 0;

/** @type {(code: number) => boolean} */
const isPopCode = (code) => Math.sign(code) === -1;

/** @type {(top: number, code: number) => boolean} */
const balanced = (top, code) => top + code === 0;

/**
 * Checks if the brackets in a string `s` are balanced.
 * @param {string} s The string conatining various brackets, open and/or close.
 * @returns {boolean}
 */
function isBalanced(s) {
  // Write your code here
    const stack = [];

    for (let i = 0; i < s.length; i++) {
      const c = /** @type {keyof typeof brackets} */ (s.charAt(i));
      const code = brackets[c];

      if (empty(stack)) {
        if (isPopCode(code)) return false;
        stack.push(code);
        continue;
      }

      const top = /** @type {number} */ (peek(stack));

      if (balanced(top, code)) {
        stack.pop();
        continue;
      }

      if (isPopCode(code)) return false;

      stack.push(code);
    }

    return stack.length === 0;
}

export { isBalanced };
