/**
 * @template T
 * @typedef {T[]} MaxHeap<T>
 */

/**
 * Build a heap data structure from an array
 * @param {Array<number>} arr The array of values to heapify
 */
function heapify(arr, start = Math.floor(size(arr) / 2 - 1)) {
  while (start >= 0) {
    siftdown(arr, start--);
  }
}

/**
 * Insert a new data into the heap
 * @param {MaxHeap<number>} heap The heap structure to insert into
 * @param {number} data The data to insert into the heap
 */
function insert(heap, data) {
  heap.push(data);
  siftup(heap, size(heap) - 1);
}

/**
 * Remove a node at the specified position `node`
 * @param {MaxHeap<number>} heap The heap structure
 * @param {number=} node The node position to remove from the heap
 * @returns {number}
 */
function remove(heap, node = 0) {
  const parent = (node - 1) >> 1;
  const left = (node << 1) + 1;
  const right = (node << 1) + 2;
  const removed = heap[node];
  const rightmost_leaf = heap.pop(); // @ts-ignore

  if (size(heap) > 0) heap[node] = rightmost_leaf;

  if (heap[parent] < heap[node]) {
    siftup(heap, node);
  }

  if (heap[node] < heap[left]) {
    siftdown(heap, node);
  }

  if (heap[node] < heap[right]) {
    siftdown(heap, node);
  }

  return removed;
}

/**
 * Sifts up the node in the heap at a given position `node`
 * @param {MaxHeap<number>} heap The heap structure
 * @param {number} node The start node position or index
 */
function siftup(heap, node) {
  let parent = (node - 1) >> 1;

  while (heap[parent] < heap[node]) {
    [heap[parent], heap[node]] = [heap[node], heap[parent]];
    node = parent;
    parent = (node - 1) >> 1;
  }
}

/**
 * Sifts down the node in the heap at a given position `node`
 * @param {MaxHeap<number>} heap The heap structure
 * @param {number} start The start node position or index
 */
function siftdown(heap, start, end = size(heap) - 1) {
  let left = (start << 1) + 1;
  let right = (start << 1) + 2;
  let swap = start;

  while (left <= end) {
    if (heap[swap] < heap[left]) swap = left;
    if (right <= end && heap[swap] < heap[right]) swap = right;

    if (swap !== start) {
      [heap[start], heap[swap]] = [heap[swap], heap[start]];
      start = swap;
      left = (start << 1) + 1;
      right = (start << 1) + 2;
    } else {
      return;
    }
  }
}

/**
 * Removes and returns the maximum value in the heap
 * @param {MaxHeap<number>} heap The heap data structure
 * @returns {number}
 */
function extract_max(heap) {
  return remove(heap, 0);
}

/**
 * Returns the maximum value in the heap
 * @param {MaxHeap<number>} heap The heap data structure
 * @returns {number}
 */
function max(heap) {
  return heap[0];
}

/**
 * Returns the height of the heap
 * @param {MaxHeap<number>} heap The heap data structure
 * @returns {number}
 */
function height(heap) {
  return Math.floor(Math.log2(size(heap) + 1));
}

/**
 * Returns the size of the heap
 * @param {MaxHeap<number>} heap The heap data structure
 * @returns {number}
 */
function size(heap) {
  return heap.length;
}

export { extract_max, height, heapify, insert, max, remove, siftdown, size };
