/**
 * @template {number | string} T
 * @param {T[]} arr The array to sort
 * @returns {T[]}
 */
function insertion_sort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];

    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > current) {
        arr[j + 1] = arr[j];
        arr[j] = current;
        continue;
      }
      break;
    }
  }
  return arr;
}

export { insertion_sort };
