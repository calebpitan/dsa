import { ListNode, mergeKLists } from "./merge_k_sorted_lists.js";

describe("merge_k_sorted_lists", () => {
  const data = [
    [1, 4, 5],
    [1, 3, 4],
    [2, 6],
  ];

  /** @type {ListNode[]} */
  let lists;

  beforeEach(() => {
    lists = data.map((list) => {
      let head = /** @type {ListNode} */ (/** @type {unknown} */ (null));
      let current = /** @type {ListNode} */ (/** @type {unknown} */ (null));

      list.forEach((value) => {
        if (!head) head = current = new ListNode(value);
        else current = current.next = new ListNode(value);
      });

      return head;
    });
  });

  it("__smoke_test__", () => {
    expect(Array.isArray(lists)).toBe(true);
    expect(lists[0].val).toBe(1);
    expect(lists[0].next?.val).toBe(4);
    expect(lists[0].next?.next?.val).toBe(5);
  });

  it("#mergeKLists - should merge an array of sorted linked list into a single sorted linked list", () => {
    const arr = [];
    let list = mergeKLists(lists);

    while (list) {
      arr.push(list.val);
      list = list.next;
    }

    expect(arr).toMatchObject([1, 1, 2, 3, 4, 4, 5, 6]);
  });
});
