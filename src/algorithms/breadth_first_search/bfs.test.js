import { insert } from "../tree/bst";
import { Node } from "../../data_structures/tree/binary_tree";
import { bfs } from "./bfs";

describe("bfs", () => {
  /**
   * ```txt
   *         24
   *       /    \
   *      /      \
   *     12      35
   *    /  \       \
   *   1   12      46
   *  /      \    /  \
   * 0       12  35  89
   *                /  \
   *               72  145
   *                   /
   *                  98
   *```
   * @type {?Node<number>}
   */
  let root = null;
  const data = [24, 35, 46, 89, 12, 72, 145, 12, 35, 98, 12, 1, 0];

  beforeEach(() => data.forEach((value) => (root = insert(root, value))));

  afterEach(() => (root = null));

  it("#bfs - should search a binary tree visiting all child nodes first", () => {
    {
      const node = bfs(/** @type {Node<number>} */ (root), 89);
      expect(node).toBeDefined();
      expect(node?.value).toBe(89);
    }

    {
      const node = bfs(/** @type {Node<number>} */ (root), 0);
      expect(node).toBeDefined();
      expect(node?.value).toBe(0);
    }
  });
});
