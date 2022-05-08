/** @type {(stack: number[]) => number} */
const peek = (stack) => stack[stack.length - 1];

/** @type {(stack: number[]) => boolean} */
const empty = (stack) => stack.length === 0;

/**
 * @param {number[]} heights
 * @return {number[]}
 */
var canSeePersonsCount = function (heights) {
  let end = heights.length - 1;
  let output = Array(heights.length).fill(0);
  let stack = [end];

  for (let i = end - 1; i >= 0; i--) {
    let currentHeight = heights[i];
    let previousHeight = heights[i + 1];

    if (currentHeight < previousHeight && peek(stack) !== i + 1) {
      stack.push(i + 1);
    }

    output[i] += peek(stack) - i - 1;

    while (!empty(stack)) {
      const top = peek(stack);
      output[i] += 1;

      if (heights[top] >= currentHeight) {
        break;
      }

      stack.pop();
    }

    if (currentHeight > previousHeight) {
      stack.push(i);
    }
  }

  return output;
};

export { canSeePersonsCount };
