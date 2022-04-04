/** @typedef {'MIN' | 'MAX'} PriorityQueueType */

import {
  insert as max_insert,
  remove as max_remove,
} from "../heap/max_heap.js";
import {
  insert as min_insert,
  remove as min_remove,
} from "../heap/min_heap.js";

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
   * @type {import("../heap/max_heap").MaxHeap<number> | import("../heap/min_heap").MinHeap<number>}
   * @private
   */
  queue = [];

  /** @param {PriorityQueueType=} type @default MAX */
  constructor(type) {
    this.type = type || PriorityQueue.MAX;
  }

  /**
   * Adds a new priority to the queue
   * @param {number} priority The priority to add into the queue
   */
  enqueue(priority) {
    if (this.type === PriorityQueue.MAX) {
      return max_insert(this.queue, priority);
    }
    min_insert(this.queue, priority);
  }

  /**
   * Removes the max priority from the queue. This would be the
   * max value in the heap (queue) for a max queue and the min
   * value in the heap (queue) for a min queue.
   * @returns {number}
   */
  dequeue() {
    if (this.type === PriorityQueue.MAX) {
      return max_remove(this.queue);
    }
    return min_remove(this.queue);
  }

  /**
   * Returns true if the queue is empty else return false
   * @returns {boolean}
   */
  is_empty() {
    return this.queue.length === 0
  }

  /**
   * Empties the queue
   */
  empty() {
    this.queue = []
  }
}

export { PriorityQueue };
