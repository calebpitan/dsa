import {
  extract_min,
  heapify,
  height,
  insert,
  min,
  size,
} from "./min_heap_queue";

describe("min_heap_queue", () => {
  /** @type {import("./min_heap_queue.js").MinHeapQueue<number, string>} */
  let heap = [];
  /** @type {import("./min_heap_queue").Tuple<number, string>[]} */
  let arr = [];

  /** @type {import("./min_heap_queue").Tuple<number, string>[]} */
  const expected = [
    [1, "a"],
    [3, "c"],
    [4, "d"],
    [4, "d"],
    [3, "c"],
    [16, "p"],
    [9, "i"],
    [17, "q"],
    [5, "e"],
    [6, "f"],
    [25, "y"],
    [19, "s"],
  ];

  /** @type {import("./min_heap_queue").Tuple<number, string>[]} */
  const expected1 = [
    [1, "a"],
    [3, "c"],
    [4, "d"],
    [4, "d"],
    [3, "c"],
    [9, "i"],
    [16, "p"],
    [17, "q"],
    [5, "e"],
    [25, "y"],
    [6, "f"],
    [19, "s"],
  ];

  beforeEach(
    () =>
      (arr = [
        [5, "e"],
        [17, "q"],
        [19, "s"],
        [1, "a"],
        [25, "y"],
        [16, "p"],
        [9, "i"],
        [3, "c"],
        [4, "d"],
        [6, "f"],
        [3, "c"],
        [4, "d"],
      ])
  );

  afterEach(() => (heap = arr = []));

  it("#heapify - should build a min-heap queue from a regular array of key-value pairs mapped using tuples", () => {
    heapify(arr);
    expect(arr).toMatchObject(expected);
  });

  it("#insert - should insert a value into the heap in `O(log n)`", () => {
    arr.forEach(([key, val]) => insert(heap, key, val));
    expect(heap).toMatchObject(expected1);
  });

  it("#extract_min - should remove and return the item with minimum key in the heap", () => {
    const sorted = [];
    const list = arr.slice();
    const expected = arr.slice().sort((a, b) => a[0] - b[0]);

    heapify(list);

    while (size(list) > 0) sorted.push(extract_min(list));

    expect(sorted).toMatchObject(expected);
  });

  it("#min - should return the item in the heap with minimum key in `O(1)`", () => {
    heapify(arr);
    expect(min(arr)).toMatchObject([1, "a"]);
  });

  it("#height - should return the height of the binary heap", () => {
    expect(height(arr)).toBe(3);
  });

  it("#size - should return the size (n) of the binary heap", () => {
    expect(size(arr)).toBe(arr.length);
  });
});
