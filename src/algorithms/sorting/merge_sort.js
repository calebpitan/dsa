/**
 * Sort an array using the merge sort divide-and-conquer algorithm
 * @param {number[]} arr The array to be sorted
 * @returns {number[]}
 */
function mergesort(arr) {
  const mid = Math.floor(arr.length / 2);
  if (mid < 1) return arr;
  const left = mergesort(arr.slice(0, mid));
  const right = mergesort(arr.slice(mid));
  return merge(left, right);
}

/**
 * Merge both sides of the array in an orderly manner
 * @param {number[]} left The left array to be merged with the right
 * @param {number[]} right The right array to be merged with the left
 */
function merge(left, right) {
  const sorted = [];
  let [l, r] = [0, 0];

  while (l < left.length && r < right.length) {
    if (left[l] > right[r]) {
      sorted.push(right[r]);
      r++;
    } else {
      sorted.push(left[l]);
      l++;
    }
  }

  while (l < left.length) {
    sorted.push(left[l]);
    l++;
  }

  while (r < right.length) {
    sorted.push(right[r]);
    r++;
  }

  return sorted;
}

export { mergesort };
