/** @template T */
class TreeNode {
  /**
   * A Tree Node data structure
   * @param {T} value The value at this node
   * @param {TreeNode<T>[]=} children The child nodes
   */
  constructor(value, children) {
    /** @type {T} */
    this.value = value
    /** @type {TreeNode<T>[]} */
    this.children = children !== undefined ? children : []
  }
}

export { TreeNode };
