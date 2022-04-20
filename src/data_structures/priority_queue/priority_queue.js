/** @typedef {'MIN' | 'MAX'} PriorityQueueType */

import {
  insert as max_insert,
  max,
  remove as max_remove,
} from "../heap/max_heap_queue.js";
import {
  insert as min_insert,
  min,
  remove as min_remove,
} from "../heap/min_heap_queue.js";

/** @template K, V */
class PriorityQueue {
  /** @type {PriorityQueueType} */
  static MAX = "MAX";

  /** @type {PriorityQueueType} */
  static MIN = "MIN";

  /**
   * @type {PriorityQueueType}
   * @private
   */
  type = "MAX";

  /**
   * @type {import("../heap/max_heap_queue").MaxHeapQueue<K, V> |
    import("../heap/min_heap_queue").MinHeapQueue<K, V>}
   * @private
   */
  queue = [];

  /** @param {PriorityQueueType=} type */
  constructor(type = PriorityQueue.MAX) {
    this.type = type;
  }

  /**
   * Adds a new priority to the queue
   * @param {K} priority The priority to add into the queue
   * @param {V=} value The value to store at this priority
   */
  enqueue(priority, value) {
    if (this.type === PriorityQueue.MAX) {
      return max_insert(this.queue, priority, value);
    }
    min_insert(this.queue, priority, value);
  }

  /**
   * Removes the max priority from the queue. This would be the
   * max value in the heap (queue) for a max queue and the min
   * value in the heap (queue) for a min queue.
   * @returns {V extends undefined ? number : import("../heap/max_heap_queue.js").Tuple<K, V>}
   */
  dequeue() {
    if (this.type === PriorityQueue.MAX) {
      const [key, value] = max_remove(this.queue); // @ts-ignore
      return value ? [key, value] : key;
    }
    const [key, value] = min_remove(this.queue); // @ts-ignore
    return value ? [key, value] : key;
  }

  /**
   * Take a look at the element at the rear of the queue
   * or simply at the root of the heap
   * @returns {V extends undefined ? number : import("../heap/max_heap_queue.js").Tuple<K, V>}
   */
  peek() {
    if (this.type === PriorityQueue.MAX) {
      const [key, value] = max(this.queue); // @ts-ignore
      return value ? [key, value] : key;
    }
    const [key, value] = min(this.queue); // @ts-ignore
    return value ? [key, value] : key;
  }

  /**
   * Returns true if the queue is empty else return false
   * @returns {boolean}
   */
  empty() {
    return this.queue.length === 0;
  }

  /**
   * Clear the queue
   */
  clear() {
    this.queue = [];
  }
}

export { PriorityQueue };
