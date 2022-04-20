import { ListNode } from "../../data_structures/lists/linked_list.js";
import { swapPairs } from "./swap_nodes_in_pairs.js";

describe("swap_nodes_in_pairs", () => {
  const list = [1, 2, 3, 4];
  const expected = [2, 1, 4, 3];
  /** @type {?ListNode<number>} */
  let head = null;

  beforeEach(() => {
    list.forEach((item) => {
      let current = head;
      if (!current) {
        head = new ListNode(item);
        return;
      }

      while (current) {
        if (!current.next) {
          current.next = new ListNode(item);
          break;
        }
        current = current.next;
      }
    });
  });

  afterEach(() => (head = null));

  it("#swapPairs - should swap every other node with the previous", () => {
    let swapped = swapPairs(head);
    let i = 0;
    while (swapped) {
      expect(swapped.value).toBe(expected[i++]);
      swapped = swapped.next;
    }
  });
});
