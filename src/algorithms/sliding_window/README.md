# Sliding Window Algorithm

> As its name suggests, this technique involves taking a subset of
> data from a given array or string, expanding or shrinking that
> subset to satisfy certain conditions, hence the sliding effect.

— [GitConnected](https://levelup.gitconnected.com/understanding-the-sliding-window-technique-in-algorithms-c6c3bf8226da#:~:text=What%20is%20the%20sliding%20window,conditions%2C%20hence%20the%20sliding%20effect.)

## Problem 1: Maximum Sum of Subarray

Given an array, and a size k, return the maximum sum of k contiguous elements.

### Input:

```c++
int [] array = {4,2,1,7,8,1,2,8,1,0};
int k = 3
```

### Output:

```txt
16
```

### Explanation:

We get the output of `16` since `1 + 7 + 8` gives us the largest sum.

## Problem 2: Smallest Subarray with Sum K

Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn’t one, return 0 instead.

### Example:

```txt
Input: k = 7, array = [2,3,1,2,4,3]
Output: 2
Explanation: the subarray [4,3] has the shortest length under the problem constraint.
```

### Follow up:

If you have figured out the `O(n)` solution, try coding another solution in which the time complexity is `O(n log n)`.
