# Rotate Array

**Difficulty:** Medium

Given an array, rotate the array to the right by `k` steps, where `k` is non-negative.

## Example 1:

```txt
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
```

## Example 2:

```txt
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation:
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
```

## Constraints:

- <code>1 <= nums.length <= 10<sup>5</sup></code>
- `-231 <= nums[i] <= 231 - 1`
- <code>0 <= k <= 10<sup>5</sup></code>

## Tags

Leetcode - https://leetcode.com/problems/rotate-array/
