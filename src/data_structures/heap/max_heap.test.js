import { extract_max, heapify, height, insert, max, size } from "./max_heap.js";

describe("max_heap", () => {
  /** @type {import("./max_heap.js").MaxHeap<number>} */
  let heap = [];
  /** @type {number[]} */
  let arr = [];
  /** @type {number[]} */
  const expected = [25, 17, 19, 4, 6, 16, 9, 3, 1, 5, 3, 4];
  const expected1 = [25, 19, 17, 4, 6, 16, 9, 1, 3, 5, 3, 4];

  beforeEach(() => (arr = [5, 17, 19, 1, 25, 16, 9, 3, 4, 6, 3, 4]));

  afterEach(() => (heap = arr = []));

  it("#heapify - should build a max-heap from a regular array of values", () => {
    heapify(arr);
    expect(arr).toMatchObject(expected);
  });

  it("#insert - should insert a value into the heap in `O(log n)`", () => {
    arr.forEach((val) => insert(heap, val));
    expect(heap).toMatchObject(expected1);
  });

  it("#extract_max - should remove and return the maximum value in the heap", () => {
    const sorted = [];
    const list = arr.slice();
    const expected = arr.slice().sort((a, b) => b - a);

    heapify(list);

    while (size(list) > 0) sorted.push(extract_max(list));

    expect(sorted).toMatchObject(expected);
  });

  it("#max - should return the maximum value in the heap in `O(1)`", () => {
    heapify(arr);
    expect(max(arr)).toBe(25);
  });

  it("#height - should return the height of the binary heap", () => {
    expect(height(arr)).toBe(3);
  });

  it("#size - should return the size (n) of the binary heap", () => {
    expect(size(arr)).toBe(arr.length);
  });
});
