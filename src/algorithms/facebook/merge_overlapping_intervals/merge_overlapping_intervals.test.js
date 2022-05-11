import { mergeOverlappingIntervals } from "./merge_overlapping_intervals.js";

describe("merge_overlapping_intervals", () => {
  /** @type {Array<[number, number]>} */
  let intervals1 = [
    [1, 3],
    [2, 6],
    [8, 10],
    [13, 15],
  ];
  /** @type {Array<[number, number]>} */
  let intervals2 = [
    [1, 8],
    [2, 5],
    [7, 10],
    [11, 19],
  ];

  let expected1 = [
    [1, 6],
    [8, 10],
    [13, 15],
  ];
  let expected2 = [
    [1, 10],
    [11, 19],
  ];

  it("mergeOverlappingIntervals - should merge two intervals left and right that overlap into one single interval", () => {
    expect(mergeOverlappingIntervals([])).toMatchObject([]);
    expect(mergeOverlappingIntervals(intervals1)).toMatchObject(expected1);
    expect(mergeOverlappingIntervals(intervals2)).toMatchObject(expected2);
  });
});
