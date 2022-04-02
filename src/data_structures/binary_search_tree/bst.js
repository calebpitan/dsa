class Node {
  /**
   * A tree's node representation
   * @param value {number} The value that was inserted with this node
   */
  constructor(value) {
    /** @type {?Node} */
    this.left = null;

    /** @type {?Node} */
    this.right = null;

    /** @type {number} */
    this.value = value;
  }
}

/**
 * Insert a new node into the tree's root node
 * @param {?Node} root The root node to insert the new node into
 * @param {number} value The value to wrap in a new node and insert
 * @returns {Node}
 */
function insert(root, value) {
  if (!root) return new Node(value);
  if (value < root.value) {
    root.left = insert(root.left, value);
  } else if (value >= root.value) {
    root.right = insert(root.right, value);
  }
  return root;
}

/**
 * Delete a node with value from the tree
 * @param {?Node} root The root node to insert the new node into
 * @param {number} value The value to wrap in a new node and insert
 * @returns {?Node}
 */
function remove(root, value) {
  if (!root) return root;

  if (value < root.value) {
    root.left = remove(root.left, value);
    return root;
  } else if (value > root.value) {
    root.right = remove(root.right, value);
    return root;
  }

  // node with at most one child
  if (!root.left) {
    return root.right;
  } else if (!root.right) {
    return root.left;
  }

  // node with two children
  const node = min_value_node(root.right);
  root.value = node.value;
  root.right = remove(root.right, node.value);

  return root;
}

/**
 * Find the node with the minimum value
 * @param {Node} root The root node to insert the new node into
 * @returns {Node}
 */
function min_value_node(root) {
  let current = root;

  while (current.left) current = current.left;

  return current;
}

/**
 * A depth-first search that searches the tree for a value starting from the root node
 * @param {?Node} root The root node to insert the new node into
 * @param {number} value The value to search for
 * @returns {?Node}
 */
function search(root, value) {
  if (!root) return null;
  if (root.value < value) {
    return search(root.right, value);
  } else if (root.value > value) {
    return search(root.left, value);
  }
  return root;
}

/**
 * Prints values from the tree in a depth-first in-order fashion
 * @param {?Node} root The root node
 * @returns {void}
 */
function inorder(root) {
  if (!root) return;
  inorder(root.left);
  console.log(root.value);
  inorder(root.right);
}

/**
 * Prints values from the tree in a depth-first pre-order fashion
 * @param {?Node} root The root node
 * @returns {void}
 */
function preorder(root) {
  if (!root) return;
  console.log(root.value);
  preorder(root.left);
  preorder(root.right);
}

/**
 * Prints values from the tree in a depth-first post-order fashion
 * @param {?Node} root The root node
 * @returns {void}
 */
function postorder(root) {
  if (!root) return;
  postorder(root.left);
  postorder(root.right);
  console.log(root.value);
}

/**
 * Prints values from the tree in a breadth-first level-order fashion
 * @param {?Node} root The root node
 * @returns {void}
 */
function level_order(root) {
  /**
   * @param {?Node} root The root node
   * @param {number} level The root node
   */
  const explore = (root, level) => {
    if (!root) return;
    if (level > 0) {
      explore(root.left, level - 1);
      explore(root.right, level - 1);
      return;
    }
    console.log(root.value);
  };

  for (let i = 0; i < height(root); i++) {
    explore(root, i);
  }
}

/**
 * Finds the lowest common ancestor of two nodes from the root of the tree
 * @param {?Node} root The root node
 * @param {number} n1 One of the pairs whose lowest common ancestor we are looking for
 * @param {number} n2 One of the pairs whose lowest common ancestor we are looking for
 * @returns {?Node}
 */
function lca(root, n1, n2) {
  if (!root) return null;
  if (root.value > n1 && root.value > n2) return lca(root.left, n1, n2);
  if (root.value < n1 && root.value < n2) return lca(root.right, n1, n2);
  return root;
}

/**
 * Computes the maximum height of a tree
 * @param {?Node} root The root node
 * @returns {number}
 */
function height(root) {
  if (!root) return 0;
  let [lheight, rheight] = [0, 0];
  lheight = 1 + height(root.left);
  rheight = 1 + height(root.right);
  return Math.max(lheight, rheight);
}

export {
  Node,
  insert,
  remove,
  search,
  inorder,
  preorder,
  postorder,
  level_order,
  lca,
  height,
};
