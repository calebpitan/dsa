import { PriorityQueue } from "./priority_queue.js";

describe("priority_queue", () => {
  describe("PriorityQueue", () => {
    it("#is_empty - should return true when a queue is empty and false when not", () => {
      /** @type {PriorityQueue<number, undefined>} */
      const pq = new PriorityQueue();

      expect(pq.empty()).toBe(true);

      pq.enqueue(15);

      expect(pq.empty()).toBe(false);
    });

    it("#clear - should clear the queue", () => {
      /** @type {PriorityQueue<number, undefined>} */
      const pq = new PriorityQueue();

      pq.enqueue(15);

      expect(pq.empty()).toBe(false);

      pq.clear();

      expect(pq.empty()).toBe(true);
    });
  });

  describe("MaxPriorityQueue", () => {
    it("#enqueue - should put a new priority value in the queue", () => {
      /** @type {PriorityQueue<number, undefined>} */
      const pq = new PriorityQueue(PriorityQueue.MAX);

      expect(pq.empty()).toBe(true);

      pq.enqueue(24);
      pq.enqueue(10);
      pq.enqueue(76);

      expect(pq.empty()).toBe(false);
    });

    it("#dequeue - should get the highest priority value from the queue", () => {
      /** @type {PriorityQueue<number, undefined>} */
      const pq = new PriorityQueue(PriorityQueue.MAX);

      expect(pq.empty()).toBe(true);

      pq.enqueue(10);
      pq.enqueue(76);
      pq.enqueue(24);

      expect(pq.empty()).toBe(false);

      expect(pq.dequeue()).toBe(76);
      expect(pq.dequeue()).toBe(24);
      expect(pq.dequeue()).toBe(10);

      expect(pq.empty()).toBe(true);
    });

    it("#peek - should take a look at the element at the root of the heap or rear of the queue", () => {
      /** @type {PriorityQueue<number, undefined>} */
      const pq = new PriorityQueue(PriorityQueue.MAX);

      expect(pq.empty()).toBe(true);

      pq.enqueue(24);
      pq.enqueue(76);
      pq.enqueue(10);

      expect(pq.empty()).toBe(false);

      expect(pq.peek()).toBe(76);
      expect(pq.peek()).toBe(76);

      expect(pq.empty()).toBe(false);
    });

    it("#peek - should peek at key-value pairs", () => {
      /** @type {PriorityQueue<number, string>} */
      const pq = new PriorityQueue(PriorityQueue.MAX);

      pq.enqueue(24, "John");
      pq.enqueue(10, "Justina");
      pq.enqueue(76, "Kyrie");

      expect(pq.peek()).toMatchObject([76, "Kyrie"]);
      expect(pq.peek()).toMatchObject([76, "Kyrie"]);
    });

    it("#enqueue, #dequeue - should enqueue and dequeue key-value pairs", () => {
      /** @type {PriorityQueue<number, string>} */
      const pq = new PriorityQueue(PriorityQueue.MAX);

      pq.enqueue(24, "John");
      pq.enqueue(10, "Justina");
      pq.enqueue(76, "Kyrie");

      expect(pq.dequeue()).toMatchObject([76, "Kyrie"]);
      expect(pq.dequeue()).toMatchObject([24, "John"]);
      expect(pq.dequeue()).toMatchObject([10, "Justina"]);
    });
  });

  describe("MinPriorityQueue", () => {
    it("#enqueue - should put a new priority value in the queue", () => {
      /** @type {PriorityQueue<number, undefined>} */
      const pq = new PriorityQueue(PriorityQueue.MIN);

      expect(pq.empty()).toBe(true);

      pq.enqueue(76);
      pq.enqueue(10);
      pq.enqueue(24);

      expect(pq.empty()).toBe(false);
    });

    it("#dequeue - should get the highest priority value from the queue", () => {
      /** @type {PriorityQueue<number, undefined>} */
      const pq = new PriorityQueue(PriorityQueue.MIN);

      expect(pq.empty()).toBe(true);

      pq.enqueue(24);
      pq.enqueue(76);
      pq.enqueue(10);

      expect(pq.empty()).toBe(false);

      expect(pq.dequeue()).toBe(10);
      expect(pq.dequeue()).toBe(24);
      expect(pq.dequeue()).toBe(76);

      expect(pq.empty()).toBe(true);
    });

    it("#peek - should take a look at the element at the root of the heap or rear of the queue", () => {
      /** @type {PriorityQueue<number, undefined>} */
      const pq = new PriorityQueue(PriorityQueue.MIN);

      expect(pq.empty()).toBe(true);

      pq.enqueue(24);
      pq.enqueue(76);
      pq.enqueue(10);

      expect(pq.empty()).toBe(false);

      expect(pq.peek()).toBe(10);
      expect(pq.peek()).toBe(10);

      expect(pq.empty()).toBe(false);
    });

    it("#peek - should peek at key-value pairs", () => {
      /** @type {PriorityQueue<number, string>} */
      const pq = new PriorityQueue(PriorityQueue.MIN);

      pq.enqueue(24, "John");
      pq.enqueue(10, "Justina");
      pq.enqueue(76, "Kyrie");

      expect(pq.peek()).toMatchObject([10, "Justina"]);
      expect(pq.peek()).toMatchObject([10, "Justina"]);
    });

    it("#enqueue, #dequeue - should enqueue and dequeue key-value pairs", () => {
      /** @type {PriorityQueue<number, string>} */
      const pq = new PriorityQueue(PriorityQueue.MIN);

      pq.enqueue(24, "John");
      pq.enqueue(10, "Justina");
      pq.enqueue(76, "Kyrie");

      expect(pq.dequeue()).toMatchObject([10, "Justina"]);
      expect(pq.dequeue()).toMatchObject([24, "John"]);
      expect(pq.dequeue()).toMatchObject([76, "Kyrie"]);
    });
  });
});
