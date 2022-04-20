import { ListNode } from "../../data_structures/lists/linked_list.js";
import { mergeKLists } from "./merge_k_sorted_lists.js";

describe("merge_k_sorted_lists", () => {
  const data = [
    [1, 4, 5],
    [1, 3, 4],
    [2, 6],
  ];

  /** @type {ListNode<number>[]} */
  let lists;

  beforeEach(() => {
    lists = data.map((list) => {
      let head = /** @type {ListNode<number>} */ (
        /** @type {unknown} */ (null)
      );
      let current = /** @type {ListNode<number>} */ (
        /** @type {unknown} */ (null)
      );

      list.forEach((value) => {
        if (!head) head = current = new ListNode(value);
        else current = current.next = new ListNode(value);
      });

      return head;
    });
  });

  it("__smoke_test__", () => {
    expect(Array.isArray(lists)).toBe(true);
    expect(lists[0].value).toBe(1);
    expect(lists[0].next?.value).toBe(4);
    expect(lists[0].next?.next?.value).toBe(5);
  });

  it("#mergeKLists - should merge an array of sorted linked list into a single sorted linked list", () => {
    const arr = [];
    let list = mergeKLists(lists);

    while (list) {
      arr.push(list.value);
      list = list.next;
    }

    expect(arr).toMatchObject([1, 1, 2, 3, 4, 4, 5, 6]);
    expect(mergeKLists([])).toBe(null);
    // @ts-ignore
    expect(mergeKLists([null])).toBe(null);
  });
});
