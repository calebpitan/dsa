/** @template T */
class ListNode {
  /**
   * A singly-linked list node
   * @param {T} value The value to store in this node
   * @param {ListNode<T>=} next The direct pointer to the node next to this
   */
  constructor(value, next) {
    /** @type {T} */
    this.value = value;
    /** @type {?ListNode<T>} */
    this.next = next ? next : null;
  }
}

export { ListNode };
