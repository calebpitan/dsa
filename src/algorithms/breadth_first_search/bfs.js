import { Node } from "../../data_structures/tree/binary_tree.js";
import { TreeNode } from "../../data_structures/tree/tree.js";

/**
 * Search for a node in a binary tree by it's key using breadth-first approach
 * @template T
 * @param {Node<T>} root
 * @param {T} value
 * @returns {?Node<T>}
 */
function bfs(root, value) {
  const visited = new Set();
  const queue = [root];

  while (queue.length > 0) {
    const node = /** @type {Node<T>} */ (queue.pop());

    if (node.value === value) return node;

    if (node.left) {
      if (!visited.has(node.left)) {
        queue.unshift(node.left);
        visited.add(node.left);
      }
    }

    if (node.right) {
      if (!visited.has(node.right)) {
        queue.unshift(node.right);
        visited.add(node.right);
      }
    }
  }
  return null;
}

/**
 * Search for a node in a tree by it's key using breadth-first approach
 * @template T
 * @param {TreeNode<T>} root
 * @param {T} value
 * @returns {?TreeNode<T>}
 */
function tree_bfs(root, value) {
  const visited = new Set();
  const queue = [root];

  while (queue.length > 0) {
    const node = /** @type {TreeNode<T>} */ (queue.pop());

    if (node.value === value) return node;

    for (let child of node.children) {
      if (!visited.has(child.value)) {
        queue.unshift(child);
        visited.add(child.value);
      }
    }
  }
  return null;
}

export { bfs, tree_bfs };
