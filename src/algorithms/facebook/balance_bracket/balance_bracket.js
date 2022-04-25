const brackets = { "{": 1, "[": 2, "(": 3, ")": -3, "]": -2, "}": -1 };

/** @type {(stack: number[]) => number | undefined} */
const peek = (stack) => stack[stack.length - 1];

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
    const top = peek(stack);

    if (top) {
      top + code === 0 ? stack.pop() : stack.push(code);
      continue;
    }

    if (Math.sign(code) === -1) return false;

    stack.push(code);
  }

  return stack.length === 0;
}

export { isBalanced };
