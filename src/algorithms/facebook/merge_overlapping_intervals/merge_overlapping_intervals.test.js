import {
  mergeOverlappingIntervals,
  mergeOverlappingIntervals2,
} from "./merge_overlapping_intervals.js";

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
  /** @type {Array<[number, number]>} */
  let intervals3 = [
    [2, 3],
    [2, 2],
    [3, 3],
    [1, 3],
    [5, 7],
    [2, 2],
    [4, 6],
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
  let expected3 = [
    [1, 3],
    [4, 7],
  ];

  it("mergeOverlappingIntervals - should merge two intervals left and right that overlap into one single interval", () => {
    expect(mergeOverlappingIntervals([])).toMatchObject([]);
    expect(mergeOverlappingIntervals(intervals1.slice())).toMatchObject(expected1);
    expect(mergeOverlappingIntervals(intervals2.slice())).toMatchObject(expected2);
    expect(mergeOverlappingIntervals(intervals3.slice())).toMatchObject(expected3);
  });

  it("mergeOverlappingIntervals2 - should merge two intervals left and right that overlap into one single interval", () => {
    expect(mergeOverlappingIntervals2([])).toMatchObject([]);
    expect(mergeOverlappingIntervals2(intervals1.slice())).toMatchObject(expected1);
    expect(mergeOverlappingIntervals2(intervals2.slice())).toMatchObject(expected2);
    expect(mergeOverlappingIntervals2(intervals3.slice())).toMatchObject(expected3);
  });
});
