/**
 * Take a peek at the first or top element of a stack
 * @template T
 * @type {<T>(stack: Array<T>) => T}
 * @param {Array<T>} stack The stack to peek at
 * @returns {T}
 */
const peek = (stack) => stack[stack.length - 1];

/**
 * Counts the number of subarrays from each `ith` position of the
 * given array where the `ith` element is the maximum element in the
 * subarray and each subarray either starts from or end with the `ith`
 * element.
 *
 * @param {number[]} arr
 * The array from which to count subarrays from each `ith` position
 * @returns {number[]}
 */
function countSubarrays(arr) {
  const stack = [];
  const result = Array(arr.length).fill(0);

  for (let i = 0; i < arr.length; i++) {
    while (stack.length !== 0 && arr[peek(stack)] < arr[i]) {
      // @ts-ignore
      result[i] += result[stack.pop()];
    }
    stack.push(i);
    result[i] += 1;
  }

  stack.splice(0, stack.length);

  const temp = Array(arr.length).fill(0);

  for (let i = arr.length - 1; i >= 0; i--) {
    while (stack.length !== 0 && arr[peek(stack)] < arr[i]) {
      let index = stack.pop(); // @ts-ignore
      result[i] += temp[index]; // @ts-ignore
      temp[i] += temp[index];
    }
    stack.push(i);
    temp[i]++;
  }
  return result;
}

export { countSubarrays };
