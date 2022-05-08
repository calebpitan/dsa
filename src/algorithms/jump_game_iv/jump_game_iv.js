/** @type {(queue: number[]) => boolean} */
const empty = (queue) => queue.length === 0;

/**
 * @param {number[]} arr
 * @return {number}
 */
function minJumps(arr) {
  let G = new Map();
  let visited = new Set([0]);
  let queue = [0];
  let size = arr.length;
  let steps = 0;

  if (size <= 1) return 0;

  for (let i = 0; i < size; i++) {
    const el = arr[i];
    if (G.has(el)) {
      G.get(el).push(i);
      continue;
    }

    G.set(el, [i]);
  }

  while (!empty(queue)) {
    let next = [];

    for (let currentEdge of queue) {
      let node = arr[currentEdge];
      let edges = G.get(node);

      G.set(node, []);

      if (currentEdge === size - 1) return steps;

      for (let edge of edges) {
        if (!visited.has(edge)) {
          visited.add(edge);
          next.push(edge);
        }
      }

      let left = currentEdge - 1;
      let right = currentEdge + 1;

      if (left > -1 && !visited.has(left)) {
        visited.add(left);
        next.push(left);
      }

      if (right < size && !visited.has(right)) {
        visited.add(right);
        next.push(right);
      }
    }

    queue = next;
    steps++;
  }
  return -1;
}

export { minJumps };
