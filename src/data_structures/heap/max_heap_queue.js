/**
 * @template K, V
 * @typedef {[K, V]} Tuple<K, V>
 */

/**
 * @template K, V
 * @typedef {Tuple<K, V>[]} MaxHeapQueue<K, V>
 */

/**
 * Build a heap out of a collection of tuples
 * @template V
 * @param {Tuple<number, V>[]} collection An array of key-value pairs mapped with tuples
 * @param {number=} start The start position
 */
function heapify(collection, start = Math.floor(collection.length / 2 - 1)) {
  while (start >= 0) {
    siftdown(collection, start--);
  }
}

/**
 * Insert a new data into the heap
 * @template V
 * @param {MaxHeapQueue<number, V>} heap The heap structure to insert into
 * @param {number} key The key to use to insert value into the heap
 * @param {V} value The value to insert into the heap
 */
function insert(heap, key, value) {
  heap.push([key, value]);
  siftup(heap, size(heap) - 1);
}

/**
 * Remove a node at the specified position `node`
 * @template V
 * @param {MaxHeapQueue<number, V>} heap The heap structure
 * @param {number=} node The node position to remove from the heap
 * @returns {Tuple<number, V>}
 */
function remove(heap, node = 0) {
  const parent = (node - 1) >> 1;
  const left = (node << 1) + 1;
  const right = (node << 1) + 2;
  const removed = heap[node];
  const rightmost_leaf = heap.pop(); // @ts-ignore

  if (size(heap) > 0) heap[node] = rightmost_leaf;

  const end = size(heap) - 1;

  if (parent >= 0 && heap[parent][0] < heap[node][0]) {
    siftup(heap, node);
  }

  if (left <= end && heap[node][0] < heap[left][0]) {
    siftdown(heap, node);
  }

  if (right <= end && heap[node][0] < heap[right][0]) {
    siftdown(heap, node);
  }

  return removed;
}

/**
 * Sifts up the node in the heap at a given position `node`
 * @template V
 * @param {MaxHeapQueue<number, V>} heap The heap structure
 * @param {number} node The start node position or index
 */
function siftup(heap, node) {
  let parent = (node - 1) >> 1;

  while (parent >= 0 && heap[parent][0] < heap[node][0]) {
    [heap[parent], heap[node]] = [heap[node], heap[parent]];
    node = parent;
    parent = (node - 1) >> 1;
  }
}

/**
 * Sifts down the node in the heap at a given position `node`
 * @template V
 * @param {MaxHeapQueue<number, V>} heap The heap structure
 * @param {number} start The start node position or index
 */
function siftdown(heap, start, end = size(heap) - 1) {
  let left = (start << 1) + 1;
  let right = (start << 1) + 2;
  let swap = start;

  while (left <= end) {
    if (heap[swap][0] < heap[left][0]) swap = left;
    if (right <= end && heap[swap][0] < heap[right][0]) swap = right;

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
 * @template V
 * @param {MaxHeapQueue<number, V>} heap The heap data structure
 * @returns {Tuple<number, V>}
 */
function extract_max(heap) {
  return remove(heap, 0);
}

/**
 * Returns the maximum value in the heap
 * @template V
 * @param {MaxHeapQueue<number, V>} heap The heap data structure
 * @returns {Tuple<number, V>}
 */
function max(heap) {
  return heap[0];
}

/**
 * Returns the height of the heap
 * @template V
 * @param {MaxHeapQueue<number, V>} heap The heap data structure
 * @returns {number}
 */
function height(heap) {
  return Math.floor(Math.log2(size(heap) + 1));
}

/**
 * Returns the size of the heap
 * @template V
 * @param {MaxHeapQueue<number, V>} heap The heap data structure
 * @returns {number}
 */
function size(heap) {
  return heap.length;
}

export { extract_max, heapify, height, insert, max, remove, siftdown, size };
