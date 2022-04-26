/** @template T */
class Node {
  /**
   * A binary tree node representation
   * @param {T} value The value that was inserted with this node
   */
  constructor(value) {
    /** @type {?Node<T>} */
    this.left = null;

    /** @type {?Node<T>} */
    this.right = null;

    /** @type {T} */
    this.value = value;
  }
}

export { Node };
