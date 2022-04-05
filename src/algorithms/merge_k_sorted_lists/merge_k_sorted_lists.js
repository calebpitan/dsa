import { PriorityQueue } from "../../data_structures/priority_queue/priority_queue.js";

/**
 * A LinkedList Node type
 * @param {number} val The value of this node
 * @param {ListNode=} next A pointer to the next node of this node
 */
function ListNode(val, next) {
  /** @type {number} */
  this.val = val === undefined ? 0 : val;
  /** @type {?ListNode} */
  this.next = next === undefined ? null : next;
}

/**
 * Merge an array of sorted linked list into a single sorted linked list
 *
 * @param {ListNode[]} lists An array of sorted linked lists
 * @return {?ListNode}
 */
function mergeKLists(lists) {
  if (lists.length < 1 || (lists.length == 1 && !lists[0])) return null;

  /** @type {PriorityQueue<ListNode>} */
  const pq = new PriorityQueue(PriorityQueue.MIN);

  /** @type {?ListNode} */
  let head = null;
  /** @type {?ListNode} */
  let current = null;

  for (let i = 0; i < lists.length; i++) {
    const list = lists[i];
    pq.enqueue(list.val, list);
  }

  while (!pq.empty()) {
    /** @typedef {import("../../data_structures/heap/max_heap_queue").Tuple<number, ListNode>} QueueData */
    const [key, value] = /** @type {QueueData} */ (pq.dequeue());
    const node = new ListNode(key);

    if (!head) head = current = node; // @ts-ignore
    else current = current.next = node;

    if (value.next) pq.enqueue(value.next.val, value.next);
  }
  return head;
}

export { ListNode, mergeKLists };
