import { extract_min, heapify, height, insert, min, size } from "./min_heap.js";

describe("min_heap", () => {
  /** @type {import("./min_heap.js").MinHeap<number>} */
  let heap = [];
  /** @type {number[]} */
  let arr = [];
  /** @type {number[]} */
  const expected = [1, 3, 4, 4, 3, 16, 9, 17, 5, 6, 25, 19];
  const expected1 = [1, 3, 4, 4, 3, 9, 16, 17, 5, 25, 6, 19];

  beforeEach(() => (arr = [5, 17, 19, 1, 25, 16, 9, 3, 4, 6, 3, 4]));

  afterEach(() => (heap = arr = []));

  it("#heapify - should build a min-heap from a regular array of values", () => {
    heapify(arr);
    expect(arr).toMatchObject(expected);
  });

  it("#insert - should insert a value into the heap in `O(log n)`", () => {
    arr.forEach((val) => insert(heap, val));
    expect(heap).toMatchObject(expected1);
  });

  it("#extract_min - should remove and return the minimum value in the heap", () => {
    const sorted = [];
    const list = arr.slice();
    const expected = arr.slice().sort((a, b) => a - b);

    heapify(list);

    while (size(list) > 0) sorted.push(extract_min(list));

    expect(sorted).toMatchObject(expected);
  });

  it("#min - should return the minimum value in the heap in `O(1)`", () => {
    heapify(arr);
    expect(min(arr)).toBe(1);
  });

  it("#height - should return the height of the binary heap", () => {
    expect(height(arr)).toBe(3);
  });

  it("#size - should return the size (n) of the binary heap", () => {
    expect(size(arr)).toBe(arr.length);
  });
});
