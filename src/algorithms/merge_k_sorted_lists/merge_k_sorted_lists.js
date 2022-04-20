import { ListNode } from "../../data_structures/lists/linked_list.js";
import { PriorityQueue } from "../../data_structures/priority_queue/priority_queue.js";

/**
 * Merge an array of sorted linked list into a single sorted linked list
 * @template T
 * @param {ListNode<T>[]} lists An array of sorted linked lists
 * @return {?ListNode<T>}
 */
function mergeKLists(lists) {
  if (lists.length < 1 || (lists.length == 1 && !lists[0])) return null;

  /** @type {PriorityQueue<T, ListNode<T>>} */
  const pq = new PriorityQueue(PriorityQueue.MIN);

  /** @type {?ListNode<T>} */
  let head = null;
  /** @type {?ListNode<T>} */
  let current = null;

  for (let i = 0; i < lists.length; i++) {
    const list = lists[i];
    pq.enqueue(list.value, list);
  }

  while (!pq.empty()) {
    /** @typedef {import("../../data_structures/heap/max_heap_queue").Tuple<T, ListNode<T>>} QueueData */
    const [key, value] = /** @type {QueueData} */ (pq.dequeue());
    const node = new ListNode(key);

    if (!head) head = current = node; // @ts-ignore
    else current = current.next = node;

    if (value.next) pq.enqueue(value.next.value, value.next);
  }
  return head;
}

export { mergeKLists };
