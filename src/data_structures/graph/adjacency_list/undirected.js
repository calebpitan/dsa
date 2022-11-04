/**
 * @template T
 * @typedef {Array<AdjNode<T>>} Graph
 */

/** @template T */
class AdjNode {
  /** @param {T} data */
  constructor(data) {
    /** @type {T} */
    this.vertex = data;
    /** @type {?AdjNode<T>} */
    this.next = null;
  }
}

/**
 *
 * @template {number} T
 * @param {Graph<T>} graph
 * @param {T} source
 * @param {T} dest
 */
function add_edge(graph, source, dest) {
  let node = new AdjNode(dest);
  node.next = graph[source];
  graph[source] = node;

  node = new AdjNode(source);
  node.next = graph[dest];
  graph[dest] = node;
}

/** @type {Graph<number>} */
const graph = [];

add_edge(graph, 0, 1);
add_edge(graph, 0, 4);
add_edge(graph, 1, 2);
add_edge(graph, 1, 3);
add_edge(graph, 1, 4);
add_edge(graph, 2, 3);
add_edge(graph, 3, 4);

console.log("Graph: %o", graph);
