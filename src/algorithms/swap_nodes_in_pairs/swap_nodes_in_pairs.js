import { ListNode } from "../../data_structures/lists/linked_list.js";

/**
 * @template T
 * @param {?ListNode<T>} head The head of the singly linked list
 * @returns {?ListNode<T>}
 */
function swapPairs(head) {
  let current = head;
  let prev = null;

  if (!current || !current.next) return current;

  // 1 -> 2 -> null
  if (!current.next.next) {
    let head = current.next; // 2 -> null
    head.next = current; // 2 -> 1 -> 2 -> null
    current.next = null; // 2 -> 1 -> null
    return head;
  }

  // 1 -> 2 -> 3 -> 4 -> null
  while (current) {
    /** @type {?ListNode<T>} */
    let temp = current.next; // 2 -> 3 -> 4 -> null

    if (!temp) return head;

    // Swappers
    current.next = temp.next; // [1 ->] 3 -> 4 -> null
    temp.next = current; // [2 ->] 1 -> 3 -> 4 -> null
    current = current.next; // 3 -> 4 -> null

    // Connectors
    if (!prev) {
      head = temp; // 2 -> 1 -> 3 -> 4 -> null
      prev = temp.next; // 1 -> 3 -> 4 -> null
    } else {
      prev.next = temp; // [1 ->] 4 -> 3 -> null
      prev = temp.next; // 3 -> null
    }
  }

  return head;
}

export { swapPairs };
