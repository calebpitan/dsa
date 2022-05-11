/**
 * Merge a list of overlapping intervals as one single intervals picking the smallest
 * start interval and the largest end interval, to replace the overlapping ones
 * @param {Array<[number, number]>} intervals A list of overlapping intervals [start, end]
 * @returns {Array<[number, number]>}
 */
function mergeOverlappingIntervals(intervals) {
  let mid = Math.floor(intervals.length / 2);
  if (mid < 1) return intervals;

  let left = mergeOverlappingIntervals(intervals.slice(0, mid));
  let right = mergeOverlappingIntervals(intervals.slice(mid));

  return merge(left, right);
}

/**
 * Merge algorithm
 * @param {Array<[number, number]>} left The left partition
 * @param {Array<[number, number]>} right The right partition
 * @returns {Array<[number, number]>}
 */
function merge(left, right) {
  let l = 0;
  let r = 0;
  /** @type {Array<[number, number]>} */
  let merged = [];

  while (l < left.length && r < right.length) {
    let [start1, end1] = left[l];
    let [start2, end2] = right[r];

    if (start1 < start2 && end1 < start2) {
      merged.push(left[l++], right[r++]);
      continue;
    }

    merged.push([Math.min(start1, start2), Math.max(end1, end2)]);
    l++;
    r++;
  }

  while (l < left.length) {
    merged.push(left[l++]);
  }

  while (r < right.length) {
    merged.push(right[r++]);
  }

  return merged;
}

export { mergeOverlappingIntervals };
