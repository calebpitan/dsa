import { minJumps } from "./jump_game_iv.js";

describe("jump_game_iv", () => {
  let arr1 = [100, -23, -23, 404, 100, 23, 23, 23, 3, 404];
  let expected1 = 3;

  let arr2 = [7, 6, 9, 6, 9, 6, 9, 7];
  let expected2 = 1;

  let arr3 = [11, 22, 7, 7, 7, 7, 7, 7, 7, 22, 13];
  let expected3 = 3;

  it("#minJump - should calculate the minimum jumps required to reach end from start", () => {
    expect(minJumps(arr1)).toBe(expected1);
    expect(minJumps(arr2)).toBe(expected2);
    expect(minJumps(arr3)).toBe(expected3);
  });
});
