/**
 * Trap rain water on a land with variant elevation map.
 *
 * A lower elevation between higher elevation will hold more water
 * and it takes at least three varying elevation to trap water with
 * the one in between lower than others around it.
 *
 * @param {number[]} elevations The elevation of the land;
 */
function trap(elevations) {
  let left = 0;
  let right = elevations.length - 1;
  let left_max = 0;
  let right_max = 0;
  let trapped = 0;

  while (left < right) {
    let left_val = elevations[left];
    let right_val = elevations[right];

    if (left_val < right_val) {
      left_max = Math.max(left_max, left_val);
      trapped += left_max - left_val;
      left++;
      continue;
    }
    right_max = Math.max(right_max, right_val);
    trapped += right_max - right_val;
    right--;
  }
  return trapped;
}

export { trap };
