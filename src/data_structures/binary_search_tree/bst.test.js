import { jest } from "@jest/globals";
import {
  Node,
  insert,
  inorder,
  postorder,
  preorder,
  search,
  lca,
  height,
  level_order,
  remove,
} from "./bst.js";

describe("binary_search_tree", () => {
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
   * @type {?Node}
   */
  let root = null;
  const data = [24, 35, 46, 89, 12, 72, 145, 12, 35, 98, 12, 1, 0];

  beforeEach(() => data.forEach((value) => (root = insert(root, value))));

  afterEach(() => (root = null));

  // it("#insert - should insert a value into the tree as a node", () => {
  //   data.forEach((value) => (root = insert(root, value)));
  // });

  it("#height - should get the height of the tree", () => {
    expect(height(root)).toBe(6);
  });

  it("#search - should search for a node and return it when found otherwise null", () => {
    const node = search(root, 98);
    const node1 = search(root, 12);
    const node2 = search(root, 46);

    // console.log('Node: %o\nNode1: %o\nNode2: %o', node, node1, node2);

    expect(node?.value).toBe(98);
    expect(node?.left).toBeNull();
    expect(node?.right).toBeNull();

    expect(node1?.value).toBe(12);
    expect(node1?.left).toBeDefined();
    expect(node1?.right).toBeDefined();
    expect(node1?.left?.value).toBe(1);
    expect(node1?.right?.value).toBe(12);

    expect(node2?.value).toBe(46);
    expect(node2?.left).toBeDefined();
    expect(node2?.right).toBeDefined();
    expect(node2?.left?.value).toBe(35);
    expect(node2?.right?.value).toBe(89);
  });

  it("#lca - should find the lowest common ancestor of two nodes", () => {
    const ancestor = lca(root, 98, 72);
    const ancestor1 = lca(root, 89, 72);
    const ancestor2 = lca(root, 89, 12);
    expect(ancestor?.value).toBe(89);
    expect(ancestor1?.value).toBe(89);
    expect(ancestor2?.value).toBe(24);
  });

  it("#remove - should remove a node from the tree", () => {
    expect(search(root, 98)).not.toBeNull();
    remove(root, 98);
    expect(search(root, 98)).toBeNull();

    expect(search(root, 24)).not.toBeNull();
    remove(root, 24);
    expect(search(root, 24)).toBeNull();

    expect(search(root, 145)).not.toBeNull();
    remove(root, 145);
    expect(search(root, 145)).toBeNull();
  });

  describe("Traversal", () => {
    /**
     * @type {import("jest-mock").SpyInstance<void, [message?: any, ...optionalParams: any[]]>}
     */
    let log;
    beforeEach(() => {
      log = jest.spyOn(console, "log").mockImplementation(() => {});
    });

    afterEach(() => {
      log.mockReset();
      log.mockRestore();
    });

    it("#inorder - should print all nodes in sorted order", () => {
      const inordered = data.slice().sort((a, b) => a - b);

      inorder(root);

      expect(log).toHaveBeenCalledTimes(data.length);

      inordered.forEach((arg, i) =>
        expect(log).toHaveBeenNthCalledWith(i + 1, arg)
      );
    });

    it("#preorder - should print all root nodes first, then left nodes, then right nodes", () => {
      const preordered = [24, 12, 1, 0, 12, 12, 35, 46, 35, 89, 72, 145, 98];

      preorder(root);

      expect(log).toHaveBeenCalledTimes(data.length);

      preordered.forEach((arg, i) => {
        expect(log).toHaveBeenNthCalledWith(i + 1, arg);
      });
    });

    it("#postorder - should print all left nodes first, then right nodes, then root nodes", () => {
      const postordered = [0, 1, 12, 12, 12, 35, 72, 98, 145, 89, 46, 35, 24];

      postorder(root);

      expect(log).toHaveBeenCalledTimes(data.length);

      postordered.forEach((arg, i) => {
        expect(log).toHaveBeenNthCalledWith(i + 1, arg);
      });
    });

    it("#level_order - should print all nodes one level after the other", () => {
      const level_ordered = [24, 12, 35, 1, 12, 46, 0, 12, 35, 89, 72, 145, 98];

      level_order(root);

      expect(log).toHaveBeenCalledTimes(data.length);

      level_ordered.forEach((arg, i) => {
        expect(log).toHaveBeenNthCalledWith(i + 1, arg);
      });
    });
  });
});
