import {
  extract_max,
  heapify,
  height,
  insert,
  max,
  size,
} from "./max_heap_queue";

describe("max_heap_queue", () => {
  /** @type {import("./max_heap_queue.js").MaxHeapQueue<number, string>} */
  let heap = [];
  /** @type {import("./max_heap_queue").Tuple<number, string>[]} */
  let arr = [];

  /** @type {import("./max_heap_queue").Tuple<number, string>[]} */
  const expected = [
    [25, "y"],
    [17, "q"],
    [19, "s"],
    [4, "d"],
    [6, "f"],
    [16, "p"],
    [9, "i"],
    [3, "c"],
    [1, "a"],
    [5, "e"],
    [3, "c"],
    [4, "d"],
  ];

  /** @type {import("./max_heap_queue").Tuple<number, string>[]} */
  const expected1 = [
    [25, "y"],
    [19, "s"],
    [17, "q"],
    [4, "d"],
    [6, "f"],
    [16, "p"],
    [9, "i"],
    [1, "a"],
    [3, "c"],
    [5, "e"],
    [3, "c"],
    [4, "d"],
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

  it("#heapify - should build a max-heap queue from a regular array of key-value pairs mapped using tuples", () => {
    heapify(arr);
    expect(arr).toMatchObject(expected);
  });

  it("#insert - should insert a value into the heap in `O(log n)`", () => {
    arr.forEach(([key, val]) => insert(heap, key, val));
    expect(heap).toMatchObject(expected1);
  });

  it("#extract_max - should remove and return the item with maximum key in the heap", () => {
    const sorted = [];
    const list = arr.slice();
    const expected = arr.slice().sort((a, b) => b[0] - a[0]);

    heapify(list);

    while (size(list) > 0) sorted.push(extract_max(list));

    expect(sorted).toMatchObject(expected);
  });

  it("#max - should return the maximum value in the heap in `O(1)`", () => {
    heapify(arr);
    expect(max(arr)).toMatchObject([25, "y"]);
  });

  it("#height - should return the height of the binary heap", () => {
    expect(height(arr)).toBe(3);
  });

  it("#size - should return the size (n) of the binary heap", () => {
    expect(size(arr)).toBe(arr.length);
  });
});
