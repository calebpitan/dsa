import {
  heapify,
  remove,
} from "../../../data_structures/heap/min_heap_queue.js";

/**
 * Merge a list of overlapping intervals as one single intervals picking the smallest
 * start interval and the largest end interval, to replace the overlapping ones
 * @param {Array<[number, number]>} intervals A list of overlapping intervals [start, end]
 * @returns {Array<[number, number]>}
 */
function mergeOverlappingIntervals(intervals) {
  const output = [];
  heapify(intervals);

  let left = remove(intervals);
  let right = remove(intervals);

  while (left) {
    if (!right) {
      output.push(left);
      break;
    }

    let [start1, end1] = left;
    let [start2, end2] = right;

    if (end1 >= start2) {
      const start = Math.min(start1, start2);
      const end = Math.max(end1, end2);
      left = [start, end];
      right = remove(intervals);
      continue;
    }

    output.push(left);
    left = right;
    right = remove(intervals);
  }
  return output;
}

/**
 * Merge a list of overlapping intervals as one single intervals picking the smallest
 * start interval and the largest end interval, to replace the overlapping ones
 * @param {Array<[number, number]>} intervals A list of overlapping intervals [start, end]
 * @returns {Array<[number, number]>}
 */
function mergeOverlappingIntervals2(intervals) {
  if (intervals.length === 0) return intervals;

  intervals.sort((a, b) => b[0] - a[0]);
  
  let output = [/** @type {[number, number]} */ (intervals.pop())];

  /** @type {<T>(arr: Array<T>) => T} */
  let peek = (arr) => arr[arr.length - 1];

  while (intervals.length > 0) {
    let current = /** @type {[number, number]} */ (intervals.pop());
    let [start1, end1] = peek(output);
    let [start2, end2] = current;

    if (end1 >= start2) {
      output[output.length - 1][0] = Math.min(start1, start2);
      output[output.length - 1][1] = Math.max(end1, end2);
      continue;
    }
    output.push(current);
  }
  return output;
}

export { mergeOverlappingIntervals, mergeOverlappingIntervals2 };
