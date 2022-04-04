import { PriorityQueue } from "./priority_queue.js";

describe("priority_queue", () => {
  describe("PriorityQueue", () => {
    it("#is_empty - should return true when a queue is empty and false when not", () => {
      const pq = new PriorityQueue();

      expect(pq.is_empty()).toBe(true);

      pq.enqueue(15);

      expect(pq.is_empty()).toBe(false);
    });

    it("#empty - should empty the queue", () => {
      const pq = new PriorityQueue();

      pq.enqueue(15);

      expect(pq.is_empty()).toBe(false);

      pq.empty();

      expect(pq.is_empty()).toBe(true);
    });
  });

  describe("MaxPriorityQueue", () => {
    it("#enqueue - should put a new priority value in the queue", () => {
      const pq = new PriorityQueue();

      expect(pq.is_empty()).toBe(true);

      pq.enqueue(10);
      pq.enqueue(24);
      pq.enqueue(76);

      expect(pq.is_empty()).toBe(false);
    });

    it("#dequeue - should get the highest priority value from the queue", () => {
      const pq = new PriorityQueue();

      expect(pq.is_empty()).toBe(true);

      pq.enqueue(10);
      pq.enqueue(24);
      pq.enqueue(76);

      expect(pq.is_empty()).toBe(false);

      expect(pq.dequeue()).toBe(76);
      expect(pq.dequeue()).toBe(24);
      expect(pq.dequeue()).toBe(10);

      expect(pq.is_empty()).toBe(true);
    });
  });

  describe("MinPriorityQueue", () => {
    it("#enqueue - should put a new priority value in the queue", () => {
      const pq = new PriorityQueue(PriorityQueue.MIN);

      expect(pq.is_empty()).toBe(true);

      pq.enqueue(10);
      pq.enqueue(24);
      pq.enqueue(76);

      expect(pq.is_empty()).toBe(false);
    });

    it("#dequeue - should get the highest priority value from the queue", () => {
      const pq = new PriorityQueue(PriorityQueue.MIN);

      expect(pq.is_empty()).toBe(true);

      pq.enqueue(10);
      pq.enqueue(24);
      pq.enqueue(76);

      expect(pq.is_empty()).toBe(false);

      expect(pq.dequeue()).toBe(10);
      expect(pq.dequeue()).toBe(24);
      expect(pq.dequeue()).toBe(76);

      expect(pq.is_empty()).toBe(true);
    });
  });
});
